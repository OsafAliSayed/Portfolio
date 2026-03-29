import Image from 'next/image';
import Icons from '@/components/ui/icons';
import Link from 'next/link';

export const CommonCard = ({ title, desc, tags, link, logo }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="relative mt-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl hover:-translate-y-1">

        {/* Logo — half outside the top border */}
        {logo && (
          <div className="absolute -top-6 left-5 z-10">
            <div className="w-14 h-14 rounded-full ring-[3px] ring-[rgb(12,12,12)] overflow-hidden bg-[rgb(12,12,12)]">
              <Image
                src={logo}
                alt={`${title} logo`}
                width={48}
                height={48}
                className={`w-full h-full object-contain ${title === "Noah - AI" ? '' : ''}`}
              />
            </div>
          </div>
        )}

        {/* Card body */}
        <div className={`px-5 pb-5 ${logo ? 'pt-10' : 'pt-5'}`}>
          <h3 className="text-white font-semibold text-base tracking-tight mb-2">{title}</h3>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">{desc}</p>

          {/* Pill tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {tags && tags.map((tag) => {
              const IconComponent = Icons[tag];
              return (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-sm font-medium bg-white/5 text-neutral-300 border border-white/10"
                >
                  {IconComponent && <IconComponent className="w-4 h-4 text-secondary" />}
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};
