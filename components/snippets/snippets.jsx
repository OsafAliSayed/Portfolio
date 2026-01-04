import { getAllSnippets } from "@/lib/snippets";
import { SnippetCard } from "./snippet-card";

export default function Snippets() {
    const snippets = getAllSnippets();
    
    const snippetCards = snippets.map((snippet) => ({
        title: snippet.metadata.title || 'Untitled',
        desc: snippet.metadata.description || snippet.metadata.excerpt || '',
        link: `/snippets/${snippet.slug}`,
    }));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {snippetCards.length > 0 ? (
                snippetCards.map((snippet, index) => (
                    <SnippetCard 
                        key={index}
                        {...snippet} 
                    />
                ))
            ) : (
                <div className="col-span-2 py-8 text-center text-neutral-500">
                    <p className="text-sm">Snippets Coming Soon!</p>
                </div>
            )}
        </div>
    );
}