import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/hero';
import BlogSection from '@/components/writing';
import ProjectsSection from '@/components/projects';
import ExperienceTimeline from '@/components/experience';
import ReviewsSection from '@/components/reviews';
import ContactCTA from '@/components/common/contact-cta';
import FooterSection from '@/components/common/footer';

export const metadata = {
  title: 'Osaf Ali Sayed — Full Stack Developer',
  description: 'Freelance Full-Stack Engineer specialising in Next.js, Python, Django, Nest.js, and DigitalOcean. Currently focused on building scalable AI applications.',
  keywords: [
    'Osaf Ali Sayed',
    'Full Stack Developer',
    'Freelance Developer',
    'Next.js',
    'Django',
    'Python',
    'Nest.js',
    'AI Applications',
    'Portfolio',
    'MVP Development',
    'Web Development',
    'Software Engineer',
    'Tech Blog',
  ],
  metadataBase: new URL('https://osafalisayed.com'),
  openGraph: {
    title: 'Osaf Ali Sayed — Full Stack Developer',
    description: 'Freelance Full-Stack Engineer specialising in Next.js, Python, Django, Nest.js, and DigitalOcean. Currently focused on building scalable AI applications.',
    url: 'https://osafalisayed.com',
    siteName: 'Osaf Ali Sayed',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://osafalisayed.com/favicon.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osaf Ali Sayed — Full Stack Developer',
    description: 'Freelance Full-Stack Engineer specialising in Next.js, Python, Django, Nest.js, and DigitalOcean. Currently focused on building scalable AI applications.',
    creator: '@sayedosafali',
    images: ['https://osafalisayed.com/favicon.jpeg'],
  },
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 pb-20">
      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03] bg-grid-pattern pointer-events-none"></div>
      
      {/* Floating Navbar */}
      <Navbar activeLabel="Home" />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 relative z-10">
        {/* Hero Section */}
        <HeroSection />
   
        {/* Work Section */}
        <ExperienceTimeline />

        {/* Reviews Section */}
        <ReviewsSection />

        {/* Projects Section */}
        <ProjectsSection />
        
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