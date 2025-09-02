'use client';

import { cn } from '@/lib/utils';

export default function HoverableTag({ children, icon, className, ...props }) {
  return (
    <span 
      className={cn(
        "inline-flex items-center text-xs px-2 py-1 bg-background/80 text-text border border-border rounded-full hover:border-tertiary hover:text-tertiary hover:cursor-pointer transition-colors duration-200",
        className
      )} 
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </span>
  );
}
