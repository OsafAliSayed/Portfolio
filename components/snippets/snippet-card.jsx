import Image from 'next/image';
import Link from 'next/link';
import { 
  Card, 
  CardTitle, 
  CardHeader, 
  CardDescription, 
} from '@/components/ui/card';

export const SnippetCard = ({ title, desc, tags, link, logo }) => {
  return (
    <Link href={link} className="block">
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
              <CardTitle className="text-base font-medium text-white transition-colors">
                {title}
              </CardTitle>
              <CardDescription className="mt-2 text-sm text-neutral-400 leading-relaxed">
                {desc}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};

