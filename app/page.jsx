'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import EducationSection from '@/components/education-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    education: educationRef,
    contact: contactRef,
  };

  const scrollToSection = (sectionKey) => {
    sections[sectionKey].current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (

    <main className="min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pb-20"
      >
        <div ref={aboutRef} id="about">
          <AboutSection />
        </div>
        <div ref={skillsRef} id="skills">
          <SkillsSection />
        </div>
        <div ref={experienceRef} id="experience">
          <ExperienceSection />
        </div>
        <div ref={projectsRef} id="projects">
          <ProjectsSection />
        </div>
        <div ref={educationRef} id="education">
          <EducationSection />
        </div>
        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
      </motion.div>
      <Footer />
    </main>
  );
}