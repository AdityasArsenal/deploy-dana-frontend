
import { Sparkles, Target, Zap, Leaf, Globe, Trees } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative storm-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30">
            <Globe className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium text-sm">EXPLORE THE FUTURE OF ESG</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            See all <span className="gradient-text">ESG solutions</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            ESGai transforms the complex world of Environmental, Social, and Governance compliance 
            through cutting-edge artificial intelligence. Our platform eliminates the traditional 
            pain points of ESG reporting by providing intelligent, context-aware solutions.
          </p>

          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-electric-cyan/20 rounded-full border border-primary/30 backdrop-blur-sm relative">
            <div className="flex items-center">
              <div className="relative mr-3">
                <Sparkles className="w-5 h-5 text-primary" />
                
              </div>
              <span className="text-primary font-semibold">AI that understands ESG, so you can focus on impact.</span>
            </div>
          </div>
        </div>

        {/* Interactive global map representation */}
        <div className="mb-16 relative">
          <div className="w-full h-64 bg-gradient-to-b from-card/20 to-card/40 rounded-2xl border border-border/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 storm-pattern opacity-30"></div>
            
            {/* Simulated world map dots */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-16 h-16 text-primary mx-auto mb-4 floating-slow" />
                <p className="text-muted-foreground">Global ESG Compliance Network</p>
              </div>
              
              {/* Floating dots representing global presence */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full pulse-green"></div>
              <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-electric-cyan rounded-full pulse-green" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-soft-emerald rounded-full pulse-green" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary rounded-full pulse-green" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-neon relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/60 rounded-lg flex items-center justify-center mx-auto mb-4 relative neon-glow">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Precision-Driven</h3>
            <p className="text-muted-foreground">
              Our AI agents deliver accurate, contextually relevant ESG insights tailored to your industry and regulations.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-neon relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/60 rounded-lg flex items-center justify-center mx-auto mb-4 relative neon-glow">
              <Zap className="w-6 h-6 text-primary-foreground" />
              
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Lightning Fast</h3>
            <p className="text-muted-foreground">
              What used to take weeks now happens in minutes. Get instant answers to complex ESG queries.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-neon relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/60 rounded-lg flex items-center justify-center mx-auto mb-4 relative neon-glow">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
              
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Future-Ready</h3>
            <p className="text-muted-foreground">
              Built on next-generation AI technology that evolves with changing ESG standards and requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
