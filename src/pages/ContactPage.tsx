import React from 'react';
import { Mail, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen atmospheric-bg">
      <Navigation />

      {/* Contact Header */}
      <div className="pt-8">
        <div className="container mx-auto px-4 py-12 pb-3">
          <div className="max-w-4xl mx-auto text-center">
  <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight gradient-text">
    Get in Touch
  </h1>
  <p className="text-xl text-muted-foreground mb-1 leading-relaxed">
    Reach out to discuss business collaborations and research opportunities at <span className="text-primary font-semibold">esgai.space@gmail.com</span>
  </p>
</div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-2">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center relative center">
              Team
              <span className="absolute bottom-0 left-0 h-1 bg-emerald-600/90 transform -skew-x-1"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Founder */}
              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover-neon relative">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-emerald-100 rounded-full mb-4 flex items-center justify-center">
                    <img src="team/rohit.jpg" alt="Rohit Kundliwal" className="w-32 h-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Rohit Kundliwal</h3>
                  <p className="text-emerald-600 font-medium mb-5">Founder & Lead Researcher</p>
                  {/* <p className="text-gray-600 mb-4">
                    Ph.D. in AI & Sustainability from IIT Delhi with 8+ years of experience in ESG analysis and AI research. Leading our vision to transform ESG data analysis through innovative AI solutions.
                  </p> */}
                  <div className="flex items-center gap-4">
                    <a href="https://x.com/cryptorohittt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/cryptorohittt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Developer */}
              <div className="p-6 rounded-xl bg-card/30 backdrop-black border border-border/50 hover-neon relative">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 bg-emerald-100 rounded-full mb-4 flex items-center justify-center">
                    <img src="/team/aditya.jpg" alt="Aditya Patil" className="w-32 h-32 rounded-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Aditya Patil</h3>
                  <p className="text-emerald-600 font-medium mb-5">Lead Developer</p>
                  {/* <p className="text-gray-600 mb-4">
                    Full-stack developer with expertise in building AI-powered applications. Master's in Computer Science from BITS Pilani with a focus on machine learning and data visualization.
                  </p> */}
                  <div className="flex items-center gap-4">
                    <a href="https://github.com/AdityasArsenal/deploy-dana-frontend" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://x.com/AdityaP63481849" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition duration-300">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-patil-486962289/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-600 transition duration-300">
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
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information Card */}
              <div className="bg-emerald-700 p-8 rounded-2xl shadow-lg text-white hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <a href="https://mail.google.com/mail/?view=cm&to=esgai.space@gmail.com" target="_blank" rel="noopener noreferrer">
                      <Mail className="w-5 h-5 text-emerald-200 inline-block" /><span className="ml-4">esgai.space@gmail.com</span>
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-emerald-200 mt-1" />
                    <span>Bengalore, India - 560051</span>
                  </div>
                  <div className="flex items-start gap-4 align-center">
                    <a href="https://www.linkedin.com/company/106447186" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 text-emerald-200 inline-block mb-1" /><span className="ml-4">Connect on Linkedin</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Our Research Card */}
              <div className="bg-emerald-700 p-8 rounded-2xl shadow-lg text-white hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold mb-6">Support Our Research</h3>
                <p>
                  We're looking for investors who believe in our vision of transforming ESG reporting using AI. If you are interested to learn more, please reach out to us on Email or Linkedin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;