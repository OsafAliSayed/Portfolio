import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import { stripHtml } from "@/lib/blog";
import Navbar from "@/components/ui/navbar";
import BlogContent from "@/components/blog/slug/blog-content";
import ShareButtons from "@/components/blog/slug/share-buttons";
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
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

function generateExcerpt(content, length = 160) {
  const cleanText = stripHtml(content);
  const text = cleanText.replace(/\n+/g, ' ').trim();
  return text.length > length ? text.substring(0, length) + '...' : text;
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.osafalisayed.com";
  const postUrl = `${SITE_URL}/blog/${params.slug}/`;
  const description = post.metadata.excerpt || generateExcerpt(post.content);
  const image = post.metadata.image ? `${SITE_URL}${post.metadata.image}` : null;

  return {
    title: `${post.metadata.title} | Blog`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.metadata.title,
      description,
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
      description,
      ...(image && { image }),
      creator: "@osafalisayed",
    },
  };
}

export default async function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        <article className="mb-6">
          {/* Article header */}
          <header className="space-y-2">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600">

              {/* Tags */}
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <time dateTime={post.metadata.date}>
                {new Date(post.metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              
              

              {/* Views */}
              {post.metadata.views && <span>{post.metadata.views} Views</span>}
              
              <ShareButtons title={post.metadata.title} />
            </div>

            
          </header>
          
          {/* Cover Image */}
          {post.metadata.image && (
            <div className="my-6">
              <img
                src={post.metadata.image}
                alt={post.metadata.title}
                className="w-full h-auto  border border-white/10"
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
