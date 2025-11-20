import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
          
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No blog posts found.</p>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${post.slug}`} className="group">
                    <div className="flex flex-col space-y-4">
                      {post.metadata.image && (
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={post.metadata.image} 
                            alt={post.metadata.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.metadata.title}
                        </h2>
                        
                        <p className="text-muted-foreground">
                          {post.metadata.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>By {post.metadata.author}</span>
                          <time dateTime={post.metadata.date}>
                            {new Date(post.metadata.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        
                        {post.metadata.tags && (
                          <div className="flex flex-wrap gap-2">
                            {post.metadata.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}