import React from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceOverview from './components/ServiceOverview';
import ProjectConfigurator from './components/ProjectConfigurator';
import TechnicalDeepDive from './components/TechnicalDeepDive';
import ClientJourney from './components/ClientJourney';
import ROICalculator from './components/ROICalculator';
import TechnologyRadar from './components/TechnologyRadar';
import ClientTestimonials from './components/ClientTestimonials';
import ConsultationWidget from './components/ConsultationWidget';

const ServicesDeepDive = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <ServiceHero />
      
      {/* Service Overview */}
      <ServiceOverview />
      
      {/* Interactive Project Configurator */}
      <ProjectConfigurator />
      
      {/* Technical Deep-Dive */}
      <TechnicalDeepDive />
      
      {/* Client Journey Timeline */}
      <ClientJourney />
      
      {/* ROI Calculator */}
      <ROICalculator />
      
      {/* Technology Radar */}
      <TechnologyRadar />
      
      {/* Client Testimonials */}
      <ClientTestimonials />
      
      {/* Consultation Widget */}
      <ConsultationWidget />
    </div>
  );
};

export default ServicesDeepDive;