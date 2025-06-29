import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResearchSection = () => {
  const [selectedResearchArea, setSelectedResearchArea] = useState('all');

  const researchProjects = [
    {
      id: 1,
      title: "Autonomous Code Generation with Large Language Models",
      area: "AI/ML",
      status: "Active",
      phase: "Phase 2",
      description: "Investigating the potential of LLMs to generate production-ready code with minimal human intervention, focusing on code quality, security, and maintainability.",
      keyFindings: [
        "92% accuracy in generating unit tests for existing codebases",
        "67% reduction in boilerplate code generation time",
        "Identified critical security patterns that require human oversight"
      ],
      timeline: "18 months",
      teamSize: 6,
      publications: 2,
      patents: 1,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      technologies: ["GPT-4", "CodeT5", "AST Analysis", "Static Analysis"],
      collaborators: ["Stanford AI Lab", "MIT CSAIL"],
      impact: "High"
    },
    {
      id: 2,
      title: "Quantum-Classical Hybrid Computing for Optimization",
      area: "Quantum",
      status: "Research",
      phase: "Phase 1",
      description: "Exploring hybrid quantum-classical algorithms for solving complex optimization problems in logistics, finance, and resource allocation.",
      keyFindings: [
        "15x speedup for specific NP-hard problems with 50+ variables",
        "Developed novel error correction techniques for NISQ devices",
        "Created framework for seamless quantum-classical integration"
      ],
      timeline: "24 months",
      teamSize: 4,
      publications: 1,
      patents: 0,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      technologies: ["Qiskit", "Cirq", "Quantum Annealing", "QAOA"],
      collaborators: ["IBM Quantum", "Google Quantum AI"],
      impact: "Medium"
    },
    {
      id: 3,
      title: "Edge AI for Real-time Decision Making",
      area: "Edge Computing",
      status: "Pilot",
      phase: "Phase 3",
      description: "Developing lightweight AI models that can run on edge devices for real-time decision making in IoT environments with minimal latency.",
      keyFindings: [
        "Achieved sub-10ms inference time on ARM processors",
        "90% model compression while maintaining 95% accuracy",
        "Developed federated learning framework for edge deployment"
      ],
      timeline: "12 months",
      teamSize: 8,
      publications: 3,
      patents: 2,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      technologies: ["TensorFlow Lite", "ONNX", "ARM NN", "OpenVINO"],
      collaborators: ["NVIDIA", "ARM Holdings"],
      impact: "High"
    },
    {
      id: 4,
      title: "Blockchain-based Identity Verification Systems",
      area: "Blockchain",
      status: "Active",
      phase: "Phase 2",
      description: "Creating decentralized identity verification systems that prioritize privacy while ensuring security and compliance with global regulations.",
      keyFindings: [
        "Zero-knowledge proof implementation reduces verification time by 40%",
        "GDPR-compliant identity management with user-controlled data",
        "Interoperability achieved across 5 major blockchain networks"
      ],
      timeline: "15 months",
      teamSize: 5,
      publications: 1,
      patents: 1,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
      technologies: ["Ethereum", "Hyperledger", "zk-SNARKs", "IPFS"],
      collaborators: ["ConsenSys", "Hyperledger Foundation"],
      impact: "Medium"
    },
    {
      id: 5,
      title: "Neuromorphic Computing for Pattern Recognition",
      area: "Neuromorphic",
      status: "Research",
      phase: "Phase 1",
      description: "Investigating brain-inspired computing architectures for ultra-low power pattern recognition and adaptive learning systems.",
      keyFindings: [
        "1000x reduction in power consumption for specific pattern recognition tasks",
        "Developed novel spiking neural network architectures",
        "Achieved real-time learning without traditional training phases"
      ],
      timeline: "30 months",
      teamSize: 3,
      publications: 0,
      patents: 0,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
      technologies: ["Intel Loihi", "SpiNNaker", "Nengo", "Brian2"],
      collaborators: ["Intel Labs", "University of Manchester"],
      impact: "Low"
    },
    {
      id: 6,
      title: "Sustainable Software Engineering Practices",
      area: "Sustainability",
      status: "Active",
      phase: "Phase 2",
      description: "Researching methodologies and tools to measure and reduce the environmental impact of software development and deployment.",
      keyFindings: [
        "Developed carbon footprint calculator for software applications",
        "35% energy reduction through optimized algorithm selection",
        "Created sustainability metrics framework for development teams"
      ],
      timeline: "20 months",
      teamSize: 7,
      publications: 2,
      patents: 0,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      technologies: ["Green Software Foundation", "Carbon Tracker", "Energy Profiling"],
      collaborators: ["Green Software Foundation", "Microsoft Sustainability"],
      impact: "High"
    }
  ];

  const researchAreas = ['all', 'AI/ML', 'Quantum', 'Edge Computing', 'Blockchain', 'Neuromorphic', 'Sustainability'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-success bg-success/10 border-success/20';
      case 'Research': return 'text-accent bg-accent/10 border-accent/20';
      case 'Pilot': return 'text-warning bg-warning/10 border-warning/20';
      default: return 'text-text-muted bg-surface border-border';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'High': return 'text-success';
      case 'Medium': return 'text-warning';
      case 'Low': return 'text-text-muted';
      default: return 'text-text-muted';
    }
  };

  const filteredProjects = selectedResearchArea === 'all' 
    ? researchProjects 
    : researchProjects.filter(project => project.area === selectedResearchArea);

  const totalStats = researchProjects.reduce((acc, project) => ({
    publications: acc.publications + project.publications,
    patents: acc.patents + project.patents,
    collaborators: acc.collaborators + project.collaborators.length
  }), { publications: 0, patents: 0, collaborators: 0 });

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Research & Development</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Our research initiatives explore cutting-edge technologies and methodologies that will shape the future of software development and digital transformation.
        </p>
      </div>

      {/* Research Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="FlaskConical" size={24} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{researchProjects.length}</div>
          <div className="text-sm text-text-secondary">Active Projects</div>
        </div>
        <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="FileText" size={24} className="text-success" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.publications}</div>
          <div className="text-sm text-text-secondary">Publications</div>
        </div>
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Award" size={24} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.patents}</div>
          <div className="text-sm text-text-secondary">Patents Filed</div>
        </div>
        <div className="bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Users" size={24} className="text-warning" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.collaborators}</div>
          <div className="text-sm text-text-secondary">Collaborators</div>
        </div>
      </div>

      {/* Research Area Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {researchAreas.map(area => (
          <button
            key={area}
            onClick={() => setSelectedResearchArea(area)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedResearchArea === area
                ? 'bg-primary text-white shadow-soft'
                : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {area === 'all' ? 'All Research Areas' : area}
          </button>
        ))}
      </div>

      {/* Research Projects */}
      <div className="space-y-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-300">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Project Image */}
              <div className="lg:col-span-1">
                <div className="relative h-64 lg:h-full">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-medium">
                      {project.phase}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-2 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{project.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-text-muted">
                      <span className="font-medium text-accent">{project.area}</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="TrendingUp" size={14} />
                        <span className={`font-medium ${getImpactColor(project.impact)}`}>
                          {project.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Findings */}
                <div className="mb-6">
                  <h4 className="font-medium text-text-primary mb-3">Key Findings</h4>
                  <ul className="space-y-2">
                    {project.keyFindings.map((finding, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-text-secondary">
                        <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-medium text-text-primary mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Collaborators */}
                <div className="mb-6">
                  <h4 className="font-medium text-text-primary mb-3">Research Partners</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.collaborators.map((collaborator, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                      >
                        {collaborator}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-text-primary">{project.timeline}</div>
                    <div className="text-xs text-text-muted">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-text-primary">{project.teamSize}</div>
                    <div className="text-xs text-text-muted">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-text-primary">{project.publications}</div>
                    <div className="text-xs text-text-muted">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-text-primary">{project.patents}</div>
                    <div className="text-xs text-text-muted">Patents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Research Collaboration CTA */}
      <div className="mt-12">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-text-primary mb-3">Collaborate with Our Research Team</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Interested in partnering with us on cutting-edge research? We welcome collaborations with academic institutions, 
            industry partners, and fellow researchers who share our passion for innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              iconName="Users"
              iconPosition="left"
              onClick={() => window.location.href = '/contact-consultation'}
            >
              Partner With Us
            </Button>
            <Button
              variant="outline"
              iconName="FileText"
              iconPosition="left"
              onClick={() => console.log('Download research papers')}
            >
              Download Papers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;