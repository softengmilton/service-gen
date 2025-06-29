import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SearchBar from './components/SearchBar';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleCard from './components/ArticleCard';
import CategorySection from './components/CategorySection';
import LearningPaths from './components/LearningPaths';
import ResourceLibrary from './components/ResourceLibrary';
import WebinarSection from './components/WebinarSection';
import NewsletterSubscription from './components/NewsletterSubscription';

const KnowledgeCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Mock Data
  const featuredArticle = {
    id: 1,
    title: "Building Scalable Microservices Architecture with Node.js and Docker",
    excerpt: `Learn how to design and implement a robust microservices architecture that can handle millions of requests while maintaining high availability and performance. This comprehensive guide covers everything from service decomposition to deployment strategies.`,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Chen",
      role: "Senior Solutions Architect",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    publishDate: "March 15, 2024",
    readTime: 12,
    tags: ["Microservices", "Node.js", "Docker", "Architecture", "Scalability"]
  };

  const articles = [
    {
      id: 2,
      title: "Advanced React Patterns: Compound Components and Render Props",
      excerpt: "Master advanced React patterns to build more flexible and reusable components that scale with your application.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Tutorial",
      author: {
        name: "Michael Rodriguez",
        role: "Frontend Lead",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      publishDate: "March 12, 2024",
      readTime: 8,
      views: "2.3k",
      tags: ["React", "JavaScript", "Components", "Patterns"],
      isPremium: false
    },
    {
      id: 3,
      title: "Database Optimization Strategies for High-Traffic Applications",
      excerpt: "Comprehensive guide to optimizing database performance, from indexing strategies to query optimization and caching layers.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      category: "Guide",
      author: {
        name: "David Kim",
        role: "Database Architect",
        avatar: "https://randomuser.me/api/portraits/men/28.jpg"
      },
      publishDate: "March 10, 2024",
      readTime: 15,
      views: "1.8k",
      tags: ["Database", "Performance", "SQL", "Optimization"],
      isPremium: true
    },
    {
      id: 4,
      title: "Implementing Zero-Trust Security in Cloud Applications",
      excerpt: "Learn how to implement zero-trust security principles in your cloud infrastructure to protect against modern threats.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      category: "Case Study",
      author: {
        name: "Emily Watson",
        role: "Security Engineer",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg"
      },
      publishDate: "March 8, 2024",
      readTime: 10,
      views: "3.1k",
      tags: ["Security", "Cloud", "Zero-Trust", "DevSecOps"],
      isPremium: false
    },
    {
      id: 5,
      title: "Machine Learning Model Deployment with Kubernetes",
      excerpt: "Step-by-step guide to deploying and scaling ML models in production using Kubernetes and modern MLOps practices.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      category: "Tutorial",
      author: {
        name: "Alex Thompson",
        role: "ML Engineer",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg"
      },
      publishDate: "March 5, 2024",
      readTime: 18,
      views: "1.5k",
      tags: ["Machine Learning", "Kubernetes", "MLOps", "Deployment"],
      isPremium: true
    },
    {
      id: 6,
      title: "Building Real-time Applications with WebSockets and Redis",
      excerpt: "Create responsive real-time applications using WebSockets for communication and Redis for state management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Tutorial",
      author: {
        name: "Lisa Park",
        role: "Full Stack Developer",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg"
      },
      publishDate: "March 3, 2024",
      readTime: 12,
      views: "2.7k",
      tags: ["WebSockets", "Redis", "Real-time", "Node.js"],
      isPremium: false
    }
  ];

  const categories = [
    {
      name: "Frontend Development",
      description: "React, Vue, Angular, and modern frontend technologies",
      icon: "Monitor",
      color: "blue",
      articleCount: 45
    },
    {
      name: "Backend Architecture",
      description: "Server-side development, APIs, and system design",
      icon: "Server",
      color: "green",
      articleCount: 38
    },
    {
      name: "DevOps & Cloud",
      description: "Deployment, infrastructure, and cloud platforms",
      icon: "Cloud",
      color: "purple",
      articleCount: 32
    },
    {
      name: "Mobile Development",
      description: "iOS, Android, and cross-platform mobile apps",
      icon: "Smartphone",
      color: "orange",
      articleCount: 28
    },
    {
      name: "AI & Machine Learning",
      description: "Artificial intelligence and data science",
      icon: "Brain",
      color: "red",
      articleCount: 24
    },
    {
      name: "Security",
      description: "Cybersecurity, authentication, and best practices",
      icon: "Shield",
      color: "gray",
      articleCount: 19
    },
    {
      name: "Database Design",
      description: "SQL, NoSQL, and database optimization",
      icon: "Database",
      color: "blue",
      articleCount: 22
    },
    {
      name: "Performance",
      description: "Optimization, monitoring, and scalability",
      icon: "Zap",
      color: "green",
      articleCount: 31
    }
  ];

  const learningPaths = [
    {
      title: "Full Stack JavaScript Developer",
      description: "Master modern web development with JavaScript, from frontend frameworks to backend APIs and database design.",
      level: "Beginner",
      duration: "12 weeks",
      modules: 8,
      enrolled: "2.4k",
      progress: 0,
      icon: "Code",
      modulesList: [
        "JavaScript Fundamentals",
        "React Development",
        "Node.js & Express",
        "Database Integration",
        "API Design & Testing",
        "Authentication & Security",
        "Deployment & DevOps",
        "Performance Optimization"
      ]
    },
    {
      title: "Cloud Solutions Architect",
      description: "Learn to design and implement scalable cloud architectures using AWS, Azure, and modern DevOps practices.",
      level: "Advanced",
      duration: "16 weeks",
      modules: 10,
      enrolled: "1.8k",
      progress: 25,
      icon: "CloudLightning",
      modulesList: [
        "Cloud Fundamentals",
        "Infrastructure as Code",
        "Containerization & Orchestration",
        "Microservices Architecture",
        "Security & Compliance",
        "Monitoring & Logging",
        "Cost Optimization",
        "Disaster Recovery",
        "Multi-Cloud Strategies",
        "Capstone Project"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications using React Native, Flutter, and native technologies.",
      level: "Intermediate",
      duration: "10 weeks",
      modules: 6,
      enrolled: "3.1k",
      progress: 60,
      icon: "Smartphone",
      modulesList: [
        "Mobile Development Basics",
        "React Native Fundamentals",
        "Native Features Integration",
        "State Management",
        "Testing & Debugging",
        "App Store Deployment"
      ]
    },
    {
      title: "Data Science & ML Engineering",
      description: "Transform data into insights with Python, machine learning algorithms, and production ML systems.",
      level: "Advanced",
      duration: "20 weeks",
      modules: 12,
      enrolled: "1.2k",
      progress: 10,
      icon: "BarChart3",
      modulesList: [
        "Python for Data Science",
        "Statistical Analysis",
        "Machine Learning Algorithms",
        "Deep Learning Fundamentals",
        "Model Training & Validation",
        "Feature Engineering",
        "MLOps & Model Deployment",
        "Big Data Processing",
        "Computer Vision",
        "Natural Language Processing",
        "Ethics in AI",
        "Capstone Project"
      ]
    }
  ];

  const resources = [
    {
      title: "React Component Library Template",
      description: "Complete template for building and publishing your own React component library with TypeScript and Storybook.",
      type: "Template",
      format: "ZIP",
      downloads: "3.2k",
      lastUpdated: "1 week ago",
      tags: ["React", "TypeScript", "Storybook", "NPM"],
      isPremium: false
    },
    {
      title: "API Security Checklist",
      description: "Comprehensive checklist covering authentication, authorization, rate limiting, and security best practices for APIs.",
      type: "Checklist",
      format: "PDF",
      downloads: "5.8k",
      lastUpdated: "3 days ago",
      tags: ["Security", "API", "Authentication", "Best Practices"],
      isPremium: false
    },
    {
      title: "Database Schema Design Guide",
      description: "Step-by-step guide for designing efficient database schemas with normalization, indexing, and performance considerations.",
      type: "Guide",
      format: "PDF",
      downloads: "2.1k",
      lastUpdated: "2 weeks ago",
      tags: ["Database", "Schema", "SQL", "Performance"],
      isPremium: true
    },
    {
      title: "Docker Deployment Toolkit",
      description: "Collection of Docker configurations, scripts, and best practices for containerizing and deploying applications.",
      type: "Tool",
      format: "ZIP",
      downloads: "4.5k",
      lastUpdated: "5 days ago",
      tags: ["Docker", "Deployment", "DevOps", "Containers"],
      isPremium: false
    },
    {
      title: "Project Planning Worksheet",
      description: "Structured worksheet for planning software projects, including requirements gathering, timeline estimation, and risk assessment.",
      type: "Worksheet",
      format: "XLSX",
      downloads: "1.9k",
      lastUpdated: "1 week ago",
      tags: ["Project Management", "Planning", "Requirements", "Timeline"],
      isPremium: false
    },
    {
      title: "Performance Monitoring Template",
      description: "Ready-to-use monitoring dashboard templates for tracking application performance, errors, and user metrics.",
      type: "Template",
      format: "JSON",
      downloads: "2.7k",
      lastUpdated: "4 days ago",
      tags: ["Monitoring", "Performance", "Analytics", "Dashboard"],
      isPremium: true
    }
  ];

  const webinars = [
    {
      title: "Building Scalable APIs with GraphQL and Node.js",
      description: "Learn how to design and implement efficient GraphQL APIs that can handle complex data requirements while maintaining performance.",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop",
      speaker: {
        name: "Dr. James Wilson",
        title: "Principal Engineer at TechCorp",
        avatar: "https://randomuser.me/api/portraits/men/52.jpg"
      },
      date: "March 25, 2024",
      duration: "90 min",
      status: "Upcoming",
      attendees: "1.2k",
      topics: ["GraphQL", "Node.js", "API Design", "Performance", "Scalability"]
    },
    {
      title: "Modern Frontend Architecture Patterns",
      description: "Explore advanced frontend architecture patterns including micro-frontends, state management, and component design systems.",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop",
      speaker: {
        name: "Maria Garcia",
        title: "Frontend Architect at InnovateLab",
        avatar: "https://randomuser.me/api/portraits/women/38.jpg"
      },
      date: "March 20, 2024",
      duration: "75 min",
      status: "Recorded",
      attendees: "2.8k",
      topics: ["Frontend", "Architecture", "Micro-frontends", "State Management", "Design Systems"]
    },
    {
      title: "DevOps Best Practices for Startups",
      description: "Essential DevOps practices that startups can implement to improve deployment speed, reliability, and team productivity.",
      thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=300&fit=crop",
      speaker: {
        name: "Robert Chen",
        title: "DevOps Lead at StartupHub",
        avatar: "https://randomuser.me/api/portraits/men/41.jpg"
      },
      date: "March 18, 2024",
      duration: "60 min",
      status: "Live",
      attendees: "856",
      topics: ["DevOps", "CI/CD", "Infrastructure", "Automation", "Startups"]
    },
    {
      title: "AI-Powered Code Review and Quality Assurance",
      description: "Discover how AI tools can enhance code review processes, detect bugs early, and improve overall code quality in development teams.",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      speaker: {
        name: "Dr. Priya Patel",
        title: "AI Research Scientist at CodeAI",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      date: "March 15, 2024",
      duration: "85 min",
      status: "Recorded",
      attendees: "3.4k",
      topics: ["AI", "Code Review", "Quality Assurance", "Automation", "Machine Learning"]
    }
  ];

  useEffect(() => {
    setFilteredArticles(articles);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement search logic here
    console.log('Searching for:', query);
  };

  const handleFilterChange = (filter, type) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const handleCategorySelect = (category) => {
    console.log('Selected category:', category);
    // Implement category filtering logic
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary-700 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full text-accent-200 text-sm font-medium mb-6">
              <Icon name="BookOpen" size={16} />
              <span>Knowledge Center</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Learn. Build. <span className="text-accent-300">Innovate.</span>
            </h1>
            
            <p className="text-xl text-primary-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover comprehensive technical resources, industry insights, and practical guides 
              to accelerate your development journey and stay ahead of technology trends.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-primary-300">
                <Icon name="Users" size={20} />
                <span>50,000+ developers learning</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-primary-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-primary-300">
                <Icon name="BookOpen" size={20} />
                <span>500+ articles & tutorials</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-primary-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-primary-300">
                <Icon name="Award" size={20} />
                <span>Expert-authored content</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <SearchBar 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          activeFilters={activeFilters}
        />

        {/* Featured Article */}
        <FeaturedArticle article={featuredArticle} />

        {/* Categories */}
        <CategorySection 
          categories={categories}
          onCategorySelect={handleCategorySelect}
        />

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-2">
                Latest Articles
              </h2>
              <p className="text-text-secondary">
                Stay updated with our newest technical content and insights
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent hover:text-white transition-all duration-200">
                View All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, 6).map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                variant={index === 0 ? 'large' : 'default'}
              />
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <LearningPaths paths={learningPaths} />

        {/* Resource Library */}
        <ResourceLibrary resources={resources} />

        {/* Webinars */}
        <WebinarSection webinars={webinars} />

        {/* Newsletter Subscription */}
        <NewsletterSubscription />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CodeCraft</h3>
                  <p className="text-primary-300 text-sm">AGENCY</p>
                </div>
              </div>
              <p className="text-primary-300 mb-6">
                Transforming ideas into exceptional digital experiences through expert development and innovative solutions.
              </p>
              <div className="flex items-center gap-4">
                <Icon name="Github" size={20} className="text-primary-400 hover:text-white cursor-pointer transition-colors duration-200" />
                <Icon name="Twitter" size={20} className="text-primary-400 hover:text-white cursor-pointer transition-colors duration-200" />
                <Icon name="Linkedin" size={20} className="text-primary-400 hover:text-white cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="/homepage" className="text-primary-300 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="/services-deep-dive" className="text-primary-300 hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="/portfolio-showcase" className="text-primary-300 hover:text-white transition-colors duration-200">Portfolio</a></li>
                <li><a href="/innovation-lab" className="text-primary-300 hover:text-white transition-colors duration-200">Innovation Lab</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">API Reference</a></li>
                <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Community</a></li>
                <li><a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-primary-300">
                  <Icon name="Mail" size={16} />
                  <span>hello@codecraft.agency</span>
                </li>
                <li className="flex items-center gap-3 text-primary-300">
                  <Icon name="Phone" size={16} />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-primary-300">
                  <Icon name="MapPin" size={16} />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-700 pt-8 text-center">
            <p className="text-primary-400">
              © {new Date().getFullYear()} CodeCraft Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KnowledgeCenter;