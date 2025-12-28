'use client';

import { projects } from '@/lib/constants';
import { CommonCard } from './common/common-card';


const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-20 scroll-mt-24">
      <h2 className="text-base font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 
        Selected Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <CommonCard 
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;