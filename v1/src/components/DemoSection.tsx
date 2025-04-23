import React from 'react';
import ChatUI from './ChatUI';

const DemoSection: React.FC = () => {
  return (
    <div id="demo" className="py-20 bg-gray-50 scroll-mt-19">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Demo
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
            </h2>
            <p className="text-gray-600 text-lg">
              ESGai demo currently supports queries for 2 companies (HPCL and IOCL). Please give the tool a moment to load for the first time.
            </p>
          </div>
          <ChatUI />
          <div className="mt-8 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold mb-3 text-emerald-800">Suggested Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "How do HPCL and IOCL differ in their environmental priorities?"
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "What social factors are most important for HPCL vs. IOCL?"
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "How do their governance practices compare in ESG assessments?"
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "How do HPCL and IOCL engage stakeholders in ESG decisions?"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;