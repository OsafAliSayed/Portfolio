import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '../../../lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import Navbar from '../../../components/navbar';
import Icons from '../../../components/icons';
import BlogContent from '../../../components/blog-content';

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
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
      title: 'Post Not Found',
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
        {/* Back to blog link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-300 transition-colors mb-8 text-sm"
        >
          <Icons.ExternalLink className="w-3 h-3 rotate-180" />
          Back to Blog
        </Link>

        <article>
          {/* Article header */}
          <header className="space-y-6">
            
            {/* Meta information */}
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-600">
              <time dateTime={post.metadata.date}>
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
              {post.metadata.views && (
                <span>{post.metadata.views}</span>
              )}
            </div>

            {/* Tags */}
            {post.metadata.tags && post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.metadata.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="border-t border-white/5 pt-8">
            <BlogContent contentHtml={contentHtml} />
          </div>
        </article>

        {/* Footer */}
        <footer className="py-10 text-center text-neutral-700 text-xs mt-20">
          <p>© 2025 Osaf Ali Sayed.</p>
        </footer>
      </div>
    </div>
  );
}