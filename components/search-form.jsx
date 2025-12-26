'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Icons from '@/components/icons';

export default function SearchInput({ initialQuery="" }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Local state for the input field
  const [inputValue, setInputValue] = useState(initialQuery);
  // Effect to update the URL with debounced search query
  useEffect(() => {
    // Only trigger router.push if the query has actually changed
    // and if the user has stopped typing for a short period.
    const handler = setTimeout(() => {
      // Create a new URLSearchParams object based on current params
      const params = new URLSearchParams(searchParams.toString());
      if (inputValue) {
        params.set('query', inputValue);
      } else {
        params.delete('query');
      }
      const newQueryString = params.toString();
      // Only push if the query string has actually changed
      if (newQueryString !== searchParams.toString()) {
        router.push(`${pathname}?${newQueryString}`);
      }
    }, 300); // 300ms debounce delay
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, router, pathname, searchParams]);

  // Optional: Sync internal state if initialQuery prop changes (e.g., from direct URL navigation)
  useEffect(() => {
    if (initialQuery !== inputValue) {
      setInputValue(initialQuery);
    }
  }, [initialQuery]);

  return (

    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icons.Search className="h-4 w-4 text-neutral-500" />
      </div>
      <input
        type="text"
        placeholder="Search blogs..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/20 hover:border-secondary text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-secondary/50 transition-colors text-sm"
      />
    </div>

  );
}