import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Projects Head',
      company: 'IEEE TEMS VIT Vellore',
      location: 'Vellore, Tamil Nadu',
      period: 'Jan 2025 - Present',
      type: 'Leadership',
      description: [
        'Leading the SDLC of all projects launching under IEEE TEMS VIT chapter',
        'Developed comprehensive style guide for IEEE TEMS Vellore Official Website',
        'Speaker at events "Pixel Perfect" and "Bootstraction"',
        'Judged and conducted workshop "HachXpertise" with 500+ participants'
      ],
      technologies: ['React', 'Project Management', 'Team Leadership', 'Web Development']
    },
    {
      title: 'Salesforce Administrator',
      company: 'Blue Merchant Solutions',
      location: 'Remote',
      period: 'Jan 2025 - Mar 2025',
      type: 'Internship',
      description: [
        'Completed 6+ hours/week structured training on user management and automation',
        'Built and tested 5+ custom workflows and automation rules',
        'Created 10+ reports/dashboards to track key business metrics',
        'Completed 20+ Trailhead modules earning multiple badges'
      ],
      technologies: ['Salesforce', 'Data Analysis', 'Automation', 'Reporting']
    },
    {
      title: 'Software Development Intern',
      company: 'Bluestock Fintech',
      location: 'Remote',
      period: 'Jan 2025 - Feb 2025',
      type: 'Internship',
      description: [
        'Co-Team Lead for team of 8 developing IPO Website and REST API',
        'Conducted 12 comprehensive code reviews improving code quality by 20%',
        'Collaborated on system design optimized for 1000+ concurrent users',
        'Enhanced application performance by 15% through database optimization'
      ],
      technologies: ['MERN Stack', 'REST API', 'System Design', 'Team Leadership']
    },
    {
      title: 'Web Developer And Designer',
      company: 'KalkiNi AI Surveillance',
      location: 'Hybrid',
      period: 'Jul 2024 - Jan 2025',
      type: 'Internship',
      description: [
        'Spearheaded team of developers maintaining company website using MERN Stack',
        'Designed Figma wireframes reducing development transition time by 75%',
        'Implemented SEO optimizations and responsive design patterns',
        'Created prototypes with proper animations for enhanced UX'
      ],
      technologies: ['MERN Stack', 'Figma', 'SEO', 'UI/UX Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">git</span> log --experience
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Professional journey and career milestones
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative mb-12 md:mb-16"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-gray-900 shadow-lg z-10 flex items-center justify-center"
                  >
                    <Building size={16} className="text-white" />
                  </motion.div>
                </div>
                
                <div className="ml-12 md:ml-0">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`cursor-target bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:border-green-400 transition-all duration-300 ${
                      index % 2 === 0 ? 'md:ml-auto md:w-5/12' : 'md:mr-auto md:w-5/12'
                    }`}
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 font-mono">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-green-400 mb-2">{exp.company}</h4>
                      <div className="flex flex-col gap-2 text-gray-400 text-sm font-mono">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                          <span className="bg-gray-700 px-2 py-1 rounded text-xs">{exp.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <span className="text-green-400 mr-2 mt-1 font-mono">{'>'}</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700 text-blue-300 px-2 py-1 rounded text-xs font-mono border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="cursor-target mt-16 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">const</span> journey = <span className="text-green-400">{'{'}</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-blue-400">years:</span> <span className="text-yellow-400">3+</span>,<br/>
            <span className="text-blue-400">growth:</span> <span className="text-yellow-400">"continuous but little lazy in between"</span>,<br/>
            <span className="text-blue-400">passion:</span> <span className="text-yellow-400">Money Money Money🤑🤑🤑🤑🤑🤑and travel"</span>
          </p>
          <p className="text-green-400 font-mono mt-4">{'}'}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;