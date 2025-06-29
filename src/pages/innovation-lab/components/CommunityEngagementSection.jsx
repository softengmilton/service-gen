import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityEngagementSection = () => {
  const [selectedEventType, setSelectedEventType] = useState('all');

  const communityEvents = [
    {
      id: 1,
      title: "Building Scalable Microservices: Lessons from Production",
      type: "Conference Talk",
      event: "TechCrunch Disrupt 2024",
      speaker: "Sarah Chen",
      speakerRole: "Senior Architect",
      speakerAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      date: "2024-01-20",
      location: "San Francisco, CA",
      attendees: 1200,
      duration: "45 min",
      description: "Deep dive into microservices architecture patterns, sharing real-world experiences from scaling systems to handle millions of requests per day.",
      topics: ["Microservices", "Scalability", "Architecture", "DevOps"],
      videoUrl: "https://youtube.com/watch?v=example1",
      slidesUrl: "https://slides.com/example1",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      rating: 4.8,
      views: 15420
    },
    {
      id: 2,
      title: "AI-Powered Code Review: The Future of Development",
      type: "Workshop",
      event: "React Summit 2024",
      speaker: "Michael Rodriguez",
      speakerRole: "AI Research Lead",
      speakerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      date: "2024-01-15",
      location: "Amsterdam, Netherlands",
      attendees: 300,
      duration: "3 hours",
      description: "Hands-on workshop exploring how AI can enhance code review processes, including live demos of our open-source AI code reviewer tool.",
      topics: ["AI", "Code Review", "Machine Learning", "Developer Tools"],
      videoUrl: "https://youtube.com/watch?v=example2",
      slidesUrl: "https://slides.com/example2",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
      rating: 4.9,
      views: 8930
    },
    {
      id: 3,
      title: "Quantum Computing for Developers: Getting Started",
      type: "Webinar",
      event: "CodeCraft Tech Talks",
      speaker: "Dr. Alex Kumar",
      speakerRole: "Research Scientist",
      speakerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
      date: "2024-01-10",
      location: "Online",
      attendees: 2500,
      duration: "60 min",
      description: "Introduction to quantum computing concepts for software developers, including practical examples and getting started with quantum development frameworks.",
      topics: ["Quantum Computing", "Qiskit", "Algorithms", "Future Tech"],
      videoUrl: "https://youtube.com/watch?v=example3",
      slidesUrl: "https://slides.com/example3",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      rating: 4.7,
      views: 12650
    },
    {
      id: 4,
      title: "Sustainable Software Engineering Practices",
      type: "Panel Discussion",
      event: "Green Tech Conference 2024",
      speaker: "Emily Watson",
      speakerRole: "Sustainability Lead",
      speakerAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      date: "2024-01-05",
      location: "Berlin, Germany",
      attendees: 800,
      duration: "90 min",
      description: "Panel discussion on reducing the environmental impact of software development, featuring industry leaders and practical sustainability strategies.",
      topics: ["Sustainability", "Green Software", "Environmental Impact", "Best Practices"],
      videoUrl: "https://youtube.com/watch?v=example4",
      slidesUrl: "https://slides.com/example4",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
      rating: 4.6,
      views: 6780
    },
    {
      id: 5,
      title: "Building Real-time Applications with Modern Web Technologies",
      type: "Masterclass",
      event: "Web Dev Summit 2023",
      speaker: "James Park",
      speakerRole: "Full Stack Architect",
      speakerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      date: "2023-12-15",
      location: "New York, NY",
      attendees: 450,
      duration: "4 hours",
      description: "Comprehensive masterclass covering WebSockets, Server-Sent Events, and modern real-time web technologies with hands-on coding exercises.",
      topics: ["WebSockets", "Real-time", "Web Development", "Node.js"],
      videoUrl: "https://youtube.com/watch?v=example5",
      slidesUrl: "https://slides.com/example5",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      rating: 4.9,
      views: 11240
    },
    {
      id: 6,
      title: "The Future of Edge Computing and IoT",
      type: "Keynote",
      event: "IoT World Congress 2023",
      speaker: "Lisa Thompson",
      speakerRole: "IoT Solutions Architect",
      speakerAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      date: "2023-12-10",
      location: "Barcelona, Spain",
      attendees: 3000,
      duration: "30 min",
      description: "Keynote presentation exploring the convergence of edge computing and IoT, discussing emerging trends and future opportunities.",
      topics: ["Edge Computing", "IoT", "Future Tech", "Innovation"],
      videoUrl: "https://youtube.com/watch?v=example6",
      slidesUrl: "https://slides.com/example6",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800",
      rating: 4.8,
      views: 18950
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Advanced React Patterns Workshop",
      date: "2024-02-15",
      location: "London, UK",
      type: "Workshop",
      speaker: "Sarah Chen",
      registrationUrl: "https://example.com/register1"
    },
    {
      id: 2,
      title: "AI in Software Development Webinar",
      date: "2024-02-20",
      location: "Online",
      type: "Webinar",
      speaker: "Michael Rodriguez",
      registrationUrl: "https://example.com/register2"
    },
    {
      id: 3,
      title: "Blockchain Development Masterclass",
      date: "2024-02-25",
      location: "Austin, TX",
      type: "Masterclass",
      speaker: "James Park",
      registrationUrl: "https://example.com/register3"
    }
  ];

  const eventTypes = ['all', 'Conference Talk', 'Workshop', 'Webinar', 'Panel Discussion', 'Masterclass', 'Keynote'];

  const getEventTypeColor = (type) => {
    const colors = {
      'Conference Talk': 'text-primary bg-primary/10 border-primary/20',
      'Workshop': 'text-success bg-success/10 border-success/20',
      'Webinar': 'text-accent bg-accent/10 border-accent/20',
      'Panel Discussion': 'text-warning bg-warning/10 border-warning/20',
      'Masterclass': 'text-error bg-error/10 border-error/20',
      'Keynote': 'text-purple-600 bg-purple-100 border-purple-200'
    };
    return colors[type] || 'text-text-muted bg-surface border-border';
  };

  const filteredEvents = selectedEventType === 'all' 
    ? communityEvents 
    : communityEvents.filter(event => event.type === selectedEventType);

  const totalStats = communityEvents.reduce((acc, event) => ({
    attendees: acc.attendees + event.attendees,
    views: acc.views + event.views,
    events: acc.events + 1
  }), { attendees: 0, views: 0, events: 0 });

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Community Engagement</h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Our team actively participates in the global tech community through conferences, workshops, and educational content, 
          sharing knowledge and learning from fellow developers worldwide.
        </p>
      </div>

      {/* Engagement Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Calendar" size={24} className="text-primary" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.events}</div>
          <div className="text-sm text-text-secondary">Events Participated</div>
        </div>
        <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Users" size={24} className="text-success" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.attendees.toLocaleString()}</div>
          <div className="text-sm text-text-secondary">Total Attendees</div>
        </div>
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Play" size={24} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">{totalStats.views.toLocaleString()}</div>
          <div className="text-sm text-text-secondary">Video Views</div>
        </div>
        <div className="bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20 rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name="Star" size={24} className="text-warning" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">4.8</div>
          <div className="text-sm text-text-secondary">Average Rating</div>
        </div>
      </div>

      {/* Event Type Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {eventTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedEventType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedEventType === type
                ? 'bg-primary text-white shadow-soft'
                : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {type === 'all' ? 'All Events' : type}
          </button>
        ))}
      </div>

      {/* Past Events */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-text-primary mb-6">Past Events & Presentations</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-300 group">
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    <Icon name="Star" size={12} />
                    <span>{event.rating}</span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {event.title}
                </h4>
                
                <div className="flex items-center space-x-4 text-sm text-text-muted mb-3">
                  <span className="font-medium text-accent">{event.event}</span>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={14} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                {/* Speaker Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <Image 
                    src={event.speakerAvatar} 
                    alt={event.speaker}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium text-text-primary">{event.speaker}</div>
                    <div className="text-xs text-text-muted">{event.speakerRole}</div>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-surface text-text-secondary text-xs rounded-md font-medium"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>

                {/* Event Stats */}
                <div className="flex items-center justify-between text-sm text-text-muted mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{event.attendees.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{event.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={14} />
                      <span>{event.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Play"
                    iconPosition="left"
                    onClick={() => window.open(event.videoUrl, '_blank')}
                    className="flex-1"
                  >
                    Watch Video
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="FileText"
                    iconPosition="left"
                    onClick={() => window.open(event.slidesUrl, '_blank')}
                    className="flex-1"
                  >
                    View Slides
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-text-primary mb-6">Upcoming Events</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-xl p-6 hover:shadow-elevated transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">{event.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-text-muted mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={14} />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={14} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="User" size={14} />
                  <span>Speaker: {event.speaker}</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="sm"
                iconName="ExternalLink"
                iconPosition="right"
                fullWidth
                onClick={() => window.open(event.registrationUrl, '_blank')}
              >
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Speaking Opportunities CTA */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold text-text-primary mb-3">Invite Our Team to Speak</h3>
        <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
          Looking for expert speakers for your conference, workshop, or corporate event? Our team members are available 
          to share their expertise and insights with your audience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.location.href = '/contact-consultation'}
          >
            Book a Speaker
          </Button>
          <Button
            variant="outline"
            iconName="Calendar"
            iconPosition="left"
            onClick={() => console.log('View speaking topics')}
          >
            View Topics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagementSection;