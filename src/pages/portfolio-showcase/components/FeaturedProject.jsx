import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  const [activeMetric, setActiveMetric] = useState(0);

  if (!project) return null;

  return (
    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content Side */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
              Featured Case Study
            </div>
            <div className="px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
              {project.status}
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              {project.title}
            </h2>
            <p className="text-lg text-text-secondary mb-4">
              {project.client} • {project.industry}
            </p>
            <p className="text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Interactive Metrics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Key Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveMetric(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeMetric === index
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-white hover:bg-accent/5 border border-border'
                  }`}
                >
                  <div className="text-2xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm opacity-90">{metric.label}</div>
                </motion.div>
              ))}
            </div>
            <div className="bg-white rounded-lg p-4 border border-border">
              <p className="text-sm text-text-secondary">
                <strong>{project.keyMetrics[activeMetric].label}:</strong> {project.keyMetrics[activeMetric].description}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-border text-text-secondary text-sm rounded-md hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              iconName="FileText"
              iconPosition="right"
              onClick={() => onViewDetails(project)}
              className="shadow-soft hover:shadow-elevated"
            >
              View Full Case Study
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                View Live Project
              </Button>
            )}
          </div>
        </div>

        {/* Visual Side */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl shadow-elevated">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{project.timeline}</div>
                    <div className="text-xs text-text-muted">Timeline</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-success">{project.teamSize}</div>
                    <div className="text-xs text-text-muted">Team Size</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-accent">{project.complexity}</div>
                    <div className="text-xs text-text-muted">Complexity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
        </div>
      </div>

      {/* Client Quote */}
      {project.testimonials && project.testimonials.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Quote" size={32} className="text-accent mx-auto mb-4" />
            <blockquote className="text-lg text-text-secondary italic leading-relaxed mb-4">
              "{project.testimonials[0].quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src={project.testimonials[0].avatar}
                alt={project.testimonials[0].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-primary">{project.testimonials[0].name}</div>
                <div className="text-sm text-text-secondary">{project.testimonials[0].role}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProject;