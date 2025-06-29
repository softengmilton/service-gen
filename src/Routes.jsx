import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import KnowledgeCenter from "pages/knowledge-center";
import PortfolioShowcase from "pages/portfolio-showcase";
import ContactConsultation from "pages/contact-consultation";
import InnovationLab from "pages/innovation-lab";
import ServicesDeepDive from "pages/services-deep-dive";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your routes here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/knowledge-center" element={<KnowledgeCenter />} />
          <Route path="/portfolio-showcase" element={<PortfolioShowcase />} />
          <Route
            path="/contact-consultation"
            element={<ContactConsultation />}
          />
          <Route path="/innovation-lab" element={<InnovationLab />} />
          <Route path="/services-deep-dive" element={<ServicesDeepDive />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
