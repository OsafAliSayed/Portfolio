"use client"
import HeroSection from '@/components/hero-sidebar';
import ProjectsSection from '@/components/projects-section-new';
import ExperienceTimeline from '@/components/experience-timeline';
import OpenSourceSection from '@/components/open-source-section';
import SkillsSection from '@/components/skills-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background h-full ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center gap-3 h-screen ">
        {/* Hero Section */}
        <div className="w-full md:w-1/3 lg:w-1/4 sticky top-0 h-fit">
          <HeroSection />
        </div>
        
        {/* Main Content */}
        <div className="w-full md:w-2/3 lg:w-3/4 space-y-12 md:space-y-16 lg:space-y-18 h-screen ">
          <SkillsSection />
          <ExperienceTimeline />
          <OpenSourceSection />
          <ProjectsSection />
        </div>
      </div>
    </main>
  );
}