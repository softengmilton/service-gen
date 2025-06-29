import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyRadar = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState('all');

  const technologies = [
    {
      name: "GPT-4 Integration",
      quadrant: "adopt",
      category: "AI/ML",
      position: { x: 85, y: 25 },
      description: "Production-ready AI integration for enterprise applications",
      impact: "High",
      timeline: "Now"
    },
    {
      name: "WebAssembly",
      quadrant: "trial",
      category: "Performance",
      position: { x: 65, y: 45 },
      description: "High-performance web applications with near-native speed",
      impact: "Medium",
      timeline: "6 months"
    },
    {
      name: "Quantum Computing APIs",
      quadrant: "assess",
      category: "Emerging",
      position: { x: 35, y: 65 },
      description: "Early exploration of quantum computing applications",
      impact: "Low",
      timeline: "2+ years"
    },
    {
      name: "Edge Computing",
      quadrant: "adopt",
      category: "Infrastructure",
      position: { x: 75, y: 35 },
      description: "Distributed computing for reduced latency",
      impact: "High",
      timeline: "Now"
    },
    {
      name: "Blockchain Integration",
      quadrant: "trial",
      category: "Web3",
      position: { x: 55, y: 55 },
      description: "Smart contracts and decentralized applications",
      impact: "Medium",
      timeline: "12 months"
    },
    {
      name: "Neural Interfaces",
      quadrant: "hold",
      category: "Experimental",
      position: { x: 25, y: 75 },
      description: "Brain-computer interface exploration",
      impact: "Unknown",
      timeline: "5+ years"
    }
  ];

  const quadrants = [
    { id: 'adopt', name: 'Adopt', color: 'text-success', bgColor: 'bg-success/10' },
    { id: 'trial', name: 'Trial', color: 'text-accent', bgColor: 'bg-accent/10' },
    { id: 'assess', name: 'Assess', color: 'text-warning', bgColor: 'bg-warning/10' },
    { id: 'hold', name: 'Hold', color: 'text-error', bgColor: 'bg-error/10' }
  ];

  const getQuadrantColor = (quadrant) => {
    const colors = {
      adopt: '#10B981',
      trial: '#0EA5E9',
      assess: '#F59E0B',
      hold: '#EF4444'
    };
    return colors[quadrant] || '#64748B';
  };

  const filteredTechnologies = selectedQuadrant === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.quadrant === selectedQuadrant);

  return (
    <div className="bg-background border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-text-primary mb-2">Technology Radar</h3>
          <p className="text-text-secondary">Our assessment of emerging technologies and their adoption timeline</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedQuadrant('all')}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
              selectedQuadrant === 'all' ?'bg-primary text-white' :'bg-surface text-text-secondary hover:bg-primary/10'
            }`}
          >
            All
          </button>
          {quadrants.map(quadrant => (
            <button
              key={quadrant.id}
              onClick={() => setSelectedQuadrant(quadrant.id)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedQuadrant === quadrant.id 
                  ? `${quadrant.bgColor} ${quadrant.color}` 
                  : 'bg-surface text-text-secondary hover:bg-primary/10'
              }`}
            >
              {quadrant.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Radar Visualization */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-surface to-background rounded-xl border border-border p-4">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Radar Circles */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="var(--color-border)" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-border)" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="var(--color-border)" strokeWidth="1" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="var(--color-border)" strokeWidth="1" />
              
              {/* Radar Lines */}
              <line x1="100" y1="20" x2="100" y2="180" stroke="var(--color-border)" strokeWidth="1" />
              <line x1="20" y1="100" x2="180" y2="100" stroke="var(--color-border)" strokeWidth="1" />
              
              {/* Quadrant Labels */}
              <text x="140" y="35" fill="var(--color-success)" fontSize="10" fontWeight="600">ADOPT</text>
              <text x="140" y="175" fill="var(--color-accent)" fontSize="10" fontWeight="600">TRIAL</text>
              <text x="35" y="175" fill="var(--color-warning)" fontSize="10" fontWeight="600">ASSESS</text>
              <text x="35" y="35" fill="var(--color-error)" fontSize="10" fontWeight="600">HOLD</text>
              
              {/* Technology Points */}
              {filteredTechnologies.map((tech, index) => (
                <g key={index}>
                  <circle
                    cx={tech.position.x * 1.6 + 20}
                    cy={tech.position.y * 1.6 + 20}
                    r="4"
                    fill={getQuadrantColor(tech.quadrant)}
                    className="cursor-pointer hover:r-6 transition-all duration-200"
                  />
                  <text
                    x={tech.position.x * 1.6 + 28}
                    y={tech.position.y * 1.6 + 24}
                    fill="var(--color-text-secondary)"
                    fontSize="8"
                    className="pointer-events-none"
                  >
                    {tech.name.split(' ')[0]}
                  </text>
                </g>
              ))}
            </svg>
          </div>
          
          {/* Legend */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {quadrants.map(quadrant => (
              <div key={quadrant.id} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${quadrant.bgColor}`} style={{ backgroundColor: getQuadrantColor(quadrant.id) }}></div>
                <span className="text-sm text-text-secondary">{quadrant.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology List */}
        <div className="space-y-4">
          <h4 className="font-semibold text-text-primary">Technology Details</h4>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredTechnologies.map((tech, index) => (
              <div key={index} className="p-4 bg-surface rounded-lg border border-border hover:shadow-soft transition-all duration-200">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-medium text-text-primary">{tech.name}</h5>
                    <span className="text-xs text-text-muted">{tech.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      quadrants.find(q => q.id === tech.quadrant)?.bgColor
                    } ${quadrants.find(q => q.id === tech.quadrant)?.color}`}>
                      {tech.quadrant.toUpperCase()}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary mb-3">{tech.description}</p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="TrendingUp" size={12} />
                      <span>Impact: {tech.impact}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{tech.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyRadar;