'use client';

import { projects } from '@/lib/constants';
import { CommonCard } from './common/common-card';
import SectionHeader from '@/components/ui/section-header';


const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-10 scroll-mt-24">
      <SectionHeader>Projects</SectionHeader>
       
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