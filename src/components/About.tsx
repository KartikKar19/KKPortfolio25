import React from 'react';
import { Code, Coffee, Heart, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">//</span> About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Working"
              className="rounded-lg shadow-lg border border-gray-700"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">
              <span className="text-green-400">const</span> kartik = {'{'}
            </h3>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6 font-mono">
              <p className="text-gray-300 mb-4">
                <span className="text-blue-400">university:</span> <span className="text-yellow-400">"VIT Vellore"</span>,
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-blue-400">major:</span> <span className="text-yellow-400">"Computer Science"</span>,
              </p>
              <p className="text-gray-300 mb-4">
                <span className="text-blue-400">gpa:</span> <span className="text-yellow-400">"8.3/10"</span>,
              </p>
              <p className="text-gray-300">
                <span className="text-blue-400">graduation:</span> <span className="text-yellow-400">"Sept 2026"</span>
              </p>
            </div>
            <p className="text-gray-300 font-mono">{'}'}</p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed mt-6">
              Currently pursuing Computer Science at VIT Vellore with hands-on experience in full-stack development, 
              system design, and team leadership. Active in IEEE TEMS as Projects Head, leading multiple development initiatives.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Code, title: 'Clean Code', desc: 'Maintainable & scalable', color: 'blue' },
                { icon: Terminal, title: 'Problem Solver', desc: 'Creative solutions', color: 'green' },
                { icon: Coffee, title: 'Always Learning', desc: 'Staying current', color: 'yellow' },
                { icon: Heart, title: 'User Focused', desc: 'Great experiences', color: 'red' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-gray-800 border border-gray-700 rounded-lg p-3 sm:p-4 hover:border-green-400 transition-all duration-200"
                >
                  <div className={`bg-${item.color}-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 border border-${item.color}-600`}>
                    <item.icon className={`text-${item.color}-400`} size={24} />
                  </div>
                  <h4 className="font-semibold text-white mb-1 text-xs sm:text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-400 hidden sm:block">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;