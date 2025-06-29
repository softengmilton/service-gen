import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/15 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-accent/25 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={24} className="text-accent" />
                </div>
                <span className="text-accent font-medium text-sm tracking-wide uppercase">
                  Premium Services
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Your Vision Into
                <span className="block text-accent">Digital Reality</span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                Discover our comprehensive suite of services designed to elevate your business through cutting-edge technology and innovative solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-accent hover:bg-accent-600 text-white shadow-xl"
              >
                Explore Services
              </Button>
              <Button
                variant="ghost"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="text-white border-white/30 hover:bg-white/10"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">200+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/70">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl"></div>
              
              {/* Code Animation */}
              <div className="relative h-full flex flex-col justify-center space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2 text-white/90">
                    <div className="text-accent">// Building your digital future</div>
                    <div>
                      <span className="text-blue-300">const</span>{" "}
                      <span className="text-white">solution</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-green-300">await</span>{" "}
                      <span className="text-yellow-300">CodeCraft</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-300">create</span>
                      <span className="text-white">(</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-white">yourVision</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-white">ourExpertise</span>
                    </div>
                    <div>
                      <span className="text-white">);</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;