import { notFound } from "next/navigation";
import { getSnippetBySlug, getAllSnippetSlugs } from "@/lib/snippets";
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import Navbar from "@/components/ui/navbar";
import BlogContent from "@/components/blog/slug/blog-content";
import ContactCTA from "@/components/common/contact-cta";
import FooterSection from "@/components/common/footer";

async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return result.toString();
}

export async function generateStaticParams() {
  const slugs = getAllSnippetSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const snippet = getSnippetBySlug(params.slug);

  if (!snippet) {
    return {
      title: "Snippet Not Found",
    };
  }

  return {
    title: `${snippet.metadata.title} | Snippets`,
    description: snippet.metadata.excerpt || snippet.metadata.description,
    openGraph: {
      title: snippet.metadata.title,
      description: snippet.metadata.excerpt || snippet.metadata.description,
      images: snippet.metadata.image ? [snippet.metadata.image] : [],
    },
  };
}

export default async function SnippetPage({ params }) {
  const snippet = getSnippetBySlug(params.slug);

  if (!snippet) {
    notFound();
  }

  const contentHtml = await markdownToHtml(snippet.content);

  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>

      {/* Floating Navbar */}
      <Navbar activeLabel="Snippets" />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        <article className="mb-6">
          {/* Article header */}
          <header className="space-y-2">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600">

              {snippet.metadata.date && (
                <time dateTime={snippet.metadata.date}>
                  {new Date(snippet.metadata.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}
            </div>
          </header>

          {/* Article content */}
          <div className="border-t border-white/5 pt-2">
            <BlogContent contentHtml={contentHtml} />
          </div>
        </article>

        {/* CTA */}
        <ContactCTA />

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}