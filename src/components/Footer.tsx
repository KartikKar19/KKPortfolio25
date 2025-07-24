import React from 'react';
import { Heart, Github, Linkedin, Mail, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white font-mono">
              <span className="text-red-500">😈</span><span className="text-green-400">&lt;</span>DevilBuri<span className="text-green-400">/&gt;</span>
            </h3>
            <div className="cursor-target bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono">
              <p className="text-gray-300 text-sm">
                <span className="text-blue-400">const</span> developer = <span className="text-green-400">{'{'}</span><br/>
                <span className="ml-4 text-blue-400">name:</span> <span className="text-yellow-400">"Kartik Kar"</span>,<br/>
                <span className="ml-4 text-blue-400">mission:</span> <span className="text-yellow-400">"Job😭😭"</span><br/>
                <span className="text-green-400">{'}'}</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white font-mono">
              <span className="text-green-400">const</span> navigation = <span className="text-green-400">[</span>
            </h4>
            <ul className="space-y-2 font-mono">
              {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item, index) => (
                <li key={item}>
                  <motion.button
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="cursor-target text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    <span className="text-gray-600">"{item.toLowerCase()}"</span>{index < 5 ? ',' : ''}
                  </motion.button>
                </li>
              ))}
            </ul>
            <p className="text-green-400 font-mono mt-2">]</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white font-mono">
              <span className="text-green-400">const</span> socials = <span className="text-green-400">{'{'}</span>
            </h4>
            <div className="flex space-x-4 mb-4">
              {[
                { icon: Github, href: 'https://github.com', color: 'gray' },
                { icon: Linkedin, href: 'https://linkedin.com/in/kartik-kar', color: 'blue' },
                { icon: Mail, href: 'mailto:kar.kartik19@gmail.com', color: 'green' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`cursor-target text-gray-400 hover:text-${social.color}-400 transition-colors duration-200 bg-gray-900 p-2 rounded-lg border border-gray-700 hover:border-${social.color}-400`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="cursor-target bg-gray-900 border border-gray-700 rounded-lg p-3 font-mono text-sm">
              <p className="text-gray-400">
                <span className="text-blue-400">email:</span> <span className="text-yellow-400">"kar.kartik19@gmail.com"</span><br/>
                <span className="text-blue-400">location:</span> <span className="text-yellow-400">"New Delhi, India"</span>
              </p>
            </div>
            <p className="text-green-400 font-mono mt-2">{'}'}</p>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="cursor-target bg-gray-900 border border-gray-700 rounded-lg p-4 font-mono"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-gray-400 mb-4 md:mb-0">
                <span className="text-green-400">©</span> {currentYear} <span className="text-blue-400">Kartik Kar</span>. 
                <span className="text-gray-500"> // All rights reserved</span>
              </p>
              <p className="text-gray-400 flex items-center">
                <span className="text-gray-500">// Made with </span>
                <Heart className="text-red-500 mx-1" size={14} />
                <span className="text-gray-500"> using </span>
                <Code className="text-green-400 mx-1" size={14} />
                <span className="text-blue-400"> React</span>
                <span className="text-gray-500"> + </span>
                <span className="text-cyan-400">Tailwind</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;