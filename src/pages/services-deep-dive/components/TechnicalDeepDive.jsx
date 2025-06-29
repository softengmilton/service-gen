import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalDeepDive = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const tabs = [
    { id: 'architecture', label: 'Architecture', icon: 'Layers' },
    { id: 'code', label: 'Code Samples', icon: 'Code' },
    { id: 'methodology', label: 'Methodology', icon: 'GitBranch' },
    { id: 'security', label: 'Security', icon: 'Shield' }
  ];

  const architectureData = {
    title: "Scalable Microservices Architecture",
    description: "Our enterprise-grade architecture ensures scalability, maintainability, and high performance.",
    components: [
      { name: "API Gateway", description: "Centralized entry point for all client requests", color: "accent" },
      { name: "Microservices", description: "Independent, loosely coupled services", color: "success" },
      { name: "Message Queue", description: "Asynchronous communication between services", color: "warning" },
      { name: "Database Cluster", description: "Distributed database with read replicas", color: "error" },
      { name: "CDN", description: "Global content delivery network", color: "primary" },
      { name: "Monitoring", description: "Real-time application monitoring and alerts", color: "secondary" }
    ]
  };

  const codeExamples = [
    {
      title: "React Component with Hooks",
      language: "jsx",
      code: `import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../api/users';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const userData = await fetchUserData(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      loadUser();
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <img src={user.avatar} alt={user.name} />
    </div>
  );
};

export default UserProfile;`
    },
    {
      title: "Node.js API Endpoint",
      language: "javascript",
      code: `const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// Create new user
router.post('/users',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    body('name').trim().isLength({ min: 2 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const { email, password, name } = req.body;
      
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'User already exists'
        });
      }

      // Create new user
      const user = new User({ email, password, name });
      await user.save();

      res.status(201).json({
        success: true,
        data: {
          id: user._id,
          email: user.email,
          name: user.name
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Server error'
      });
    }
  }
);

module.exports = router;`
    }
  ];

  const methodologySteps = [
    {
      phase: "Discovery",
      duration: "1-2 weeks",
      activities: ["Requirements gathering", "Technical analysis", "Architecture planning", "Risk assessment"],
      deliverables: ["Technical specification", "Project roadmap", "Risk mitigation plan"]
    },
    {
      phase: "Design",
      duration: "2-3 weeks", 
      activities: ["UI/UX design", "Database design", "API specification", "Security planning"],
      deliverables: ["Design mockups", "Database schema", "API documentation", "Security audit"]
    },
    {
      phase: "Development",
      duration: "8-12 weeks",
      activities: ["Sprint planning", "Code development", "Code reviews", "Testing"],
      deliverables: ["Working software", "Test reports", "Code documentation", "Deployment guides"]
    },
    {
      phase: "Deployment",
      duration: "1-2 weeks",
      activities: ["Production setup", "Performance testing", "Security testing", "Go-live support"],
      deliverables: ["Live application", "Performance reports", "Security certificates", "Support documentation"]
    }
  ];

  const securityFeatures = [
    {
      category: "Authentication & Authorization",
      features: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "OAuth 2.0 / OpenID Connect",
        "JWT token management"
      ]
    },
    {
      category: "Data Protection",
      features: [
        "End-to-end encryption",
        "Data encryption at rest",
        "PII data anonymization",
        "GDPR compliance"
      ]
    },
    {
      category: "Infrastructure Security",
      features: [
        "SSL/TLS certificates",
        "Web Application Firewall (WAF)",
        "DDoS protection",
        "Regular security audits"
      ]
    },
    {
      category: "Monitoring & Compliance",
      features: [
        "Real-time threat detection",
        "Audit logging",
        "Compliance reporting",
        "Incident response procedures"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      accent: "bg-accent/10 text-accent border-accent/20",
      success: "bg-success/10 text-success border-success/20",
      warning: "bg-warning/10 text-warning border-warning/20",
      error: "bg-error/10 text-error border-error/20",
      primary: "bg-primary/10 text-primary border-primary/20",
      secondary: "bg-secondary/10 text-secondary border-secondary/20"
    };
    return colorMap[color] || colorMap.accent;
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Code2" size={16} />
            <span>Technical Excellence</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Technical Deep-Dive
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our technical approach, methodologies, and the robust architecture that powers our solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-soft">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-white shadow-md'
                  : 'text-text-secondary hover:text-primary hover:bg-surface'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-soft">
          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{architectureData.title}</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">{architectureData.description}</p>
              </div>

              {/* Architecture Diagram */}
              <div className="relative bg-gradient-to-br from-surface to-white rounded-xl p-8 border border-border">
                <div className="grid md:grid-cols-3 gap-6">
                  {architectureData.components.map((component, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl border-2 ${getColorClasses(component.color)} transition-all duration-300 hover:scale-105`}
                    >
                      <h4 className="font-semibold mb-2">{component.name}</h4>
                      <p className="text-sm opacity-80">{component.description}</p>
                    </div>
                  ))}
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                              refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#0EA5E9" />
                      </marker>
                    </defs>
                    <line x1="50%" y1="20%" x2="50%" y2="80%" 
                          stroke="#0EA5E9" strokeWidth="2" strokeDasharray="5,5" 
                          markerEnd="url(#arrowhead)" />
                  </svg>
                </div>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-success/5 rounded-xl border border-success/20">
                  <Icon name="Zap" size={32} className="text-success mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">High Performance</h4>
                  <p className="text-text-secondary text-sm">Optimized for speed and efficiency</p>
                </div>
                <div className="text-center p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <Icon name="Shield" size={32} className="text-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Secure by Design</h4>
                  <p className="text-text-secondary text-sm">Built with security best practices</p>
                </div>
                <div className="text-center p-6 bg-warning/5 rounded-xl border border-warning/20">
                  <Icon name="TrendingUp" size={32} className="text-warning mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">Scalable</h4>
                  <p className="text-text-secondary text-sm">Grows with your business needs</p>
                </div>
              </div>
            </div>
          )}

          {/* Code Tab */}
          {activeTab === 'code' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Code Examples</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  See how we write clean, maintainable, and efficient code that follows industry best practices.
                </p>
              </div>

              {codeExamples.map((example, index) => (
                <div key={index} className="bg-primary-900 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between p-4 bg-primary-800">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-white font-medium">{example.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white/60 text-sm">{example.language}</span>
                      <button className="text-white/60 hover:text-white">
                        <Icon name="Copy" size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-sm text-white/90 font-mono leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Methodology Tab */}
          {activeTab === 'methodology' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Development Methodology</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Our proven agile methodology ensures successful project delivery with transparency and quality.
                </p>
              </div>

              <div className="space-y-6">
                {methodologySteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 bg-surface rounded-xl p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <h4 className="text-xl font-bold text-primary">{step.phase}</h4>
                          <span className="text-accent font-medium">{step.duration}</span>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-primary mb-3">Key Activities</h5>
                            <ul className="space-y-2">
                              {step.activities.map((activity, actIndex) => (
                                <li key={actIndex} className="flex items-center space-x-2">
                                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                                  <span className="text-text-secondary text-sm">{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-primary mb-3">Deliverables</h5>
                            <ul className="space-y-2">
                              {step.deliverables.map((deliverable, delIndex) => (
                                <li key={delIndex} className="flex items-center space-x-2">
                                  <Icon name="FileText" size={16} className="text-accent flex-shrink-0" />
                                  <span className="text-text-secondary text-sm">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {index < methodologySteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-6 bg-accent/30"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Security First Approach</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  We implement comprehensive security measures to protect your data and ensure compliance with industry standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {securityFeatures.map((category, index) => (
                  <div key={index} className="bg-surface rounded-xl p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="Shield" size={20} className="text-accent" />
                      </div>
                      <h4 className="text-lg font-semibold text-primary">{category.category}</h4>
                    </div>
                    
                    <ul className="space-y-3">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Security Certifications */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl p-8 text-center">
                <h4 className="text-xl font-bold text-primary mb-4">Security Certifications & Compliance</h4>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                    <Icon name="Shield" size={20} className="text-success" />
                    <span className="font-medium">ISO 27001</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                    <Icon name="Lock" size={20} className="text-accent" />
                    <span className="font-medium">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                    <Icon name="CheckCircle" size={20} className="text-warning" />
                    <span className="font-medium">SOC 2 Type II</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                    <Icon name="Award" size={20} className="text-error" />
                    <span className="font-medium">PCI DSS</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDeepDive;