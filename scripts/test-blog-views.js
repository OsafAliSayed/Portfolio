const fs = require('fs');
const path = require('path');

// Test script to validate the blog views update functionality
// Run with: node scripts/test-blog-views.js

const postsDirectory = path.join(process.cwd(), 'public/content/blog');

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

function checkPostHogConfig() {
  const hasProjectId = !!process.env.POSTHOG_PROJECT_ID;
  const hasApiKey = !!process.env.POSTHOG_API_KEY;
  
  console.log('PostHog Configuration:');
  console.log(`- POSTHOG_PROJECT_ID: ${hasProjectId ? '✅ Set' : '❌ Missing'}`);
  console.log(`- POSTHOG_API_KEY: ${hasApiKey ? '✅ Set' : '❌ Missing'}`);
  
  if (!hasProjectId || !hasApiKey) {
    console.log('\nTo test with real PostHog data, set these environment variables:');
    console.log('export POSTHOG_PROJECT_ID="your_project_id"');
    console.log('export POSTHOG_API_KEY="your_api_key"');
  }
  
  return hasProjectId && hasApiKey;
}

async function testPostHogQuery(slug) {
  const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
  const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY;
  const POSTHOG_HOST = 'https://us.i.posthog.com';

  const query = {
    query: {
      kind: 'EventsQuery',
      select: ['count()'],
      event: '$pageview',
      where: [`properties.$pathname = '/blog/${slug}'`],
      dateRange: {
        date_from: null,
        date_to: null
      }
    }
  };

  try {
    console.log(`\nTesting PostHog query for slug: ${slug}`);
    console.log(`Query URL: ${POSTHOG_HOST}/api/projects/${POSTHOG_PROJECT_ID}/query/`);
    
    const response = await fetch(`${POSTHOG_HOST}/api/projects/${POSTHOG_PROJECT_ID}/query/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${POSTHOG_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    });

    console.log(`Response status: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error response:`, errorText);
      return null;
    }

    const data = await response.json();
    console.log(`Response data:`, JSON.stringify(data, null, 2));
    
    if (data.results && data.results.length > 0 && data.results[0].length > 0) {
      const viewCount = data.results[0][0];
      console.log(`✅ Views for ${slug}: ${viewCount}`);
      return viewCount;
    }
    
    console.log(`📊 Views for ${slug}: 0 (no data)`);
    return 0;
  } catch (error) {
    console.error(`❌ Error querying PostHog for ${slug}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🧪 Testing Blog Views Update System\n');
  
  // Check if blog posts exist
  const slugs = getAllPostSlugs();
  console.log(`📝 Found ${slugs.length} blog posts:`, slugs);
  
  if (slugs.length === 0) {
    console.log('❌ No blog posts found in public/content/blog/');
    return;
  }
  
  // Check PostHog configuration
  const hasPostHogConfig = checkPostHogConfig();
  
  if (!hasPostHogConfig) {
    console.log('\n⚠️  Cannot test PostHog queries without credentials');
    console.log('✅ Blog posts structure looks good though!');
    return;
  }
  
  // Test PostHog queries
  console.log('\n🔍 Testing PostHog queries...');
  
  for (const slug of slugs) {
    await testPostHogQuery(slug);
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n✅ Test completed!');
}

main().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});