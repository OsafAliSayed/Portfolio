'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition, Suspense } from 'react';
import Icons from './icons';

function SearchFormInner({ initialValue = '' }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams.toString());
    if (term.trim()) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    
    startTransition(() => {
      router.push(`/blog?${params.toString()}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    handleSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icons.Search className="h-4 w-4 text-neutral-500" />
      </div>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(searchTerm);
          }
        }}
        className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors text-sm"
        disabled={isPending}
      />
      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          disabled={isPending}
        >
          <Icons.X className="h-4 w-4 text-neutral-500 hover:text-neutral-300 transition-colors" />
        </button>
      )}
    </form>
  );
}

export default function SearchForm({ initialValue = '' }) {
  return (
    <Suspense 
      fallback={
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icons.Search className="h-4 w-4 text-neutral-500" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors text-sm"
            disabled
          />
        </div>
      }
    >
      <SearchFormInner initialValue={initialValue} />
    </Suspense>
  );
}