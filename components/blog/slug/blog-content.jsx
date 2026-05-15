'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function BlogContent({ contentHtml }) {
  const contentRef = useRef(null);

  // ── Lightbox state ──────────────────────────────────────────────────────────
  const [lightbox, setLightbox] = useState(null); // { src, alt }
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Refs that don't need to trigger re-renders
  const overlayRef = useRef(null);
  const dragOrigin = useRef({ x: 0, y: 0 }); // mousedown start minus current translate
  const lastPos = useRef({ x: 0, y: 0 });
  const pinchStartDist = useRef(null);
  const pinchStartScale = useRef(1);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsDragging(false);
    lastPos.current = { x: 0, y: 0 };
  }, []);

  const resetView = useCallback((e) => {
    e?.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
    lastPos.current = { x: 0, y: 0 };
  }, []);

  // Close on Escape — only active while the lightbox is open
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox]);

  // Non-passive wheel listener so we can preventDefault (stops page scroll)
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.15 : -0.15;
      setScale((s) => Math.min(Math.max(s + delta, 0.25), 8));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [lightbox]);

  // ── Mouse drag handlers ─────────────────────────────────────────────────────
  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    dragOrigin.current = {
      x: e.clientX - lastPos.current.x,
      y: e.clientY - lastPos.current.y,
    };
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const nx = e.clientX - dragOrigin.current.x;
    const ny = e.clientY - dragOrigin.current.y;
    lastPos.current = { x: nx, y: ny };
    setPosition({ x: nx, y: ny });
  }, [isDragging]);

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  // ── Touch handlers (single-finger pan, two-finger pinch zoom) ───────────────
  const onTouchStart = useCallback((e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragOrigin.current = {
        x: e.touches[0].clientX - lastPos.current.x,
        y: e.touches[0].clientY - lastPos.current.y,
      };
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartDist.current = Math.hypot(dx, dy);
      pinchStartScale.current = scale;
    }
  }, [scale]);

  const onTouchMove = useCallback((e) => {
    e.preventDefault();
    if (e.touches.length === 1 && isDragging) {
      const nx = e.touches[0].clientX - dragOrigin.current.x;
      const ny = e.touches[0].clientY - dragOrigin.current.y;
      lastPos.current = { x: nx, y: ny };
      setPosition({ x: nx, y: ny });
    } else if (e.touches.length === 2 && pinchStartDist.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const next = pinchStartScale.current * (dist / pinchStartDist.current);
      setScale(Math.min(Math.max(next, 0.25), 8));
    }
  }, [isDragging]);

  const onTouchEnd = useCallback(() => {
    setIsDragging(false);
    pinchStartDist.current = null;
  }, []);

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
    <>
      <div
        ref={contentRef}
        onClick={(e) => {
          if (e.target.tagName === 'IMG') {
            const img = e.target;
            setLightbox({ src: img.src, alt: img.alt || '' });
          }
        }}
        className="prose prose-sm dark:prose-invert max-w-none
          prose-headings:text-neutral-100 prose-headings:font-bold prose-headings: tracking-tighter
          prose-h2:text-2xl
          prose-h3:text-xl
          prose-p:text-neutral-300 prose-p:leading-7 prose-p:font-base
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-300
          prose-strong:text-neutral-200
          prose-code:text-neutral-200 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-base prose-code:font-mono prose-code:tracking-normal prose-code:before:content-none prose-code:after:content-none
          [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:rounded-none
          prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:text-neutral-300 prose-pre:relative prose-pre:text-sm prose-pre:tracking-normal prose-pre:leading-relaxed prose-pre:overflow-x-auto
          prose-blockquote:border-l-blue-500 prose-blockquote:text-neutral-400 prose-blockquote:bg-white/5 prose-blockquote:px-4
          prose-hr:border-white/10
          prose-ul:text-neutral-300 prose-ul:list-disc prose-ul:ml-6 prose-ul:space-y-1
          prose-ol:text-neutral-300 prose-ol:list-decimal prose-ol:ml-6 prose-ol:space-y-1
          prose-li:text-neutral-300 prose-li:marker:text-neutral-500
          prose-table:text-neutral-300
          prose-thead:border-white/10
          prose-tr:border-white/10
          prose-th:text-neutral-200
          prose-td:text-neutral-300
          [&_img]:cursor-zoom-in"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* ── Image lightbox ───────────────────────────────────────────────────── */}
      {lightbox && (
        <>
          {/* Backdrop */}
          <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
          {/* Drag / pan container */}
          <div
            className="relative flex items-center justify-center w-full h-full overflow-hidden"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              draggable={false}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.15s ease',
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
          </div>

          </div>

          {/* Zoom controls — fixed so they are never under the drag container */}
          <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2">
            <button
              className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base transition-colors"
              onClick={(e) => { e.stopPropagation(); setScale((s) => Math.max(s - 0.25, 0.25)); }}
              aria-label="Zoom out"
            >
              −
            </button>
            <span className="w-14 text-center text-xs font-mono text-neutral-400 tabular-nums">
              {Math.round(scale * 100)}%
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base transition-colors"
              onClick={(e) => { e.stopPropagation(); setScale((s) => Math.min(s + 0.25, 8)); }}
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              className="px-3 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-400 hover:text-white text-xs font-mono transition-colors"
              onClick={(e) => { e.stopPropagation(); resetView(e); }}
              aria-label="Reset zoom"
            >
              Reset
            </button>
            <button
              className="px-3 h-8 flex items-center justify-center rounded bg-white/10 hover:bg-white/20 border border-white/20 text-neutral-400 hover:text-white text-xs font-mono transition-colors"
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              aria-label="Close image"
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
}