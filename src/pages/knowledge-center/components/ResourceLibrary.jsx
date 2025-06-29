import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceLibrary = ({ resources }) => {
  const getResourceIcon = (type) => {
    switch (type) {
      case 'Template': return 'FileText';
      case 'Checklist': return 'CheckSquare';
      case 'Guide': return 'BookOpen';
      case 'Tool': return 'Wrench';
      case 'Worksheet': return 'FileSpreadsheet';
      default: return 'Download';
    }
  };

  const getResourceColor = (type) => {
    switch (type) {
      case 'Template': return 'blue';
      case 'Checklist': return 'green';
      case 'Guide': return 'purple';
      case 'Tool': return 'orange';
      case 'Worksheet': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Resource Library
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Download practical templates, checklists, and tools to accelerate your development projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => {
          const color = getResourceColor(resource.type);
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-soft border border-border p-6 hover:shadow-elevated hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                  color === 'blue' ? 'bg-accent/10 text-accent' :
                  color === 'green' ? 'bg-success/10 text-success-600' :
                  color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  color === 'orange' ? 'bg-warning/10 text-warning-600' :
                  color === 'red'? 'bg-error/10 text-error-600' : 'bg-primary/10 text-primary'
                }`}>
                  <Icon name={getResourceIcon(resource.type)} size={24} />
                </div>
                
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-lg ${
                    color === 'blue' ? 'bg-accent/20 text-accent-600' :
                    color === 'green' ? 'bg-success/20 text-success-600' :
                    color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    color === 'orange' ? 'bg-warning/20 text-warning-600' :
                    color === 'red'? 'bg-error/20 text-error-600' : 'bg-primary/20 text-primary-600'
                  }`}>
                    {resource.type}
                  </span>
                  {resource.isPremium && (
                    <Icon name="Crown" size={14} className="text-warning-500" />
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {resource.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-4 text-xs text-text-muted">
                <div className="flex items-center gap-1">
                  <Icon name="Download" size={12} />
                  <span>{resource.downloads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="FileText" size={12} />
                  <span>{resource.format}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={12} />
                  <span>{resource.lastUpdated}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {resource.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-surface text-text-muted text-xs rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
                {resource.tags.length > 2 && (
                  <span className="px-2 py-1 bg-surface text-text-muted text-xs rounded-lg">
                    +{resource.tags.length - 2}
                  </span>
                )}
              </div>

              {/* Action */}
              <Button
                variant={resource.isPremium ? "primary" : "outline"}
                size="sm"
                fullWidth
                iconName={resource.isPremium ? "Crown" : "Download"}
                iconPosition="left"
                className="group-hover:shadow-soft"
              >
                {resource.isPremium ? "Premium Download" : "Free Download"}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceLibrary;