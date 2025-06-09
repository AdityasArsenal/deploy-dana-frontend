
import { Sparkles, Target, Zap, Leaf, Globe, Trees } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative storm-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30">
            <Globe className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium text-sm">Uncover ESG Insights with AI Precision</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Advanced</span> AI for ESG <span className="gradient-text">Research and Compliance</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          ESGai analyzes ESG data from 1,000+ companies using a Retrieval-Augmented Generation (RAG) framework and three AI agents—Manager, Worker, and Director. Query NSE’s BRSR and XBRL datasets, retrieve context-rich insights, and visualize trends in real-time with Power BI and Azure integration.
          </p>

          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-electric-cyan/20 rounded-full border border-primary/30 backdrop-blur-sm relative">
            <div className="flex items-center">
              <div className="relative mr-3">
                <Sparkles className="w-5 h-5 text-primary" />
                
              </div>
              <span className="text-white font-semibold">AI-Powered ESG Analysis at Your Fingertips</span>
            </div>
          </div>
        </div>

       

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-neon relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/60 rounded-lg flex items-center justify-center mx-auto mb-4 relative neon-glow">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Precision-Driven</h3>
            <p className="text-muted-foreground">
              Breaks down complex ESG questions for precise data retrieval.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-neon relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/60 rounded-lg flex items-center justify-center mx-auto mb-4 relative neon-glow">
              <Zap className="w-6 h-6 text-white" />
              
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Retrieve</h3>
            <p className="text-muted-foreground">
            Fetches context-rich insights from 1,000+ ESG reports.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-neon relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary/60 rounded-lg flex items-center justify-center mx-auto mb-4 relative neon-glow">
              <Sparkles className="w-6 h-6 text-white" />
              
            </div>
            <h3 className="text-xl font-semibold mb-3 text-foreground">Visualize</h3>
            <p className="text-muted-foreground">
              Delivers real-time trends via Power BI integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
