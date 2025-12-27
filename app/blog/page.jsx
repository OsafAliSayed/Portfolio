import { getAllPosts } from '@/lib/blog';
import Navbar from '@/components/ui/navbar';
import FooterSection from '@/components/section/footer-section';
import PageHeaderSection from '@/components/section/page-header-section';
import BlogClient from '@/components/blog/blog-client'
import { Suspense } from 'react';
// import BlogClient from '@/components/blog/blog-client';
const pageHeaderProps = {
  title: "My Writings",
  description: "Thoughts on development, technology, and everything in between."
}

export default async function BlogPage({ searchParams }) {
  

  // Fetch posts server-side
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">

      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">

        {/* Page Header */}
        <PageHeaderSection props={pageHeaderProps} />

        {/* BlogContent */}
        <Suspense fallback={<div className="py-6 text-center text-sm text-neutral-500">Loading posts…</div>}>
          <BlogClient posts={posts} />
        </Suspense>
        

        {/* Footer */}
        <FooterSection />
      </div>
    </div>

  );
}