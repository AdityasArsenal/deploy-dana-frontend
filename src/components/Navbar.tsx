import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/ai/image/logo.png"
              alt="ESGai Logo"
              onClick={() => window.scrollTo(0, 0)}
              className="h-10 w-auto rounded-lg hover:scale-105 transition duration-300 transform cursor-pointer"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-gray-600 hover:text-gray-900 transition">
              Our Vision
            </a>
            <a href="#agents" className="text-gray-600 hover:text-gray-900 transition">
              Research
            </a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 transition">
              Demo
            </a>
            <a href="https://docs.google.com/document/d/1hVm2ew2RGQED3HOu16icoqfER6291dTkeXkAL9R5gZY/edit?tab=t.tydd8cyqllp1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition duration-300">White paper</a>
            <Link to="/chat" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition duration-300 transform hover:scale-105">
              Support Our Research
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
