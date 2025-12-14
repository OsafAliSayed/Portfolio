'use client';

import { useState } from 'react';
import Icons from '@components/icons';

export default function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-neutral-300 hover:text-white transition-colors text-xs opacity-0 group-hover:opacity-100 min-w-[44px] h-[28px] flex items-center justify-center"
      aria-label="Copy code"
    >
      {copied ? (
        <Icons.Check className="w-3 h-3 text-green-500" />
      ) : (
        <span className="font-mono text-[10px]">Copy</span>
      )}
    </button>
  );
}