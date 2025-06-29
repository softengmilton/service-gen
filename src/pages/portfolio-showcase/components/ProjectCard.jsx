import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, isExpanded = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden group ${
        isExpanded ? 'col-span-full' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ?'bg-success text-white' 
              : project.status === 'In Development' ?'bg-warning text-white' :'bg-accent text-white'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Quick Stats Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm"
        >
          <div className="flex items-center space-x-1">
            <Icon name="TrendingUp" size={16} />
            <span>{project.metrics.improvement}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={16} />
            <span>{project.timeline}</span>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary">{project.client} • {project.industry}</p>
          </div>
          <div className="flex items-center space-x-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <div
                key={index}
                className="w-8 h-8 bg-surface rounded-lg flex items-center justify-center"
                title={tech}
              >
                <Icon name="Code2" size={14} className="text-text-muted" />
              </div>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-text-muted">+{project.technologies.length - 3}</span>
            )}
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {project.keyMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-accent">{metric.value}</div>
              <div className="text-xs text-text-muted">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open(project.liveUrl, '_blank')}
            disabled={!project.liveUrl}
          >
            View Live
          </Button>
          <Button
            variant="primary"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
          >
            Case Study
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;