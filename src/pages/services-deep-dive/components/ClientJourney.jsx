import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ClientJourney = () => {
  const [activePhase, setActivePhase] = useState(0);

  const journeyPhases = [
    {
      id: 0,
      title: "Initial Consultation",
      duration: "Week 1",
      icon: "MessageCircle",
      color: "accent",
      description: "We start with understanding your vision, challenges, and goals through detailed discussions.",
      activities: [
        "Requirements gathering session",
        "Technical feasibility analysis", 
        "Budget and timeline discussion",
        "Team introduction and role definition"
      ],
      deliverables: [
        "Project brief document",
        "Initial cost estimate",
        "Proposed timeline",
        "Next steps roadmap"
      ],
      clientExperience: "You\'ll meet our senior team members who will be working on your project. We ensure complete transparency about our process, capabilities, and what you can expect throughout the engagement."
    },
    {
      id: 1,
      title: "Discovery & Planning",
      duration: "Weeks 2-3",
      icon: "Search",
      color: "success",
      description: "Deep dive into your business processes, technical requirements, and user needs.",
      activities: [
        "Stakeholder interviews",
        "User research and persona development",
        "Technical architecture planning",
        "Risk assessment and mitigation planning"
      ],
      deliverables: [
        "Detailed project specification",
        "Technical architecture document",
        "User journey maps",
        "Project charter and SOW"
      ],
      clientExperience: "We involve your team in collaborative workshops to ensure we capture every nuance of your requirements. You'll receive detailed documentation that serves as the blueprint for your project."
    },
    {
      id: 2,
      title: "Design & Prototyping",
      duration: "Weeks 4-6",
      icon: "Palette",
      color: "warning",
      description: "Creating user-centered designs and interactive prototypes for validation.",
      activities: [
        "Wireframing and user flow design",
        "Visual design and branding",
        "Interactive prototype development",
        "User testing and feedback incorporation"
      ],
      deliverables: [
        "Design system and style guide",
        "High-fidelity mockups",
        "Interactive prototype",
        "User testing report"
      ],
      clientExperience: "You'll see your vision come to life through our design process. We provide regular design reviews and incorporate your feedback to ensure the final design exceeds your expectations."
    },
    {
      id: 3,
      title: "Development",
      duration: "Weeks 7-18",
      icon: "Code",
      color: "primary",
      description: "Agile development with regular demos and continuous client collaboration.",
      activities: [
        "Sprint planning and backlog management",
        "Feature development and testing",
        "Regular demo sessions",
        "Continuous integration and deployment"
      ],
      deliverables: [
        "Working software increments",
        "Sprint demo recordings",
        "Test reports and documentation",
        "Code repository access"
      ],
      clientExperience: "You\'ll have full visibility into the development process with weekly demos, access to our project management tools, and direct communication with the development team."
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      duration: "Weeks 19-20",
      icon: "CheckCircle",
      color: "success",
      description: "Comprehensive testing to ensure your solution meets all requirements and quality standards.",
      activities: [
        "Functional and integration testing",
        "Performance and security testing",
        "User acceptance testing",
        "Bug fixes and optimization"
      ],
      deliverables: [
        "Test execution reports",
        "Performance benchmarks",
        "Security audit results",
        "UAT sign-off documentation"
      ],
      clientExperience: "We involve your team in the testing process to ensure everything works exactly as expected. You\'ll receive detailed reports on all aspects of quality assurance."
    },
    {
      id: 5,
      title: "Deployment & Launch",
      duration: "Week 21",
      icon: "Rocket",
      color: "accent",
      description: "Smooth deployment to production with comprehensive launch support.",
      activities: [
        "Production environment setup",
        "Data migration and system integration",
        "Go-live support and monitoring",
        "Team training and knowledge transfer"
      ],
      deliverables: [
        "Live production system",
        "Deployment documentation",
        "Training materials",
        "Support and maintenance plan"
      ],
      clientExperience: "We ensure a smooth launch with minimal disruption to your business. Our team provides hands-on support during the critical go-live period."
    },
    {
      id: 6,
      title: "Ongoing Support",
      duration: "Ongoing",
      icon: "Headphones",
      color: "secondary",
      description: "Continuous support, maintenance, and enhancement to ensure long-term success.",
      activities: [
        "24/7 monitoring and support",
        "Regular maintenance and updates",
        "Performance optimization",
        "Feature enhancements and scaling"
      ],
      deliverables: [
        "Monthly performance reports",
        "Maintenance schedules",
        "Enhancement roadmaps",
        "Support ticket resolution"
      ],
      clientExperience: "Our relationship doesn't end at launch. We provide ongoing partnership to help your solution evolve with your business needs and ensure optimal performance."
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      accent: "bg-accent text-white",
      success: "bg-success text-white",
      warning: "bg-warning text-white",
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      error: "bg-error text-white"
    };
    return colorMap[color] || colorMap.accent;
  };

  const getBorderColor = (color) => {
    const colorMap = {
      accent: "border-accent",
      success: "border-success",
      warning: "border-warning",
      primary: "border-primary",
      secondary: "border-secondary",
      error: "border-error"
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Map" size={16} />
            <span>Client Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Your Project Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From initial consultation to ongoing support, here's what you can expect when working with CodeCraft Agency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              {journeyPhases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                    activePhase === index
                      ? `${getBorderColor(phase.color)} bg-${phase.color}/5`
                      : 'border-border hover:border-accent/50 hover:bg-surface'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activePhase === index ? getColorClasses(phase.color) : 'bg-surface text-text-muted'
                    }`}>
                      <Icon name={phase.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        activePhase === index ? 'text-primary' : 'text-text-secondary'
                      }`}>
                        {phase.title}
                      </h3>
                      <p className="text-sm text-text-muted">{phase.duration}</p>
                    </div>
                    {activePhase === index && (
                      <Icon name="ChevronRight" size={16} className="text-accent" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-2xl p-8 lg:p-12">
              {journeyPhases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={`${activePhase === index ? 'block' : 'hidden'}`}
                >
                  {/* Phase Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(phase.color)}`}>
                      <Icon name={phase.icon} size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{phase.title}</h3>
                      <p className="text-accent font-medium">{phase.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    {phase.description}
                  </p>

                  {/* Activities and Deliverables */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                        <Icon name="Activity" size={18} className="text-accent" />
                        <span>Key Activities</span>
                      </h4>
                      <ul className="space-y-3">
                        {phase.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start space-x-3">
                            <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                        <Icon name="Package" size={18} className="text-success" />
                        <span>Deliverables</span>
                      </h4>
                      <ul className="space-y-3">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="flex items-start space-x-3">
                            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Client Experience */}
                  <div className="bg-white rounded-xl p-6 border-l-4 border-accent">
                    <h4 className="font-semibold text-primary mb-3 flex items-center space-x-2">
                      <Icon name="User" size={18} className="text-accent" />
                      <span>Your Experience</span>
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {phase.clientExperience}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activePhase === 0
                    ? 'text-text-muted cursor-not-allowed' :'text-primary hover:bg-surface border border-border'
                }`}
              >
                <Icon name="ArrowLeft" size={16} />
                <span>Previous</span>
              </button>

              <button
                onClick={() => setActivePhase(Math.min(journeyPhases.length - 1, activePhase + 1))}
                disabled={activePhase === journeyPhases.length - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activePhase === journeyPhases.length - 1
                    ? 'text-text-muted cursor-not-allowed' :'bg-accent text-white hover:bg-accent-600'
                }`}
              >
                <span>Next</span>
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a customized journey that delivers exceptional results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300 shadow-soft hover:shadow-elevated">
                <Icon name="Calendar" size={20} />
                <span>Schedule Consultation</span>
              </button>
              <button className="inline-flex items-center space-x-2 text-primary border border-border px-8 py-4 rounded-lg font-medium hover:bg-surface transition-colors duration-300">
                <Icon name="Download" size={20} />
                <span>Download Process Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientJourney;