"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import SearchInput from "@/components/ui/search-form";
import CaseStudyLink from "@/components/ui/case-study-link";

export default function CaseStudiesClient({ posts }) {
  const searchParams = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const filteredPosts = useMemo(() => {
    if (!query) return posts;
    return posts.filter(p =>
      p.metadata.title.toLowerCase().includes(query.toLowerCase()) ||
      (p.metadata.tags && p.metadata.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())))
    );
  }, [query, posts]);

  return (
    <div>
      <SearchInput placeholder="Search Case Studies..."/>

      <div className="mt-4 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(p => (
            <CaseStudyLink key={p.slug} post={p} />
          ))
        ) : (
          <div className="py-8 text-center text-neutral-500">
            <p className="text-sm">No case studies found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
