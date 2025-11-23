'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from './navbar';
import SearchForm from './search-form';

function BlogPost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className="flex items-center justify-between py-4 border-b border-white/5 hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors">
        <h2 className="text-neutral-300 font-medium text-sm group-hover:text-blue-400 transition-colors">
          {post.metadata.title}
        </h2>
        <time 
          dateTime={post.metadata.date}
          className="text-neutral-600 text-xs font-mono"
        >
          {new Date(post.metadata.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </time>
      </article>
    </Link>
  );
}

function BlogContent({ posts }) {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Update search term from URL params
    const search = searchParams?.get('search') || '';
    setSearchTerm(search);
  }, [searchParams]);
  
  // Filter posts based on search term
  const filteredPosts = searchTerm
    ? posts.filter((post) =>
        post.metadata.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">My Writings</h1>
          <p className="text-neutral-500 text-sm mb-6">
            Thoughts on development, technology, and everything in between.
          </p>
          
          {/* Search Bar */}
          <SearchForm initialValue={searchTerm} />
        </div>
        
        {/* Blog Posts */}
        <div className="space-y-0">
          {filteredPosts.length === 0 && searchTerm ? (
            <div className="py-12 text-center">
              <p className="text-neutral-500 text-sm">No articles found matching "{searchTerm}".</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-neutral-500 text-sm">No blog posts found.</p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <BlogPost key={post.slug} post={post} />
            ))
          )}
        </div>

        {/* Footer */}
        <footer className="py-10 text-center text-neutral-700 text-xs mt-20">
          <p>© 2025 Osaf Ali Sayed.</p>
        </footer>
      </div>
    </div>
  );
}

export default function BlogClient({ posts }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
        <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
        <Navbar />
        <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
          <div className="mb-12">
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">My Writings</h1>
            <p className="text-neutral-500 text-sm mb-6">
              Thoughts on development, technology, and everything in between.
            </p>
          </div>
          <div className="py-12 text-center">
            <p className="text-neutral-500 text-sm">Loading...</p>
          </div>
        </div>
      </div>
    }>
      <BlogContent posts={posts} />
    </Suspense>
  );
}
