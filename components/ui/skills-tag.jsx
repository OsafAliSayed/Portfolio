'use client';

import { cn } from '@/lib/utils';

export default function SkillTag({ name, icon: Icon, className, ...props }) {
  return (
    <div 
      className={cn(
        "flex items-center gap-2 px-3 py-1 border border-secondary/50 text-secondary rounded-full text-sm font-medium shadow-sm hover:border-tertiary/50 hover:text-tertiary transition-colors",
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="flex items-center justify-center w-5 h-5 text-secondary">
          <Icon className="w-4 h-4" />
        </div>
      )}
      <span>{name}</span>
    </div>
  );
}
