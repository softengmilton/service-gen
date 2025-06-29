import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WebinarSection = ({ webinars }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Webinars & Workshops
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Join our expert-led sessions and access archived content from industry leaders
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {webinars.map((webinar, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-soft border border-border overflow-hidden hover:shadow-elevated transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={webinar.thumbnail}
                alt={webinar.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
                  <Icon 
                    name="Play" 
                    size={24} 
                    className="text-white ml-1 group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  webinar.status === 'Live' ? 'bg-error text-white' :
                  webinar.status === 'Upcoming'? 'bg-warning text-white' : 'bg-success/20 text-success-600'
                }`}>
                  {webinar.status}
                </span>
              </div>

              {/* Duration */}
              <div className="absolute bottom-4 right-4">
                <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-lg">
                  {webinar.duration}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3 text-sm text-text-muted">
                <Icon name="Calendar" size={14} />
                <span>{webinar.date}</span>
                <span>•</span>
                <Icon name="Users" size={14} />
                <span>{webinar.attendees} attendees</span>
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3">
                {webinar.title}
              </h3>

              <p className="text-text-secondary mb-4 leading-relaxed">
                {webinar.description}
              </p>

              {/* Speaker */}
              <div className="flex items-center gap-3 mb-4 p-3 bg-surface rounded-lg">
                <Image
                  src={webinar.speaker.avatar}
                  alt={webinar.speaker.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-text-primary">{webinar.speaker.name}</p>
                  <p className="text-sm text-text-secondary">{webinar.speaker.title}</p>
                </div>
              </div>

              {/* Topics */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-text-primary mb-2">Key Topics:</h4>
                <div className="flex flex-wrap gap-2">
                  {webinar.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-lg"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  variant={webinar.status === 'Upcoming' ? "primary" : "outline"}
                  size="sm"
                  iconName={
                    webinar.status === 'Live' ? "Radio" :
                    webinar.status === 'Upcoming' ? "Calendar" : "Play"
                  }
                  iconPosition="left"
                  className="flex-1"
                >
                  {webinar.status === 'Live' ? "Join Live" :
                   webinar.status === 'Upcoming' ? "Register" : "Watch Recording"}
                </Button>
                
                <button className="p-2 border border-border rounded-lg text-text-muted hover:text-accent hover:border-accent transition-all duration-200">
                  <Icon name="Share2" size={16} />
                </button>
                
                <button className="p-2 border border-border rounded-lg text-text-muted hover:text-accent hover:border-accent transition-all duration-200">
                  <Icon name="Bookmark" size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebinarSection;