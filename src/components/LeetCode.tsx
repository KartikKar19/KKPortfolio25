import React, { useState, useEffect } from 'react';
import { Code, Trophy, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const LeetCode = () => {
  const [stats, setStats] = useState({
    totalSolved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    ranking: 0,
    streak: 0,
    loading: true
  });

  useEffect(() => {
    // Mock LeetCode stats for demo
    setTimeout(() => {
      setStats({
        totalSolved: 342,
        easy: 156,
        medium: 142,
        hard: 44,
        ranking: 15420,
        streak: 23,
        loading: false
      });
    }, 1000);
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

  const StatCard = ({ icon: Icon, title, value, subtitle, color }: any) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <Icon className={`text-${color}-400`} size={32} />
        <span className="text-2xl font-bold text-white font-mono">{value}</span>
      </div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </motion.div>
  );

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">leetcode</span>.solve()
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-green-400 mx-auto rounded-full"></motion.div>
          <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto font-mono">
            <span className="text-gray-500">//</span> Algorithmic problem solving journey
          </motion.p>
        </motion.div>

        {stats.loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-6 animate-pulse">
                <div className="h-8 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <StatCard
              icon={Code}
              title="Total Solved"
              value={stats.totalSolved}
              subtitle="Problems completed"
              color="green"
            />
            <StatCard
              icon={Trophy}
              title="Global Ranking"
              value={`#${stats.ranking.toLocaleString()}`}
              subtitle="Among all users"
              color="yellow"
            />
            <StatCard
              icon={Target}
              title="Current Streak"
              value={`${stats.streak} days`}
              subtitle="Consecutive solving"
              color="blue"
            />
            <StatCard
              icon={TrendingUp}
              title="Acceptance Rate"
              value="87.3%"
              subtitle="Solutions accepted"
              color="purple"
            />
          </motion.div>
        )}

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {[
            { difficulty: 'Easy', count: stats.easy, total: 200, color: 'green' },
            { difficulty: 'Medium', count: stats.medium, total: 180, color: 'yellow' },
            { difficulty: 'Hard', count: stats.hard, total: 80, color: 'red' }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white font-mono">{item.difficulty}</h3>
                <span className="text-gray-400 font-mono text-sm">
                  {item.count}/{item.total}
                </span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 mb-4 border border-gray-600">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(item.count / item.total) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`bg-gradient-to-r ${
                    item.color === 'green' ? 'from-green-400 to-green-600' :
                    item.color === 'yellow' ? 'from-yellow-400 to-orange-500' :
                    'from-red-400 to-red-600'
                  } h-3 rounded-full`}
                />
              </div>
              
              <p className="text-gray-400 text-sm font-mono">
                {Math.round((item.count / item.total) * 100)}% completed
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-mono">
            <span className="text-green-400">function</span> keepSolving() <span className="text-green-400">{'{'}</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-mono mb-4">
            <span className="text-blue-400">const</span> goal = <span className="text-yellow-400">"master algorithms & data structures"</span>;<br/>
            <span className="text-blue-400">return</span> consistency + practice + growth;
          </p>
          <p className="text-green-400 font-mono">{'}'}</p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 mt-6 border border-orange-500"
          >
            <Code size={20} />
            <span>View LeetCode Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCode;