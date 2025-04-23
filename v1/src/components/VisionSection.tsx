import React from 'react';
import { Youtube } from "lucide-react";

const VisionSection: React.FC = () => {
  return (
    <div id="vision" className="py-8 bg-white scroll-mt-14">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Our Research Vision
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To develop AI agants that can analyze ESG reports from publicly listed companies from across the globe.
              <br />
              <a href='https://youtu.be/57fL0mejWlM?si=Z7dxmRwYjYwKHeMn' target='_blank' rel='noopener noreferrer' className='text-emerald-600 hover:text-emerald-700 transition duration-300 transform hover:scale-105 underline'>
              Watch our video</a>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-3">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
              ESG reporting in India is growing with BRSR mandates, generating complex data. Traditional methods can't keep up.
              </p>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-3">Our Approach</h3>
              <p className="text-gray-600 leading-relaxed">
              We're building a multi-agent AI system to analyze ESG reports and provide actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
