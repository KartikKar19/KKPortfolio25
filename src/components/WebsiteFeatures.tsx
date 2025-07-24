import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Palette, 
  Zap, 
  Github, 
  Code2, 
  Heart, 
  Sparkles, 
  Monitor,
  Rocket,
  Shield
} from 'lucide-react';
import { initVoiceAgent } from '../utils/voiceAgent';

const WebsiteFeatures = () => {
  const features = [
    {
      icon: Github,
      title: 'GitHub-Inspired Design',
      description: 'Authentic dark theme with GitHub\'s signature color palette and typography just because at the start Github was my worst enemy and now it feels like push pull push pull with Github🤭🤭',
      color: 'text-gray-400',
      bgColor: 'bg-gray-900'
    },
    {
      icon: Sparkles,
      title: 'Playful Animations',
      description: 'Delightful animal animations that pop from screen corners for personality but to tell you the truth I love dogs 🥹🥹 I have 2 named Jojo and Burfi',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Fully responsive design that looks perfect on phones, tablets, and desktops just so that you can always check on me🥰🥰',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900'
    },
    {
      icon: Zap,
      title: 'Smooth Performance',
      description: 'Optimized animations and lazy loading for lightning-fast user experience. I am a small time developer but somehow if everyone gets to know me and track my progress then I would be forced to move my static files on my website to a CDN like Amazon CloudFront😉😉',
      color: 'text-green-400',
      bgColor: 'bg-green-900'
    },
    {
      icon: Code2,
      title: 'Developer-Focused',
      description: 'Terminal-style elements and code syntax highlighting throughout because I want to spice things up🤭🤭',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900'
    },
    {
      icon: Rocket,
      title: 'Modern Tech Stack',
      description: 'Built with React, TypeScript, Tailwind CSS, and Framer Motion since they are in my tech stack so why not just use it😌😌',
      color: 'text-orange-400',
      bgColor: 'bg-orange-900'
    },
    {
      icon: Monitor,
      title: 'Interactive Sections',
      description: 'Dynamic GitHub repos, LeetCode stats, and real-time project showcases that will tell you how much of all is left for me to do always😭😭',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-900'
    },
    {
      icon: Shield,
      title: 'Professional Quality',
      description: 'Production-ready code with best practices and clean architecture or else who will give me a job😭😭',
      color: 'text-red-400',
      bgColor: 'bg-red-900'
    },
    {
      icon: Heart,
      title: 'ElevenLabs Voice Agent',
      description: 'Integrated ElevenLabs voice agent lets you interact with the site using your voice—because talking to a website is way cooler than just clicking around! 🎤🗣️',
      color: 'text-pink-400',
      bgColor: 'bg-pink-900'
    },
    {
      icon: Palette,
      title: 'EmailJS Integration',
      description: 'Contact forms powered by EmailJS so you can reach out without leaving the site—no backend required, just pure frontend magic! 📧✨',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-900'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">this</span>.website.features
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> What makes this portfolio special and unique
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="cursor-target bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-green-400/10"
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-gray-600`}>
                <feature.icon className={feature.color} size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 font-mono">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
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
            #Crafted with <span className="text-red-400">Intent To Get A Job</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Every pixel, animation, and interaction designed to create<br/>
            <span className="text-gray-500">//</span> a memorable and funny experience that showcases both technical skills and creativity
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;