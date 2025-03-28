import React from 'react';
import { Building2, Database, LineChart, Search } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <div id="features" className="py-24 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Research Scope
            <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our MVP focuses on analyzing key ESG data sources
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Research Dataset</h3>
            <p className="text-gray-600">
              Access to reports from India's top 1000 listed companies for comprehensive analysis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">BRSR Analysis</h3>
            <p className="text-gray-600">
              Experimental processing of Business Responsibility and Sustainability Reports.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <LineChart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">XBRL Integration</h3>
            <p className="text-gray-600">
              Testing automated analysis of standardized XBRL reporting formats.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-200 transition duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Prototype Queries</h3>
            <p className="text-gray-600">
              Early-stage development of comparative analysis capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
