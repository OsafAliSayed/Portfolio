import Link from "next/link";

export default function BlogLink({ post }) {
  const { title, date, views, tags } = post.metadata;
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : 'No date';

  return (
    <Link href={`/blog/${post.slug}`} className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
      <div className="h-full rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl hover:-translate-y-1 px-5 py-5 flex flex-col gap-3">

        {/* Title + Meta */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-neutral-300 leading-relaxed group-hover:text-white transition-colors">
            {title}
          </p>
          <span className="shrink-0 text-xs text-neutral-500 font-mono whitespace-nowrap">
            {formattedDate}{views ? ` | ${views} reads` : ''}
          </span>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-neutral-400 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </Link>
  );
}