import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const interestOptions = [
    'Frontend Development',
    'Backend Architecture',
    'DevOps & Cloud',
    'Mobile Development',
    'AI & Machine Learning',
    'Blockchain',
    'Security',
    'Industry Insights'
  ];

  const handleInterestToggle = (interest) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl p-8 lg:p-12 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Mail" size={32} className="text-accent-200" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with CodeCraft Insights
          </h2>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Get the latest technical articles, industry insights, and exclusive resources delivered to your inbox weekly
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="space-y-6">
            {/* Email Input */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border-white/20 text-white placeholder-primary-300 focus:border-accent focus:bg-white/20"
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-accent text-white hover:bg-accent-600 px-8"
              >
                Subscribe
              </Button>
            </div>

            {/* Interest Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                What interests you most? (Optional)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interestOptions.map((interest, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                      interests.includes(interest)
                        ? 'bg-accent/20 border-accent text-accent-200' :'bg-white/10 border-white/20 text-primary-200 hover:bg-white/20 hover:border-white/40'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" size={16} className="text-accent-200" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Weekly Insights</h4>
                  <p className="text-primary-300 text-sm">
                    Curated technical articles and industry analysis
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Download" size={16} className="text-accent-200" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Exclusive Resources</h4>
                  <p className="text-primary-300 text-sm">
                    Free templates, guides, and development tools
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={16} className="text-accent-200" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Community Access</h4>
                  <p className="text-primary-300 text-sm">
                    Join our developer community and events
                  </p>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-success-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Welcome to CodeCraft Insights!</h3>
            <p className="text-primary-200">
              Thank you for subscribing. You'll receive your first newsletter within the next week.
            </p>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-white/20 text-primary-300 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={16} />
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} />
            <span>Weekly delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="X" size={16} />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;