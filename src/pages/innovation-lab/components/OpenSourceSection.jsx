import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OpenSourceSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const repositories = [
    {
      name: "react-performance-toolkit",
      description: "A comprehensive toolkit for optimizing React application performance with built-in monitoring and analysis tools.",
      category: "React",
      language: "TypeScript",
      stars: 2847,
      forks: 312,
      issues: 23,
      lastUpdate: "2 days ago",
      contributors: 18,
      license: "MIT",
      url: "https://github.com/codecraft/react-performance-toolkit",
      topics: ["react", "performance", "optimization", "monitoring"]
    },
    {
      name: "ai-code-reviewer",
      description: "AI-powered code review assistant that provides intelligent suggestions and identifies potential issues in pull requests.",
      category: "AI/ML",
      language: "Python",
      stars: 1923,
      forks: 187,
      issues: 15,
      lastUpdate: "1 week ago",
      contributors: 12,
      license: "Apache-2.0",
      url: "https://github.com/codecraft/ai-code-reviewer",
      topics: ["ai", "code-review", "machine-learning", "automation"]
    },
    {
      name: "microservice-orchestrator",
      description: "Lightweight orchestration framework for managing microservices with built-in service discovery and load balancing.",
      category: "DevOps",
      language: "Go",
      stars: 1456,
      forks: 203,
      issues: 8,
      lastUpdate: "5 days ago",
      contributors: 15,
      license: "MIT",
      url: "https://github.com/codecraft/microservice-orchestrator",
      topics: ["microservices", "orchestration", "devops", "kubernetes"]
    },
    {
      name: "blockchain-identity-manager",
      description: "Decentralized identity management system built on blockchain technology with privacy-first approach.",
      category: "Blockchain",
      language: "Solidity",
      stars: 892,
      forks: 124,
      issues: 12,
      lastUpdate: "3 days ago",
      contributors: 8,
      license: "GPL-3.0",
      url: "https://github.com/codecraft/blockchain-identity-manager",
      topics: ["blockchain", "identity", "privacy", "web3"]
    },
    {
      name: "iot-data-pipeline",
      description: "Scalable data pipeline for IoT devices with real-time processing and analytics capabilities.",
      category: "IoT",
      language: "Rust",
      stars: 634,
      forks: 89,
      issues: 6,
      lastUpdate: "1 week ago",
      contributors: 10,
      license: "MIT",
      url: "https://github.com/codecraft/iot-data-pipeline",
      topics: ["iot", "data-pipeline", "real-time", "analytics"]
    },
    {
      name: "quantum-simulator",
      description: "Educational quantum computing simulator with visual circuit builder and algorithm implementations.",
      category: "Quantum",
      language: "JavaScript",
      stars: 445,
      forks: 67,
      issues: 4,
      lastUpdate: "2 weeks ago",
      contributors: 6,
      license: "MIT",
      url: "https://github.com/codecraft/quantum-simulator",
      topics: ["quantum", "simulation", "education", "algorithms"]
    }
  ];

  const categories = ['all', 'React', 'AI/ML', 'DevOps', 'Blockchain', 'IoT', 'Quantum'];

  const getLanguageColor = (language) => {
    const colors = {
      TypeScript: '#3178C6',
      Python: '#3776AB',
      Go: '#00ADD8',
      Solidity: '#363636',
      Rust: '#000000',
      JavaScript: '#F7DF1E'
    };
    return colors[language] || '#64748B';
  };

  const filteredRepos = selectedCategory === 'all' 
    ? repositories 
    : repositories.filter(repo => repo.category === selectedCategory);

  const totalStats = repositories.reduce((acc, repo) => ({
    stars: acc.stars + repo.stars,
    forks: acc.forks + repo.forks,
    contributors: acc.contributors + repo.contributors
  }), { stars: 0, forks: 0, contributors: 0 });

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Open Source Contributions</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          We believe in giving back to the developer community through open source projects that solve real-world problems and advance the state of technology.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Star" size={24} className="text-success" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.stars.toLocaleString()}</div>
          <div className="text-sm text-text-secondary">GitHub Stars</div>
        </div>
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="GitFork" size={24} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.forks.toLocaleString()}</div>
          <div className="text-sm text-text-secondary">Forks</div>
        </div>
        <div className="bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Users" size={24} className="text-warning" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.contributors}</div>
          <div className="text-sm text-text-secondary">Contributors</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary text-white shadow-soft'
                : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>

      {/* Repository Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {filteredRepos.map((repo, index) => (
          <div key={index} className="bg-background border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="Github" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {repo.name}
                  </h3>
                  <span className="text-sm text-text-muted">{repo.category}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                iconName="ExternalLink"
                onClick={() => window.open(repo.url, '_blank')}
              />
            </div>

            <p className="text-text-secondary mb-4 leading-relaxed">
              {repo.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {repo.topics.map((topic, topicIndex) => (
                <span 
                  key={topicIndex}
                  className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
                >
                  #{topic}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-text-muted mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  ></div>
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Scale" size={14} />
                  <span>{repo.license}</span>
                </div>
              </div>
              <span>Updated {repo.lastUpdate}</span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4 text-sm text-text-muted">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} />
                  <span>{repo.stars.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="GitFork" size={14} />
                  <span>{repo.forks}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="AlertCircle" size={14} />
                  <span>{repo.issues}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{repo.contributors}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-text-primary mb-3">Want to Contribute?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Join our open source community and help us build tools that make developers'lives easier. Whether you're fixing bugs, adding features, or improving documentation, every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open('https://github.com/codecraft', '_blank')}
            >
              View All Projects
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.location.href = '/contact-consultation'}
            >
              Discuss Collaboration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceSection;