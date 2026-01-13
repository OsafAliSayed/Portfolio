import Link from "next/link";


export default function BlogLink({ post }) {
  return (
    <Link key={`${post.slug}`} href={`/blog/${post.slug}`} className="block group">
      <article className="flex items-center justify-between py-4 border-b border-white/20 hover:bg-white/5 px-4  transition-colors">
        <h2 className="text-neutral-300 font-medium text-sm group-hover:text-blue-400 transition-colors">
          {post.metadata.title}
        </h2>
        <time 
          dateTime={post.metadata.date}
          className="text-neutral-600 text-xs font-mono hidden sm:block"
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