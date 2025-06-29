import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      category: "Technical Excellence",
      testimonial: `CodeCraft's technical expertise is unmatched. They delivered a complex microservices architecture that scaled seamlessly from 1,000 to 100,000 users. Their code quality and documentation standards exceeded our expectations.\n\nThe team's deep understanding of modern development practices and their ability to implement cutting-edge solutions while maintaining stability was impressive. They didn't just build software; they built a foundation for our future growth.`,
      project: "Enterprise Platform Modernization",
      results: [
        "99.9% uptime achieved",
        "50% reduction in response time",
        "300% increase in user capacity"
      ],
      technologies: ["React", "Node.js", "Kubernetes", "PostgreSQL"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "CEO",
      company: "GrowthMetrics Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      category: "Business Impact",
      testimonial: `Working with CodeCraft transformed our business. Their digital transformation strategy increased our operational efficiency by 40% and reduced costs by $2M annually.\n\nWhat impressed me most was their business-first approach. They didn't just focus on technology; they understood our market challenges and delivered solutions that directly impacted our bottom line. The ROI was evident within the first quarter.`,
      project: "Digital Transformation Initiative",
      results: [
        "$2M annual cost savings",
        "40% efficiency improvement",
        "25% revenue increase"
      ],
      technologies: ["Python", "AWS", "React", "MongoDB"]
    },
    {
      id: 3,
      name: "Jennifer Park",
      role: "Project Manager",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      category: "Collaboration",
      testimonial: `CodeCraft's project management and communication were exceptional. They kept us informed at every step, delivered on time, and were incredibly responsive to our feedback.\n\nTheir agile methodology and transparent reporting gave us complete visibility into the development process. Even when we had changing requirements, they adapted quickly without compromising quality or timeline.`,
      project: "Custom CRM Development",
      results: [
        "Delivered 2 weeks early",
        "Zero critical bugs at launch",
        "100% stakeholder satisfaction"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"]
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Head of Digital",
      company: "RetailMax Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      category: "Innovation",
      testimonial: `CodeCraft brought innovative solutions we hadn't even considered. Their AI-powered recommendation engine increased our conversion rates by 35% and customer engagement by 60%.\n\nThey stayed ahead of technology trends and suggested improvements that gave us a competitive advantage. Their forward-thinking approach helped us leapfrog our competition in the digital space.`,
      project: "E-commerce Platform Enhancement",
      results: [
        "35% conversion rate increase",
        "60% engagement improvement",
        "2x mobile sales growth"
      ],
      technologies: ["Next.js", "TensorFlow", "Redis", "Stripe"]
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "VP of Operations",
      company: "HealthTech Solutions",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      category: "Security & Compliance",
      testimonial: `Security and compliance were critical for our healthcare platform. CodeCraft implemented robust security measures that exceeded HIPAA requirements and passed all third-party audits.\n\nTheir attention to detail in security implementation and their proactive approach to compliance gave us complete confidence in our platform's integrity. They truly understand the importance of data protection in healthcare.`,
      project: "HIPAA-Compliant Patient Portal",
      results: [
        "100% HIPAA compliance",
        "Zero security incidents",
        "SOC 2 Type II certified"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Founder",
      company: "StartupVenture",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      category: "Startup Partnership",
      testimonial: `As a startup, we needed a development partner who understood our constraints and growth ambitions. CodeCraft delivered an MVP that helped us secure Series A funding.\n\nThey worked within our budget, delivered quickly, and built a scalable foundation that grew with us. Their startup-friendly approach and technical excellence made them the perfect partner for our journey.`,
      project: "MVP Development & Scaling",
      results: [
        "Series A funding secured",
        "10x user growth in 6 months",
        "Zero downtime during scaling"
      ],
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Testimonials', count: testimonials.length },
    { id: 'Technical Excellence', label: 'Technical Excellence', count: 1 },
    { id: 'Business Impact', label: 'Business Impact', count: 1 },
    { id: 'Collaboration', label: 'Collaboration', count: 1 },
    { id: 'Innovation', label: 'Innovation', count: 1 },
    { id: 'Security & Compliance', label: 'Security', count: 1 },
    { id: 'Startup Partnership', label: 'Startup Partnership', count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-warning fill-current' : 'text-border'}
      />
    ));
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Hear from CTOs, CEOs, and project managers who have experienced the CodeCraft difference.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setActiveTestimonial(0);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-white text-text-secondary hover:text-primary hover:bg-surface border border-border'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            {filteredTestimonials.length > 0 && (
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Testimonial Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(filteredTestimonials[activeTestimonial].rating)}
                    </div>
                    
                    <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-6">
                      <Icon name="Tag" size={14} />
                      <span>{filteredTestimonials[activeTestimonial].category}</span>
                    </div>

                    <blockquote className="text-lg text-text-secondary leading-relaxed mb-6">
                      {filteredTestimonials[activeTestimonial].testimonial.split('\n\n').map((paragraph, index) => (
                        <span key={index}>
                          {paragraph}
                          {index < filteredTestimonials[activeTestimonial].testimonial.split('\n\n').length - 1 && (
                            <>
                              <br />
                              <br />
                            </>
                          )}
                        </span>
                      ))}
                    </blockquote>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={filteredTestimonials[activeTestimonial].avatar}
                      alt={filteredTestimonials[activeTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-primary">
                        {filteredTestimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-text-secondary">
                        {filteredTestimonials[activeTestimonial].role}
                      </p>
                      <p className="text-accent font-medium">
                        {filteredTestimonials[activeTestimonial].company}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {filteredTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeTestimonial ? 'bg-accent' : 'bg-border hover:bg-accent/50'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-accent transition-all duration-300"
                      >
                        <Icon name="ChevronLeft" size={16} />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-accent transition-all duration-300"
                      >
                        <Icon name="ChevronRight" size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-surface p-8 lg:p-12">
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Project: {filteredTestimonials[activeTestimonial].project}
                  </h3>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                      <Icon name="TrendingUp" size={18} className="text-success" />
                      <span>Key Results</span>
                    </h4>
                    <ul className="space-y-3">
                      {filteredTestimonials[activeTestimonial].results.map((result, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                          <span className="text-text-secondary">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-primary mb-4 flex items-center space-x-2">
                      <Icon name="Code" size={18} className="text-accent" />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredTestimonials[activeTestimonial].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white text-text-secondary text-sm rounded-lg border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Client Satisfaction Metrics</h3>
            <p className="text-text-secondary">
              Our commitment to excellence reflected in numbers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">98%</div>
              <div className="text-text-secondary">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-text-secondary">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2">92%</div>
              <div className="text-text-secondary">Repeat Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-text-secondary">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results and transform your business through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300 shadow-soft hover:shadow-elevated">
                <Icon name="Calendar" size={20} />
                <span>Schedule Your Consultation</span>
              </button>
              <button className="inline-flex items-center space-x-2 text-primary border border-border px-8 py-4 rounded-lg font-medium hover:bg-surface transition-colors duration-300">
                <Icon name="FileText" size={20} />
                <span>View More Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;