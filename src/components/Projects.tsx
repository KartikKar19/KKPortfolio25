import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  // Featured projects with custom data
  const featuredProjects = [
    {
      title: 'PCD - Food Delivery App',
      description: 'Dynamic Online Food Delivery Web App incorporating GSAP, Tailwind and Material UI with 100% device compatibility and 35% reduction in negative reviews.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['MERN Stack', 'GSAP', 'Tailwind', 'Material UI'],
      stars: 89,
      forks: 23,
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    },
    {
      title: 'GYMRATS - React Gym Website',
      description: 'Built 20+ reusable React components with custom animations, Map API integration for gym location, and responsive design increasing user retention by 25%.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Map API', 'CSS3', 'Responsive Design'],
      stars: 67,
      forks: 18,
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true
    }
  ];

  useEffect(() => {
  const fetchRepos = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/KartikKar19/repos?per_page=9&sort=updated', {
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json'
        }
      });

      const filteredRepos = response.data
        .filter((repo: any) => !repo.fork && repo.description) // remove forks and empty ones
        .map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          topics: repo.topics || [],
          updated_at: repo.updated_at
        }));

      setRepos(filteredRepos);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchRepos();
}, []);

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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">git</span> log --projects
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Featured repositories and projects
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-mono">
            <span className="text-green-400">⭐</span> Featured Projects
          </h3>
          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden hover:border-green-400 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                <div className="md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-white mb-4 font-mono">{project.title}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 font-mono">
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="text-yellow-400" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={16} className="text-blue-400" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 bg-gray-700 px-3 py-2 rounded-lg border border-gray-600 hover:border-green-400"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 border border-green-500"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Repositories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-mono">
            <span className="text-green-400">📁</span> Recent Repositories
          </h3>
          
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-6 animate-pulse">
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-3 bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded mb-4"></div>
                  <div className="flex space-x-4">
                    <div className="h-3 bg-gray-700 rounded w-16"></div>
                    <div className="h-3 bg-gray-700 rounded w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-white font-mono truncate">{repo.name}</h4>
                    <div className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300 font-mono">
                      {repo.language}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{repo.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-mono border border-blue-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-400 font-mono">
                      <div className="flex items-center space-x-1">
                        <Star size={12} className="text-yellow-400" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={12} className="text-blue-400" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </motion.a>
                      {repo.homepage && (
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 border-2 border-gray-600 hover:border-green-400 text-gray-300 hover:text-green-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-800/50 font-mono"
          >
            <Github size={20} />
            <span>View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;