import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ClientTransformationCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const transformations = [
    {
      id: 1,
      client: "TechFlow Solutions",
      industry: "SaaS Platform",
      challenge: "Legacy system causing 40% customer churn",
      before: {
        revenue: "$2.4M",
        performance: "3.2s load time",
        satisfaction: "67%",
        efficiency: "45%"
      },
      after: {
        revenue: "$6.1M",
        performance: "0.8s load time",
        satisfaction: "94%",
        efficiency: "89%"
      },
      improvement: {
        revenue: "+154%",
        performance: "+75%",
        satisfaction: "+40%",
        efficiency: "+98%"
      },
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      timeline: "8 months",
      testimonial: "CodeCraft didn't just rebuild our platform—they transformed our entire business model.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      client: "RetailMax Enterprise",
      industry: "E-commerce",
      challenge: "Outdated inventory system losing $50K monthly",
      before: {
        revenue: "$8.2M",
        performance: "12s checkout",
        satisfaction: "71%",
        efficiency: "52%"
      },
      after: {
        revenue: "$18.7M",
        performance: "2.1s checkout",
        satisfaction: "96%",
        efficiency: "91%"
      },
      improvement: {
        revenue: "+128%",
        performance: "+82%",
        satisfaction: "+35%",
        efficiency: "+75%"
      },
      tech: ["Vue.js", "Python", "MongoDB", "AWS"],
      timeline: "6 months",
      testimonial: "The AI-powered inventory system has revolutionized our operations completely.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      client: "HealthCare Connect",
      industry: "Healthcare",
      challenge: "Manual processes causing compliance issues",
      before: {
        revenue: "$5.1M",
        performance: "24h processing",
        satisfaction: "73%",
        efficiency: "38%"
      },
      after: {
        revenue: "$12.8M",
        performance: "2h processing",
        satisfaction: "97%",
        efficiency: "94%"
      },
      improvement: {
        revenue: "+151%",
        performance: "+92%",
        satisfaction: "+33%",
        efficiency: "+147%"
      },
      tech: ["Angular", "C#", "SQL Server", "Azure"],
      timeline: "10 months",
      testimonial: "HIPAA-compliant automation that saved us from regulatory nightmares.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % transformations.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, transformations.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const current = transformations[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Client Transformations
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how we've transformed businesses across industries with measurable outcomes and lasting partnerships.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Client Info & Challenge */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={current.avatar} 
                    alt={current.client}
                    className="w-16 h-16 rounded-full border-2 border-accent"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">{current.client}</h3>
                    <p className="text-accent">{current.industry}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-slate-300">Challenge</h4>
                  <p className="text-slate-200 leading-relaxed">{current.challenge}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-slate-300">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {current.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-sm text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-slate-300">Timeline</h4>
                  <div className="flex items-center space-x-2 text-slate-200">
                    <Icon name="Clock" size={16} />
                    <span>{current.timeline}</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-accent pl-4 italic text-slate-200">
                  "{current.testimonial}"
                </blockquote>
              </div>

              {/* Right Side - Metrics */}
              <div className="p-8 lg:p-12">
                <h4 className="text-2xl font-bold text-slate-900 mb-8">Transformation Metrics</h4>
                
                <div className="space-y-6">
                  {/* Revenue */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="DollarSign" size={20} className="text-green-600" />
                        <span className="font-semibold text-slate-900">Annual Revenue</span>
                      </div>
                      <span className="text-2xl font-bold text-green-600">{current.improvement.revenue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Before: {current.before.revenue}</span>
                      <span className="text-slate-900 font-semibold">After: {current.after.revenue}</span>
                    </div>
                  </div>

                  {/* Performance */}
                  <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Zap" size={20} className="text-blue-600" />
                        <span className="font-semibold text-slate-900">Performance</span>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">{current.improvement.performance}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Before: {current.before.performance}</span>
                      <span className="text-slate-900 font-semibold">After: {current.after.performance}</span>
                    </div>
                  </div>

                  {/* Satisfaction */}
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Heart" size={20} className="text-purple-600" />
                        <span className="font-semibold text-slate-900">User Satisfaction</span>
                      </div>
                      <span className="text-2xl font-bold text-purple-600">{current.improvement.satisfaction}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Before: {current.before.satisfaction}</span>
                      <span className="text-slate-900 font-semibold">After: {current.after.satisfaction}</span>
                    </div>
                  </div>

                  {/* Efficiency */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Target" size={20} className="text-orange-600" />
                        <span className="font-semibold text-slate-900">Operational Efficiency</span>
                      </div>
                      <span className="text-2xl font-bold text-orange-600">{current.improvement.efficiency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Before: {current.before.efficiency}</span>
                      <span className="text-slate-900 font-semibold">After: {current.after.efficiency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-accent hover:border-accent transition-all duration-300 shadow-lg"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent scale-125' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTransformationCarousel;