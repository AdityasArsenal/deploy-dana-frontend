import React from 'react';

const ResearchProgress: React.FC = () => {
  return (
    <div className="py-12 bg-white relative scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center transform hover:scale-105 transition duration-300">
            <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-gray-600">Companies in Dataset</div>
          </div>
          <div className="text-center transform hover:scale-105 transition duration-300">
            <div className="text-4xl font-bold text-emerald-600 mb-2">3</div>
            <div className="text-gray-600">AI Agents Developed</div>
          </div>
          <div className="text-center transform hover:scale-105 transition duration-300">
            <div className="text-4xl font-bold text-emerald-600 mb-2">MVP</div>
            <div className="text-gray-600">Development Stage</div>
          </div>
          <div className="text-center transform hover:scale-105 transition duration-300">
            <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-gray-600">Query Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchProgress;
