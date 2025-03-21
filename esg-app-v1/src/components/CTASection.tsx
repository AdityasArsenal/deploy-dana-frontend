import React from 'react';

const CTASection: React.FC = () => {
  return (
    <div className="py-24 bg-emerald-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Shaping the Future of ESG Analysis
          </h2>
          <p className="text-emerald-100 text-lg mb-12">
            We're seeking visionary partners and collaborators who share our belief in the transformative potential of AI in ESG analysis
          </p>
          <button className="bg-white text-emerald-900 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition duration-300 transform hover:scale-105">
            Support Our Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
