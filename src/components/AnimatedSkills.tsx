import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSkills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: '⚛️', color: 'text-blue-400' },
        { name: 'Angular', icon: '🅰️', color: 'text-red-400' },
        { name: 'TypeScript', icon: '📘', color: 'text-blue-500' },
        { name: 'JavaScript', icon: '🟨', color: 'text-yellow-400' },
        { name: 'HTML5', icon: '🌐', color: 'text-orange-400' },
        { name: 'CSS3', icon: '🎨', color: 'text-blue-300' },
        { name: 'Tailwind', icon: '💨', color: 'text-cyan-400' },
        { name: 'Bootstrap', icon: '🅱️', color: 'text-purple-400' },
        { name: 'GSAP', icon: '🎬', color: 'text-green-400' },
        { name: 'Material UI', icon: '🎨', color: 'text-blue-400' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
        { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
        { name: 'Java', icon: '☕', color: 'text-orange-600' },
        { name: 'C++', icon: '⚡', color: 'text-blue-600' },
        { name: 'C', icon: '🔧', color: 'text-gray-400' },
        { name: 'Express', icon: '🚀', color: 'text-gray-400' },
        { name: 'REST API', icon: '🌍', color: 'text-blue-600' },
        { name: 'MongoDB', icon: '🍃', color: 'text-green-500' },
        { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-700' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'GitHub', icon: '📝', color: 'text-gray-300' },
        { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
        { name: 'Kubernetes', icon: '⚙️', color: 'text-blue-400' },
        { name: 'AWS', icon: '☁️', color: 'text-orange-400' },
        { name: 'Azure', icon: '🔷', color: 'text-blue-500' },
        { name: 'AWS Lambda', icon: '⚡', color: 'text-orange-500' },
        { name: 'Figma', icon: '🎨', color: 'text-purple-400' },
        { name: 'Salesforce', icon: '☁️', color: 'text-blue-600' },
        { name: 'PowerBI', icon: '📊', color: 'text-yellow-500' }
      ]
    }
  ];

  return (
    <div className="py-12 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-2xl font-bold text-white text-center mb-2 font-mono">
          <span className="text-green-400">const</span> techStack = <span className="text-green-400">[</span>
        </h3>
        <p className="text-gray-400 text-center font-mono text-sm">
          <span className="text-gray-500">//</span> Technologies flowing through my development journey
        </p>
      </div>

      {skillCategories.map((category, categoryIndex) => (
        <div key={category.title} className="mb-8">
          <h4 className="text-lg font-semibold text-white text-center mb-4 font-mono">
            <span className="text-blue-400">{category.title.toLowerCase()}:</span> <span className="text-green-400">[</span>
          </h4>
          
          <div className="relative">
            <motion.div
              className="flex space-x-6 whitespace-nowrap"
              animate={{
                x: [0, -120 * category.skills.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25 + categoryIndex * 3,
                  ease: "linear"
                }
              }}
            >
              {/* Duplicate the skills array to create seamless loop */}
              {[...category.skills, ...category.skills, ...category.skills, ...category.skills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 hover:border-green-400 transition-all duration-200 cursor-pointer min-w-max"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className={`font-mono text-sm font-medium ${skill.color}`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
      
      <div className="text-center mt-8">
        <p className="text-green-400 font-mono">]</p>
      </div>
    </div>
  );
};

export default AnimatedSkills;