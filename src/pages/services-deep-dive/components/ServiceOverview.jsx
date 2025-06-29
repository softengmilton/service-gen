import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceOverview = () => {
  const services = [
    {
      id: 1,
      icon: "Code2",
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your unique business requirements and scale with your growth.",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Performance Optimization"],
      color: "accent"
    },
    {
      id: 2,
      icon: "Zap",
      title: "Digital Transformation",
      description: "Modernize your business processes and technology infrastructure to stay competitive in the digital age.",
      features: ["Process Automation", "Cloud Migration", "Legacy System Modernization", "Digital Strategy"],
      color: "success"
    },
    {
      id: 3,
      icon: "Shield",
      title: "Enterprise Solutions",
      description: "Robust, secure, and scalable solutions designed for large organizations with complex requirements.",
      features: ["Enterprise Architecture", "Security Implementation", "Compliance Management", "Integration Services"],
      color: "warning"
    },
    {
      id: 4,
      icon: "Smartphone",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      color: "error"
    },
    {
      id: 5,
      icon: "Globe",
      title: "Web Development",
      description: "Modern, responsive web applications built with the latest technologies and best practices.",
      features: ["React/Next.js", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
      color: "primary"
    },
    {
      id: 6,
      icon: "BarChart3",
      title: "Data Analytics & AI",
      description: "Harness the power of data and artificial intelligence to drive informed business decisions.",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics", "Business Intelligence"],
      color: "secondary"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      accent: "text-accent bg-accent/10 border-accent/20",
      success: "text-success bg-success/10 border-success/20",
      warning: "text-warning bg-warning/10 border-warning/20",
      error: "text-error bg-error/10 border-error/20",
      primary: "text-primary bg-primary/10 border-primary/20",
      secondary: "text-secondary bg-secondary/10 border-secondary/20"
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end services that transform your business ideas into powerful digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border hover:border-accent/30"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                <Icon name={service.icon} size={28} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <button className="inline-flex items-center space-x-2 text-accent hover:text-accent-600 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                    <span>Learn More</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can create a tailored solution that perfectly fits your specific requirements and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300">
                <Icon name="MessageCircle" size={20} />
                <span>Start Consultation</span>
              </button>
              <button className="inline-flex items-center space-x-2 text-primary border border-border px-8 py-3 rounded-lg font-medium hover:bg-surface transition-colors duration-300">
                <Icon name="Calendar" size={20} />
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;