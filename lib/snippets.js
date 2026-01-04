import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const snippetsDirectory = path.join(process.cwd(), 'public/content/snippets');

// Ensure the snippets directory exists
function ensureSnippetsDirectory() {
  if (!fs.existsSync(snippetsDirectory)) {
    fs.mkdirSync(snippetsDirectory, { recursive: true });
  }
}

export function getAllSnippetSlugs() {
  try {
    ensureSnippetsDirectory();
    const fileNames = fs.readdirSync(snippetsDirectory);
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading snippets directory:', error);
    return [];
  }
}

export function getSnippetBySlug(slug) {
  try {
    ensureSnippetsDirectory();
    const fullPath = path.join(snippetsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading snippet ${slug}:`, error);
    return null;
  }
}

export function getAllSnippets() {
  try {
    ensureSnippetsDirectory();
    const slugs = getAllSnippetSlugs();
    const snippets = slugs
      .map(slug => getSnippetBySlug(slug))
      .filter(Boolean)
      .sort((a, b) => {
        if (a.metadata.date < b.metadata.date) {
          return 1;
        } else {
          return -1;
        }
      });

    return snippets;
  } catch (error) {
    console.error('Error getting all snippets:', error);
    return [];
  }
}

