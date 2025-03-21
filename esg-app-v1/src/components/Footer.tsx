import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/ai/image/ESGai logo (500 x 150 px).png"
                alt="ESGai Logo"
                className="h-10 w-auto rounded-lg"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Exploring the future of ESG analysis through innovative AI research and multi-agent systems.
            </p>
            <div className="flex items-center gap-4">
              <a href="/ai/github" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="/ai/twitter" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="/ai/linkedin" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="/ai/contact" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Research Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Research</h3>
            <ul className="space-y-3">
              <li>
                <a href="/ai/research-paper" className="text-gray-400 hover:text-emerald-500 transition duration-300">Research Paper</a>
              </li>
              <li>
                <a href="/ai/methodology" className="text-gray-400 hover:text-emerald-500 transition duration-300">Methodology</a>
              </li>
              <li>
                <a href="/ai/technical-docs" className="text-gray-400 hover:text-emerald-500 transition duration-300">Technical Documentation</a>
              </li>
              <li>
                <a href="/ai/publications" className="text-gray-400 hover:text-emerald-500 transition duration-300">Publications</a>
              </li>
            </ul>
          </div>

          {/* Team Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Team</h3>
            <ul className="space-y-3">
              <li>
                <a href="/ai/about" className="text-gray-400 hover:text-emerald-500 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="/ai/team" className="text-gray-400 hover:text-emerald-500 transition duration-300">Research Team</a>
              </li>
              <li>
                <a href="/ai/advisors" className="text-gray-400 hover:text-emerald-500 transition duration-300">Advisors</a>
              </li>
              <li>
                <a href="/ai/join" className="text-gray-400 hover:text-emerald-500 transition duration-300">Join Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="/ai/contact" className="text-gray-400 hover:text-emerald-500 transition duration-300">Get in Touch</a>
              </li>
              <li>
                <a href="/ai/contact" className="text-gray-400 hover:text-emerald-500 transition duration-300">Research Collaboration</a>
              </li>
              <li>
                <a href="/ai/contact" className="text-gray-400 hover:text-emerald-500 transition duration-300">Support the Project</a>
              </li>
              <li>
                <a href="/ai/contact" className="text-gray-400 hover:text-emerald-500 transition duration-300">Media Inquiries</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 ESGai Research Project. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/ai/privacy" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Privacy Policy</a>
              <a href="/ai/terms" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Terms of Use</a>
              <a href="/ai/cookies" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
