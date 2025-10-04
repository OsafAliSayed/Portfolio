// Utility function to highlight keywords in text
export const highlightKeywords = (text, customKeywords = []) => {
  const defaultKeywords = [
    // Core technologies
    { pattern: /(Django|Django REST Framework|FastAPI|MongoDB|Redis|PostgreSQL|React|TypeScript|Material-UI|WebSocket|Chart\.js|Pydantic|Beanie|Ant Design|PyTest|Cypress)/g, className: "font-medium text-secondary" },
    { pattern: /(OpenAI APIs?|Next\.js|Docker|GitHub Actions|Supabase|CoinGecko API|Electron|Vue\.js|Python|SCSS|Frappe)/g, className: "font-medium text-secondary" },
    // Additional technologies
    { pattern: /(JavaScript|TailwindCSS|AWS|PostgreSQL|ShadCN UI|Chart\.js\/Recharts)/g, className: "font-medium text-secondary" }
  ];

  // Merge custom keywords with default ones
  const keywords = [...defaultKeywords, ...customKeywords];

  let result = text;
  let keyCounter = 0;

  keywords.forEach(({ pattern, className }) => {
    result = result.replace(pattern, (match) => {
      keyCounter++;
      return `<HIGHLIGHT_${keyCounter}_${className}_${match}_HIGHLIGHT>`;
    });
  });

  // Split by our markers and create JSX elements
  const parts = [];
  const segments = result.split(/<HIGHLIGHT_(\d+)_([^_]+(?:\s+[^_]+)*)_([^_]+)_HIGHLIGHT>/);
  
  for (let i = 0; i < segments.length; i++) {
    if (i % 4 === 0) {
      // Regular text
      if (segments[i]) parts.push(segments[i]);
    } else if (i % 4 === 3) {
      // Highlighted text
      const className = segments[i - 1];
      const matchText = segments[i];
      parts.push(
        <span key={`highlight-${i}`} className={className}>
          {matchText}
        </span>
      );
    }
  }

  return parts.length > 1 ? parts : text;
};