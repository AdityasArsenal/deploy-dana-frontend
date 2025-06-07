
import { useState } from 'react';
import { Brain, CircuitBoard, Cpu, ArrowRight, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AgentsSection = () => {
  const [activeAgent, setActiveAgent] = useState(0);

  const agents = [
    {
      name: 'Manager Agent',
      icon: Brain,
      description: 'Simplifies complex ESG queries and structures information for optimal processing.',
      details: 'The Manager Agent acts as your intelligent interface, breaking down complex ESG questions into manageable components and ensuring that every query is properly structured for maximum accuracy.',
      features: ['Query Optimization', 'Information Structuring', 'Context Management'],
      esgFocus: 'Environmental'
    },
    {
      name: 'Worker Agent',
      icon: CircuitBoard,
      description: 'Retrieves context-rich insights from comprehensive ESG document databases.',
      details: 'Using advanced hybrid search capabilities, the Worker Agent scans through vast ESG databases to find the most relevant information, combining semantic understanding with precise keyword matching.',
      features: ['Hybrid Search', 'Document Analysis', 'Context Extraction'],
      esgFocus: 'Social'
    },
    {
      name: 'Director Agent',
      icon: Cpu,
      description: 'Generates final, accurate responses using advanced generative AI models.',
      details: 'The Director Agent synthesizes all gathered information into coherent, actionable responses, ensuring accuracy and relevance while maintaining compliance with ESG standards.',
      features: ['Response Generation', 'Quality Assurance', 'Compliance Validation'],
      esgFocus: 'Governance'
    }
  ];

  const getESGColor = (focus: string) => {
    switch (focus) {
      case 'Environmental': return 'text-green-400';
      case 'Social': return 'text-blue-400';
      case 'Governance': return 'text-purple-400';
      default: return 'text-primary';
    }
  };

  return (
    <section id="agents" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet the <span className="gradient-text">AI Agents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three specialized AI agents working in perfect harmony to deliver unparalleled ESG insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {agents.map((agent, index) => {
              const IconComponent = agent.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border relative ${
                    activeAgent === index
                      ? 'bg-primary/10 border-primary glow-effect'
                      : 'bg-card/30 border-border hover:border-primary/50'
                  }`}
                  onClick={() => setActiveAgent(index)}
                >
                  {/* AI Leaf indicator */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
    
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 relative ${
                      activeAgent === index
                        ? 'bg-gradient-to-br from-primary to-electric-blue'
                        : 'bg-muted'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        activeAgent === index ? 'text-primary-foreground' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-foreground">{agent.name}</h3>
                      <span className={`text-sm ${getESGColor(agent.esgFocus)} font-medium`}>
                        {agent.esgFocus} Focus
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{agent.description}</p>
                  
                  {activeAgent === index && (
                    <div className="animate-fade-in">
                      <p className="text-foreground mb-4">{agent.details}</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium relative"
                          >
                            {feature}
                            
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-border backdrop-blur-sm relative">
              {/* AI Neural pattern */}
              <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-30">
                
                <div className="w-8 h-1 bg-gradient-to-r from-primary to-green-400"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
              
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold gradient-text mb-2">
                  {agents[activeAgent].name}
                </h4>
                <p className="text-muted-foreground flex items-center justify-center">
                  <span>In Action</span>
                                  </p>  
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg relative">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Processing ESG Data...</span>
                    
                  </div>
                  <p className="text-foreground">{agents[activeAgent].details}</p>
                </div>
                
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow relative">
                  <span>See {agents[activeAgent].name} Demo</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
