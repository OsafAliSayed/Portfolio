'use client';

import { useEffect, useRef } from 'react';

export default function BlogContent({ contentHtml }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const preElements = contentRef.current.querySelectorAll('pre');

      preElements.forEach((pre) => {
        if (pre.querySelector('.copy-button-container')) return;

        pre.style.position = 'relative';
        pre.classList.add('group');
        // Ensure there's room at the top for the language badge (in case global CSS wasn't loaded yet)
        pre.style.paddingTop = pre.style.paddingTop || '1.25rem';

        const codeElement = pre.querySelector('code');

        // Ensure .hljs class is present so our CSS rules apply (rehype-highlight usually adds this)
        if (codeElement && !codeElement.classList.contains('hljs')) {
          codeElement.classList.add('hljs');
        }

        // Determine language from class (e.g. language-python)
        let lang = '';
        if (codeElement && codeElement.className) {
          const classes = codeElement.className.split(/\s+/);
          for (const c of classes) {
            if (c.startsWith('language-')) {
              lang = c.replace('language-', '');
              break;
            }
          }
        }

        // Language badge (left)
        if (lang) {
          const langBadge = document.createElement('span');
          langBadge.className = 'language-badge absolute top-[0.25rem] left-2 text-[10px] font-mono text-neutral-300 bg-white/5 px-1.5 rounded';
          langBadge.textContent = lang;
          pre.appendChild(langBadge);
        }

        // Copy button container (right)
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'copy-button-container absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity';

        const button = document.createElement('button');
        button.className = 'p-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-neutral-300 hover:text-white transition-colors text-xs font-mono min-w-[44px] h-[28px] flex items-center justify-center';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code');

        // Copy fresh code text on click (handles highlighted spans)
        button.addEventListener('click', async () => {
          try {
            const codeText = codeElement ? codeElement.textContent : pre.textContent;
            await navigator.clipboard.writeText(codeText);
            button.textContent = '✓';
            button.style.color = '#10b981';
            setTimeout(() => {
              button.textContent = 'Copy';
              button.style.color = '';
            }, 2000);
          } catch (err) {
            console.error('Failed to copy text: ', err);
          }
        });

        buttonContainer.appendChild(button);
        pre.appendChild(buttonContainer);
      });
    }
  }, [contentHtml]);

  return (
    <div 
      ref={contentRef}
      className="prose prose-sm dark:prose-invert max-w-none
        prose-headings:text-neutral-100 prose-headings:font-bold prose-headings: tracking-tighter
        prose-h2:text-2xl
        prose-h3:text-xl
        prose-p:text-neutral-300 prose-p:leading-7 prose-p:font-base
        prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-300
        prose-strong:text-neutral-200
        prose-code:text-neutral-200 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono
        prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:text-neutral-300 prose-pre:relative
        prose-blockquote:border-l-blue-500 prose-blockquote:text-neutral-400 prose-blockquote:bg-white/5 prose-blockquote:px-4
        prose-hr:border-white/10
        prose-ul:text-neutral-300 prose-ul:list-disc prose-ul:ml-6 prose-ul:space-y-1
        prose-ol:text-neutral-300 prose-ol:list-decimal prose-ol:ml-6 prose-ol:space-y-1
        prose-li:text-neutral-300 prose-li:marker:text-neutral-500
        prose-table:text-neutral-300
        prose-thead:border-white/10
        prose-tr:border-white/10
        prose-th:text-neutral-200
        prose-td:text-neutral-300"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}