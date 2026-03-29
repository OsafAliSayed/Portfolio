"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import SearchInput from "@/components/ui/search-form";
import PostLink from "@/components/ui/blog-links";


export default function SearchClient({ posts }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("query") ?? "";

  const filteredPosts = useMemo(() => {
    if (!query) return posts;
    return posts.filter(p => 
      p.metadata.title.toLowerCase().includes(query.toLowerCase()) || 
      p.metadata.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, posts]);


  return (
    <div>
      <SearchInput />
      
      <div className="mt-4 mb-10 grid grid-cols-1 gap-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(p => (
            <PostLink key={p.slug} post={p} />
          ))
        ) : (
          <div className="py-8 text-center text-neutral-500">
            <p className="text-sm">No posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
