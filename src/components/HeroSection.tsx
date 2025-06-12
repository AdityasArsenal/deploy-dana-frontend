
import { Button } from '@/components/ui/Button';
  import { Brain, CircuitBoard, Cpu, Globe, Zap, Building2 } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden atmospheric-bg">
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80"></div>
      
      {/* Floating AI elements with enhanced styling */}
      <div className="absolute top-20 left-10 floating-slow opacity-60">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
            <Building2 strokeWidth={2} size={25} color="green" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 floating-slow opacity-50" style={{ animationDelay: '2s' }}>
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan/20 to-electric-cyan/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-electric-cyan/30">
            <Zap className="w-6 h-6 text-electric-cyan" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 floating-slow opacity-40" style={{ animationDelay: '4s' }}>
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-soft-emerald/20 to-soft-emerald/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-soft-emerald/30">
            <Globe className="w-10 h-10 text-soft-emerald" />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Distance indicator like StormSeek */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary font-medium">Sustainability AI Consultant</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <div className="mb-7">Your personalised <span className="gradient-text">AI consultant</span>:<br />
            for ESG analytics</div>
          </h1>
          
          <p className="text-xl md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Three AI agents. One powerful solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-neon text-lg px-12 py-7 w-full sm:w-auto"
              onClick={() => navigate('/chat')}
            >
              Try out ESGai
            </Button>
            <div className="relative group">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-12 py-7 hover:text-white transition-colors duration-200 font-medium w-full sm:w-auto"
              >
                Sign In
              </Button>
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Coming soon
              </span>
            </div>
          </div>

          {/* Agent indicators with StormSeek-inspired design */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            <div className="flex flex-col items-center floating-slow">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/70 rounded-full flex items-center justify-center mb-2 neon-glow backdrop-blur-sm border border-primary/40 relative">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-medium text-electric-cyan-500">Manager</span>
            </div>
            
            <div className="flex flex-col items-center floating-slow" style={{ animationDelay: '2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/70 rounded-full flex items-center justify-center mb-2 neon-glow backdrop-blur-sm border border-primary/40 relative">
                <CircuitBoard className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-medium text-electric-cyan-500">Worker</span>
            </div>
          
            <div className="flex flex-col items-center floating-slow" style={{ animationDelay: '4s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/70 rounded-full flex items-center justify-center mb-2 neon-glow backdrop-blur-sm border border-primary/40 relative">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <span className="text-sm font-medium text-electric-cyan-500">Director</span>
            </div>
          </div>
        </div>
      </div>

      {/* Atmospheric particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full pulse-green opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-electric-cyan rounded-full pulse-green opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-soft-emerald rounded-full pulse-green opacity-80" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default HeroSection;
