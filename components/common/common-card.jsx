import Image from 'next/image';
import Icons from '@/components/ui/icons';
import Link from 'next/link';
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent
} from '@/components/ui/card';

export const CommonCard = ({ title, desc, tags, link, logo }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="group bg-[rgb(10,10,10)] border-[rgb(38,38,38)] hover:border-secondary transition-all duration-200 rounded-none cursor-pointer">
        <CardHeader className="pb-3">
          <div>
            <div className="flex items-center gap-3 ">
              {logo && (
                <div className="mb-1">
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    width={132}
                    height={32}
                    className="w-12 h-12 object-contain  border border-white/10"
                  />
                </div>
              )}
              <CardTitle className="text-lg font-bold text-white transition-colors tracking-tighter">
                {title}
              </CardTitle>
            </div>
              <CardDescription className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {desc}
              </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1">
            {tags && (tags.map((tag) => {
              const IconComponent = Icons[tag];
              return (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-2 py-1 font-bold text-xs bg-neutral-800 text-neutral-300 border border-neutral-700"
                >
                  {IconComponent && <IconComponent className="w-4 h-4 text-secondary" />}
                  {tag}
                </span>
              );
            }))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
