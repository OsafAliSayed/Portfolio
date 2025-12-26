import Navbar from '@/components/navbar';
import HeroSection from '@/components/section/hero-section';
import BlogSection from '@/components/section/writing-section';
import ProjectsSection from '@/components/section/projects-section';
import ExperienceTimeline from '@/components/section/experience-section';
import ReviewsSection from '@/components/section/reviews-section';
import ContactCTA from '@/components/section/contact-cta-section';
import FooterSection from '@/components/section/footer-section';

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