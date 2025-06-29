import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

const InnovationLabTeaser = () => {
  const [activeTab, setActiveTab] = useState("opensource");
  const [contributionData, setContributionData] = useState([]);

  const tabs = [
    { id: "opensource", label: "Open Source", icon: "Github" },
    { id: "experiments", label: "Experiments", icon: "Flask" },
    { id: "research", label: "Research", icon: "BookOpen" },
  ];

  const openSourceProjects = [
    {
      name: "ReactFlow Builder",
      description: "Drag-and-drop workflow builder for React applications",
      stars: 1247,
      forks: 89,
      language: "TypeScript",
      lastCommit: "2 days ago",
      status: "Active",
      contributors: 12,
    },
    {
      name: "AI Code Reviewer",
      description: "Machine learning-powered code review automation tool",
      stars: 892,
      forks: 156,
      language: "Python",
      lastCommit: "1 week ago",
      status: "Active",
      contributors: 8,
    },
    {
      name: "Micro-Frontend Toolkit",
      description:
        "Utilities for building scalable micro-frontend architectures",
      stars: 634,
      forks: 45,
      language: "JavaScript",
      lastCommit: "3 days ago",
      status: "Active",
      contributors: 6,
    },
  ];

  const experiments = [
    {
      title: "Voice-Controlled Development Environment",
      description:
        "Exploring hands-free coding using advanced speech recognition and natural language processing.",
      tech: ["WebSpeech API", "GPT-4", "VS Code Extension"],
      status: "In Progress",
      progress: 65,
      impact: "Accessibility Enhancement",
    },
    {
      title: "Quantum-Inspired Optimization Algorithms",
      description:
        "Applying quantum computing principles to solve complex software optimization problems.",
      tech: ["Qiskit", "Python", "Mathematical Modeling"],
      status: "Research Phase",
      progress: 30,
      impact: "Performance Breakthrough",
    },
    {
      title: "Blockchain-Based Code Verification",
      description:
        "Immutable code integrity verification system using distributed ledger technology.",
      tech: ["Ethereum", "Solidity", "IPFS"],
      status: "Prototype",
      progress: 80,
      impact: "Security Innovation",
    },
  ];

  const researchPapers = [
    {
      title: "Adaptive UI/UX Through Machine Learning",
      authors: ["Sarah Chen", "Mike Rodriguez"],
      journal: "ACM Digital Library",
      date: "December 2023",
      citations: 23,
      abstract:
        "Novel approach to personalizing user interfaces using behavioral pattern analysis and predictive modeling.",
      tags: ["Machine Learning", "UX Design", "Personalization"],
    },
    {
      title: "Microservices Security in Cloud-Native Environments",
      authors: ["Alex Kim", "Emma Thompson"],
      journal: "IEEE Software",
      date: "November 2023",
      citations: 18,
      abstract:
        "Comprehensive security framework for protecting microservices architectures in distributed cloud systems.",
      tags: ["Security", "Microservices", "Cloud Computing"],
    },
  ];

  // Generate mock contribution data for GitHub-style activity graph
  useEffect(() => {
    const generateContributions = () => {
      const data = [];
      const today = new Date();
      for (let i = 364; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const contributions = Math.floor(Math.random() * 8);
        data.push({
          date: date.toISOString().split("T")[0],
          count: contributions,
        });
      }
      return data;
    };

    setContributionData(generateContributions());
  }, []);

  const getContributionColor = (count) => {
    if (count === 0) return "bg-slate-100";
    if (count <= 2) return "bg-green-200";
    if (count <= 4) return "bg-green-400";
    if (count <= 6) return "bg-green-600";
    return "bg-green-800";
  };

  const renderOpenSource = () => (
    <div className="space-y-6">
      {/* GitHub Contribution Graph */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-slate-900">
            Contribution Activity
          </h4>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <span>Less</span>
            <div className="flex space-x-1">
              {[0, 2, 4, 6, 8].map((count) => (
                <div
                  key={count}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(
                    count
                  )}`}
                ></div>
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-7 gap-1 mb-4">
          {contributionData.map((day, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-sm ${getContributionColor(
                day.count
              )} hover:ring-2 hover:ring-accent transition-all duration-200`}
              title={`${day.count} contributions on ${day.date}`}
            ></div>
          ))}
        </div>

        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">
            1,247 contributions
          </span>{" "}
          in the last year
        </p>
      </div>

      {/* Open Source Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {openSourceProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-lg font-semibold text-slate-900">
                {project.name}
              </h4>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                {project.status}
              </span>
            </div>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center space-x-4 mb-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <Icon name="Star" size={14} />
                <span>{project.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="GitFork" size={14} />
                <span>{project.forks}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} />
                <span>{project.contributors}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-slate-600">
                  {project.language}
                </span>
              </div>
              <span className="text-xs text-slate-500">
                {project.lastCommit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderExperiments = () => (
    <div className="space-y-6">
      {experiments.map((experiment, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                {experiment.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {experiment.description}
              </p>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  experiment.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : experiment.status === "Research Phase"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {experiment.status}
              </span>
              <span className="text-xs text-slate-500">
                {experiment.impact}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-700">
                Progress
              </span>
              <span className="text-sm font-bold text-slate-900">
                {experiment.progress}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-accent to-sky-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${experiment.progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {experiment.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderResearch = () => (
    <div className="space-y-6">
      {researchPapers.map((paper, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                {paper.title}
              </h4>
              <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                <span>By {paper.authors.join(", ")}</span>
                <span>•</span>
                <span>{paper.journal}</span>
                <span>•</span>
                <span>{paper.date}</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {paper.abstract}
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <Icon name="Quote" size={14} />
              <span>{paper.citations} citations</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {paper.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Lightbulb" size={16} className="mr-2" />
            Innovation Lab
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Pushing the Boundaries of Technology
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our latest research, open-source contributions, and
            experimental projects that shape the future of software development.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-2xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-accent shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === "opensource" && renderOpenSource()}
          {activeTab === "experiments" && renderExperiments()}
          {activeTab === "research" && renderResearch()}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent to-sky-500 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Innovation Journey
            </h3>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
              Collaborate with us on cutting-edge projects, contribute to open
              source, or explore how emerging technologies can transform your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/innovation-lab">
                <button className="px-8 py-4 bg-white text-accent hover:bg-slate-50 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Innovation Lab
                </button>
              </Link>
              <Link to="/contact-consultation">
                <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-accent font-semibold rounded-xl transition-all duration-300">
                  Discuss Collaboration
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationLabTeaser;
