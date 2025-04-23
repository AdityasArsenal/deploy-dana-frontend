import React from 'react';
import { Users, Bot, Brain } from 'lucide-react';

const AgentsSection: React.FC = () => {
  return (
    <div id="agents" className="py-24 bg-gray-50 scroll-mt-19">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Our AI Agents
            <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
          </h2>
          <p className="text-gray-600 text-lg">
            We've developed 3 specialized AI agents that work together to analyze and report complex data from 1000s of reports.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Manager Agent</h3>
            <p className="text-gray-600 leading-relaxed">
              Our experimental agent that breaks down complex queries into manageable components, understanding context and nuances in ESG terminology.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <Bot className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Worker Agent</h3>
            <p className="text-gray-600 leading-relaxed">
              A specialized agent designed to efficiently process and analyze information from our database of ESG reports and financial data.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Director Agent</h3>
            <p className="text-gray-600 leading-relaxed">
              Our synthesis agent that combines insights to generate comprehensive ESG analysis, currently being trained on industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsSection;
