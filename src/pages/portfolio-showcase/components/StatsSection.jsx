import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsSection = ({ projects }) => {
  const stats = [
    {
      icon: 'Briefcase',
      value: projects.length,
      label: 'Projects Completed',
      description: 'Successful deliveries across industries'
    },
    {
      icon: 'Users',
      value: '50+',
      label: 'Happy Clients',
      description: 'Long-term partnerships built'
    },
    {
      icon: 'TrendingUp',
      value: '300%',
      label: 'Average ROI',
      description: 'Performance improvement delivered'
    },
    {
      icon: 'Award',
      value: '15+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    },
    {
      icon: 'Code2',
      value: '1M+',
      label: 'Lines of Code',
      description: 'Clean, maintainable solutions'
    },
    {
      icon: 'Clock',
      value: '98%',
      label: 'On-Time Delivery',
      description: 'Reliable project execution'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary to-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Portfolio Impact by Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Every project tells a story of transformation, innovation, and measurable business impact
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Icon 
                  name={stat.icon} 
                  size={32} 
                  className="text-white group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="text-4xl font-bold mb-2 text-white">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-2 text-white/90">
                {stat.label}
              </div>
              <div className="text-sm text-white/70 leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-white/80 mb-6">
              Let's discuss how we can transform your business with custom software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact-consultation'}
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Start Your Project</span>
              </button>
              <button
                onClick={() => window.location.href = '/services-deep-dive'}
                className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Icon name="ArrowRight" size={20} />
                <span>Explore Services</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;