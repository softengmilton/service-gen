import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ExperimentCard = ({ experiment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-success bg-success/10 border-success/20';
      case 'Beta': return 'text-warning bg-warning/10 border-warning/20';
      case 'Research': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-text-muted bg-surface border-border';
    }
  };

  return (
    <div className="bg-background border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
            <Icon name={experiment.icon} size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
              {experiment.title}
            </h3>
            <p className="text-sm text-text-secondary">{experiment.category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(experiment.status)}`}>
          {experiment.status}
        </span>
      </div>

      <p className="text-text-secondary mb-4 leading-relaxed">
        {experiment.description}
      </p>

      {experiment.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image 
            src={experiment.image} 
            alt={experiment.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {experiment.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-text-muted mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>{experiment.startDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} />
            <span>{experiment.teamSize} developers</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="TrendingUp" size={14} />
          <span>{experiment.progress}% complete</span>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-border pt-4 mt-4 animate-slide-down">
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-text-primary mb-2">Technical Details</h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {experiment.technicalDetails}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-text-primary mb-2">Key Achievements</h4>
              <ul className="space-y-1">
                {experiment.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                    <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-4">
        <Button
          variant="ghost"
          size="sm"
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </Button>
        <div className="flex space-x-2">
          {experiment.demoUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open(experiment.demoUrl, '_blank')}
            >
              Demo
            </Button>
          )}
          {experiment.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="right"
              onClick={() => window.open(experiment.githubUrl, '_blank')}
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperimentCard;