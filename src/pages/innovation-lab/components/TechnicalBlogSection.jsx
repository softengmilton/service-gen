import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TechnicalBlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Microservices with Event-Driven Architecture",
      excerpt: "Learn how to design and implement robust microservices using event-driven patterns, including practical examples with Apache Kafka and Docker.",
      category: "Architecture",
      difficulty: "Advanced",
      readTime: "12 min read",
      publishDate: "2024-01-15",
      author: "Sarah Chen",
      authorRole: "Senior Architect",
      authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      tags: ["Microservices", "Event-Driven", "Kafka", "Docker"],
      views: 3420,
      likes: 187,
      comments: 23
    },
    {
      id: 2,
      title: "Advanced React Performance Optimization Techniques",
      excerpt: "Deep dive into React performance optimization strategies including memoization, code splitting, and virtual DOM optimization for large-scale applications.",
      category: "Frontend",
      difficulty: "Intermediate",
      readTime: "8 min read",
      publishDate: "2024-01-12",
      author: "Michael Rodriguez",
      authorRole: "Frontend Lead",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      tags: ["React", "Performance", "Optimization", "JavaScript"],
      views: 2890,
      likes: 156,
      comments: 31
    },
    {
      id: 3,
      title: "Machine Learning Model Deployment with Kubernetes",
      excerpt: "Complete guide to deploying ML models in production using Kubernetes, including auto-scaling, monitoring, and A/B testing strategies.",
      category: "AI/ML",
      difficulty: "Advanced",
      readTime: "15 min read",
      publishDate: "2024-01-10",
      author: "Dr. Emily Watson",
      authorRole: "ML Engineer",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      tags: ["Machine Learning", "Kubernetes", "MLOps", "Deployment"],
      views: 4120,
      likes: 234,
      comments: 45
    },
    {
      id: 4,
      title: "Securing APIs with OAuth 2.0 and JWT Best Practices",
      excerpt: "Comprehensive security guide covering OAuth 2.0 implementation, JWT token management, and common security vulnerabilities in API design.",
      category: "Security",
      difficulty: "Intermediate",
      readTime: "10 min read",
      publishDate: "2024-01-08",
      author: "James Park",
      authorRole: "Security Engineer",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      tags: ["Security", "OAuth", "JWT", "API"],
      views: 2156,
      likes: 98,
      comments: 17
    },
    {
      id: 5,
      title: "Building Real-time Applications with WebSockets and Redis",
      excerpt: "Learn to create responsive real-time applications using WebSockets, Redis pub/sub, and Node.js for instant data synchronization.",
      category: "Backend",
      difficulty: "Intermediate",
      readTime: "9 min read",
      publishDate: "2024-01-05",
      author: "Lisa Thompson",
      authorRole: "Backend Developer",
      authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      tags: ["WebSockets", "Redis", "Real-time", "Node.js"],
      views: 1890,
      likes: 112,
      comments: 19
    },
    {
      id: 6,
      title: "Introduction to Quantum Computing for Developers",
      excerpt: "Beginner-friendly introduction to quantum computing concepts, quantum algorithms, and practical applications using Qiskit.",
      category: "Emerging Tech",
      difficulty: "Beginner",
      readTime: "6 min read",
      publishDate: "2024-01-03",
      author: "Dr. Alex Kumar",
      authorRole: "Research Scientist",
      authorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      tags: ["Quantum Computing", "Qiskit", "Algorithms", "Physics"],
      views: 3245,
      likes: 201,
      comments: 38
    }
  ];

  const categories = ['all', 'Architecture', 'Frontend', 'Backend', 'AI/ML', 'Security', 'Emerging Tech'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success/10 border-success/20';
      case 'Intermediate': return 'text-warning bg-warning/10 border-warning/20';
      case 'Advanced': return 'text-error bg-error/10 border-error/20';
      default: return 'text-text-muted bg-surface border-border';
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || post.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Technical Blog</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          In-depth technical articles, tutorials, and insights from our engineering team covering the latest in software development and emerging technologies.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-surface border border-border rounded-xl p-6 mb-8">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Search */}
          <div className="lg:col-span-1">
            <Input
              type="search"
              placeholder="Search articles, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Category Filter */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'All Levels' : difficulty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-300 group">
            {/* Featured Image */}
            <div className="relative overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(post.difficulty)}`}>
                  {post.difficulty}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author and Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-3">
                  <Image 
                    src={post.authorAvatar} 
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-text-primary">{post.author}</div>
                    <div className="text-xs text-text-muted">{post.authorRole}</div>
                  </div>
                </div>
                <div className="text-xs text-text-muted">
                  {post.readTime}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mt-4 text-sm text-text-muted">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={14} />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={14} />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MessageCircle" size={14} />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Read More Button */}
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  fullWidth
                  onClick={() => console.log(`Reading post: ${post.title}`)}
                >
                  Read Full Article
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Search" size={32} className="text-text-muted" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">No articles found</h3>
          <p className="text-text-secondary mb-4">Try adjusting your search terms or filters</p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Newsletter Subscription */}
      <div className="mt-12">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-text-primary mb-3">Stay Updated</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Subscribe to our technical newsletter and get the latest articles, tutorials, and insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button
              variant="primary"
              iconName="Send"
              iconPosition="right"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalBlogSection;