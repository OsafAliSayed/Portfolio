"use client";

import { useEffect, useMemo, useState } from "react";
import Icons from "@/components/ui/icons";

function buildShareLinks(url, title) {
  const safeTitle = title || "";
  const message = `Checkout this blog: ${safeTitle} ${url}`.trim();
  const summary = `Checkout this blog: ${safeTitle}`.trim();
  const encodedText = encodeURIComponent(message);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(safeTitle);
  const encodedSummary = encodeURIComponent(summary);

  return {
    whatsapp: `https://wa.me/?text=${encodedText}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };
}

async function copyToClipboard(value) {
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function ShareButtons({ title }) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const links = useMemo(() => buildShareLinks(url, title), [url, title]);

  const handleShare = async (targetUrl) => {
    if (!url) {
      return;
    }

    try {
      await copyToClipboard(url);
      setCopied(true);
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } finally {
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center">
      <div className="relative inline-flex items-center group">
        <button
          type="button"
          aria-label="Share"
          className="h-3 w-3 inline-flex items-center justify-center text-white transition group-hover:text-secondary"
        >
          <Icons.Share className="h-4 w-4" />
        </button>
        <div className="absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-2 opacity-0 translate-y-1 transition group-hover:opacity-100 group-focus-within:opacity-100">
          <button
            type="button"
            aria-label="Share on WhatsApp"
            onClick={() => handleShare(links.whatsapp)}
            onBlur={() => setCopied(false)}
            className="text-neutral-300 transition hover:text-green-400"
          >
            <Icons.WhatsApp className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Share on Twitter"
            onClick={() => handleShare(links.twitter)}
            onBlur={() => setCopied(false)}
            className="text-neutral-300 transition hover:text-blue-400"
          >
            <Icons.Twitter className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Share on LinkedIn"
            onClick={() => handleShare(links.linkedin)}
            onBlur={() => setCopied(false)}
            className="text-neutral-300 transition hover:text-blue-400"
          >
            <Icons.LinkedIn className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
