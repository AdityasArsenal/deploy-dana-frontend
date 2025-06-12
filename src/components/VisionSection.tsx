import React from 'react';

const stats = [
  { label: 'Companies in Dataset', value: '1000+' },
  { label: 'AI Agents Developed', value: '3' },
  { label: 'processing speed', value: '12s' },
  { label: 'Query Accuracy', value: '98%' },
];

const VisionSection = () => (
  <section className="py-20 bg-blue">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        Our <span className="gradient-text">Vision</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        To develop AI agents that can analyze ESG reports from publicly listed companies from across the globe.
      </p>
      <a href="https://youtu.be/5-oBdge6Q78?si=p-no4ktAdDW-x-08" target="_blank" rel="noopener noreferrer" className="text-primary underline mb-8 inline-block">Watch our video</a>
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-12 mt-8">
        <div className="bg-card/50 border border-border rounded-xl p-6 flex-1 min-w-[260px] text-left">
          <h3 className="font-semibold text-lg mb-2">The Challenge</h3>
          <p className="text-muted-foreground text-base">
            ESG reporting in India is growing with BRSR mandates, generating complex data. Traditional methods can't keep up.
          </p>
        </div>
        <div className="bg-card/50 border border-border rounded-xl p-6 flex-1 min-w-[260px] text-left">
          <h3 className="font-semibold text-lg mb-2">Our Approach</h3>
          <p className="text-muted-foreground text-base">
            We're building a multi-agent AI system to analyze ESG reports and provide actionable insights.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-green-700 mb-1">{s.value}</div>
            <div className="text-muted-foreground text-base">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
