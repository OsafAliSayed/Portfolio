import Navbar from '../../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import highlightKeywords from '../../lib/highlight-utils';
import Icons from '../../components/icons';
import { contributions } from '@/lib/constants';

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
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Open Source</h1>
          <p className="text-neutral-500 text-sm mb-6">
            Contributing to the developer community by solving problems and improving tools that developers use every day.
          </p>
        </div>
        
        {/* Contributions List */}
        <div className="space-y-12">
          {contributions.map((contribution) => (
            <div key={contribution.id} className="relative border-l border-white/10 pl-8 ml-2">
              {/* Logo on timeline */}
              <div className="absolute -left-[15px] top-0 w-8 h-8 rounded-full overflow-hidden bg-white border-2 border-neutral-700 flex items-center justify-center">
                 <Image
                    src={contribution.logo}
                    alt={contribution.company}
                    width={28}
                    height={28}
                    className="object-contain p-0.5"
                  />
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <div>
                  <h2 className="text-white font-medium text-base flex items-center gap-2">
                    {contribution.title}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                      {contribution.status}
                    </span>
                  </h2>
                  <Link 
                    href={contribution.link}
                    target="_blank"
                    className="text-sm text-neutral-500 hover:text-blue-400 transition-colors flex items-center gap-1 mt-0.5"
                  >
                    {contribution.repository}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </Link>
                </div>
                <span className="text-xs text-neutral-600 font-mono mt-2 sm:mt-0">{contribution.date}</span>
              </div>

              <p className="text-sm text-neutral-300 mb-4 font-medium">{contribution.description}</p>

              {/* Details */}
              <div className="space-y-3 mb-4">
                {contribution.list.map((item, idx) => (
                  <p key={idx} className="text-xs text-neutral-400 leading-relaxed">
                    • {highlightKeywords(item.text, item.highlights)}
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
                      className="flex items-center gap-1.5 px-2 py-1 text-xs bg-neutral-800/50 text-neutral-400 border border-white/5"
                    >
                      {IconComponent && <IconComponent className="w-3 h-3" />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="py-10 text-center text-neutral-700 text-xs mt-20">
          <p>© 2025 Osaf Ali Sayed.</p>
        </footer>
      </div>
    </div>
  );
}
