import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'Azure Fundamentals',
      issuer: 'Microsoft Certified',
      date: '2023',
      credentialId: '5D8E1E94FEAFC914',
      description: 'Validates foundational knowledge of cloud services and Microsoft Azure platform',
      logo: '🔷',
      verified: true,
      skills: ['Azure', 'Cloud Computing', 'Virtual Machines', 'Storage'],
      link:'https://learn.microsoft.com/en-us/users/kartikkar-4100/credentials/5d8e1e94feafc914?ref=https%3A%2F%2Fwww.linkedin.com%2F'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: '8884daa740184ef18d90c758ff1df195',
      description: 'Validates foundational understanding of AWS Cloud and core services',
      logo: '☁️',
      verified: true,
      skills: ['AWS', 'Cloud Architecture', 'Security', 'Pricing'],
      link:'https://www.credly.com/badges/497ad4ea-4d1b-4367-a9e8-c9897eddd9be/linked_in_profile'
    },
    {
      title: 'Forage Accenture UK Developer Simulation',
      issuer: 'Forage & Accenture',
      date: '2024',
      credentialId: 'HB59xRetFK9i3E5vv',
      description: 'Completed job simulation covering software development and technology consulting',
      logo: '💼',
      verified: true,
      skills: ['SDLC','STLC', 'Technology Consulting', 'Problem Solving', 'Business Analysis','Agile Methodologies'],
      link:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20UK/3xnZEj9kfpoQKW885_Accenture%20UK_qdaAGMFrGxiRZZgtH_1721162234142_completion_certificate.pdf'

    },
    {
      title: 'AWS Solutions Architect Job Simulation',
      issuer: 'Forage',
      date: '2025',
      credentialId: 'x2DFuhZ2eHguEZ6J3',
      description: 'Completed job simulation covering AWS Solutions Architecture concepts and best practices',
      logo: '☁️',
      verified: true,
      skills: ['AWS', 'Cloud Architecture', 'Solution Design', 'Security'],
      link:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_qdaAGMFrGxiRZZgtH_1738602843253_completion_certificate.pdf'
    },
    {
      title: 'Front-End Software Engineering Job Simulation',
      issuer: 'Forage',
      date: '2024',
      credentialId: 'FE-DEV-2024-002',
      description: 'Completed job simulation covering front-end development technologies and frameworks',
      logo: '💻',
      verified: true,
      skills: ['JavaScript', 'React', 'CSS', 'HTML'],
      link:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_qdaAGMFrGxiRZZgtH_1721193898661_completion_certificate.pdf'
    },
    {
      title: 'HackerRank CSS Basic',
      issuer: 'HackerRank',
      date: '2024',
      credentialId: '34C491F16751',
      description: 'Completed HackerRank CSS Basic certification',
      logo: '🎓',
      verified: true,
      skills: ['CSS', 'Responsive Design', 'Flexbox', 'Grid'],
      link: 'https://www.hackerrank.com/certificates/18b5ee465979'
    },
    {
      title: 'HackerRank SQL Basic',
      issuer: 'HackerRank',
      date: '2022',
      credentialId: '18B5EE465979',
      description: 'Completed HackerRank SQL Basic certification',
      logo: '🎓',
      verified: true,
      skills: ['SQL', 'Database Management', 'Data Analysis'],
      link: 'https://www.hackerrank.com/certificates/18b5ee465979'
    }
  ];

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
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">import</span> certifications
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Professional certifications validating expertise
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-green-400/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{cert.logo}</div>
                  {cert.verified && (
                    <div className="bg-green-900 p-1 rounded-full border border-green-600">
                      <CheckCircle className="text-green-400" size={16} />
                    </div>
                  )}
                </div>
                <div className="bg-blue-900 p-2 rounded-lg border border-blue-600">
                  <Award className="text-blue-400" size={20} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 font-mono">{cert.title}</h3>
              <p className="text-green-400 font-semibold mb-3 font-mono">{cert.issuer}</p>
              
              <div className="flex items-center space-x-4 text-gray-400 mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span className="text-sm font-mono">{cert.date}</span>
                </div>
                {cert.verified && (
                  <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs font-mono border border-green-600">
                    Verified
                  </span>
                )}
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-blue-300 px-2 py-1 rounded text-xs font-mono border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-mono">Credential ID</p>
                    <p className="text-xs font-mono text-gray-300 bg-gray-700 px-2 py-1 rounded mt-1">
                      {cert.credentialId}
                    </p>
                  </div>
                  <a 
                   href={cert.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center space-x-1 text-green-400 hover:text-green-300 font-semibold transition-colors duration-200 bg-gray-700 px-3 py-2 rounded-lg border border-gray-600 hover:border-green-400 font-mono text-sm"
                  >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-green-400 hover:text-green-300 font-semibold transition-colors duration-200 bg-gray-700 px-3 py-2 rounded-lg border border-gray-600 hover:border-green-400 font-mono text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Verify</span>
                  </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-gray-800 to-black border border-gray-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">while</span> (learning) <span className="text-green-400">{'{'}</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono mb-4">
            <span className="text-blue-400">const</span> commitment = <span className="text-yellow-400">"continuousGrowth"</span>;<br/>
            <span className="text-blue-400">var</span> laziness = <span className="text-yellow-400">"sometimesSleeping"</span>;<br/>
            <span className="text-blue-400">const</span> goal = <span className="text-yellow-400">"technicalExcellenceAndMoney"</span>;<br/>
            <span className="text-blue-400">return</span> knowledge + validation + credibility;
          </p>
          <p className="text-green-400 font-mono">{'}'}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;