import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyRadar = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: 'Monitor', color: 'accent' },
    { id: 'backend', label: 'Backend', icon: 'Server', color: 'success' },
    { id: 'mobile', label: 'Mobile', icon: 'Smartphone', color: 'warning' },
    { id: 'cloud', label: 'Cloud & DevOps', icon: 'Cloud', color: 'primary' },
    { id: 'database', label: 'Database', icon: 'Database', color: 'secondary' },
    { id: 'ai', label: 'AI & ML', icon: 'Brain', color: 'error' }
  ];

  const technologies = {
    frontend: [
      { name: 'React', proficiency: 95, experience: '5+ years', projects: 150, status: 'expert' },
      { name: 'Next.js', proficiency: 90, experience: '3+ years', projects: 80, status: 'expert' },
      { name: 'Vue.js', proficiency: 85, experience: '4+ years', projects: 60, status: 'advanced' },
      { name: 'Angular', proficiency: 80, experience: '3+ years', projects: 45, status: 'advanced' },
      { name: 'TypeScript', proficiency: 92, experience: '4+ years', projects: 120, status: 'expert' },
      { name: 'Tailwind CSS', proficiency: 95, experience: '3+ years', projects: 100, status: 'expert' },
      { name: 'Svelte', proficiency: 75, experience: '2+ years', projects: 25, status: 'intermediate' },
      { name: 'WebAssembly', proficiency: 65, experience: '1+ years', projects: 10, status: 'learning' }
    ],
    backend: [
      { name: 'Node.js', proficiency: 95, experience: '5+ years', projects: 140, status: 'expert' },
      { name: 'Python', proficiency: 90, experience: '4+ years', projects: 85, status: 'expert' },
      { name: 'Java', proficiency: 85, experience: '6+ years', projects: 70, status: 'advanced' },
      { name: 'Go', proficiency: 80, experience: '2+ years', projects: 35, status: 'advanced' },
      { name: 'PHP', proficiency: 75, experience: '4+ years', projects: 50, status: 'intermediate' },
      { name: 'C#', proficiency: 78, experience: '3+ years', projects: 40, status: 'intermediate' },
      { name: 'Rust', proficiency: 70, experience: '1+ years', projects: 15, status: 'learning' },
      { name: 'GraphQL', proficiency: 88, experience: '3+ years', projects: 65, status: 'advanced' }
    ],
    mobile: [
      { name: 'React Native', proficiency: 92, experience: '4+ years', projects: 75, status: 'expert' },
      { name: 'Flutter', proficiency: 85, experience: '3+ years', projects: 45, status: 'advanced' },
      { name: 'iOS (Swift)', proficiency: 80, experience: '3+ years', projects: 35, status: 'advanced' },
      { name: 'Android (Kotlin)', proficiency: 82, experience: '3+ years', projects: 40, status: 'advanced' },
      { name: 'Ionic', proficiency: 75, experience: '2+ years', projects: 25, status: 'intermediate' },
      { name: 'Xamarin', proficiency: 70, experience: '2+ years', projects: 20, status: 'intermediate' },
      { name: 'PWA', proficiency: 88, experience: '3+ years', projects: 55, status: 'advanced' },
      { name: 'Cordova', proficiency: 65, experience: '2+ years', projects: 15, status: 'learning' }
    ],
    cloud: [
      { name: 'AWS', proficiency: 90, experience: '4+ years', projects: 95, status: 'expert' },
      { name: 'Google Cloud', proficiency: 85, experience: '3+ years', projects: 60, status: 'advanced' },
      { name: 'Azure', proficiency: 80, experience: '3+ years', projects: 50, status: 'advanced' },
      { name: 'Docker', proficiency: 92, experience: '4+ years', projects: 110, status: 'expert' },
      { name: 'Kubernetes', proficiency: 85, experience: '3+ years', projects: 70, status: 'advanced' },
      { name: 'Terraform', proficiency: 80, experience: '2+ years', projects: 45, status: 'advanced' },
      { name: 'Jenkins', proficiency: 78, experience: '3+ years', projects: 55, status: 'intermediate' },
      { name: 'GitLab CI', proficiency: 82, experience: '2+ years', projects: 40, status: 'advanced' }
    ],
    database: [
      { name: 'PostgreSQL', proficiency: 90, experience: '5+ years', projects: 120, status: 'expert' },
      { name: 'MongoDB', proficiency: 88, experience: '4+ years', projects: 85, status: 'advanced' },
      { name: 'MySQL', proficiency: 85, experience: '5+ years', projects: 95, status: 'advanced' },
      { name: 'Redis', proficiency: 82, experience: '3+ years', projects: 70, status: 'advanced' },
      { name: 'Elasticsearch', proficiency: 78, experience: '2+ years', projects: 35, status: 'intermediate' },
      { name: 'DynamoDB', proficiency: 75, experience: '2+ years', projects: 30, status: 'intermediate' },
      { name: 'Neo4j', proficiency: 70, experience: '1+ years', projects: 15, status: 'learning' },
      { name: 'InfluxDB', proficiency: 68, experience: '1+ years', projects: 12, status: 'learning' }
    ],
    ai: [
      { name: 'TensorFlow', proficiency: 80, experience: '2+ years', projects: 25, status: 'advanced' },
      { name: 'PyTorch', proficiency: 75, experience: '2+ years', projects: 20, status: 'intermediate' },
      { name: 'OpenAI API', proficiency: 85, experience: '1+ years', projects: 30, status: 'advanced' },
      { name: 'Hugging Face', proficiency: 78, experience: '1+ years', projects: 18, status: 'intermediate' },
      { name: 'Scikit-learn', proficiency: 82, experience: '3+ years', projects: 35, status: 'advanced' },
      { name: 'Computer Vision', proficiency: 75, experience: '2+ years', projects: 22, status: 'intermediate' },
      { name: 'NLP', proficiency: 80, experience: '2+ years', projects: 28, status: 'advanced' },
      { name: 'MLOps', proficiency: 70, experience: '1+ years', projects: 15, status: 'learning' }
    ]
  };

  const getStatusColor = (status) => {
    const statusColors = {
      expert: 'text-success bg-success/10 border-success/20',
      advanced: 'text-accent bg-accent/10 border-accent/20',
      intermediate: 'text-warning bg-warning/10 border-warning/20',
      learning: 'text-error bg-error/10 border-error/20'
    };
    return statusColors[status] || statusColors.intermediate;
  };

  const getStatusIcon = (status) => {
    const statusIcons = {
      expert: 'Award',
      advanced: 'Star',
      intermediate: 'TrendingUp',
      learning: 'BookOpen'
    };
    return statusIcons[status] || statusIcons.intermediate;
  };

  const getProficiencyColor = (proficiency) => {
    if (proficiency >= 90) return 'bg-success';
    if (proficiency >= 80) return 'bg-accent';
    if (proficiency >= 70) return 'bg-warning';
    return 'bg-error';
  };

  const getCategoryColor = (color) => {
    const colorMap = {
      accent: 'bg-accent text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-white',
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      error: 'bg-error text-white'
    };
    return colorMap[color] || colorMap.accent;
  };

  const getCategoryBorder = (color) => {
    const colorMap = {
      accent: 'border-accent bg-accent/5',
      success: 'border-success bg-success/5',
      warning: 'border-warning bg-warning/5',
      primary: 'border-primary bg-primary/5',
      secondary: 'border-secondary bg-secondary/5',
      error: 'border-error bg-error/5'
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Radar" size={16} />
            <span>Technology Expertise</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Technology Radar
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our comprehensive technology stack and expertise levels across different domains.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 border-2 ${
                selectedCategory === category.id
                  ? getCategoryColor(category.color)
                  : `${getCategoryBorder(category.color)} text-text-secondary hover:text-primary`
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies[selectedCategory].map((tech, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-elevated transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                  {tech.name}
                </h3>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(tech.status)}`}>
                  <div className="flex items-center space-x-1">
                    <Icon name={getStatusIcon(tech.status)} size={12} />
                    <span className="capitalize">{tech.status}</span>
                  </div>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">Proficiency</span>
                  <span className="text-sm font-medium text-primary">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full ${getProficiencyColor(tech.proficiency)} transition-all duration-1000 ease-out`}
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-text-muted" />
                    <span className="text-sm text-text-secondary">Experience</span>
                  </div>
                  <span className="text-sm font-medium text-primary">{tech.experience}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Briefcase" size={14} className="text-text-muted" />
                    <span className="text-sm text-text-secondary">Projects</span>
                  </div>
                  <span className="text-sm font-medium text-primary">{tech.projects}+</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full text-center text-accent text-sm font-medium hover:text-accent-600 transition-colors duration-300">
                  View Projects →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Our Technology Expertise</h3>
            <p className="text-text-secondary">
              Comprehensive skills across the entire technology spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Code2" size={28} className="text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-text-secondary">Technologies Mastered</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={28} className="text-success" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-text-secondary">Expert Level Skills</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={28} className="text-warning" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-text-secondary">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={28} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-text-secondary">Expert Developers</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need a Specific Technology?
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Don't see the technology you need? Our team is constantly learning and adapting to new technologies. 
              Let's discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center space-x-2 bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-300">
                <Icon name="MessageCircle" size={20} />
                <span>Discuss Technology Needs</span>
              </button>
              <button className="inline-flex items-center space-x-2 text-primary border border-border px-8 py-3 rounded-lg font-medium hover:bg-surface transition-colors duration-300">
                <Icon name="FileText" size={20} />
                <span>Request Technology Assessment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyRadar;