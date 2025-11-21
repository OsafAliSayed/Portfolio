
import { getAllPosts } from '../lib/blog';
import Icons from './icons';


function BlogRow({ title, date, views, slug }) {
  return (
    <a href={`/blog/${slug}`} className="flex items-center justify-between py-4 group border-b border-white/5 hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <span className="text-neutral-300 font-medium text-sm group-hover:text-blue-400 transition-colors">{title}</span>
      </div>
      <div className="hidden sm:flex items-center gap-4 text-neutral-600 text-xs font-mono">
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
    blogPosts = allPosts.slice(0, 4).map(post => ({
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
    <section id="writing" className="mb-20 scroll-mt-24">
      <h2 className="text-sm font-bold text-neutral-100 mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Latest Writing
      </h2>
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
            <p className="text-sm">No blog posts found.</p>
          </div>
        )}
      </div>
      {blogPosts.length > 0 && (
        <a href="/blog" className="inline-flex items-center gap-1 mt-4 text-xs text-neutral-500 hover:text-white transition-colors">
          Read all posts <Icons.ExternalLink className="w-3 h-3" />
        </a>
      )}
    </section>
  );
}