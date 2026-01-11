'use client';

import { projects } from '@/lib/constants';
import { CommonCard } from './common/common-card';


const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-20 scroll-mt-24">
      <h2 className="font-bold text-neutral-100 mb-6 tracking-tighter relative inline-block">
        Projects
      </h2>
       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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