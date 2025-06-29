import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import StatsSection from './components/StatsSection';
import FeaturedProject from './components/FeaturedProject';

const PortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilters, setActiveFilters] = useState({
    industry: 'All',
    technology: 'All',
    projectType: 'All',
    companySize: 'All'
  });

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Revolution Platform",
      client: "TechMart Solutions",
      industry: "E-commerce",
      description: "Complete digital transformation of a traditional retail business into a modern e-commerce powerhouse with AI-powered recommendations and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      status: "Live",
      timeline: "8 months",
      teamSize: "12 developers",
      complexity: "High",
      completedDate: "March 2024",
      liveUrl: "https://example.com",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker", "Redis", "Stripe"],
      keyMetrics: [
        { value: "340%", label: "Revenue Increase", description: "Year-over-year revenue growth after platform launch" },
        { value: "2.3s", label: "Page Load Time", description: "Average page load time across all devices" },
        { value: "94%", label: "User Satisfaction", description: "Customer satisfaction score based on post-purchase surveys" }
      ],
      detailedMetrics: [
        { label: "Conversion Rate", value: "8.7%", improvement: "+245% vs previous" },
        { label: "Mobile Traffic", value: "67%", improvement: "+180% increase" },
        { label: "Cart Abandonment", value: "12%", improvement: "-58% reduction" },
        { label: "Customer Retention", value: "78%", improvement: "+156% improvement" }
      ],
      challenge: "TechMart was losing market share to online competitors with their outdated website that couldn't handle modern e-commerce demands. They needed a complete digital transformation that could scale with their growing business while providing exceptional user experience.",
      solution: "We built a comprehensive e-commerce platform with microservices architecture, AI-powered product recommendations, real-time inventory management, and seamless payment processing. The solution included mobile-first design, advanced analytics, and automated marketing tools.",
      timeline_phases: [
        { phase: "Discovery & Planning", duration: "4 weeks" },
        { phase: "Design & Prototyping", duration: "6 weeks" },
        { phase: "Development & Testing", duration: "20 weeks" },
        { phase: "Deployment & Launch", duration: "4 weeks" }
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      technicalDecisions: [
        { decision: "Microservices Architecture", rationale: "Enables independent scaling and deployment of different platform components" },
        { decision: "React with Next.js", rationale: "Server-side rendering for better SEO and performance" },
        { decision: "MongoDB with Redis Caching", rationale: "Flexible data modeling with high-performance caching layer" }
      ],
      businessImpact: [
        "Reduced operational costs by 35% through automation",
        "Expanded market reach to 15 new geographic regions",
        "Improved customer lifetime value by 180%",
        "Enabled real-time business intelligence and reporting"
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechMart Solutions",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          quote: "CodeCraft didn't just build us a website; they transformed our entire business model. The results exceeded our wildest expectations.",
          rating: 5
        }
      ],
      metrics: { improvement: "+340%" }
    },
    {
      id: 2,
      title: "FinTech Banking Dashboard",
      client: "SecureBank Pro",
      industry: "FinTech",
      description: "Advanced banking dashboard with real-time analytics, fraud detection, and seamless user experience for both customers and administrators.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      status: "Live",
      timeline: "10 months",
      teamSize: "15 developers",
      complexity: "Enterprise",
      completedDate: "January 2024",
      liveUrl: "https://example.com",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
      keyMetrics: [
        { value: "99.9%", label: "Uptime", description: "System availability since launch" },
        { value: "0.2s", label: "Transaction Speed", description: "Average transaction processing time" },
        { value: "Zero", label: "Security Breaches", description: "Security incidents since deployment" }
      ],
      detailedMetrics: [
        { label: "User Adoption", value: "89%", improvement: "+67% vs legacy system" },
        { label: "Processing Speed", value: "0.2s", improvement: "10x faster" },
        { label: "Customer Satisfaction", value: "96%", improvement: "+34% increase" },
        { label: "Operational Efficiency", value: "78%", improvement: "+145% improvement" }
      ],
      challenge: "SecureBank needed to modernize their legacy banking system to compete with digital-first banks while maintaining the highest security standards and regulatory compliance.",
      solution: "We developed a comprehensive banking platform with advanced security features, real-time fraud detection, intuitive user interfaces, and robust administrative tools. The solution prioritized security, performance, and user experience.",
      timeline_phases: [
        { phase: "Security Assessment", duration: "6 weeks" },
        { phase: "Architecture Design", duration: "8 weeks" },
        { phase: "Development & Security Testing", duration: "24 weeks" },
        { phase: "Compliance & Launch", duration: "6 weeks" }
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      technicalDecisions: [
        { decision: "Multi-layer Security Architecture", rationale: "Bank-grade security with multiple authentication and encryption layers" },
        { decision: "Real-time Processing Engine", rationale: "Instant transaction processing and fraud detection capabilities" },
        { decision: "Microservices with API Gateway", rationale: "Scalable architecture with centralized security and monitoring" }
      ],
      businessImpact: [
        "Reduced fraud incidents by 87% through AI-powered detection",
        "Improved customer onboarding time by 65%",
        "Increased mobile banking adoption by 234%",
        "Achieved full regulatory compliance across all jurisdictions"
      ],
      testimonials: [
        {
          name: "Michael Chen",
          role: "CTO, SecureBank Pro",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          quote: "The security and performance of this platform exceeded our stringent banking requirements. CodeCraft delivered enterprise-grade excellence.",
          rating: 5
        }
      ],
      metrics: { improvement: "+234%" }
    },
    {
      id: 3,
      title: "Healthcare Management System",
      client: "MedCare Networks",
      industry: "Healthcare",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, telemedicine capabilities, and HIPAA compliance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      status: "Live",
      timeline: "12 months",
      teamSize: "18 developers",
      complexity: "Enterprise",
      completedDate: "February 2024",
      liveUrl: "https://example.com",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "WebRTC"],
      keyMetrics: [
        { value: "50K+", label: "Patients Managed", description: "Active patients using the platform" },
        { value: "98%", label: "Appointment Efficiency", description: "Successful appointment completion rate" },
        { value: "HIPAA", label: "Compliant", description: "Full healthcare data protection compliance" }
      ],
      detailedMetrics: [
        { label: "Patient Satisfaction", value: "94%", improvement: "+45% increase" },
        { label: "Administrative Efficiency", value: "76%", improvement: "+189% improvement" },
        { label: "Telemedicine Adoption", value: "67%", improvement: "New capability" },
        { label: "Data Security Score", value: "99.8%", improvement: "Industry leading" }
      ],
      challenge: "MedCare needed to digitize their healthcare operations while ensuring strict HIPAA compliance, seamless patient experience, and efficient provider workflows.",
      solution: "We created a comprehensive healthcare platform with secure patient portals, telemedicine capabilities, automated scheduling, and integrated billing systems, all while maintaining the highest security and compliance standards.",
      timeline_phases: [
        { phase: "Compliance Planning", duration: "8 weeks" },
        { phase: "System Design", duration: "10 weeks" },
        { phase: "Development & Testing", duration: "28 weeks" },
        { phase: "Certification & Launch", duration: "6 weeks" }
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      technicalDecisions: [
        { decision: "End-to-End Encryption", rationale: "HIPAA compliance requires maximum data protection" },
        { decision: "WebRTC for Telemedicine", rationale: "Secure, real-time video communication without third-party dependencies" },
        { decision: "Audit Trail System", rationale: "Complete tracking of all data access and modifications for compliance" }
      ],
      businessImpact: [
        "Reduced administrative overhead by 45%",
        "Improved patient engagement by 156%",
        "Enabled remote care for 67% of consultations",
        "Achieved 100% HIPAA compliance certification"
      ],
      testimonials: [
        {
          name: "Dr. Emily Rodriguez",
          role: "Chief Medical Officer, MedCare Networks",
          avatar: "https://randomuser.me/api/portraits/women/28.jpg",
          quote: "This platform revolutionized how we deliver healthcare. The telemedicine features have been game-changing for our patients.",
          rating: 5
        }
      ],
      metrics: { improvement: "+156%" }
    },
    {
      id: 4,
      title: "SaaS Analytics Platform",
      client: "DataInsight Corp",
      industry: "SaaS",
      description: "Advanced analytics platform with real-time data processing, customizable dashboards, and AI-powered insights for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      status: "Live",
      timeline: "6 months",
      teamSize: "10 developers",
      complexity: "High",
      completedDate: "April 2024",
      liveUrl: "https://example.com",
      technologies: ["React", "Python", "MongoDB", "Redis", "Docker", "AWS", "D3.js"],
      keyMetrics: [
        { value: "1M+", label: "Data Points/Day", description: "Real-time data processing capacity" },
        { value: "200ms", label: "Query Response", description: "Average dashboard load time" },
        { value: "99.5%", label: "Accuracy Rate", description: "AI prediction accuracy" }
      ],
      detailedMetrics: [
        { label: "User Engagement", value: "87%", improvement: "+123% increase" },
        { label: "Data Processing Speed", value: "200ms", improvement: "15x faster" },
        { label: "Customer Retention", value: "94%", improvement: "+67% improvement" },
        { label: "Revenue per User", value: "$2,340", improvement: "+189% increase" }
      ],
      challenge: "DataInsight needed a scalable analytics platform that could process massive amounts of data in real-time while providing intuitive visualizations and actionable insights.",
      solution: "We built a high-performance analytics platform with real-time data processing, interactive dashboards, machine learning capabilities, and customizable reporting tools that scale with business needs.",
      timeline_phases: [
        { phase: "Data Architecture", duration: "4 weeks" },
        { phase: "Analytics Engine", duration: "8 weeks" },
        { phase: "Dashboard Development", duration: "12 weeks" },
        { phase: "AI Integration & Launch", duration: "6 weeks" }
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      technicalDecisions: [
        { decision: "Stream Processing Architecture", rationale: "Real-time data processing for immediate insights" },
        { decision: "Machine Learning Pipeline", rationale: "Automated pattern recognition and predictive analytics" },
        { decision: "Microservices with Event Sourcing", rationale: "Scalable architecture with complete data lineage" }
      ],
      businessImpact: [
        "Reduced time-to-insight by 78%",
        "Increased customer engagement by 145%",
        "Enabled predictive analytics capabilities",
        "Improved decision-making speed by 234%"
      ],
      testimonials: [
        {
          name: "James Wilson",
          role: "VP of Product, DataInsight Corp",
          avatar: "https://randomuser.me/api/portraits/men/34.jpg",
          quote: "The analytics platform transformed how our clients understand their data. The real-time capabilities are phenomenal.",
          rating: 5
        }
      ],
      metrics: { improvement: "+189%" }
    },
    {
      id: 5,
      title: "EdTech Learning Platform",
      client: "EduFuture Academy",
      industry: "Education",
      description: "Interactive learning platform with video streaming, progress tracking, gamification, and collaborative tools for modern education.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      status: "Live",
      timeline: "9 months",
      teamSize: "14 developers",
      complexity: "High",
      completedDate: "December 2023",
      liveUrl: "https://example.com",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "WebRTC", "Socket.io"],
      keyMetrics: [
        { value: "25K+", label: "Active Students", description: "Students using the platform daily" },
        { value: "92%", label: "Completion Rate", description: "Course completion rate" },
        { value: "4.8/5", label: "User Rating", description: "Average platform rating" }
      ],
      detailedMetrics: [
        { label: "Student Engagement", value: "89%", improvement: "+167% increase" },
        { label: "Learning Outcomes", value: "94%", improvement: "+78% improvement" },
        { label: "Teacher Productivity", value: "76%", improvement: "+134% increase" },
        { label: "Platform Uptime", value: "99.7%", improvement: "Industry leading" }
      ],
      challenge: "EduFuture needed a comprehensive learning platform that could engage students, support teachers, and provide measurable learning outcomes in a digital-first education environment.",
      solution: "We developed an interactive learning platform with video streaming, real-time collaboration, gamification elements, progress tracking, and comprehensive analytics for both students and educators.",
      timeline_phases: [
        { phase: "Educational Research", duration: "6 weeks" },
        { phase: "Platform Design", duration: "8 weeks" },
        { phase: "Development & Testing", duration: "22 weeks" },
        { phase: "Pilot & Launch", duration: "6 weeks" }
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop",
      technicalDecisions: [
        { decision: "Real-time Collaboration Engine", rationale: "Enable seamless student-teacher and peer-to-peer interaction" },
        { decision: "Adaptive Learning Algorithm", rationale: "Personalized learning paths based on individual progress" },
        { decision: "Scalable Video Infrastructure", rationale: "High-quality video streaming for all device types" }
      ],
      businessImpact: [
        "Improved learning outcomes by 78%",
        "Increased student engagement by 167%",
        "Reduced administrative workload by 45%",
        "Expanded reach to 15 new markets"
      ],
      testimonials: [
        {
          name: "Dr. Lisa Thompson",
          role: "Director of Education, EduFuture Academy",
          avatar: "https://randomuser.me/api/portraits/women/41.jpg",
          quote: "This platform has revolutionized how we deliver education. Our students are more engaged than ever before.",
          rating: 5
        }
      ],
      metrics: { improvement: "+167%" }
    },
    {
      id: 6,
      title: "Real Estate CRM System",
      client: "PropertyPro Realty",
      industry: "Real Estate",
      description: "Comprehensive CRM system with property management, client tracking, automated marketing, and mobile-first design for real estate professionals.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      status: "In Development",
      timeline: "7 months",
      teamSize: "11 developers",
      complexity: "Medium",
      completedDate: "Expected June 2024",
      liveUrl: null,
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "Docker", "Stripe"],
      keyMetrics: [
        { value: "500+", label: "Properties Listed", description: "Properties managed through the system" },
        { value: "85%", label: "Lead Conversion", description: "Lead to client conversion rate" },
        { value: "60%", label: "Time Saved", description: "Reduction in administrative tasks" }
      ],
      detailedMetrics: [
        { label: "Agent Productivity", value: "78%", improvement: "+145% increase" },
        { label: "Client Satisfaction", value: "91%", improvement: "+56% improvement" },
        { label: "Deal Closure Time", value: "21 days", improvement: "-43% reduction" },
        { label: "Marketing ROI", value: "340%", improvement: "+189% increase" }
      ],
      challenge: "PropertyPro needed a modern CRM system to manage their growing client base, streamline property listings, and automate marketing campaigns while maintaining personal client relationships.",
      solution: "We're building a comprehensive CRM with property management, client tracking, automated marketing workflows, mobile apps, and integration with popular real estate platforms.",
      timeline_phases: [
        { phase: "Requirements Analysis", duration: "4 weeks" },
        { phase: "System Architecture", duration: "6 weeks" },
        { phase: "Development Phase 1", duration: "16 weeks" },
        { phase: "Testing & Launch", duration: "6 weeks" }
      ],
      architectureDiagram: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop",
      technicalDecisions: [
        { decision: "Mobile-First Architecture", rationale: "Real estate agents need full functionality on mobile devices" },
        { decision: "Automated Marketing Engine", rationale: "Streamline lead nurturing and client communication" },
        { decision: "Third-party Integrations", rationale: "Connect with MLS, social media, and marketing platforms" }
      ],
      businessImpact: [
        "Expected 60% reduction in administrative tasks",
        "Projected 85% improvement in lead conversion",
        "Automated marketing campaign management",
        "Mobile-first approach for field agents"
      ],
      testimonials: [
        {
          name: "Robert Martinez",
          role: "Broker, PropertyPro Realty",
          avatar: "https://randomuser.me/api/portraits/men/52.jpg",
          quote: "Even in development, this system is already transforming how we manage our properties and clients. Can't wait for the full launch!",
          rating: 5
        }
      ],
      metrics: { improvement: "+145%" }
    }
  ];

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesIndustry = activeFilters.industry === 'All' || project.industry === activeFilters.industry;
      const matchesTechnology = activeFilters.technology === 'All' || 
                               project.technologies.some(tech => tech.includes(activeFilters.technology));
      const matchesProjectType = activeFilters.projectType === 'All' || 
                                 project.description.toLowerCase().includes(activeFilters.projectType.toLowerCase());
      const matchesCompanySize = activeFilters.companySize === 'All' || 
                                project.complexity.toLowerCase().includes(activeFilters.companySize.toLowerCase());

      return matchesSearch && matchesIndustry && matchesTechnology && matchesProjectType && matchesCompanySize;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.completedDate) - new Date(a.completedDate);
        case 'impact':
          return parseInt(b.metrics.improvement.replace(/[^\d]/g, '')) - parseInt(a.metrics.improvement.replace(/[^\d]/g, ''));
        case 'complexity':
          const complexityOrder = { 'Enterprise': 3, 'High': 2, 'Medium': 1 };
          return (complexityOrder[b.complexity] || 0) - (complexityOrder[a.complexity] || 0);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchQuery, activeFilters, sortBy]);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'reset') {
      setActiveFilters({
        industry: 'All',
        technology: 'All',
        projectType: 'All',
        companySize: 'All'
      });
    } else {
      setActiveFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Featured project (first project)
  const featuredProject = projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio Showcase - CodeCraft Agency | Transformative Software Solutions</title>
        <meta name="description" content="Explore CodeCraft Agency's portfolio of transformative software solutions. See how we've helped businesses achieve 300%+ ROI through custom development, innovative design, and strategic technology implementation." />
        <meta name="keywords" content="software development portfolio, custom software solutions, web development case studies, mobile app development, enterprise software, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Briefcase" size={16} />
                <span>Portfolio Showcase</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                Transformative Solutions,
                <span className="block text-accent">Measurable Results</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped businesses across industries achieve digital transformation 
                through innovative software solutions, delivering an average of 300% ROI and 
                measurable business impact.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "300%", label: "Average ROI" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "15+", label: "Industries Served" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-text-secondary font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          </div>
        </section>

        {/* Filter and Projects Section */}
        <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Explore Our Complete Portfolio
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Filter by industry, technology, or project type to find relevant case studies 
                that match your business needs and challenges.
              </p>
            </motion.div>

            <FilterBar
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-text-secondary">
                Showing <span className="font-semibold text-primary">{filteredAndSortedProjects.length}</span> of{' '}
                <span className="font-semibold text-primary">{projects.length}</span> projects
              </div>
              {searchQuery && (
                <div className="text-sm text-text-secondary">
                  Search results for "<span className="font-semibold text-primary">{searchQuery}</span>"
                </div>
              )}
            </div>

            {/* Projects Grid */}
            {filteredAndSortedProjects.length > 0 ? (
              <motion.div
                layout
                className={`grid gap-8 ${
                  viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
                }`}
              >
                {filteredAndSortedProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                    isExpanded={viewMode === 'list'}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={64} className="text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">No Projects Found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters or search terms to find relevant projects.
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSearchQuery('');
                    handleFilterChange('reset');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection projects={projects} />

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Join the growing list of businesses that have transformed their operations 
                and achieved remarkable growth through our custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="right"
                  onClick={() => window.location.href = '/contact-consultation'}
                  className="shadow-soft hover:shadow-elevated"
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => window.location.href = '/services-deep-dive'}
                >
                  Explore Our Services
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default PortfolioShowcase;