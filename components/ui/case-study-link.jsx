import Link from "next/link";
import Image from "next/image";

export default function CaseStudyLink({ post }) {
  const { title, date, views, tags, image, description } = post.metadata;
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : 'No date';

  return (
    <Link href={`/case-studies/${post.slug}`} className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
      <div className="h-full rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden flex flex-col">

        {/* Cover Image */}
        <div className="relative w-full aspect-video bg-white/5 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-neutral-700 font-mono">no image</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 px-4 py-4 flex-1">
          <p className="text-sm font-medium text-neutral-300 leading-snug group-hover:text-white transition-colors line-clamp-2">
            {title}
          </p>

          {description && (
            <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">{description}</p>
          )}

          <div className="mt-auto pt-3 flex flex-col gap-2">
            <span className="text-xs text-neutral-600 font-mono">
              {formattedDate}{views ? ` · ${views} reads` : ''}
            </span>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 text-neutral-500 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}
