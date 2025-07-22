import React from 'react';
import { ArrowDown, Github, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
        </motion.div>
        <br />
        <br />
        <br />
        <br />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono"
        >
          <span className="text-green-400">#</span>Kartik_Kar
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8 font-mono text-left max-w-3xl mx-auto"
        >
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-400 text-sm">terminal</span>
          </div>
          <div className="text-green-400">
            <p><span className="text-blue-400">Role:</span> <span className="text-white">Software Developer, Technical Analyst, Data Analyst, Full Stack Developer</span></p>
            <p><span className="text-blue-400">Location:</span> <span className="text-white">New Delhi, India</span></p>
            <p><span className="text-blue-400">Education:</span> <span className="text-white">VIT Vellore (CSE)</span></p>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Computer Science Student right now Unemployed, system design, and creating impactful digital solutions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-green-600/25 border border-green-500 text-sm sm:text-base"
          >
            View My Work
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="flex items-center justify-center space-x-2 border-2 border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-800/50 text-sm sm:text-base"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/KartikKar19"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-400"
          >
            <Github size={24} />
            <span className="font-medium">GitHub</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/kartik-kar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-400"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span className="font-medium">LinkedIn</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://leetcode.com/u/Kartikkark/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 hover:border-green-400"
          >
            <ExternalLink size={24} />
            <span className="font-medium">LeetCode</span>
          </motion.a>
    
        </motion.div>
        <span className="font-medium">P.S. Don't Open My Leetcode It Sucks😭</span>
        <br />
        <br />
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ y: -5 }}
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-400 hover:text-green-400 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;