import { getAllPosts } from '@/lib/blog';
import SectionHeader from '@/components/ui/section-header';
import Link from 'next/link';

function BlogCard({ title, date, views, slug }) {
  return (
    <Link href={`/blog/${slug}`} className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
      <div className="h-full rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl hover:-translate-y-1 px-5 py-5 flex flex-col">

        {/* Title + Meta */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
            {title}
          </p>
          <span className="shrink-0 text-xs text-neutral-500 font-mono whitespace-nowrap">{date} | {views} reads</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogSection() {
  let blogPosts = [];
  try {
    const allPosts = getAllPosts();
    blogPosts = allPosts.slice(0, 4).map(post => ({
      title: post.metadata.title || 'Untitled',
      date: post.metadata.date ? new Date(post.metadata.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'No date',
      views: post.metadata.views || '0',
      slug: post.slug
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    blogPosts = [];
  }

  return (
    <section id="writing" className="mb-10 scroll-mt-24">
      <SectionHeader>Latest Writings</SectionHeader>

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-3">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      ) : (
        <div className="py-8 text-center text-neutral-500">
          <p className="text-sm">Blog Posts Coming Soon!</p>
        </div>
      )}
    </section>
  );
}