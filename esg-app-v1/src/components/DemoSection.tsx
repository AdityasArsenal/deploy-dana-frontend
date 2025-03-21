import React from 'react';
import ChatInterface from './ChatInterface';

const DemoSection: React.FC = () => {
  return (
    <div id="demo" className="py-24 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Try Our ESG Analysis AI
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
            </h2>
            <p className="text-gray-600 text-lg">
              Experience our prototype AI system that can analyze and compare ESG reports from Indian companies
            </p>
          </div>
          <ChatInterface />
          <div className="mt-8 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold mb-3 text-emerald-800">Suggested Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "What are the key ESG metrics reported by Reliance Industries?"
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "Compare the carbon emission reduction targets of Tata Steel and JSW Steel"
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "What materiality assessment process does HDFC Bank follow?"
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-100 hover:border-emerald-300 transition cursor-pointer">
                "Summarize Infosys's approach to diversity and inclusion"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
