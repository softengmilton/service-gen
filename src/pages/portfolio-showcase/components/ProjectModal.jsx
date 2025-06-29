import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code2' },
    { id: 'results', label: 'Results & Impact', icon: 'TrendingUp' },
    { id: 'testimonials', label: 'Testimonials', icon: 'MessageSquare' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Project Challenge</h3>
              <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Our Solution</h3>
              <p className="text-text-secondary leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Project Timeline</h3>
              <div className="space-y-3">
                {project.timeline_phases.map((phase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-accent font-medium text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-medium text-primary">{phase.phase}</div>
                      <div className="text-sm text-text-secondary">{phase.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Technology Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-surface rounded-lg">
                    <Icon name="Code2" size={16} className="text-accent" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Architecture Overview</h3>
              <div className="bg-surface rounded-lg p-4">
                <Image
                  src={project.architectureDiagram}
                  alt="Architecture Diagram"
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Key Technical Decisions</h3>
              <div className="space-y-3">
                {project.technicalDecisions.map((decision, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <div className="font-medium text-primary">{decision.decision}</div>
                    <div className="text-sm text-text-secondary mt-1">{decision.rationale}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Key Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.detailedMetrics.map((metric, index) => (
                  <div key={index} className="bg-surface rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-secondary">{metric.label}</span>
                      <Icon name="TrendingUp" size={16} className="text-success" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-success">{metric.improvement}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Business Impact</h3>
              <div className="space-y-3">
                {project.businessImpact.map((impact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
                    <span className="text-text-secondary">{impact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="space-y-6">
            {project.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-surface rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <span className="text-sm text-text-secondary">•</span>
                      <span className="text-sm text-text-secondary">{testimonial.role}</span>
                    </div>
                    <blockquote className="text-text-secondary italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={`${i < testimonial.rating ? 'text-warning fill-current' : 'text-border'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl shadow-premium max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                <p className="text-text-secondary">{project.client} • {project.industry}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                iconName="X"
                onClick={onClose}
                className="text-text-muted hover:text-primary"
              />
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex space-x-0 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-accent text-accent' :'border-transparent text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name={tab.icon} size={16} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderTabContent()}
              </motion.div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t border-border bg-surface">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-text-secondary">Project completed in {project.timeline}</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={16} className="text-text-muted" />
                  <span className="text-sm text-text-secondary">{project.completedDate}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    View Live
                  </Button>
                )}
                <Button
                  variant="primary"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="right"
                  onClick={() => window.location.href = '/contact-consultation'}
                >
                  Discuss Similar Project
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;