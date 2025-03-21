import React from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation (reused from App.tsx) */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/ai/image/ESGai logo (500 x 150 px).png" alt="ESGai Logo" className="h-10 w-auto rounded-lg" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition">Home</a>
              <a href="/#vision" className="text-gray-600 hover:text-gray-900 transition">Our Vision</a>
              <a href="/#agents" className="text-gray-600 hover:text-gray-900 transition">Research</a>
              <a href="/#demo" className="text-gray-600 hover:text-gray-900 transition">Demo</a>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-700 transition duration-300 transform hover:scale-105">
                Support Our Research
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Header */}
      <div className="pt-24 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Get in Touch with <span className="text-emerald-600 relative">ESGai
                <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We're excited to hear from you. Reach out to discuss collaboration, research opportunities, or just to say hello.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center relative inline-block">
              Meet Our Team
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600/30 transform -skew-x-12"></span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-emerald-100 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-4xl text-emerald-600 font-bold">RK</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Rohit kundliwal</h3>
                  <p className="text-emerald-600 font-medium mb-3">Founder & Lead Researcher</p>
                  <p className="text-gray-600 mb-4">
                    Ph.D. in AI & Sustainability from IIT Delhi with 8+ years of experience in ESG analysis and AI research. Leading our vision to transform ESG data analysis through innovative AI solutions.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="https://x.com/cryptorohittt" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/cryptorohittt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Developer */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-emerald-100 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-4xl text-emerald-600 font-bold">AP</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">Aditya Patil</h3>
                  <p className="text-emerald-600 font-medium mb-3">Lead Developer</p>
                  <p className="text-gray-600 mb-4">
                    Full-stack developer with expertise in building AI-powered applications. Master's in Computer Science from BITS Pilani with a focus on machine learning and data visualization.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/AdityaP63481849" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-patil-486962289/" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              {/* <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div> */}

              {/* Contact Information */}
              <div>
                <div className="bg-emerald-700 p-8 rounded-2xl shadow-lg text-white mb-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-emerald-200" />
                      <span>cryptorohittt@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-emerald-200" />
                      <span>+91 6361677190</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-emerald-200 mt-1" />
                      <span>bengaluru,karnataka,India - 560002</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Research Collaboration</h3>
                  <p className="text-gray-600 mb-4">
                    Interested in collaborating with us? We're always looking for partners who share our vision for sustainable business practices and AI innovation.
                  </p>
                  <a 
                    href="#" 
                    className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer (reused from App.tsx) */}
      <footer className="bg-gray-900 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img src="/ai/image/ESGai logo (500 x 150 px).png" alt="ESGai Logo" className="h-10 w-auto rounded-lg" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Exploring the future of ESG analysis through innovative AI research and multi-agent systems.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://x.com/cryptorohittt" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/cryptorohittt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:cryptorohittt@gmail.com" className="text-gray-400 hover:text-emerald-500 transition duration-300 transform hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Research Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Research</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Research Paper</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Methodology</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Technical Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Publications</a>
                </li>
              </ul>
            </div>

            {/* Team Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Team</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Research Team</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Advisors</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Join Us</a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-emerald-500 transition duration-300">Get in Touch</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Research Collaboration</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Support the Project</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300">Media Inquiries</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400">© 2024 ESGai Research Project. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Terms of Use</a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition duration-300 text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;