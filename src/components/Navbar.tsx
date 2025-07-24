import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Code, User, Briefcase, Award, Mail, Home, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
  setIsOpen(false); // Close the mobile menu

  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100); // Delay slightly so the mobile menu closes before scrolling
};


  const navItems = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
    { name: 'Skills', id: 'skills', icon: Zap },
    { name: 'Features', id: 'features', icon: Award },
    { name: 'Projects', id: 'projects', icon: Code },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Certifications', id: 'certifications', icon: Award },
    { name: 'Contact', id: 'contact', icon: Mail }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-700' : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold font-mono text-white hover:text-green-400 transition-colors duration-200"
          >
            <span className="text-red-500"> </span>😈DevilBuri 
          </motion.button>
          <br />

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-800/50"
                >
                  <IconComponent size={16} />
                  <span>{item.name}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800/50"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://leetcode.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800/50"
            >
              <Code size={20} />
            </motion.a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-800 border-t border-gray-700 rounded-b-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-700 rounded-md transition-colors duration-200"
                    >
                      <IconComponent size={16} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
                <div className="flex space-x-4 px-3 py-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    <Github size={20} />
                  </a>
                  <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer"
                     className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                    <Code size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;