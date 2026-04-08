import { notFound } from "next/navigation";
import { getSnippetBySlug, getAllSnippetSlugs } from "@/lib/snippets";
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import Navbar from "@/components/ui/navbar";
import BlogContent from "@/components/blog/slug/blog-content";
import ContactCTA from "@/components/common/contact-cta";
import FooterSection from "@/components/common/footer";

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return result.toString();
}

export async function generateStaticParams() {
  const slugs = getAllSnippetSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

const SITE_URL = 'https://www.osafalisayed.com';

export async function generateMetadata({ params }) {
  const snippet = getSnippetBySlug(params.slug);

  if (!snippet) {
    return {
      title: 'Snippet Not Found',
    };
  }

  const description = snippet.metadata.excerpt || snippet.metadata.description || '';
  const snippetUrl = `${SITE_URL}/snippets/${params.slug}/`;
  const image = snippet.metadata.image ? `${SITE_URL}${snippet.metadata.image}` : `${SITE_URL}/favicon.jpeg`;

  return {
    title: `${snippet.metadata.title} | Snippets`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: snippetUrl,
    },
    openGraph: {
      title: snippet.metadata.title,
      description,
      url: snippetUrl,
      siteName: 'Osaf Ali Sayed',
      type: 'article',
      images: [{ url: image, width: 1200, height: 630, alt: snippet.metadata.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: snippet.metadata.title,
      description,
      creator: '@sayedosafali',
      images: [image],
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

export default async function SnippetPage({ params }) {
  const snippet = getSnippetBySlug(params.slug);

  if (!snippet) {
    notFound();
  }

  const contentHtml = await markdownToHtml(snippet.content);

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>

      {/* Floating Navbar */}
      <Navbar activeLabel="Snippets" />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 relative z-10">
        <article className="mb-6">
          {/* Article header */}
          <header className="space-y-2">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600">

              {/* Tags */}
              {snippet.metadata.tags && snippet.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {snippet.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-neutral-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {snippet.metadata.date && (
                <time dateTime={snippet.metadata.date}>
                  {new Date(snippet.metadata.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>
          </header>

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