import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/content/blog');

export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPosts() {
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map(slug => getPostBySlug(slug))
      .filter(Boolean)
      .sort((a, b) => {
        if (a.metadata.date < b.metadata.date) {
          return 1;
        } else {
          return -1;
        }
      });

    return posts;
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}