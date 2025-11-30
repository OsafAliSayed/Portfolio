const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// PostHog configuration
const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY;
const POSTHOG_HOST = 'https://us.i.posthog.com';

if (!POSTHOG_PROJECT_ID || !POSTHOG_API_KEY) {
  console.error('Missing required environment variables: POSTHOG_PROJECT_ID, POSTHOG_API_KEY');
  process.exit(1);
}

const postsDirectory = path.join(process.cwd(), 'public/content/blog');

// Function to query PostHog for page views
async function queryPostHog(slug) {
  const query = {
    query: {
      kind: 'EventsQuery',
      select: ['count()'],
      event: '$pageview',
      where: [`properties.$pathname = '/blog/${slug}'`],
      dateRange: {
        date_from: null, // All time
        date_to: null
      }
    }
  };

  try {
    const response = await fetch(`${POSTHOG_HOST}/api/projects/${POSTHOG_PROJECT_ID}/query/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${POSTHOG_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    });

    if (!response.ok) {
      console.error(`PostHog API error for slug ${slug}:`, response.status, response.statusText);
      return null;
    }

    const data = await response.json();
    
    // Extract the count from the response
    if (data.results && data.results.length > 0 && data.results[0].length > 0) {
      return data.results[0][0]; // The count is the first element of the first result
    }
    
    return 0; // Default to 0 if no results
  } catch (error) {
    console.error(`Error querying PostHog for slug ${slug}:`, error);
    return null;
  }
}

// Function to update a blog post's view count
function updatePostViews(slug, viewCount) {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      return false;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Update the views field
    data.views = viewCount.toString();

    // Write back to file
    const updatedContent = matter.stringify(content, data);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    
    console.log(`Updated ${slug}: ${viewCount} views`);
    return true;
  } catch (error) {
    console.error(`Error updating post ${slug}:`, error);
    return false;
  }
}

// Function to get all blog post slugs
function getAllPostSlugs() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.error('Posts directory does not exist');
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md') && !name.startsWith('.'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

// Main function
async function updateBlogViews() {
  console.log('Starting blog view count update...');
  
  const slugs = getAllPostSlugs();
  console.log(`Found ${slugs.length} blog posts:`, slugs);

  if (slugs.length === 0) {
    console.log('No blog posts found');
    return;
  }

  let updatedCount = 0;
  let totalViews = 0;

  for (const slug of slugs) {
    console.log(`Querying views for: ${slug}`);
    
    const viewCount = await queryPostHog(slug);
    
    if (viewCount !== null) {
      const success = updatePostViews(slug, viewCount);
      if (success) {
        updatedCount++;
        totalViews += viewCount;
      }
    } else {
      console.warn(`Skipping ${slug} due to API error`);
    }

    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`\nUpdate completed:`);
  console.log(`- Posts updated: ${updatedCount}/${slugs.length}`);
  console.log(`- Total views across all posts: ${totalViews}`);
}

// Run the script
updateBlogViews().catch(error => {
  console.error('Script failed:', error);
  process.exit(1);
});