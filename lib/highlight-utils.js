const highlightKeywords = (text, keywords) => {
  if (!keywords || keywords.length === 0) return text;

  // Escape regex special characters and join keywords with | for OR match
  const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  // Split text by matched keywords (preserve separators)
  const parts = text.split(regex);

  return parts.map((part, index) => {
    // Check if this part is a keyword match (case-insensitive)
    const match = keywords.find(
      k => k.toLowerCase() === part.toLowerCase()
    );

    if (match) {
      return (
        <span
          key={index}
          className="text-secondary font-semibold"
        >
          {part}
        </span>
      );
    }
    return part;
  });
};


export default highlightKeywords;