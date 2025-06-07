
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle, Leaf, Download, Smartphone } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-20 relative atmospheric-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-card/30 to-card/20 backdrop-blur-sm p-12 rounded-2xl border border-border/50 relative overflow-hidden">
          {/* Enhanced atmospheric effects */}
          <div className="absolute inset-0 storm-pattern opacity-40"></div>
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl pulse-green"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-electric-cyan/20 rounded-full blur-3xl pulse-green" style={{ animationDelay: '2s' }}></div>
          
          {/* Enhanced AI Leaf elements */}
          <div className="absolute top-6 left-6 floating-slow opacity-60">
            <div className="relative">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
                
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full pulse-green"></div>
            </div>
          </div>
          <div className="absolute top-6 right-6 floating-slow opacity-50" style={{ animationDelay: '3s' }}>
            <div className="relative">
              <div className="w-6 h-6 bg-electric-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-electric-cyan/30">
                
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            {/* StormSeek-inspired section header */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/30">
              <Download className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-medium text-sm">DOWNLOAD ESGAI APP</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              An ESG solution in your hand
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your ESG compliance process? Experience the power of our AI agents 
              and discover how ESGai can streamline your sustainability reporting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-neon text-lg px-8 py-4 relative">
                <span>Get the app on App Store</span>
                <ArrowRight className="w-5 h-5 ml-2" />
                
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4 relative hover-neon">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>Get in Touch</span>
                
              </Button>
            </div>

            {/* Mobile app showcase */}
            <div className="mb-8 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-b from-card/40 to-card/20 rounded-2xl border border-border/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 storm-pattern opacity-20"></div>
                <div className="relative z-10 text-center">
                  <Smartphone className="w-16 h-16 text-primary mx-auto mb-4 floating-slow" />
                  <div className="space-y-2">
                    <div className="w-32 h-2 bg-primary/30 rounded mx-auto"></div>
                    <div className="w-24 h-2 bg-electric-cyan/30 rounded mx-auto"></div>
                    <div className="w-28 h-2 bg-soft-emerald/30 rounded mx-auto"></div>
                  </div>
                </div>
                {/* Floating indicators */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full pulse-green"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-electric-cyan rounded-full pulse-green" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-soft-emerald rounded-full pulse-green" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 pulse-green"></div>
                <span>Free Demo Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-electric-cyan rounded-full mr-2 pulse-green"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center">
                
                <span>ESG Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
