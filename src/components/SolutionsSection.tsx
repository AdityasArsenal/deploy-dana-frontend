
import { AlertTriangle, DollarSign, Search, CheckCircle, Zap, Shield } from 'lucide-react';

const SolutionsSection = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      problem: 'Irrelevant Outputs',
      description: 'Generic AI tools provide broad answers that miss industry-specific nuances'
    },
    {
      icon: DollarSign,
      problem: 'High Costs',
      description: 'Traditional ESG consulting is expensive and time-consuming for businesses'
    },
    {
      icon: Search,
      problem: 'Shallow Results',
      description: 'Surface-level analysis fails to capture the depth required for ESG compliance'
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      solution: 'Precision Targeting',
      description: 'AI agents trained specifically on ESG frameworks deliver contextually accurate responses',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      solution: 'Cost Efficiency',
      description: 'Automated processing reduces consulting costs by up to 80% while improving speed',
      color: 'from-primary to-electric-blue'
    },
    {
      icon: Shield,
      solution: 'Deep Intelligence',
      description: 'Hybrid search combines semantic understanding with regulatory knowledge for comprehensive insights',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="solutions" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Solving Real <span className="gradient-text">ESG Challenges</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We identified the core problems in ESG compliance and built AI solutions that address each one
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Challenges */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              The <span className="text-red-400">Challenges</span>
            </h3>
            <div className="space-y-6">
              {challenges.map((challenge, index) => {
                const IconComponent = challenge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-red-500/10 border border-red-500/20 rounded-xl hover:border-red-500/40 transition-colors"
                  >
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{challenge.problem}</h4>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              Our <span className="gradient-text">Solutions</span>
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start p-6 bg-primary/10 border border-primary/20 rounded-xl hover:border-primary/40 transition-colors hover-glow"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{solution.solution}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border">
            <div className="text-3xl font-bold gradient-text mb-2">80%</div>
            <p className="text-muted-foreground">Cost Reduction</p>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border">
            <div className="text-3xl font-bold gradient-text mb-2">95%</div>
            <p className="text-muted-foreground">Accuracy Rate</p>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-xl border border-border">
            <div className="text-3xl font-bold gradient-text mb-2">10x</div>
            <p className="text-muted-foreground">Faster Processing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
