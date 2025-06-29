import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ConsultationBooking = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: ''
  });

  const consultationTypes = [
    {
      id: 'strategic',
      title: 'Strategic Overview',
      duration: '45 minutes',
      description: 'High-level discussion about your digital transformation goals and strategic technology roadmap.',
      icon: 'Target',
      recommended: false
    },
    {
      id: 'technical',
      title: 'Technical Deep-Dive',
      duration: '60 minutes',
      description: 'Detailed technical discussion about architecture, technology stack, and implementation approaches.',
      icon: 'Code2',
      recommended: true
    },
    {
      id: 'scoping',
      title: 'Project Scoping',
      duration: '90 minutes',
      description: 'Comprehensive project analysis with timeline estimation, resource planning, and detailed proposal preparation.',
      icon: 'FileText',
      recommended: false
    }
  ];

  const timelines = [
    { id: 'immediate', label: 'Start Immediately', value: 'immediate' },
    { id: '1-3months', label: '1-3 Months', value: '1-3months' },
    { id: '3-6months', label: '3-6 Months', value: '3-6months' },
    { id: '6months+', label: '6+ Months', value: '6months+' }
  ];

  const budgetRanges = [
    { id: 'under50k', label: 'Under $50K', value: 'under50k' },
    { id: '50k-150k', label: '$50K - $150K', value: '50k-150k' },
    { id: '150k-500k', label: '$150K - $500K', value: '150k-500k' },
    { id: '500k+', label: '$500K+', value: '500k+' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation booking:', {
      type: selectedType,
      timeline: selectedTimeline,
      budget: selectedBudget,
      ...formData
    });
    // Handle form submission
  };

  return (
    <div className="bg-white rounded-2xl shadow-elevated p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-3">Book Your Consultation</h3>
        <p className="text-text-secondary">
          Let's discuss your project and explore how we can help transform your vision into reality.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Consultation Type Selection */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-4">
            Choose Consultation Type
          </label>
          <div className="grid gap-4">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50 hover:bg-surface'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.recommended && (
                  <div className="absolute -top-2 right-4">
                    <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                      Recommended
                    </span>
                  </div>
                )}
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    selectedType === type.id ? 'bg-accent text-white' : 'bg-surface text-text-muted'
                  }`}>
                    <Icon name={type.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-primary">{type.title}</h4>
                      <span className="text-sm text-text-muted">({type.duration})</span>
                    </div>
                    <p className="text-sm text-text-secondary">{type.description}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedType === type.id
                      ? 'border-accent bg-accent' :'border-border'
                  }`}>
                    {selectedType === type.id && (
                      <Icon name="Check" size={12} color="white" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Selection */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-4">
            Project Timeline
          </label>
          <div className="grid grid-cols-2 gap-3">
            {timelines.map((timeline) => (
              <button
                key={timeline.id}
                type="button"
                onClick={() => setSelectedTimeline(timeline.value)}
                className={`p-3 text-sm font-medium rounded-lg border-2 transition-all duration-300 ${
                  selectedTimeline === timeline.value
                    ? 'border-accent bg-accent text-white' :'border-border text-text-secondary hover:border-accent/50 hover:bg-surface'
                }`}
              >
                {timeline.label}
              </button>
            ))}
          </div>
        </div>

        {/* Budget Range */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-4">
            Budget Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            {budgetRanges.map((budget) => (
              <button
                key={budget.id}
                type="button"
                onClick={() => setSelectedBudget(budget.value)}
                className={`p-3 text-sm font-medium rounded-lg border-2 transition-all duration-300 ${
                  selectedBudget === budget.value
                    ? 'border-accent bg-accent text-white' :'border-border text-text-secondary hover:border-accent/50 hover:bg-surface'
                }`}
              >
                {budget.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleInputChange}
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Project Description */}
        <div>
          <textarea
            name="projectDescription"
            placeholder="Tell us about your project, challenges, and goals..."
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          iconName="Calendar"
          iconPosition="left"
          className="shadow-soft hover:shadow-elevated"
        >
          Schedule Consultation
        </Button>
      </form>
    </div>
  );
};

export default ConsultationBooking;