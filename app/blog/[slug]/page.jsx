import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '../../../lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to blog link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <article className="space-y-8">
            {/* Hero image */}
            {post.metadata.image && (
              <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                <img 
                  src={post.metadata.image} 
                  alt={post.metadata.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Article header */}
            <header className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {post.metadata.title}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {post.metadata.excerpt}
              </p>

              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.metadata.author}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <time dateTime={post.metadata.date}>
                    {new Date(post.metadata.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
              </div>

              {/* Tags */}
              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={16} className="text-muted-foreground" />
                  {post.metadata.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Article content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-foreground 
                prose-p:text-muted-foreground prose-p:leading-7
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-code:text-foreground prose-code:bg-secondary prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-secondary prose-pre:border prose-pre:border-border
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                prose-hr:border-border
                prose-table:text-foreground
                prose-thead:border-border
                prose-tr:border-border
                prose-th:text-foreground
                prose-td:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>
        </div>
      </div>
    </div>
  );
}