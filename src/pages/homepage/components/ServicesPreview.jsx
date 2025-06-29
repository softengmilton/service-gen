import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored solutions that perfectly align with your business processes and goals.",
      icon: "Code2",
      features: ["Full-Stack Development", "API Integration", "Database Design", "Cloud Architecture"],
      demoCode: `// Real-time data processing
const processUserData = async (data) => {
  const validated = await validate(data);
  const enriched = await enrich(validated);
  return await store(enriched);
};`,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "Modernize legacy systems and processes with cutting-edge technology solutions.",
      icon: "Zap",
      features: ["Legacy Migration", "Process Automation", "Digital Workflows", "Change Management"],
      demoCode: `// Automated workflow engine
const workflow = new WorkflowEngine({
  triggers: ['user_action', 'scheduled'],
  actions: ['notify', 'process', 'update'],
  conditions: ['business_rules']
});`,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-600"
    },
    {
      id: 3,
      title: "Enterprise Solutions",
      description: "Scalable, secure, and robust systems designed for enterprise-level operations.",
      icon: "Building",
      features: ["Enterprise Architecture", "Security Implementation", "Scalability Planning", "Integration Services"],
      demoCode: `// Enterprise security layer
class SecurityManager {
  authenticate(user) {
    return this.validateCredentials(user)
      .then(this.checkPermissions)
      .then(this.generateToken);
  }
}`,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      textColor: "text-green-600"
    },
    {
      id: 4,
      title: "Emerging Tech Implementation",
      description: "Stay ahead with AI, ML, blockchain, and other cutting-edge technologies.",
      icon: "Sparkles",
      features: ["AI/ML Integration", "Blockchain Solutions", "IoT Development", "AR/VR Applications"],
      demoCode: `// AI-powered analytics
const aiAnalytics = new MLModel({
  algorithm: 'neural_network',
  training_data: businessMetrics,
  prediction_accuracy: 0.94
});`,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Settings" size={16} className="mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Development Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end software development services that drive business growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-gradient-to-br ${service.bgColor} border ${service.borderColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service.icon} size={28} color="white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={14} className={service.textColor} />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Code Demo - Shows on Hover */}
              <div className={`absolute inset-0 bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center transition-all duration-500 ${
                hoveredService === service.id ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="text-center mb-4">
                  <Icon name="Code" size={24} className="text-accent mx-auto mb-2" />
                  <h4 className="text-white font-semibold">Code Preview</h4>
                </div>
                <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-hidden">
                  <code>{service.demoCode}</code>
                </pre>
                <div className="mt-4 text-center">
                  <span className="text-accent text-sm font-medium">Hover to explore more →</span>
                </div>
              </div>

              {/* Learn More Link */}
              <div className="flex items-center justify-between">
                <Link 
                  to="/services-deep-dive"
                  className={`inline-flex items-center space-x-2 ${service.textColor} font-medium text-sm hover:underline`}
                >
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={14} />
                </Link>
                <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <Icon name="ArrowUpRight" size={16} color="white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can drive your next breakthrough. Every great transformation starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-consultation">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Schedule Consultation
                </button>
              </Link>
              <Link to="/services-deep-dive">
                <button className="px-8 py-4 border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-accent font-semibold rounded-xl transition-all duration-300">
                  Explore All Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;