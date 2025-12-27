import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/hero';
import BlogSection from '@/components/writing';
import ProjectsSection from '@/components/projects';
import ExperienceTimeline from '@/components/experience';
import ReviewsSection from '@/components/reviews';
import ContactCTA from '@/components/common/contact-cta-section';
import FooterSection from '@/components/common/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar activeLabel="Home" />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 pt-32 relative z-10">
        {/* Hero Section */}
        <HeroSection />
   
        {/* Work Section */}
        <ExperienceTimeline />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Reviews Section */}
        <ReviewsSection />
        
        {/* Writing Section */}
        <BlogSection />        

        {/* Contact CTA */}
        <ContactCTA />

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
}