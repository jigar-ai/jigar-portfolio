import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import AutomationShowcase from '../components/AutomationShowcase';
import Certifications from '../components/Certifications';
import GitHubSection from '../components/GitHubSection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="scroll-progress" id="scroll-progress" />
      <div className="cursor-glow" id="cursor-glow" />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AutomationShowcase />
      <Certifications />
      <GitHubSection />
      <Contact />
    </main>
  );
}
