import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const assessmentQuestions = [
    {
      id: 'project_type',
      question: 'What type of project are you planning?',
      type: 'single',
      options: [
        { value: 'web_app', label: 'Web Application', icon: 'Globe' },
        { value: 'mobile_app', label: 'Mobile Application', icon: 'Smartphone' },
        { value: 'enterprise', label: 'Enterprise Software', icon: 'Building' },
        { value: 'ecommerce', label: 'E-commerce Platform', icon: 'ShoppingCart' },
        { value: 'api', label: 'API Development', icon: 'Zap' },
        { value: 'other', label: 'Other/Custom', icon: 'Settings' }
      ]
    },
    {
      id: 'complexity',
      question: 'How would you describe the technical complexity?',
      type: 'single',
      options: [
        { value: 'simple', label: 'Simple - Basic functionality', icon: 'Circle' },
        { value: 'moderate', label: 'Moderate - Standard features', icon: 'Square' },
        { value: 'complex', label: 'Complex - Advanced features', icon: 'Hexagon' },
        { value: 'enterprise', label: 'Enterprise - Mission critical', icon: 'Shield' }
      ]
    },
    {
      id: 'integrations',
      question: 'What integrations do you need?',
      type: 'multiple',
      options: [
        { value: 'payment', label: 'Payment Processing', icon: 'CreditCard' },
        { value: 'crm', label: 'CRM Systems', icon: 'Users' },
        { value: 'analytics', label: 'Analytics Tools', icon: 'BarChart3' },
        { value: 'social', label: 'Social Media', icon: 'Share2' },
        { value: 'email', label: 'Email Marketing', icon: 'Mail' },
        { value: 'none', label: 'No Integrations', icon: 'X' }
      ]
    },
    {
      id: 'users',
      question: 'How many users do you expect?',
      type: 'single',
      options: [
        { value: 'small', label: '< 1,000 users', icon: 'User' },
        { value: 'medium', label: '1K - 10K users', icon: 'Users' },
        { value: 'large', label: '10K - 100K users', icon: 'UserCheck' },
        { value: 'enterprise', label: '100K+ users', icon: 'Building' }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    const question = assessmentQuestions[currentStep];
    
    if (question.type === 'multiple') {
      const currentAnswers = answers[questionId] || [];
      let newAnswers;
      
      if (value === 'none') {
        newAnswers = currentAnswers.includes('none') ? [] : ['none'];
      } else {
        newAnswers = currentAnswers.includes(value)
          ? currentAnswers.filter(a => a !== value)
          : [...currentAnswers.filter(a => a !== 'none'), value];
      }
      
      setAnswers(prev => ({
        ...prev,
        [questionId]: newAnswers
      }));
    } else {
      setAnswers(prev => ({
        ...prev,
        [questionId]: value
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const getAssessmentResults = () => {
    const complexity = answers.complexity || 'simple';
    const projectType = answers.project_type || 'web_app';
    const integrations = answers.integrations || [];
    const users = answers.users || 'small';

    const complexityScores = {
      simple: 1,
      moderate: 2,
      complex: 3,
      enterprise: 4
    };

    const userScores = {
      small: 1,
      medium: 2,
      large: 3,
      enterprise: 4
    };

    const totalScore = complexityScores[complexity] + userScores[users] + integrations.length;

    let timeline, approach, estimatedCost;

    if (totalScore <= 4) {
      timeline = '6-12 weeks';
      approach = 'Agile development with rapid prototyping';
      estimatedCost = '$25K - $75K';
    } else if (totalScore <= 7) {
      timeline = '3-6 months';
      approach = 'Phased development with iterative releases';
      estimatedCost = '$75K - $200K';
    } else if (totalScore <= 10) {
      timeline = '6-12 months';
      approach = 'Enterprise-grade development with extensive testing';
      estimatedCost = '$200K - $500K';
    } else {
      timeline = '12+ months';
      approach = 'Large-scale enterprise solution with custom architecture';
      estimatedCost = '$500K+';
    }

    return { timeline, approach, estimatedCost, complexity: totalScore };
  };

  if (showResults) {
    const results = getAssessmentResults();
    
    return (
      <div className="bg-white rounded-2xl shadow-elevated p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Assessment Complete</h3>
          <p className="text-text-secondary">Here's what we recommend for your project</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-surface rounded-xl">
              <Icon name="Clock" size={24} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-1">Timeline</h4>
              <p className="text-text-secondary">{results.timeline}</p>
            </div>
            <div className="text-center p-6 bg-surface rounded-xl">
              <Icon name="DollarSign" size={24} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-1">Investment</h4>
              <p className="text-text-secondary">{results.estimatedCost}</p>
            </div>
            <div className="text-center p-6 bg-surface rounded-xl">
              <Icon name="Target" size={24} className="text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-1">Complexity</h4>
              <p className="text-text-secondary">
                {results.complexity <= 4 ? 'Low' : results.complexity <= 7 ? 'Medium' : results.complexity <= 10 ? 'High' : 'Enterprise'}
              </p>
            </div>
          </div>

          <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
            <h4 className="font-semibold text-primary mb-2 flex items-center">
              <Icon name="Lightbulb" size={20} className="text-accent mr-2" />
              Recommended Approach
            </h4>
            <p className="text-text-secondary">{results.approach}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="flex-1"
              onClick={() => document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={resetAssessment}
            >
              Retake Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = assessmentQuestions[currentStep];
  const currentAnswer = answers[currentQuestion.id];
  const canProceed = currentQuestion.type === 'multiple' 
    ? (currentAnswer && currentAnswer.length > 0)
    : currentAnswer;

  return (
    <div className="bg-white rounded-2xl shadow-elevated p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-primary">Project Assessment</h3>
          <span className="text-sm text-text-muted">
            {currentStep + 1} of {assessmentQuestions.length}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-surface rounded-full h-2">
          <div 
            className="bg-accent h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / assessmentQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-primary mb-6">
          {currentQuestion.question}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option) => {
            const isSelected = currentQuestion.type === 'multiple'
              ? (currentAnswer && currentAnswer.includes(option.value))
              : currentAnswer === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className={`p-4 text-left border-2 rounded-xl transition-all duration-300 ${
                  isSelected
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50 hover:bg-surface'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    isSelected ? 'bg-accent text-white' : 'bg-surface text-text-muted'
                  }`}>
                    <Icon name={option.icon} size={20} />
                  </div>
                  <span className="font-medium text-primary">{option.label}</span>
                  {isSelected && (
                    <Icon name="Check" size={16} className="text-accent ml-auto" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 0}
          iconName="ChevronLeft"
          iconPosition="left"
        >
          Previous
        </Button>
        
        <Button
          variant="primary"
          onClick={nextStep}
          disabled={!canProceed}
          iconName={currentStep === assessmentQuestions.length - 1 ? "CheckCircle" : "ChevronRight"}
          iconPosition="right"
        >
          {currentStep === assessmentQuestions.length - 1 ? 'Get Results' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default ProjectAssessment;