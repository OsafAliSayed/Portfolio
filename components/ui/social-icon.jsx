'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function SocialIcon({ href, icon: Icon, label, className, ...props }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <div className={cn(
        "p-1.5 rounded-sm text-text hover:text-tertiary transition-colors",
        className
      )} {...props}>
        {Icon && <Icon className="w-4 h-4" />}
      </div>
    </Link>
  );
}
