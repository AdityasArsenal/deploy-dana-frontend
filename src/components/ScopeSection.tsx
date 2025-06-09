import React from 'react';
import { Book, Search, Zap } from 'lucide-react';

const scopeFeatures = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-green-50 rounded-full mb-2">
        <Search strokeWidth={2} size={25} color="green" />
      </span>
    ),
    title: 'Research Dataset',
    desc: `Access to reports from India's top 1000 listed companies for comprehensive analysis.`
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full mb-2">
        <Book strokeWidth={2} size={25} color="blue" />
      </span>
    ),
    title: 'BRSR Analysis',
    desc: 'Experimental processing of Business Responsibility and Sustainability Reports.'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-purple-50 rounded-full mb-2">
        <Book strokeWidth={2} size={25} color="purple" />
      </span>
    ),
    title: 'XBRL Integration',
    desc: 'Testing automated analysis of standardized XBRL reporting formats.'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 rounded-full mb-2">
        <Zap strokeWidth={2} size={25} color="orange" />
      </span>
    ),
    title: 'Prototype Queries',
    desc: 'Early-stage development of comparative analysis capabilities.'
  },
];

const ScopeSection = () => (
  <section className="py-20 bg-blue">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        <span className="gradient-text">Research Scope</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mb-8 mx-auto">
        Our MVP focuses on analyzing key ESG data sources
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {scopeFeatures.map((f) => (
          <div key={f.title} className="bg-card/50 border border-border rounded-xl p-6 text-left flex flex-col items-center">
            {f.icon}
            <h3 className="font-semibold text-lg mb-2 text-center">{f.title}</h3>
            <p className="text-muted-foreground text-base text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScopeSection;
