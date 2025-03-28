import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
          <footer className="bg-gray-900 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            {/* Brand Column */}
            <div className="space-y-6 flex flex-col items-center text-center max-w-md">
              <div className="flex items-center justify-center">
                <img src="/ai/image/logo.png" alt="ESGai Logo" className="h-10 w-auto rounded-lg" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Exploring the future of ESG analysis through innovative AI research and multi-agent systems.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/AdityasArsenal/deploy-dana-frontend" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://x.com/cryptorohittt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/cryptorohittt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=esgai.space@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 mt-8 border-t border-gray-800 w-full">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <p className="text-gray-400">© 2025 ESGai Research Project. All rights reserved.</p>
                <div className="flex gap-6">
                  <Link to="/policies#privacy" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Privacy Policy</Link>
                  <Link to="/policies#terms" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Terms of Use</Link>
                  <Link to="/policies#cookies" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
