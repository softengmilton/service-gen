import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ProjectConfigurator = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [projectData, setProjectData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    features: [],
    teamSize: '',
    technology: ''
  });

  const steps = [
    { id: 1, title: "Project Type", icon: "Layers" },
    { id: 2, title: "Requirements", icon: "Settings" },
    { id: 3, title: "Timeline & Budget", icon: "Calendar" },
    { id: 4, title: "Recommendations", icon: "Lightbulb" }
  ];

  const projectTypes = [
    { id: 'web', title: 'Web Application', icon: 'Globe', description: 'Modern web applications and websites' },
    { id: 'mobile', title: 'Mobile App', icon: 'Smartphone', description: 'iOS and Android applications' },
    { id: 'enterprise', title: 'Enterprise Solution', icon: 'Building', description: 'Large-scale business systems' },
    { id: 'ecommerce', title: 'E-commerce Platform', icon: 'ShoppingCart', description: 'Online stores and marketplaces' }
  ];

  const features = [
    'User Authentication', 'Payment Integration', 'Real-time Chat', 'Push Notifications',
    'Analytics Dashboard', 'API Integration', 'Multi-language Support', 'Admin Panel',
    'Social Media Login', 'File Upload', 'Search Functionality', 'Email Notifications'
  ];

  const budgetRanges = [
    { value: '10k-25k', label: '$10K - $25K' },
    { value: '25k-50k', label: '$25K - $50K' },
    { value: '50k-100k', label: '$50K - $100K' },
    { value: '100k+', label: '$100K+' }
  ];

  const timelineOptions = [
    { value: '1-3', label: '1-3 months' },
    { value: '3-6', label: '3-6 months' },
    { value: '6-12', label: '6-12 months' },
    { value: '12+', label: '12+ months' }
  ];

  const handleFeatureToggle = (feature) => {
    setProjectData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const getRecommendations = () => {
    const recommendations = {
      technology: projectData.projectType === 'web' ? 'React/Next.js + Node.js' :
                  projectData.projectType === 'mobile' ? 'React Native' :
                  projectData.projectType === 'enterprise'? 'Java Spring + React' : 'Next.js + Stripe + PostgreSQL',
      timeline: projectData.features.length > 6 ? '6-9 months' : '3-6 months',
      teamSize: projectData.features.length > 8 ? '5-7 developers' : '3-5 developers',
      estimatedCost: projectData.budget || '$25K - $50K'
    };
    return recommendations;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Wrench" size={16} />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Project Configurator
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get instant recommendations for your project including technology stack, timeline, and budget estimates.
          </p>
        </div>

        <div className="bg-surface rounded-2xl p-8 lg:p-12">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  activeStep >= step.id ? 'text-accent' : 'text-text-muted'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    activeStep >= step.id 
                      ? 'bg-accent border-accent text-white' :'border-border text-text-muted'
                  }`}>
                    <Icon name={step.icon} size={20} />
                  </div>
                  <span className="font-medium hidden sm:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    activeStep > step.id ? 'bg-accent' : 'bg-border'
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="min-h-[400px]">
            {/* Step 1: Project Type */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">What type of project are you planning?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectData(prev => ({ ...prev, projectType: type.id }))}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                        projectData.projectType === type.id
                          ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          projectData.projectType === type.id ? 'bg-accent text-white' : 'bg-surface text-text-muted'
                        }`}>
                          <Icon name={type.icon} size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{type.title}</h4>
                          <p className="text-text-secondary text-sm">{type.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Requirements */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">What features do you need?</h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {features.map((feature) => (
                    <button
                      key={feature}
                      onClick={() => handleFeatureToggle(feature)}
                      className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                        projectData.features.includes(feature)
                          ? 'border-accent bg-accent/5 text-accent' :'border-border hover:border-accent/50 text-text-secondary'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <Icon 
                          name={projectData.features.includes(feature) ? "CheckSquare" : "Square"} 
                          size={16} 
                        />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="text-center text-text-muted">
                  Selected: {projectData.features.length} features
                </div>
              </div>
            )}

            {/* Step 3: Timeline & Budget */}
            {activeStep === 3 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Timeline and Budget</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-3">Budget Range</label>
                    <div className="space-y-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => setProjectData(prev => ({ ...prev, budget: range.value }))}
                          className={`w-full p-3 rounded-lg border text-left transition-all duration-300 ${
                            projectData.budget === range.value
                              ? 'border-accent bg-accent/5 text-accent' :'border-border hover:border-accent/50'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-3">Timeline</label>
                    <div className="space-y-2">
                      {timelineOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setProjectData(prev => ({ ...prev, timeline: option.value }))}
                          className={`w-full p-3 rounded-lg border text-left transition-all duration-300 ${
                            projectData.timeline === option.value
                              ? 'border-accent bg-accent/5 text-accent' :'border-border hover:border-accent/50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Recommendations */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Your Project Recommendations</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="Code" className="text-accent" size={24} />
                      <h4 className="font-semibold text-primary">Technology Stack</h4>
                    </div>
                    <p className="text-text-secondary">{getRecommendations().technology}</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="Clock" className="text-success" size={24} />
                      <h4 className="font-semibold text-primary">Estimated Timeline</h4>
                    </div>
                    <p className="text-text-secondary">{getRecommendations().timeline}</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="Users" className="text-warning" size={24} />
                      <h4 className="font-semibold text-primary">Team Size</h4>
                    </div>
                    <p className="text-text-secondary">{getRecommendations().teamSize}</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon name="DollarSign" className="text-error" size={24} />
                      <h4 className="font-semibold text-primary">Investment Range</h4>
                    </div>
                    <p className="text-text-secondary">{getRecommendations().estimatedCost}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-6 mt-8">
                  <h4 className="font-semibold text-primary mb-2">Ready to get started?</h4>
                  <p className="text-text-secondary mb-4">
                    Let's discuss your project in detail and create a customized proposal for you.
                  </p>
                  <Button
                    variant="primary"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="bg-accent hover:bg-accent-600"
                  >
                    Get Detailed Proposal
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <Button
              variant="ghost"
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
            >
              Previous
            </Button>
            
            {activeStep < 4 ? (
              <Button
                variant="primary"
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
                disabled={
                  (activeStep === 1 && !projectData.projectType) ||
                  (activeStep === 2 && projectData.features.length === 0)
                }
              >
                Next Step
              </Button>
            ) : (
              <Button
                variant="success"
                iconName="Check"
                iconPosition="right"
              >
                Complete Configuration
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectConfigurator;