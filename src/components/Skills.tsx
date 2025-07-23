import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSkills from './AnimatedSkills';

const Skills = () => {
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
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">class</span> Skills <span className="text-green-400">{'{'}</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <AnimatedSkills />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">while</span> (alive) <span className="text-green-400">{'{'}</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-blue-400">learn</span>(); <span className="text-gray-500">// Or AI will take my job😭😭</span><br/>
            <span className="text-blue-400">code</span>(); <span className="text-gray-500">// Building your smiles☺️☺️</span><br/>
            <span className="text-blue-400">share</span>(); <span className="text-gray-500">// Letsgooo Copy Paste😋😋</span>
          </p>
          <p className="text-green-400 font-mono mt-4">{'}'}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;