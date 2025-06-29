import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const clientLogos = [
    { name: "TechFlow Solutions", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "RetailMax Enterprise", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop" },
    { name: "HealthCare Connect", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop" },
    { name: "FinanceSecure Ltd", logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=60&fit=crop" },
    { name: "DataFlow Corp", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&h=60&fit=crop" },
    { name: "CloudTech Systems", logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=120&h=60&fit=crop" }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "CodeCraft transformed our entire digital infrastructure. Their technical expertise and strategic thinking helped us scale from $2M to $12M in revenue within 18 months.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      metrics: { revenue: "+500%", efficiency: "+85%", satisfaction: "+40%" },
      videoUrl: "#"
    },
    {
      id: 2,
      quote: "The AI-powered analytics platform they built has revolutionized our decision-making process. We now predict market trends with 94% accuracy and have reduced operational costs by 60%.",
      author: "Michael Chen",
      position: "CTO",
      company: "DataFlow Corp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      metrics: { accuracy: "+94%", costs: "-60%", speed: "+300%" },
      videoUrl: "#"
    },
    {
      id: 3,
      quote: "Their blockchain-based security solution eliminated our compliance issues completely. Zero security breaches in 2 years and 100% regulatory compliance across all markets.",
      author: "Emma Rodriguez",
      position: "Head of Security",
      company: "FinanceSecure Ltd",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      metrics: { breaches: "0", compliance: "100%", incidents: "-95%" },
      videoUrl: "#"
    }
  ];

  const industryRecognition = [
    { award: "Best Software Development Agency 2023", organization: "Tech Excellence Awards", icon: "Award" },
    { award: "Innovation in AI Implementation", organization: "Digital Transformation Summit", icon: "Sparkles" },
    { award: "Top 10 Emerging Tech Companies", organization: "Industry Leaders Magazine", icon: "TrendingUp" },
    { award: "Excellence in Client Satisfaction", organization: "Business Review Council", icon: "Heart" }
  ];

  const partnerships = [
    { name: "AWS Advanced Partner", level: "Advanced", icon: "Cloud" },
    { name: "Google Cloud Partner", level: "Premier", icon: "Zap" },
    { name: "Microsoft Gold Partner", level: "Gold", icon: "Shield" },
    { name: "GitHub Verified Partner", level: "Verified", icon: "Github" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('social-proof-section');
    if (section) observer.observe(section);

    return () => {
      clearInterval(interval);
      if (section) observer.unobserve(section);
    };
  }, [testimonials.length]);

  const current = testimonials[currentTestimonial];

  return (
    <section id="social-proof-section" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/20 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Users" size={16} className="mr-2" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Results, Lasting Partnerships
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join the growing list of companies that have transformed their business with our expertise and innovation.
          </p>
        </div>

        {/* Client Logos */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-20">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-white font-medium leading-relaxed mb-8">
                  "{current.quote}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <img 
                    src={current.avatar} 
                    alt={current.author}
                    className="w-16 h-16 rounded-full border-2 border-accent"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{current.author}</h4>
                    <p className="text-slate-300">{current.position}</p>
                    <p className="text-accent font-medium">{current.company}</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white mb-6">Impact Metrics</h4>
                {Object.entries(current.metrics).map(([key, value], index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-2xl font-bold text-accent">{value}</span>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-6 px-6 py-3 bg-accent/20 border border-accent/30 text-accent hover:bg-accent hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center space-x-2">
                  <Icon name="Play" size={16} />
                  <span>Watch Video Testimonial</span>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-accent scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Industry Recognition & Partnerships */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Industry Recognition
            </h3>
            <div className="space-y-4">
              {industryRecognition.map((award, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-sky-500 rounded-xl flex items-center justify-center">
                      <Icon name={award.icon} size={24} color="white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{award.award}</h4>
                      <p className="text-slate-300">{award.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Partnerships */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              Technology Partners
            </h3>
            <div className="space-y-4">
              {partnerships.map((partner, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Icon name={partner.icon} size={24} color="white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{partner.name}</h4>
                        <p className="text-slate-300">Certified Partner</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 text-sm rounded-full font-medium">
                      {partner.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-accent mb-2">150+</div>
            <div className="text-slate-300">Projects Delivered</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-slate-300">Support Available</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-slate-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;