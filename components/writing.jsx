import { getAllPosts } from '@/lib/blog';
import SectionHeader from '@/components/ui/section-header';


function BlogRow({ title, date, views, slug }) {
  return (
    <a href={`/blog/${slug}`} className="flex items-center justify-between py-4 group border-b border-white/20 hover:bg-white/5  px-4 transition-all">
      <div className="flex items-center gap-3">
        <span className="text-neutral-300 font-medium text-sm group-hover:text-blue-400 transition-colors">{title}</span>
      </div>
      <div className="hidden sm:flex items-center gap-4 text-neutral-600 text-sm font-mono">
        <span>{views}</span>
        <span>{date}</span>
      </div>
    </a>
  );
}


export default function BlogSection() {
  let blogPosts = [];
  try {
    const allPosts = getAllPosts();
    blogPosts = allPosts.slice(0, 5).map(post => ({
      title: post.metadata.title || 'Untitled',
      date: post.metadata.date ? new Date(post.metadata.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'No date',
      views: post.metadata.views || '0 reads',
      slug: post.slug
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    blogPosts = [];
  }

  return (
    <section id="writing" className="mb-10 scroll-mt-24">
      <SectionHeader>Latest Writings</SectionHeader>
       
      
      <div className="flex flex-col">
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <BlogRow 
              key={index}
              title={post.title}
              date={post.date}
              views={post.views}
              slug={post.slug}
            />
          ))
        ) : (
          <div className="py-8 text-center text-neutral-500">
            <p className="text-sm">Blog Posts Coming Soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}