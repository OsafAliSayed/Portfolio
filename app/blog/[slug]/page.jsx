import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
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
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.metadata.title} | Blog`,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      images: post.metadata.image ? [post.metadata.image] : [],
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
