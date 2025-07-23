import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import successTick from '../assets/success-tick.json'; // Use a Lottie file
import Lottie from 'lottie-react';

const Contact = () => {
  const [formSuccess, setFormSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const serviceID = 'service_2o8w52t';
  const templateID = 'template_cobj90j';
  const ackTemplateID = 'template_ud6eju1';
  const publicKey = '8sgJsGMg2VBOMElkI';

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    user_email: formData.email, // for ack template
    user_name: formData.name    // for ack template
  };

  try {
    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    await emailjs.send(serviceID, ackTemplateID, templateParams, publicKey);
    setFormSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSuccess(false), 5000);
  } catch (error) {
    console.error('Email sending failed:', error);
  }

  setIsSubmitting(false);
};




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
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">connect</span>() <span className="text-green-400">{'{'}</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Let's collaborate and build something amazing together
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-8 hover:border-green-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-green-400">const</span> contactInfo = <span className="text-green-400">{'{'}</span>
              </h3>
              
              <div className="space-y-6 font-mono">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="bg-blue-900 p-3 rounded-lg mr-4 border border-blue-600 group-hover:border-blue-400 transition-colors">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">email:</p>
                    <p className="text-white font-semibold">"kar.kartik19@gmail.com or kartikkar192004@gmail.com"</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="bg-green-900 p-3 rounded-lg mr-4 border border-green-600 group-hover:border-green-400 transition-colors">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">phone:</p>
                    <p className="text-white font-semibold">"+91 9899605927"</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center group"
                >
                  <div className="bg-red-900 p-3 rounded-lg mr-4 border border-red-600 group-hover:border-red-400 transition-colors">
                    <MapPin className="text-red-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">location:</p>
                    <p className="text-white font-semibold">"New Delhi, India"</p>
                  </div>
                </motion.div>
              </div>
              
              <p className="text-green-400 font-mono mt-6">{'}'}</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-green-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-green-400">const</span> socialLinks = <span className="text-green-400">[</span>
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Github, href: 'https://github.com/KartikKar19', color: 'gray', name: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/kartik-kar/', color: 'blue', name: 'LinkedIn' },
                  { icon: Twitter, href: 'https://x.com/Kartikkar19', color: 'sky', name: 'Twitter' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-${social.color}-900 text-${social.color}-400 p-4 rounded-lg hover:bg-${social.color}-800 transition-all duration-200 border border-${social.color}-600 hover:border-${social.color}-400 text-center group`}
                  >
                    <social.icon size={24} className="mx-auto mb-2" />
                    <p className="text-xs font-mono">{social.name}</p>
                  </motion.a>
                ))}
              </div>
              <p className="text-green-400 font-mono mt-6">]</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-green-400 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-mono">
              <span className="text-green-400">function</span> sendMessage() <span className="text-green-400">{'{'}</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    name<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-white font-mono placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    email<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-white font-mono placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  subject<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 text-white font-mono placeholder-gray-500"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                  message<span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 resize-none text-white font-mono placeholder-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>
              {formSuccess ? (
  <div className="flex justify-center items-center mt-8">
    <Lottie animationData={successTick} loop={false} style={{ height: 120, width: 120 }} />
    <p className="text-green-700 font-semibold mt-4 text-center">Message Sent Successfully!</p>
  </div>
) : (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 flex items-center justify-center space-x-2 border border-green-500 font-mono disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? (
      <>
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        <span>Sending...</span>
      </>
    ) : (
      <>
        <Send size={20} />
        <span>Send Message</span>
      </>
    )}
  </motion.button>
)}
            </form>
            <p className="text-green-400 font-mono mt-6">{'}'}</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 text-center"
        >
          <MessageSquare className="text-green-400 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-white mb-4 font-mono">
            Ready to collaborate?
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Whether you have a project in mind or just want to chat about tech,<br/>
            <span className="text-gray-500">//</span> I'm always excited to connect with fellow developers and innovators.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;