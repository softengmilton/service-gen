import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProjectDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeProjects, setActiveProjects] = useState([]);

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform Redesign",
      client: "RetailTech Inc.",
      progress: 78,
      status: "In Development",
      team: 5,
      deadline: "2024-02-15",
      tech: ["React", "Node.js", "MongoDB"],
      priority: "high",
      lastUpdate: "2 hours ago",
      commits: 23,
      testsPass: 94
    },
    {
      id: 2,
      name: "AI Analytics Dashboard",
      client: "DataFlow Corp",
      progress: 45,
      status: "Design Phase",
      team: 3,
      deadline: "2024-03-01",
      tech: ["Python", "TensorFlow", "React"],
      priority: "medium",
      lastUpdate: "4 hours ago",
      commits: 15,
      testsPass: 87
    },
    {
      id: 3,
      name: "Mobile Banking App",
      client: "FinanceSecure Ltd",
      progress: 92,
      status: "Testing",
      team: 4,
      deadline: "2024-01-30",
      tech: ["React Native", "Express", "PostgreSQL"],
      priority: "high",
      lastUpdate: "30 minutes ago",
      commits: 41,
      testsPass: 98
    }
  ];

  const teamActivity = [
    { developer: "Sarah Chen", action: "Pushed 3 commits to AI Dashboard", time: "12 min ago", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" },
    { developer: "Mike Rodriguez", action: "Completed user authentication module", time: "1 hour ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" },
    { developer: "Alex Kim", action: "Fixed critical security vulnerability", time: "2 hours ago", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" },
    { developer: "Emma Thompson", action: "Deployed staging environment", time: "3 hours ago", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate real-time project updates
    const projectTimer = setInterval(() => {
      setActiveProjects(prev => {
        const updated = [...projects];
        const randomProject = updated[Math.floor(Math.random() * updated.length)];
        if (randomProject.progress < 100) {
          randomProject.progress = Math.min(100, randomProject.progress + Math.random() * 2);
          randomProject.commits += Math.floor(Math.random() * 3);
        }
        return updated;
      });
    }, 5000);

    setActiveProjects(projects);

    return () => {
      clearInterval(timer);
      clearInterval(projectTimer);
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Development': return 'text-blue-600 bg-blue-100';
      case 'Design Phase': return 'text-purple-600 bg-purple-100';
      case 'Testing': return 'text-orange-600 bg-orange-100';
      case 'Completed': return 'text-green-600 bg-green-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-slate-300 bg-slate-50';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
            <Icon name="Activity" size={16} className="mr-2" />
            Live Project Dashboard
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Transparency in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time insights into our current projects. See how we maintain quality, meet deadlines, and deliver exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Active Projects</h3>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm font-mono">
                      {currentTime.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {activeProjects.map((project) => (
                  <div 
                    key={project.id}
                    className={`border-l-4 ${getPriorityColor(project.priority)} rounded-lg p-6 hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">
                          {project.name}
                        </h4>
                        <p className="text-slate-600">{project.client}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700">Progress</span>
                        <span className="text-sm font-bold text-slate-900">{Math.round(project.progress)}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent to-sky-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Users" size={14} className="text-slate-500" />
                        <span className="text-sm text-slate-600">{project.team} members</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={14} className="text-slate-500" />
                        <span className="text-sm text-slate-600">{project.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="GitCommit" size={14} className="text-slate-500" />
                        <span className="text-sm text-slate-600">{project.commits} commits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-green-500" />
                        <span className="text-sm text-slate-600">{project.testsPass}% tests pass</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Code" size={14} className="text-slate-500" />
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>Last updated: {project.lastUpdate}</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Live</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Activity & Stats */}
          <div className="space-y-8">
            {/* Team Activity */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-accent to-sky-500">
                <h3 className="text-xl font-bold text-white">Team Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {teamActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <img 
                        src={activity.avatar} 
                        alt={activity.developer}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900 font-medium">
                          {activity.developer}
                        </p>
                        <p className="text-sm text-slate-600 truncate">
                          {activity.action}
                        </p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6">This Month</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="GitCommit" size={16} className="text-green-600" />
                    <span className="text-sm text-slate-600">Commits</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Bug" size={16} className="text-red-600" />
                    <span className="text-sm text-slate-600">Bugs Fixed</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Zap" size={16} className="text-yellow-600" />
                    <span className="text-sm text-slate-600">Features</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-blue-600" />
                    <span className="text-sm text-slate-600">Security Patches</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900">5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDashboard;