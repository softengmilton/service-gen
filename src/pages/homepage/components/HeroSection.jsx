import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    {
      language: 'React',
      code: `const transform = (business) => {
  return {
    revenue: business.revenue * 2.5,
    efficiency: business.efficiency + 40,
    userSatisfaction: 95
  };
};`,
      result: 'Interactive Dashboard'
    },
    {
      language: 'Node.js',
      code: `app.post('/api/optimize', async (req, res) => {
  const result = await AI.processData(req.body);
  return res.json({
    performance: '+300%',
    costs: '-60%'
  });
});`,
      result: 'AI-Powered API'
    },
    {
      language: 'Python',
      code: `def analyze_growth(data):
    insights = ml_model.predict(data)
    return {
        'growth_rate': insights.growth * 100,
        'recommendations': insights.actions
    }`,
      result: 'ML Analytics Engine'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Transforming Ideas Into Digital Reality
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Code That
              <span className="block bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
                Transforms
              </span>
              Businesses
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Where technical mastery meets creative vision. We craft premium software solutions that don't just meet requirements—they redefine what's possible for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact-consultation">
                <Button
                  variant="primary"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Start Your Transformation
                </Button>
              </Link>
              <Link to="/portfolio-showcase">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Eye"
                  iconPosition="left"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-accent"
                >
                  Explore Our Craft
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Visualization */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-slate-400 font-mono">
                  {codeSnippets[currentCodeIndex].language}
                </div>
              </div>

              {/* Code Content */}
              <div className="space-y-4">
                <pre className={`text-sm font-mono text-slate-300 leading-relaxed transition-opacity duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
                  <code>{codeSnippets[currentCodeIndex].code}</code>
                </pre>

                {/* Transformation Arrow */}
                <div className="flex items-center justify-center py-4">
                  <div className="flex items-center space-x-2 text-accent">
                    <div className="w-8 h-px bg-accent"></div>
                    <Icon name="ArrowRight" size={20} />
                    <div className="w-8 h-px bg-accent"></div>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-gradient-to-r from-accent/10 to-sky-500/10 border border-accent/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 text-accent font-medium">
                    <Icon name="Zap" size={16} />
                    <span>{codeSnippets[currentCodeIndex].result}</span>
                  </div>
                </div>
              </div>

              {/* Code Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {codeSnippets.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCodeIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentCodeIndex ? 'bg-accent' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-lg p-3">
              <Icon name="Code2" size={24} className="text-accent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-3">
              <Icon name="CheckCircle" size={24} className="text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-slate-400" />
      </div>
    </section>
  );
};

export default HeroSection;