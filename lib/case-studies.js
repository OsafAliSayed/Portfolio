import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const caseStudiesDirectory = path.join(process.cwd(), 'public/content/case-studies');

function ensureDirectory() {
  if (!fs.existsSync(caseStudiesDirectory)) {
    fs.mkdirSync(caseStudiesDirectory, { recursive: true });
  }
}

export function getAllCaseStudySlugs() {
  try {
    ensureDirectory();
    const fileNames = fs.readdirSync(caseStudiesDirectory);
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading case studies directory:', error);
    return [];
  }
}

export function getCaseStudyBySlug(slug) {
  try {
    ensureDirectory();
    const fullPath = path.join(caseStudiesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: data,
      content,
    };
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}

export function getAllCaseStudies() {
  try {
    ensureDirectory();
    const slugs = getAllCaseStudySlugs();
    return slugs
      .map(slug => getCaseStudyBySlug(slug))
      .filter(Boolean)
      .sort((a, b) => {
        if (a.metadata.date < b.metadata.date) return 1;
        else return -1;
      });
  } catch (error) {
    console.error('Error getting all case studies:', error);
    return [];
  }
}
