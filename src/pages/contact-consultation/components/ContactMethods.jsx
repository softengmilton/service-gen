import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const [quickQuestion, setQuickQuestion] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactOptions = [
    {
      id: 'consultation',
      title: 'Schedule Consultation',
      description: 'Book a detailed discussion about your project requirements and goals.',
      icon: 'Calendar',
      action: 'Book Now',
      recommended: true,
      duration: '45-90 minutes',
      response: 'Same day confirmation'
    },
    {
      id: 'quick',
      title: 'Quick Question',
      description: 'Get fast answers to specific questions about our services or approach.',
      icon: 'MessageCircle',
      action: 'Ask Question',
      recommended: false,
      duration: '5 minutes',
      response: '< 2 hours'
    },
    {
      id: 'technical',
      title: 'Technical Discussion',
      description: 'Deep-dive into technical architecture, implementation details, and best practices.',
      icon: 'Code2',
      action: 'Start Discussion',
      recommended: false,
      duration: '60 minutes',
      response: 'Within 24 hours'
    },
    {
      id: 'proposal',
      title: 'Request Proposal',
      description: 'Get a detailed project proposal with timeline, costs, and deliverables.',
      icon: 'FileText',
      action: 'Request Now',
      recommended: false,
      duration: 'Async',
      response: '3-5 business days'
    }
  ];

  const directContacts = [
    {
      name: 'Sarah Chen',
      role: 'Technical Director',
      email: 'sarah.chen@codecraft.agency',
      phone: '+1 (555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      specialties: ['Enterprise Solutions', 'Technical Architecture'],
      availability: 'Mon-Fri 9AM-6PM PST'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Business Development',
      email: 'marcus.rodriguez@codecraft.agency',
      phone: '+1 (555) 123-4568',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      specialties: ['Project Planning', 'Client Relations'],
      availability: 'Mon-Fri 8AM-7PM PST'
    },
    {
      name: 'Emily Watson',
      role: 'Innovation Lead',
      email: 'emily.watson@codecraft.agency',
      phone: '+1 (555) 123-4569',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      specialties: ['Emerging Technologies', 'R&D Projects'],
      availability: 'Tue-Thu 10AM-5PM PST'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Innovation Drive, Suite 400\nSan Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@codecraft.agency',
      timezone: 'PST',
      coordinates: '37.7749,-122.4194',
      isPrimary: true
    },
    {
      city: 'New York',
      address: '456 Tech Avenue, Floor 12\nNew York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@codecraft.agency',
      timezone: 'EST',
      coordinates: '40.7128,-74.0060',
      isPrimary: false
    },
    {
      city: 'Austin',
      address: '789 Startup Boulevard, Building C\nAustin, TX 78701',
      phone: '+1 (555) 456-7890',
      email: 'austin@codecraft.agency',
      timezone: 'CST',
      coordinates: '30.2672,-97.7431',
      isPrimary: false
    }
  ];

  const handleQuickQuestionSubmit = (e) => {
    e.preventDefault();
    console.log('Quick question submitted:', quickQuestion);
    // Handle form submission
    setQuickQuestion({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuickQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="space-y-8">
      {/* Contact Options */}
      <div className="bg-white rounded-2xl shadow-elevated p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-3">Choose Your Preferred Contact Method</h3>
          <p className="text-text-secondary">
            We offer multiple ways to connect based on your needs and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option) => (
            <div
              key={option.id}
              className={`relative p-6 border-2 rounded-xl transition-all duration-300 hover:shadow-soft ${
                option.recommended 
                  ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
              }`}
            >
              {option.recommended && (
                <div className="absolute -top-2 right-4">
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="flex items-start space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  option.recommended ? 'bg-accent text-white' : 'bg-surface text-text-muted'
                }`}>
                  <Icon name={option.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-1">{option.title}</h4>
                  <p className="text-sm text-text-secondary mb-3">{option.description}</p>
                  
                  <div className="space-y-1 text-xs text-text-muted">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={12} />
                      <span>Duration: {option.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" size={12} />
                      <span>Response: {option.response}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant={option.recommended ? "primary" : "outline"}
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => {
                  if (option.id === 'consultation') {
                    document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {option.action}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Question Form */}
      <div className="bg-white rounded-2xl shadow-elevated p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">Have a Quick Question?</h3>
          <p className="text-text-secondary">
            Send us a message and we'll get back to you within 2 hours during business hours.
          </p>
        </div>

        <form onSubmit={handleQuickQuestionSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={quickQuestion.name}
              onChange={handleInputChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={quickQuestion.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <textarea
            name="message"
            placeholder="What's your question? *"
            value={quickQuestion.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 resize-none"
          />
          
          <Button
            type="submit"
            variant="primary"
            iconName="Send"
            iconPosition="right"
            className="w-full md:w-auto"
          >
            Send Question
          </Button>
        </form>
      </div>

      {/* Direct Contacts */}
      <div className="bg-white rounded-2xl shadow-elevated p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">Direct Team Contacts</h3>
          <p className="text-text-secondary">
            Connect directly with our team members for specialized discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {directContacts.map((contact, index) => (
            <div key={index} className="border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">{contact.name}</h4>
                  <p className="text-sm text-text-secondary">{contact.role}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Mail" size={14} />
                  <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Phone" size={14} />
                  <a href={`tel:${contact.phone}`} className="hover:text-accent transition-colors">
                    {contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Clock" size={14} />
                  <span>{contact.availability}</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-xs font-semibold text-primary mb-2">Specialties</h5>
                <div className="flex flex-wrap gap-1">
                  {contact.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-surface text-xs text-text-secondary rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.location.href = `mailto:${contact.email}`}
              >
                Contact {contact.name.split(' ')[0]}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Office Locations */}
      <div className="bg-white rounded-2xl shadow-elevated p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">Office Locations</h3>
          <p className="text-text-secondary">
            Visit us in person or schedule virtual meetings across time zones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {officeLocations.map((office, index) => (
            <div key={index} className={`border-2 rounded-xl p-6 ${
              office.isPrimary ? 'border-accent bg-accent/5' : 'border-border'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-primary">{office.city}</h4>
                {office.isPrimary && (
                  <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    HQ
                  </span>
                )}
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-2 text-sm text-text-secondary">
                  <Icon name="MapPin" size={14} className="mt-0.5 flex-shrink-0" />
                  <span className="whitespace-pre-line">{office.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Phone" size={14} />
                  <a href={`tel:${office.phone}`} className="hover:text-accent transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Mail" size={14} />
                  <a href={`mailto:${office.email}`} className="hover:text-accent transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Clock" size={14} />
                  <span>Business Hours ({office.timezone})</span>
                </div>
              </div>

              <div className="h-32 bg-surface rounded-lg mb-4 overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${office.city} Office Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office.coordinates}&z=14&output=embed`}
                  className="border-0"
                />
              </div>

              <Button
                variant={office.isPrimary ? "primary" : "outline"}
                size="sm"
                fullWidth
                iconName="Navigation"
                iconPosition="left"
                onClick={() => window.open(`https://maps.google.com?q=${office.coordinates}`, '_blank')}
              >
                Get Directions
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;