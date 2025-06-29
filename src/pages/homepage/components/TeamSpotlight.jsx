import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const TeamSpotlight = () => {
  const [currentMember, setCurrentMember] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Full-Stack Developer",
      specialties: ["React", "Node.js", "AWS", "GraphQL"],
      experience: "8+ years",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Passionate about creating scalable web applications and mentoring junior developers. Led the development of 15+ enterprise-level applications.",
      achievements: [
        "Architected microservices platform serving 1M+ users",
        "Reduced deployment time by 75% through CI/CD optimization",
        "Mentored 12 junior developers to senior positions"
      ],
      recentWork: "AI-powered analytics dashboard for DataFlow Corp",
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      skills: {
        "Frontend": 95,
        "Backend": 90,
        "DevOps": 85,
        "Architecture": 92
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Senior Backend Engineer",
      specialties: ["Python", "Django", "PostgreSQL", "Docker"],
      experience: "6+ years",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in building robust backend systems and API architectures. Specializes in performance optimization and database design.",
      achievements: [
        "Optimized database queries reducing response time by 60%",
        "Built fault-tolerant systems with 99.9% uptime",
        "Implemented security protocols preventing 100% of breaches"
      ],
      recentWork: "Blockchain-based verification system for FinanceSecure",
      github: "https://github.com/mrodriguez",
      linkedin: "https://linkedin.com/in/mrodriguez",
      skills: {
        "Backend": 96,
        "Database": 94,
        "Security": 88,
        "Performance": 91
      }
    },
    {
      id: 3,
      name: "Alex Kim",
      role: "DevOps & Cloud Architect",
      specialties: ["Kubernetes", "Terraform", "Azure", "Monitoring"],
      experience: "7+ years",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Cloud infrastructure specialist focused on scalability, security, and automation. Passionate about infrastructure as code and monitoring.",
      achievements: [
        "Reduced infrastructure costs by 40% through optimization",
        "Achieved zero-downtime deployments for all projects",
        "Implemented monitoring systems with 99.99% accuracy"
      ],
      recentWork: "Multi-cloud deployment strategy for TechFlow Solutions",
      github: "https://github.com/alexkim",
      linkedin: "https://linkedin.com/in/alexkim",
      skills: {
        "Cloud": 93,
        "DevOps": 95,
        "Security": 89,
        "Automation": 92
      }
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "UI/UX Designer & Frontend Developer",
      specialties: ["Figma", "React", "TypeScript", "Design Systems"],
      experience: "5+ years",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Creative problem-solver who bridges design and development. Specializes in creating intuitive user experiences and scalable design systems.",
      achievements: [
        "Increased user engagement by 150% through UX improvements",
        "Created design system adopted by 8 different products",
        "Won 'Best User Experience' award for mobile app design"
      ],
      recentWork: "Complete UX overhaul for RetailMax e-commerce platform",
      github: "https://github.com/ethompson",
      linkedin: "https://linkedin.com/in/ethompson",
      skills: {
        "UI Design": 96,
        "UX Research": 88,
        "Frontend": 85,
        "Prototyping": 94
      }
    }
  ];

  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setCurrentMember((prev) => (prev + 1) % teamMembers.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoRotating, teamMembers.length]);

  const handleMemberSelect = (index) => {
    setCurrentMember(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000); // Resume auto-rotation after 10 seconds
  };

  const current = teamMembers[currentMember];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Users" size={16} className="mr-2" />
            Meet Our Team
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            The Minds Behind the Magic
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience, innovative thinking, and a passion for crafting exceptional software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Team Member Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  onClick={() => handleMemberSelect(index)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                    index === currentMember
                      ? 'bg-white border-accent shadow-lg scale-105'
                      : 'bg-white/50 border-slate-200 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {index === currentMember && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                          <Icon name="Check" size={12} color="white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-900 truncate">
                        {member.name}
                      </h3>
                      <p className="text-sm text-slate-600 truncate">{member.role}</p>
                      <p className="text-xs text-accent font-medium">{member.experience}</p>
                    </div>
                    {index === currentMember && (
                      <Icon name="ChevronRight" size={20} className="text-accent" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Member Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white">
                <div className="flex items-start space-x-6">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-24 h-24 rounded-2xl object-cover border-4 border-white/20"
                  />
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2">{current.name}</h3>
                    <p className="text-xl text-slate-300 mb-4">{current.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {current.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={current.github}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon name="Github" size={20} />
                    </a>
                    <a
                      href={current.linkedin}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <Icon name="Linkedin" size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Bio */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">About</h4>
                  <p className="text-slate-600 leading-relaxed">{current.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Expertise</h4>
                  <div className="space-y-3">
                    {Object.entries(current.skills).map(([skill, level]) => (
                      <div key={skill}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-slate-700">{skill}</span>
                          <span className="text-sm font-bold text-slate-900">{level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-accent to-sky-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    {current.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-green-600" />
                        </div>
                        <p className="text-slate-600 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Work */}
                <div className="bg-gradient-to-r from-accent/10 to-sky-500/10 border border-accent/20 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Briefcase" size={18} className="text-accent" />
                    <h4 className="text-lg font-semibold text-slate-900">Current Project</h4>
                  </div>
                  <p className="text-slate-700 font-medium">{current.recentWork}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Work with Our Expert Team
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Ready to collaborate with industry-leading developers and designers? Let's discuss how our team can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-consultation">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Your Project
                </button>
              </Link>
              <button className="px-8 py-4 border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-accent font-semibold rounded-xl transition-all duration-300">
                View Full Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSpotlight;