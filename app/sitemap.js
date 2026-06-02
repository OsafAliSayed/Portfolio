import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/lib/case-studies';
import { getAllSnippetSlugs } from '@/lib/snippets';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.osafalisayed.com';

export default function sitemap() {
  // Static pages
  const staticRoutes = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case-studies/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/snippets/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/open-source/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/reviews/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic blog post routes
  const blogSlugs = getAllPostSlugs();
  const blogRoutes = blogSlugs.map((slug) => {
    const post = getPostBySlug(slug);
    return {
      url: `${SITE_URL}/blog/${slug}/`,
      lastModified: post?.metadata?.date ? new Date(post.metadata.date) : new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    };
  });

  // Dynamic case-studies routers

  const caseStudiesSlugs = getAllCaseStudySlugs();
  const caseStudyRoutes = caseStudiesSlugs.map((slug) => {
    const caseStudy = getCaseStudyBySlug(slug);
    return {
      url: `${SITE_URL}/case-studies/${slug}/`,
      lastModified: caseStudy?.metadata?.date ? new Date(caseStudy.metadata.date) : new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    }
  })

  // Dynamic snippet routes
  const snippetSlugs = getAllSnippetSlugs();
  const snippetRoutes = snippetSlugs.map((slug) => ({
    url: `${SITE_URL}/snippets/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes, ...snippetRoutes];
}
