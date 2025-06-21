import Navigation from '../components/Navigation';
import VisionSection from '../components/VisionSection';
import ScopeSection from '../components/ScopeSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection'; 
import AgentsSection from '../components/AgentsSection';
import SolutionsSection from '../components/SolutionsSection';
import RoadmapSection from '../components/RoadmapSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

const HomePage = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AgentsSection />
      <SolutionsSection />
      <RoadmapSection />
      <Faq />
      <VisionSection />
      {/* <ScopeSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
