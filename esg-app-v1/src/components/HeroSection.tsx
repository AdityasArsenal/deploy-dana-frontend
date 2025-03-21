import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-emerald-50 to-teal-50 pt-24">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"
      ></div>
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-block mb-4 px-4 py-1 bg-emerald-100 rounded-full text-emerald-800 text-sm font-medium animate-fade-in">
            Research Project
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Reimagining ESG Analysis<br />Through{' '}
            <span className="text-emerald-600 relative">
              AI Innovation
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            We're a team of AI researchers exploring the potential of multi-agent systems to revolutionize ESG data analysis in India
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-emerald-200">
              Join Our Vision <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#demo"
              className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border border-gray-200"
            >
              Try Demo <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default HeroSection;
