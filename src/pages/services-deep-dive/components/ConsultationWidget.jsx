import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConsultationWidget = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    preferredContact: 'email',
    urgency: 'normal'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { id: 'web', label: 'Web Application', icon: 'Globe' },
    { id: 'mobile', label: 'Mobile App', icon: 'Smartphone' },
    { id: 'enterprise', label: 'Enterprise Solution', icon: 'Building' },
    { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' },
    { id: 'ai', label: 'AI/ML Solution', icon: 'Brain' },
    { id: 'other', label: 'Other', icon: 'HelpCircle' }
  ];

  const budgetRanges = [
    { id: '10k-25k', label: '$10K - $25K' },
    { id: '25k-50k', label: '$25K - $50K' },
    { id: '50k-100k', label: '$50K - $100K' },
    { id: '100k-250k', label: '$100K - $250K' },
    { id: '250k+', label: '$250K+' },
    { id: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { id: 'asap', label: 'ASAP' },
    { id: '1-3', label: '1-3 months' },
    { id: '3-6', label: '3-6 months' },
    { id: '6-12', label: '6-12 months' },
    { id: '12+', label: '12+ months' },
    { id: 'flexible', label: 'Flexible' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.company;
      case 2:
        return formData.projectType && formData.budget && formData.timeline;
      case 3:
        return formData.description.length > 10;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-soft p-8 lg:p-12 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            
            <h2 className="text-3xl font-bold text-primary mb-4">
              Thank You for Your Interest!
            </h2>
            
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              We've received your consultation request and will get back to you within 24 hours with a customized proposal.
            </p>

            <div className="bg-surface rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-primary mb-4">What happens next?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Initial Review</h4>
                    <p className="text-sm text-text-secondary">We'll review your requirements and prepare initial recommendations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Strategy Call</h4>
                    <p className="text-sm text-text-secondary">We'll schedule a call to discuss your project in detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Proposal</h4>
                    <p className="text-sm text-text-secondary">You'll receive a detailed proposal with timeline and pricing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    name: '',
                    email: '',
                    company: '',
                    role: '',
                    projectType: '',
                    budget: '',
                    timeline: '',
                    description: '',
                    preferredContact: 'email',
                    urgency: 'normal'
                  });
                }}
              >
                Submit Another Request
              </Button>
              
              <Button
                variant="ghost"
                iconName="ExternalLink"
                iconPosition="right"
                className="border border-border"
              >
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Calendar" size={16} />
            <span>Free Consultation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Start Your Project Today
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get a personalized consultation and detailed proposal for your project. No commitment required.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-surface px-8 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary">Step {currentStep} of 3</span>
              <span className="text-sm text-text-secondary">{Math.round((currentStep / 3) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 lg:p-12">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Let's Get to Know You</h3>
                  <p className="text-text-secondary">Tell us about yourself and your company</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Company Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Your Role
                    </label>
                    <Input
                      type="text"
                      placeholder="CEO, CTO, Project Manager..."
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Project Details</h3>
                  <p className="text-text-secondary">Help us understand your project requirements</p>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-4">
                    What type of project are you planning? *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleInputChange('projectType', type.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                          formData.projectType === type.id
                            ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon name={type.icon} size={20} className={
                            formData.projectType === type.id ? 'text-accent' : 'text-text-muted'
                          } />
                          <span className="font-medium">{type.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-4">
                    What's your budget range? *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget.id}
                        type="button"
                        onClick={() => handleInputChange('budget', budget.id)}
                        className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                          formData.budget === budget.id
                            ? 'border-accent bg-accent/5 text-accent' :'border-border hover:border-accent/50'
                        }`}
                      >
                        {budget.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-primary mb-4">
                    When do you need this completed? *
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {timelineOptions.map((timeline) => (
                      <button
                        key={timeline.id}
                        type="button"
                        onClick={() => handleInputChange('timeline', timeline.id)}
                        className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                          formData.timeline === timeline.id
                            ? 'border-accent bg-accent/5 text-accent' :'border-border hover:border-accent/50'
                        }`}
                      >
                        {timeline.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Project Description */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Tell Us More</h3>
                  <p className="text-text-secondary">Describe your project and any specific requirements</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Project Description *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 resize-none"
                    rows="6"
                    placeholder="Please describe your project, goals, target audience, and any specific features or requirements you have in mind..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                  <p className="text-xs text-text-muted mt-1">
                    Minimum 10 characters ({formData.description.length}/10)
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'email', label: 'Email' },
                        { id: 'phone', label: 'Phone Call' },
                        { id: 'video', label: 'Video Call' }
                      ].map((method) => (
                        <label key={method.id} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method.id}
                            checked={formData.preferredContact === method.id}
                            onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                            className="text-accent focus:ring-accent"
                          />
                          <span className="text-text-secondary">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Urgency Level
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'low', label: 'Low - Just exploring options' },
                        { id: 'normal', label: 'Normal - Planning for near future' },
                        { id: 'high', label: 'High - Need to start soon' }
                      ].map((urgency) => (
                        <label key={urgency.id} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="urgency"
                            value={urgency.id}
                            checked={formData.urgency === urgency.id}
                            onChange={(e) => handleInputChange('urgency', e.target.value)}
                            className="text-accent focus:ring-accent"
                          />
                          <span className="text-text-secondary text-sm">{urgency.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
              <Button
                type="button"
                variant="ghost"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border border-border"
              >
                Previous
              </Button>

              <div className="text-center">
                <p className="text-sm text-text-muted">
                  Free consultation • No commitment required
                </p>
              </div>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  variant="primary"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-accent hover:bg-accent-600"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="success"
                  iconName="Send"
                  iconPosition="right"
                  disabled={!isStepValid()}
                >
                  Submit Request
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-text-muted">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-accent" />
              <span className="text-sm">24hr Response Time</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-warning" />
              <span className="text-sm">200+ Successful Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationWidget;