"use client"
import HeroSection from '@/components/hero-sidebar';
import ProjectsSection from '@/components/projects';
import ExperienceTimeline from '@/components/experience';
import OpenSourceSection from '@/components/open-source';
import EducationSection from '@/components/education';
import ReviewsSection from '@/components/reviews-section';
import SkillsSection from '@/components/skills';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Mobile Layout: Stack vertically */}
      <div className="block lg:hidden">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          {/* Hero Section - Mobile */}
          <div className="mb-8">
            <HeroSection />
          </div>
          
          {/* Main Content - Mobile */}
          <div className="space-y-12">
            <SkillsSection />
            <ExperienceTimeline />
            <OpenSourceSection />
            <ProjectsSection />
            <EducationSection />
            <ReviewsSection />
          </div>
        </div>
      </div>

      {/* Desktop Layout: Side by side */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex gap-8">
          {/* Hero Section - Desktop */}
          <div className="w-full lg:w-1/4 xl:w-1/3">
            <div className="sticky top-10">
              <HeroSection />
            </div>
          </div>
          
          {/* Main Content - Desktop */}
          <div className="w-full lg:w-3/4 xl:w-2/3 space-y-16">
            <SkillsSection />
            <ReviewsSection />
            <ExperienceTimeline />
            <ProjectsSection />
            <OpenSourceSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </main>
  );
}