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
      p.metadata.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, posts]);


  return (
    <div>
      <SearchInput />
      
      <div className="mt-2 mb-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(p => (
          <PostLink key={p.slug} post={p}/>
          ))
        ) : (
          <div className="text-center mt-10">
            <span>No Posts Found</span>
          </div>
        )}
      </div>
    </div>
  );
}
