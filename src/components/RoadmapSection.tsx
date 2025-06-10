import { Database, Cpu, Brain, Rocket, BarChart, Users, Shield, Rocket as RocketIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      icon: RocketIcon,
      title: 'V0 Launch Success',
      description: 'Launched initial version with 10 companies visualized, accurate data, and an intuitive chat UI.',
      status: 'completed'
    },
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'Expanded ESG database to include all companies for deeper insights.',
      status: 'completed'
    },
    {
      icon: BarChart,
      title: 'Custom Visuals',
      description: 'Introduced custom front-end charts for richer ESG data presentation.',
      status: 'planned'
    },
    {
      icon: Brain,
      title: 'AI Context Integration',
      description: 'Enabled AI to seamlessly connect visuals and chat for unified insights.',
      status: 'planned'
    },
    {
      icon: BarChart,
      title: 'Advanced Visualizations',
      description: 'Delivered Power BI-like visual capabilities for dynamic ESG analysis.',
      status: 'planned'
    },
    {
      icon: Users,
      title: 'User-Driven Iteration',
      description: 'Incorporated feedback to enhance functionality and user experience.',
      status: 'planned'
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'Added signup, authentication, and session management for secure access.',
      status: 'planned'
    }
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current as HTMLDivElement | null;
      if (!timeline) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const rect = timeline.getBoundingClientRect();
      const timelineTop = rect.top + window.scrollY;
      const timelineHeight = rect.height;

      if (timelineHeight === 0) return;

      const progress = Math.min(
        1,
        Math.max(0, (scrollPosition - timelineTop + windowHeight / 2) / timelineHeight)
      );

      timeline.style.background = `linear-gradient(to bottom, #00FFC4 ${progress * 100}%, rgba(0, 255, 196, 0.3) ${progress * 100}%)`;
      timeline.style.boxShadow = `0 0 15px rgba(0, 255, 196, ${progress * 0.8})`;
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Future <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pioneering the next generation of AI-driven ESG insights
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-primary/30 transition-all duration-300"
            style={{ boxShadow: '0 0 15px rgba(0, 255, 196, 0)' }}
          ></div>

        <div className="space-y-12">
          {roadmapItems.map((item, index) => {
            const IconComponent = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className={`p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover-glow ${
                    item.status === 'completed' ? 'border-green-400 glow-effect-green' :
                      item.status === 'in-progress' ? 'border-primary glow-effect' : ''
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        item.status === 'completed'
                          ? 'bg-gradient-to-br from-green-400 to-green-600'
                            : item.status === 'in-progress' 
                            ? 'bg-gradient-to-br from-primary to-electric-blue animate-pulse-glow' 
                          : 'bg-muted'
                      }`}>
                        <IconComponent className={`w-6 h-6 ${
                            item.status === 'completed' ? 'text-white' :
                            item.status === 'in-progress' ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>

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
            <span className="text-primary font-semibold">Shaping the future of ESG analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;