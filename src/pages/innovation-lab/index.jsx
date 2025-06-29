import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ExperimentCard from './components/ExperimentCard';
import TechnologyRadar from './components/TechnologyRadar';
import OpenSourceSection from './components/OpenSourceSection';
import TechnicalBlogSection from './components/TechnicalBlogSection';
import ResearchSection from './components/ResearchSection';
import CommunityEngagementSection from './components/CommunityEngagementSection';

const InnovationLab = () => {
  const [activeSection, setActiveSection] = useState('experiments');

  const experiments = [
    {
      id: 1,
      title: "AI-Powered Code Generation Assistant",
      category: "Artificial Intelligence",
      description: "Advanced AI system that generates production-ready code from natural language descriptions, supporting multiple programming languages and frameworks.",
      status: "Active",
      icon: "Bot",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      technologies: ["GPT-4", "Transformer Models", "AST Parsing", "Code Analysis"],
      startDate: "Jan 2024",
      teamSize: 8,
      progress: 75,
      technicalDetails: `Our AI code generation system leverages large language models fine-tuned on millions of code repositories. 
      The system includes context-aware code completion, automatic documentation generation, and intelligent error detection. 
      We've implemented novel techniques for maintaining code consistency and ensuring security best practices.`,
      achievements: [
        "92% accuracy in generating unit tests",
        "67% reduction in boilerplate code writing time",
        "Integration with 15+ popular IDEs and editors",
        "Support for 12 programming languages"
      ],
      demoUrl: "https://demo.codecraft.ai/code-assistant",
      githubUrl: "https://github.com/codecraft/ai-code-assistant"
    },
    {
      id: 2,
      title: "Quantum-Classical Hybrid Optimizer",
      category: "Quantum Computing",
      description: "Hybrid computing system that combines quantum and classical algorithms to solve complex optimization problems in logistics and resource allocation.",
      status: "Beta",
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      technologies: ["Qiskit", "Quantum Annealing", "QAOA", "Classical Optimization"],
      startDate: "Sep 2023",
      teamSize: 5,
      progress: 60,
      technicalDetails: `This project explores the potential of quantum computing for solving NP-hard optimization problems. 
      We've developed hybrid algorithms that leverage quantum speedup for specific problem structures while maintaining 
      classical fallbacks for robustness. The system includes quantum error correction and noise mitigation techniques.`,
      achievements: [
        "15x speedup for traveling salesman problems with 50+ nodes",
        "Novel quantum error correction implementation",
        "Successful deployment on IBM Quantum hardware",
        "Published 2 peer-reviewed papers"
      ],
      demoUrl: "https://demo.codecraft.ai/quantum-optimizer",
      githubUrl: "https://github.com/codecraft/quantum-optimizer"
    },
    {
      id: 3,
      title: "Edge AI Inference Engine",
      category: "Edge Computing",
      description: "Ultra-lightweight AI inference engine optimized for edge devices, enabling real-time decision making with minimal power consumption.",
      status: "Active",
      icon: "Cpu",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      technologies: ["TensorFlow Lite", "ONNX", "ARM NN", "Model Quantization"],
      startDate: "Nov 2023",
      teamSize: 6,
      progress: 85,
      technicalDetails: `Our edge AI engine focuses on extreme optimization for resource-constrained environments. 
      We've implemented advanced model compression techniques, dynamic quantization, and hardware-specific optimizations 
      for ARM and RISC-V processors. The system supports federated learning for continuous model improvement.`,
      achievements: [
        "Sub-10ms inference time on ARM Cortex-A processors",
        "90% model size reduction with <5% accuracy loss",
        "Support for 20+ edge device architectures",
        "Federated learning framework implementation"
      ],
      demoUrl: "https://demo.codecraft.ai/edge-ai",
      githubUrl: "https://github.com/codecraft/edge-ai-engine"
    },
    {
      id: 4,
      title: "Blockchain Identity Verification",
      category: "Blockchain",
      description: "Decentralized identity management system using zero-knowledge proofs to ensure privacy while maintaining security and regulatory compliance.",
      status: "Research",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      technologies: ["Ethereum", "zk-SNARKs", "IPFS", "Smart Contracts"],
      startDate: "Dec 2023",
      teamSize: 4,
      progress: 40,
      technicalDetails: `This project addresses the growing need for privacy-preserving identity verification in digital systems. 
      We're implementing zero-knowledge proof protocols that allow identity verification without revealing personal information. 
      The system is designed to be interoperable across multiple blockchain networks.`,
      achievements: [
        "Zero-knowledge proof implementation for identity verification",
        "GDPR-compliant privacy protection mechanisms",
        "Cross-chain interoperability with 5 major blockchains",
        "Collaboration with 3 regulatory bodies"
      ],
      demoUrl: "https://demo.codecraft.ai/blockchain-identity",
      githubUrl: "https://github.com/codecraft/blockchain-identity"
    },
    {
      id: 5,
      title: "IoT Data Pipeline Orchestrator",
      category: "Internet of Things",
      description: "Scalable data pipeline system for IoT devices with real-time processing, anomaly detection, and predictive analytics capabilities.",
      status: "Active",
      icon: "Network",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      technologies: ["Apache Kafka", "Apache Flink", "InfluxDB", "Kubernetes"],
      startDate: "Oct 2023",
      teamSize: 7,
      progress: 70,
      technicalDetails: `Our IoT data pipeline handles millions of sensor readings per second with sub-second latency. 
      The system includes automatic scaling, fault tolerance, and real-time anomaly detection using machine learning models. 
      We've implemented edge computing capabilities to reduce bandwidth and improve response times.`,
      achievements: [
        "Processing 10M+ sensor readings per second",
        "99.9% uptime with automatic failover",
        "Real-time anomaly detection with 95% accuracy",
        "Integration with 50+ IoT device types"
      ],
      demoUrl: "https://demo.codecraft.ai/iot-pipeline",
      githubUrl: "https://github.com/codecraft/iot-pipeline"
    },
    {
      id: 6,
      title: "Neuromorphic Pattern Recognition",
      category: "Neuromorphic Computing",
      description: "Brain-inspired computing system for ultra-low power pattern recognition and adaptive learning in resource-constrained environments.",
      status: "Research",
      icon: "Brain",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
      technologies: ["Intel Loihi", "SpiNNaker", "Nengo", "Spiking Neural Networks"],
      startDate: "Aug 2023",
      teamSize: 3,
      progress: 30,
      technicalDetails: `This cutting-edge research explores neuromorphic computing architectures that mimic the brain's 
      information processing mechanisms. We're developing spiking neural networks that can learn and adapt in real-time 
      while consuming orders of magnitude less power than traditional computing systems.`,
      achievements: [
        "1000x power reduction for specific pattern recognition tasks",
        "Real-time learning without traditional training phases",
        "Novel spiking neural network architectures",
        "Collaboration with Intel Labs and University of Manchester"
      ],
      demoUrl: null,
      githubUrl: "https://github.com/codecraft/neuromorphic-computing"
    }
  ];

  const navigationSections = [
    { id: 'experiments', name: 'Current Experiments', icon: 'FlaskConical' },
    { id: 'radar', name: 'Technology Radar', icon: 'Radar' },
    { id: 'opensource', name: 'Open Source', icon: 'Github' },
    { id: 'blog', name: 'Technical Blog', icon: 'BookOpen' },
    { id: 'research', name: 'Research', icon: 'Microscope' },
    { id: 'community', name: 'Community', icon: 'Users' }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'experiments':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Current Experiments</h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Explore our cutting-edge research projects and experimental technologies that are shaping the future of software development.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {experiments.map((experiment) => (
                <ExperimentCard key={experiment.id} experiment={experiment} />
              ))}
            </div>
          </div>
        );
      case 'radar':
        return <TechnologyRadar />;
      case 'opensource':
        return <OpenSourceSection />;
      case 'blog':
        return <TechnicalBlogSection />;
      case 'research':
        return <ResearchSection />;
      case 'community':
        return <CommunityEngagementSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Innovation Lab</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Where Ideas Become
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Reality
              </span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Our Innovation Lab is where we push the boundaries of technology, explore emerging trends, 
              and develop the solutions that will define tomorrow's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                iconName="Rocket"
                iconPosition="left"
                onClick={() => setActiveSection('experiments')}
              >
                Explore Experiments
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Github"
                iconPosition="left"
                onClick={() => setActiveSection('opensource')}
              >
                View Open Source
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="FlaskConical" size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">12</div>
              <div className="text-sm text-text-secondary">Active Experiments</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Github" size={24} className="text-success" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">24</div>
              <div className="text-sm text-text-secondary">Open Source Projects</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="FileText" size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">47</div>
              <div className="text-sm text-text-secondary">Research Papers</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-warning" />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">150K+</div>
              <div className="text-sm text-text-secondary">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-surface border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-white shadow-soft'
                    : 'bg-background text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
                }`}
              >
                <Icon name={section.icon} size={16} />
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderActiveSection()}
        </div>
      </main>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Innovate Together?</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Whether you're looking to collaborate on research, contribute to open source, or explore how our innovations 
            can transform your business, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.location.href = '/contact-consultation'}
            >
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open('https://github.com/codecraft', '_blank')}
            >
              Explore Our GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-white/20 rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CodeCraft</h3>
                  <p className="text-xs text-white/80 font-medium tracking-wide">INNOVATION LAB</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Pushing the boundaries of technology through research, experimentation, and open collaboration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Research Areas</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Artificial Intelligence</li>
                <li>Quantum Computing</li>
                <li>Edge Computing</li>
                <li>Blockchain Technology</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Open Source</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>GitHub Projects</li>
                <li>Community Contributions</li>
                <li>Developer Tools</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Research Papers</li>
                <li>Technical Blog</li>
                <li>Conference Talks</li>
                <li>Community Events</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} CodeCraft Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InnovationLab;