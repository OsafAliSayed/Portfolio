import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-studies";
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import Navbar from "@/components/ui/navbar";
import BlogContent from "@/components/blog/slug/blog-content";
import ShareButtons from "@/components/blog/slug/share-buttons";
import CopyForAI from "@/components/blog/slug/copy-for-ai";
import ContactCTA from "@/components/common/contact-cta";
import FooterSection from "@/components/common/footer";
import Image from "next/image";

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return result.toString();
}


export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = getCaseStudyBySlug(params.slug);

  if (!post) {
    return { title: "Case Study Not Found" };
  }

  const SITE_URL = 'https://www.osafalisayed.com';
  const postUrl = `${SITE_URL}/case-studies/${params.slug}/`;
  const image = post.metadata.image ? `${SITE_URL}${post.metadata.image}` : null;

  return {
    title: `${post.metadata.title} | Case Studies`,
    description: post.metadata.description,
    keywords: post.metadata.tags || [],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      url: postUrl,
      siteName: "Osaf Ali Sayed",
      ...(image && { images: [{ url: image, width: 1200, height: 630, alt: post.metadata.title }] }),
      authors: post.metadata.author ? [post.metadata.author] : ["Osaf Ali Sayed"],
      publishedTime: post.metadata.date,
      tags: post.metadata.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      ...(image && { image }),
      creator: "@sayedosafali",
    },
    icons: {
      icon: '/favicon.jpeg',
      shortcut: '/favicon.jpeg',
      apple: '/favicon.jpeg',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function CaseStudyPost({ params }) {
  const post = getCaseStudyBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  const SITE_URL = 'https://www.osafalisayed.com';
  const postUrl = `${SITE_URL}/case-studies/${params.slug}/`;
  const coverImage = post.metadata.image ? `${SITE_URL}${post.metadata.image}` : `${SITE_URL}/favicon.jpeg`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': postUrl,
        headline: post.metadata.title,
        description: post.metadata.description || '',
        image: {
          '@type': 'ImageObject',
          url: coverImage,
          width: 1200,
          height: 630,
        },
        url: postUrl,
        datePublished: post.metadata.date,
        dateModified: post.metadata.date,
        inLanguage: 'en-US',
        keywords: post.metadata.tags ? post.metadata.tags.join(', ') : '',
        author: {
          '@type': 'Person',
          name: post.metadata.author || 'Osaf Ali Sayed',
          url: SITE_URL,
          sameAs: [
            'https://twitter.com/sayedosafali',
            'https://github.com/OsafAliSayed',
            'https://linkedin.com/in/osafalisayed',
          ],
        },
        publisher: {
          '@type': 'Person',
          name: 'Osaf Ali Sayed',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/favicon.jpeg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': postUrl,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Case Studies',
            item: `${SITE_URL}/case-studies/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.metadata.title,
            item: postUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 relative z-10">
        <article className="mb-6">
          {/* Article header */}
          <header className="space-y-2">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600">

              <div className="flex items-center gap-4">
                <time dateTime={post.metadata.date}>
                  {new Date(post.metadata.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>

                {post.metadata.views && <span>{post.metadata.views} Views</span>}

                <ShareButtons title={post.metadata.title} />

                <div>
                  <CopyForAI markdown={post.content} />
                </div>
              </div>

              {/* Tags */}
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {post.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1.5 rounded-full text-sm font-medium bg-white/5 text-neutral-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Cover Image */}
          {post.metadata.image && (
            <div className="my-6">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                className="w-full h-auto border border-white/10"
                width={1200}
                height={630}
              />
            </div>
          )}

          {/* Article content */}
          <div className="border-t border-white/5 pt-2">
            <BlogContent contentHtml={contentHtml} />
          </div>
        </article>

        {/* CTA */}
        <ContactCTA />

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
