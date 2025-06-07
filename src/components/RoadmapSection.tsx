
import { Database, Cpu, Brain, Rocket } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      icon: Database,
      title: 'Enhanced Database Scaling',
      description: 'Expanding our ESG knowledge base with real-time regulatory updates and industry-specific frameworks',
      timeline: 'Q2 2024',
      status: 'in-progress'
    },
    {
      icon: Cpu,
      title: 'Token Optimization',
      description: 'Advanced token management for improved cost efficiency and faster response times',
      timeline: 'Q3 2024',
      status: 'planned'
    },
    {
      icon: Brain,
      title: 'Next-Gen Embeddings',
      description: 'Exploring cutting-edge embedding models for enhanced semantic understanding',
      timeline: 'Q4 2024',
      status: 'planned'
    },
    {
      icon: Rocket,
      title: 'Global Expansion',
      description: 'Multi-language support and regional ESG framework integration',
      timeline: '2025',
      status: 'future'
    }
  ];

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Future <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our vision for the next generation of AI-powered ESG solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-electric-blue to-primary opacity-50"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover-glow ${
                      item.status === 'in-progress' ? 'border-primary glow-effect' : ''
                    }`}>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          item.status === 'in-progress' 
                            ? 'bg-gradient-to-br from-primary to-electric-blue animate-pulse-glow' 
                            : 'bg-muted'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            item.status === 'in-progress' ? 'text-primary-foreground' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                          <span className={`text-sm px-2 py-1 rounded-full ${
                            item.status === 'in-progress' 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {item.timeline}
                          </span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 to-electric-blue/20 rounded-full border border-primary/30">
            <Rocket className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Building the future of ESG compliance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
