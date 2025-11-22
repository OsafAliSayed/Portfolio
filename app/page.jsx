import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import BlogSection from '@/components/blog-section';
import ProjectsSection from '@/components/projects-section';
import ExperienceTimeline from '@/components/experience';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Writing Section */}
        <BlogSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Work Section */}
        <ExperienceTimeline />
        
        {/* Footer */}
        <footer className="py-10 text-center text-neutral-700 text-xs">
          <p>© 2025 Osaf Ali Sayed.</p>
        </footer>
      </div>
    </div>
  );
}