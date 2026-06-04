"use client";
import Image from "next/image";
import Icons from "@/components/ui/icons";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import AnimatedLink from "@/components/ui/animated-link";

const coolStuffItems = [
  { label: "Building Feedbackworthy", href: "https://www.feedbackworthy.com/", external: true },
  { label: "Working on my AI portfolio: Noah", href: "https://noah.osafalisayed.com/", external: false },
  { label: "I occasionally make backend API's (coming soon!)", href: "#", external: false },
  { label: "and some regular indie developer stuff", href: null },
];

function CoolStuffTooltip() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <span
      className="relative inline-block text-secondary cursor-default"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <span style={{ borderBottom: "1.5px dotted currentColor" }}>cool stuff</span>

      <AnimatePresence>
        {open && (
          <motion.span
            className="absolute -left-8 sm:left-0 bottom-full mb-2 z-50 block"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={show}
            onMouseLeave={hide}
          >
            <span className="block bg-[rgb(20,20,20)] border border-white/10 rounded-xl px-3 py-2 shadow-xl min-w-max">
              {coolStuffItems.map((item, i) =>
                item.href && item.href !== "#" ? (
                  <a
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-secondary py-0.5 transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary/60 flex-shrink-0" />
                    {item.label}
                  </a>
                ) : (
                  <span key={i} className="flex items-center gap-1.5 text-xs text-neutral-500 py-0.5 italic">
                    <span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0" />
                    {item.label}
                  </span>
                )
              )}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}


export default function HeroSection() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/OsafAliSayed",
      icon: Icons.GitHub,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sayedosafali",
      icon: Icons.TwitterX,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/osafalisayed",
      icon: Icons.LinkedIn,
    },
  ];

  return (
    <section id="home" className="mb-10">
      <div className="rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-[rgb(12,12,12)] shadow-lg hover:shadow-2xl px-5 py-5">

        <div className="sm:flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 ring-2 ring-secondary/10 hover:ring-secondary/40 transition-all duration-300 flex-shrink-0">
              <Image
                src="/images/home-portfolio-img.webp"
                alt="Osaf Ali Sayed"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Osaf Ali Sayed
              </h1>
              <p className="text-sm text-neutral-400">Software Engineer</p>
              <p className="text-sm text-neutral-500">Rajasthan, India</p>
            </div>
          </div>

          <div className="flex gap-2 shrink-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2 text-neutral-500 hover:text-secondary bg-white/5 border border-white/10 hover:border-white/20 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-4">
          <p className="text-sm text-neutral-400 leading-relaxed">
            Building <CoolStuffTooltip />. I <AnimatedLink href="/case-studies/">code</AnimatedLink> products and <AnimatedLink href="/blog/">write</AnimatedLink> about my experiences. Available for freelance work!
          </p>
        </div>

      </div>
    </section>
  );
}
