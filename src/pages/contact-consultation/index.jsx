import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ConsultationBooking from './components/ConsultationBooking';
import ProjectAssessment from './components/ProjectAssessment';
import TeamMatching from './components/TeamMatching';
import ContactMethods from './components/ContactMethods';
import AvailabilityCalendar from './components/AvailabilityCalendar';

const ContactConsultation = () => {
  const preparationResources = [
    {
      title: 'Project Requirements Checklist',
      description: 'Essential information to gather before your consultation',
      icon: 'CheckSquare',
      items: [
        'Business objectives and success metrics',
        'Target audience and user personas',
        'Technical requirements and constraints',
        'Timeline expectations and milestones',
        'Budget range and investment priorities'
      ]
    },
    {
      title: 'Stakeholder Involvement Guide',
      description: 'Who should participate in the consultation',
      icon: 'Users',
      items: [
        'Decision makers and project sponsors',
        'Technical team members or IT leads',
        'End users or customer representatives',
        'Marketing and business stakeholders',
        'Compliance or security personnel'
      ]
    },
    {
      title: 'Question Framework',
      description: 'Key questions to maximize consultation value',
      icon: 'HelpCircle',
      items: [
        'What are our biggest technical challenges?',
        'How will this project impact our business?',
        'What are the risks and mitigation strategies?',
        'How do we measure project success?',
        'What ongoing support will we need?'
      ]
    }
  ];

  const responseCommitments = [
    {
      type: 'Initial Response',
      timeframe: 'Within 2 hours',
      description: 'Acknowledgment and next steps',
      icon: 'Clock'
    },
    {
      type: 'Consultation Confirmation',
      timeframe: 'Same business day',
      description: 'Calendar invite and preparation materials',
      icon: 'Calendar'
    },
    {
      type: 'Follow-up Proposal',
      timeframe: '24-48 hours',
      description: 'Detailed project proposal and timeline',
      icon: 'FileText'
    },
    {
      type: 'Project Kickoff',
      timeframe: '1-2 weeks',
      description: 'Contract finalization and team assignment',
      icon: 'Rocket'
    }
  ];

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Icon name="MessageCircle" size={16} color="white" />
              <span className="text-white text-sm font-medium">Let's Start the Conversation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform
              <span className="block text-accent">Your Vision?</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect with our expert team through intelligent consultation pathways designed to understand your needs and deliver immediate value.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="CheckCircle" size={20} className="text-accent" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Clock" size={20} className="text-accent" />
                <span>Same-Day Response</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Icon name="Shield" size={20} className="text-accent" />
                <span>NDA Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Contact Methods */}
            <ContactMethods />

            {/* Project Assessment */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Get Instant Project Insights
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Take our interactive assessment to receive immediate recommendations about your project's complexity, timeline, and approach.
                </p>
              </div>
              <ProjectAssessment />
            </div>

            {/* Team Matching */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Meet Your Perfect Team Match
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Connect with CodeCraft experts who specialize in your technology stack and industry vertical.
                </p>
              </div>
              <TeamMatching />
            </div>

            {/* Consultation Booking */}
            <div id="consultation-booking">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Schedule Your Strategic Consultation
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Book a personalized consultation to discuss your project requirements and explore how we can help achieve your goals.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ConsultationBooking />
                <AvailabilityCalendar />
              </div>
            </div>

            {/* Preparation Resources */}
            <div className="bg-white rounded-2xl shadow-elevated p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Maximize Your Consultation Value
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Prepare for productive discussions with our comprehensive guides and frameworks.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {preparationResources.map((resource, index) => (
                  <div key={index} className="border border-border rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon name={resource.icon} size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">{resource.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-4">{resource.description}</p>
                    
                    <ul className="space-y-2">
                      {resource.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Commitments */}
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Our Response Commitments
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Clear expectations about our communication timeline and follow-up process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {responseCommitments.map((commitment, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                      <Icon name={commitment.icon} size={24} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-primary mb-2">{commitment.type}</h3>
                    <p className="text-accent font-medium mb-1">{commitment.timeframe}</p>
                    <p className="text-sm text-text-secondary">{commitment.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-error/5 border border-error/20 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-error/10 rounded-lg">
                  <Icon name="AlertTriangle" size={24} className="text-error" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">Urgent Project Needs?</h3>
                  <p className="text-text-secondary mb-4">
                    For time-sensitive projects or critical system issues, contact our emergency response team directly.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <a
                      href="tel:+15551234567"
                      className="flex items-center space-x-2 text-error font-medium hover:text-error/80 transition-colors"
                    >
                      <Icon name="Phone" size={16} />
                      <span>+1 (555) 123-4567</span>
                    </a>
                    <a
                      href="mailto:urgent@codecraft.agency"
                      className="flex items-center space-x-2 text-error font-medium hover:text-error/80 transition-colors"
                    >
                      <Icon name="Mail" size={16} />
                      <span>urgent@codecraft.agency</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">CodeCraft</h3>
                <p className="text-sm text-white/70 font-medium tracking-wide">AGENCY</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Transforming visions into exceptional digital experiences through expert craftsmanship and innovative solutions.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <a href="mailto:hello@codecraft.agency" className="text-white/80 hover:text-white transition-colors">
                hello@codecraft.agency
              </a>
              <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} CodeCraft Agency. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactConsultation;