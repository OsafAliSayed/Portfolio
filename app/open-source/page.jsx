import Navbar from '@/components/ui/navbar';
import Image from 'next/image';
import Link from 'next/link';
import highlightKeywords from '@/lib/highlight-utils';
import Icons from '@/components/ui/icons';
import { contributions } from '@/lib/constants';
import PageHeaderSection from '@/components/common/page-header';
import FooterSection from '@/components/common/footer';

const OpenSourceHeaders = {
  title: "Open Source",
  description: "Contributing to the developer community by solving problems and improving tools that developers use every day."
}

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar activeLabel="Open Source" />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        {/* Header */}
        <PageHeaderSection props={OpenSourceHeaders} />
        
        {/* Contributions List */}
        <div className="space-y-12 mb-10 px-4">
          {contributions.map((contribution) => (
            <div key={contribution.id} className="relative border-l-4 border-white/30 pl-9 ml-2">
              {/* Logo on timeline */}
              <div className="absolute -left-[26px] lg:-left-[31px] top-0 w-14 h-14 rounded-full overflow-hidden bg-white border-2 border-neutral-700 flex items-center justify-center">
                 <Image
                    src={contribution.logo}
                    alt={contribution.company}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between ">
                <div>
                  <Link 
                    href={contribution.link}
                    target="_blank"
                    className="text-lg tracking-tighter font-bold hover:text-blue-400 transition-colors flex items-center gap-1 "
                  >
                    {contribution.title}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                      {contribution.status}
                    </span>

                  </Link>  
                  <p className="text-base italic text-neutral-600 mb-2">{contribution.description}</p>

                </div>
                <span className="text-sm text-neutral-600 font-mono hidden lg:block">{contribution.date}</span>
                
              </div>


              {/* Details */}
              <div className="space-y-2 mb-4">
                {contribution.list.map((item, idx) => (
                  <p key={idx} className="text-sm text-neutral-400 leading-relaxed p-0 m-0">
                    {highlightKeywords(item.text, item.highlights)}
                  </p>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {contribution.technologies.map((tech) => {
                  const IconComponent = Icons[tech];
                  return (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 px-2 py-1 text-sm bg-neutral-800/50 text-neutral-400 border border-white/5"
                    >
                      {IconComponent && <IconComponent className="w-3 h-3 text-secondary" />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}
