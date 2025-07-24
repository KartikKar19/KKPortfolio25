import TargetCursor from './components/TargetCursor';
import React from 'react';
import AnimalAnimations from './components/CatAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WebsiteFeatures from './components/WebsiteFeatures';
import Projects from './components/Projects';
import LeetCode from './components/LeetCode';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initVoiceAgent } from './utils/voiceAgent';
import CurvedLoopsSection from './components/CurvedLoopsSection';
function App() {
  React.useEffect(() => {
    initVoiceAgent();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <AnimalAnimations />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WebsiteFeatures />
      <Projects />
      <LeetCode />
      <Experience />
      <Certifications />
      <CurvedLoopsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;