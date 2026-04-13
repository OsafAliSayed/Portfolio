import Image from "next/image";
import Icons from "@/components/ui/icons";

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
              <p className="text-sm text-neutral-400">Backend & DevOps Engineer</p>
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
            <span className="text-secondary font-medium">Backend</span> & <span className="text-secondary font-medium">DevOps</span> engineer with expertise in <span className="text-secondary font-medium">AI</span>, <span className="text-secondary font-medium">Automation</span>, <span className="text-secondary font-medium">System Design</span>, <span className="text-secondary font-medium">CI/CD</span>, <span className="text-secondary font-medium">Django</span> and <span className="text-secondary font-medium">DigitalOcean</span>. 
          </p>
        </div>

      </div>
    </section>
  );
}
