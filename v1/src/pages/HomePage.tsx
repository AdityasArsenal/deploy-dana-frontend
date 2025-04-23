import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import ResearchProgress from '../components/ResearchProgress';
import AgentsSection from '../components/AgentsSection';
import FeaturesSection from '../components/FeaturesSection';
import DemoSection from '../components/DemoSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <ResearchProgress />
      <AgentsSection />
      <FeaturesSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
