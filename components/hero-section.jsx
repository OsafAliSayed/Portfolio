"use client";

import Image from "next/image";
import Icons from "./icons";

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
    <section id="home" className="mb-20">
      <div className="lg:flex items-center gap-5 mb-6">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-20 h-20 rounded-full bg-neutral-800 overflow-hidden border-2 border-neutral-800 ring-2 ring-white/10">
            <Image
              src="/images/home-portfolio-img.webp"
              alt="Osaf Ali Sayed"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl  font-bold text-white tracking-tight">
              Osaf Ali Sayed
            </h1>
            <p className="text-sm text-neutral-400">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex gap-3 mt-6 lg:mt-0">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-500 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md hover:bg-neutral-800 transition-colors"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <p className="text-neutral-400 text-base leading-relaxed">
        I specialize in building robust backend systems and fluid frontend
        interfaces. Based in India, currently solving data problems at{" "}
        <span className="text-white font-medium">Ecomlytix</span>.
      </p>
    </section>
  );
}
