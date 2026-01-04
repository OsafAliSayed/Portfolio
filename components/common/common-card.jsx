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
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {logo && (
                <div className="mb-3">
                  <Image
                    src={logo}
                    alt={`${title} logo`}
                    width={32}
                    height={32}
                    className="w-12 h-12 object-contain rounded-[50%] border border-white/10"
                  />
                </div>
              )}
              <CardTitle className="text-sm font-medium text-white transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="mt-2 text-xs text-neutral-400 leading-relaxed">
                {desc}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {tags && (tags.map((tag) => {
              const IconComponent = Icons[tag];
              return (
                <span 
                  key={tag} 
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-white/5 border border-white/10 text-neutral-300"
                >
                  {IconComponent && <IconComponent className="w-3 h-3 text-secondary" />}
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
