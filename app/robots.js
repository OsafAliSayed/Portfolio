export default function robots() {
  const baseUrl = 'https://osafalisayed.com/'
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog/', '/snippets/', '/open-source/', '/reviews/'],
      },
    ],
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
