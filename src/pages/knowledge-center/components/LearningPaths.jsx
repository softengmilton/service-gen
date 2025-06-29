import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPaths = ({ paths }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Structured Learning Paths
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Follow curated learning journeys designed for different roles and experience levels
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {paths.map((path, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-soft border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
          >
            {/* Header */}
            <div className={`p-6 ${
              path.level === 'Beginner' ? 'bg-success/5 border-b border-success/20' :
              path.level === 'Intermediate'? 'bg-warning/5 border-b border-warning/20' : 'bg-error/5 border-b border-error/20'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  path.level === 'Beginner' ? 'bg-success/10 text-success-600' :
                  path.level === 'Intermediate'? 'bg-warning/10 text-warning-600' : 'bg-error/10 text-error-600'
                }`}>
                  <Icon name={path.icon} size={24} />
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  path.level === 'Beginner' ? 'bg-success/20 text-success-600' :
                  path.level === 'Intermediate'? 'bg-warning/20 text-warning-600' : 'bg-error/20 text-error-600'
                }`}>
                  {path.level}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {path.title}
              </h3>
              
              <p className="text-text-secondary mb-4">
                {path.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="BookOpen" size={14} />
                  <span>{path.modules} modules</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  <span>{path.enrolled} enrolled</span>
                </div>
              </div>
            </div>

            {/* Modules Preview */}
            <div className="p-6">
              <h4 className="font-semibold text-text-primary mb-4">Course Modules</h4>
              <div className="space-y-3 mb-6">
                {path.modulesList.slice(0, 4).map((module, moduleIndex) => (
                  <div key={moduleIndex} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                      moduleIndex === 0 ? 'bg-accent text-white' : 'bg-surface text-text-muted'
                    }`}>
                      {moduleIndex + 1}
                    </div>
                    <span className={`text-sm ${
                      moduleIndex === 0 ? 'text-text-primary font-medium' : 'text-text-secondary'
                    }`}>
                      {module}
                    </span>
                  </div>
                ))}
                {path.modulesList.length > 4 && (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-surface flex items-center justify-center">
                      <Icon name="MoreHorizontal" size={12} className="text-text-muted" />
                    </div>
                    <span className="text-sm text-text-muted">
                      +{path.modulesList.length - 4} more modules
                    </span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">Progress</span>
                  <span className="text-sm font-medium text-text-primary">{path.progress}%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${path.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant={path.progress > 0 ? "primary" : "outline"}
                fullWidth
                iconName={path.progress > 0 ? "Play" : "BookOpen"}
                iconPosition="left"
              >
                {path.progress > 0 ? "Continue Learning" : "Start Learning Path"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;