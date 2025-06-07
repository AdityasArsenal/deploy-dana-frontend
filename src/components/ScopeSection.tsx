import React from 'react';

const scopeFeatures = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-green-50 rounded-full mb-2">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600"><rect x="4" y="4" width="16" height="16" rx="3"/></svg>
      </span>
    ),
    title: 'Research Dataset',
    desc: `Access to reports from India's top 1000 listed companies for comprehensive analysis.`
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full mb-2">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>
      </span>
    ),
    title: 'BRSR Analysis',
    desc: 'Experimental processing of Business Responsibility and Sustainability Reports.'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-purple-50 rounded-full mb-2">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-600"><rect x="8" y="8" width="8" height="8" rx="1.5"/></svg>
      </span>
    ),
    title: 'XBRL Integration',
    desc: 'Testing automated analysis of standardized XBRL reporting formats.'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-50 rounded-full mb-2">
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500"><circle cx="12" cy="12" r="6"/></svg>
      </span>
    ),
    title: 'Prototype Queries',
    desc: 'Early-stage development of comparative analysis capabilities.'
  },
];

const ScopeSection = () => (
  <section className="py-20 bg-background/60">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Research Scope</h2>
      <p className="text-lg text-muted-foreground mb-10">Our MVP focuses on analyzing key ESG data sources</p>
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
