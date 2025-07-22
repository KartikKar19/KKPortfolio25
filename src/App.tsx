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

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;