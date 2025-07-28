import React, { Suspense } from 'react';
import TargetCursor from './components/TargetCursor';
import AnimalAnimations from './components/CatAnimations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import { initVoiceAgent } from './utils/voiceAgent';

// Lazy load components for better performance
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const WebsiteFeatures = React.lazy(() => import('./components/WebsiteFeatures'));
const Projects = React.lazy(() => import('./components/Projects'));
const LeetCode = React.lazy(() => import('./components/LeetCode'));
const Experience = React.lazy(() => import('./components/Experience'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const CurvedLoopsSection = React.lazy(() => import('./components/CurvedLoopsSection'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-400"></div>
  </div>
);

function App() {
  React.useEffect(() => {
    initVoiceAgent();
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <ErrorBoundary>
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      </ErrorBoundary>
      <ErrorBoundary>
        <AnimalAnimations />
      </ErrorBoundary>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Skills />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <WebsiteFeatures />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <LeetCode />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Certifications />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <CurvedLoopsSection />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;