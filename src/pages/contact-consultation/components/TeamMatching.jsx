import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamMatching = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const expertiseAreas = [
    { id: 'frontend', label: 'Frontend Development', icon: 'Monitor' },
    { id: 'backend', label: 'Backend Development', icon: 'Server' },
    { id: 'fullstack', label: 'Full-Stack Development', icon: 'Code2' },
    { id: 'mobile', label: 'Mobile Development', icon: 'Smartphone' },
    { id: 'devops', label: 'DevOps & Cloud', icon: 'Cloud' },
    { id: 'ai', label: 'AI & Machine Learning', icon: 'Brain' },
    { id: 'blockchain', label: 'Blockchain', icon: 'Link' },
    { id: 'ux', label: 'UX/UI Design', icon: 'Palette' }
  ];

  const industries = [
    { id: 'fintech', label: 'FinTech', icon: 'DollarSign' },
    { id: 'healthcare', label: 'Healthcare', icon: 'Heart' },
    { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart' },
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'saas', label: 'SaaS', icon: 'Cloud' },
    { id: 'enterprise', label: 'Enterprise', icon: 'Building' }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Full-Stack Developer',
      expertise: ['fullstack', 'frontend', 'backend'],
      industries: ['fintech', 'saas'],
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      experience: '8+ years',
      technologies: ['React', 'Node.js', 'Python', 'AWS'],
      description: 'Specializes in scalable web applications and financial technology solutions.',
      availability: 'Available',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Mobile Development Lead',
      expertise: ['mobile', 'fullstack'],
      industries: ['healthcare', 'ecommerce'],
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      experience: '10+ years',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Expert in cross-platform mobile development with healthcare compliance experience.',
      availability: 'Available',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'DevOps Architect',
      expertise: ['devops', 'backend'],
      industries: ['enterprise', 'saas'],
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      experience: '12+ years',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      description: 'Cloud infrastructure specialist with enterprise-scale deployment expertise.',
      availability: 'Limited',
      rating: 4.9
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'AI/ML Engineer',
      expertise: ['ai', 'backend'],
      industries: ['healthcare', 'fintech'],
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      experience: '6+ years',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'MLOps'],
      description: 'Machine learning specialist with focus on predictive analytics and automation.',
      availability: 'Available',
      rating: 4.7
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'UX/UI Design Director',
      expertise: ['ux'],
      industries: ['ecommerce', 'education', 'saas'],
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      experience: '9+ years',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'Framer'],
      description: 'User experience designer with expertise in conversion optimization and accessibility.',
      availability: 'Available',
      rating: 4.8
    },
    {
      id: 6,
      name: 'Alex Johnson',
      role: 'Blockchain Developer',
      expertise: ['blockchain', 'backend'],
      industries: ['fintech', 'enterprise'],
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      experience: '5+ years',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts'],
      description: 'Blockchain specialist with experience in DeFi and enterprise blockchain solutions.',
      availability: 'Available',
      rating: 4.6
    }
  ];

  const getMatchedExperts = () => {
    return teamMembers.filter(member => {
      const expertiseMatch = !selectedExpertise || member.expertise.includes(selectedExpertise);
      const industryMatch = !selectedIndustry || member.industries.includes(selectedIndustry);
      return expertiseMatch && industryMatch;
    });
  };

  const matchedExperts = getMatchedExperts();

  return (
    <div className="bg-white rounded-2xl shadow-elevated p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-3">Find Your Perfect Team Match</h3>
        <p className="text-text-secondary">
          Connect with CodeCraft experts who specialize in your technology and industry.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-primary mb-3">
            Technical Expertise
          </label>
          <div className="grid grid-cols-2 gap-2">
            {expertiseAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedExpertise(selectedExpertise === area.id ? '' : area.id)}
                className={`p-3 text-sm font-medium rounded-lg border-2 transition-all duration-300 flex items-center space-x-2 ${
                  selectedExpertise === area.id
                    ? 'border-accent bg-accent text-white' :'border-border text-text-secondary hover:border-accent/50 hover:bg-surface'
                }`}
              >
                <Icon name={area.icon} size={16} />
                <span className="truncate">{area.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-primary mb-3">
            Industry Focus
          </label>
          <div className="grid grid-cols-2 gap-2">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(selectedIndustry === industry.id ? '' : industry.id)}
                className={`p-3 text-sm font-medium rounded-lg border-2 transition-all duration-300 flex items-center space-x-2 ${
                  selectedIndustry === industry.id
                    ? 'border-accent bg-accent text-white' :'border-border text-text-secondary hover:border-accent/50 hover:bg-surface'
                }`}
              >
                <Icon name={industry.icon} size={16} />
                <span className="truncate">{industry.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-primary">
            Matched Experts ({matchedExperts.length})
          </h4>
          {(selectedExpertise || selectedIndustry) && (
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={() => {
                setSelectedExpertise('');
                setSelectedIndustry('');
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Expert Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {matchedExperts.map((expert) => (
          <div key={expert.id} className="border border-border rounded-xl p-6 hover:shadow-soft transition-all duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="relative">
                <Image
                  src={expert.avatar}
                  alt={expert.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white ${
                  expert.availability === 'Available' ? 'bg-success' : 'bg-warning'
                }`} />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-primary">{expert.name}</h5>
                <p className="text-sm text-text-secondary mb-1">{expert.role}</p>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                    <span className="text-sm font-medium text-primary">{expert.rating}</span>
                  </div>
                  <span className="text-text-muted">•</span>
                  <span className="text-sm text-text-secondary">{expert.experience}</span>
                </div>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                expert.availability === 'Available' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
              }`}>
                {expert.availability}
              </div>
            </div>

            <p className="text-sm text-text-secondary mb-4">{expert.description}</p>

            <div className="mb-4">
              <h6 className="text-xs font-semibold text-primary mb-2">Technologies</h6>
              <div className="flex flex-wrap gap-1">
                {expert.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-surface text-xs font-medium text-text-secondary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="primary"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                className="flex-1"
              >
                Connect
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="User"
                iconPosition="left"
              >
                View Profile
              </Button>
            </div>
          </div>
        ))}
      </div>

      {matchedExperts.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-text-muted mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-primary mb-2">No matches found</h4>
          <p className="text-text-secondary mb-4">
            Try adjusting your filters or contact us directly to discuss your specific needs.
          </p>
          <Button
            variant="primary"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Consultation
          </Button>
        </div>
      )}
    </div>
  );
};

export default TeamMatching;