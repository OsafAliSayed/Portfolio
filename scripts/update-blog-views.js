#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY;
const POSTHOG_API_URL = `https://us.posthog.com/api/projects/${POSTHOG_PROJECT_ID}/query/`;

const postsDirectory = path.join(process.cwd(), 'public/content/blog');

async function fetchBlogViews() {
  try {
    const response = await fetch(POSTHOG_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${POSTHOG_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {
          kind: 'HogQLQuery',
          query: "SELECT properties.$pathname as page, COUNT(*) as views FROM events WHERE event = '$pageview' AND properties.$pathname LIKE '/blog/%' GROUP BY properties.$pathname ORDER BY views DESC"
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(`PostHog API error: ${data.error}`);
    }

    return data.results || [];
  } catch (error) {
    console.error('Error fetching blog views from PostHog:', error);
    
    // For testing purposes, you can uncomment this section to use mock data
    // console.log('Using mock data for testing...');
    // return [
    //   ["/blog/welcome/", 22],
    //   ["/blog/", 9]
    // ];
    
    return [];
  }
}

function parsePathToSlug(pathname) {
  // Convert "/blog/welcome/" or "/blog/welcome" to "welcome"
  const match = pathname.match(/^\/blog\/([^\/]+)\/?$/);
  return match ? match[1] : null;
}

async function updateBlogViews() {
  console.log('Fetching blog views from PostHog...');
  
  const viewsData = await fetchBlogViews();
  
  if (viewsData.length === 0) {
    console.log('No blog views data found or error occurred');
    return;
  }

  console.log(`Found ${viewsData.length} blog view entries`);

  // Create a map of slug to views
  const viewsMap = new Map();
  
  for (const [pathname, views] of viewsData) {
    const slug = parsePathToSlug(pathname);
    if (slug) {
      viewsMap.set(slug, views);
      console.log(`${slug}: ${views} views`);
    }
  }

  // Update each blog file
  if (!fs.existsSync(postsDirectory)) {
    console.error('Blog directory does not exist');
    return;
  }

  const blogFiles = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  
  for (const file of blogFiles) {
    const slug = file.replace('.md', '');
    const filePath = path.join(postsDirectory, file);
    
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);
      
      const views = viewsMap.get(slug) || 0;
      
      // Update views in frontmatter
      
      frontmatter.views = views.toString();
      // Reconstruct the file with updated frontmatter
      const updatedContent = matter.stringify(content, frontmatter);
      
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      
      console.log(`Updated ${slug}: ${views} views`);
    } catch (error) {
      console.error(`Error updating ${file}:`, error);
    }
  }
  
  console.log('Blog views update completed!');
}

// Run the script
updateBlogViews().catch(console.error);
