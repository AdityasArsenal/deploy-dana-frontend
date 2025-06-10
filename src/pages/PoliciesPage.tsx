import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useEffect } from 'react';

const PoliciesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Link to="/">
                <img src="/icons/logo.png" alt="ESGai Logo" className="h-10 w-auto rounded-lg" />
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-8">
                <a href="#privacy" className="text-muted-foreground transition">Privacy Policy</a>
                <a href="#terms" className="text-muted-foreground transition">Terms of Use</a>
                <a href="#cookies" className="text-muted-foreground transition">Cookies Policy</a>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium transition duration-300 transform"
              >
                Support Our Research
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-12 bg-gradient-to-b from-background via-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-primary font-medium">Policies & Guidelines</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Our <span className="gradient-text">Policies</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transparent guidelines on how we handle your data and govern our services
            </p>
          </div>
        </div>
      </div>

      {/* Policies Content */}
      <div className="py-0 pb-20">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Privacy Policy */}
            <div
              id="privacy"
              className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 glow-effect-sm p-8 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-5 text-foreground relative inline-block">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-electric-blue transform -skew-x-12"></span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  <span className="font-semibold text-primary">Effective Date:</span> 28th March 2025
                </p>
                <p className="mb-6">
                  Welcome to ESGai. Your privacy is important to us, and we are committed to being transparent about our practices. This Privacy Policy explains how we handle user data when you visit our website (https://www.esgai.space/).
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Information We Do Not Collect</h3>
                    <p>We do not collect, store, or process any personal data from visitors to our website. We do not require users to sign up, log in, or provide any personal information.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Third-Party Services</h3>
                    <p className="mb-2">While we do not collect data, our website includes embedded third-party services that may collect user information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>YouTube Video Embed: If you watch the embedded YouTube video, YouTube may collect data as per their own Privacy Policy.</li>
                      <li>Google Docs: Our research paper is linked via Google Docs, and Google may track interactions as per their own policies.</li>
                    </ul>
                    <p className="mt-2">We recommend reviewing the privacy policies of these services for more information.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. External Links</h3>
                    <p>Our website contains links to third-party websites, including Google Docs and YouTube. We are not responsible for their privacy practices and encourage users to review their policies.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h3>
                    <p>Since we do not collect any user data, there is no risk of data breaches or unauthorized access to personal information through our website.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Changes to This Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page with a revised effective date.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, you can contact us through the details available on our website (https://www.esgai.space).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms of Use */}
            <div
              id="terms"
              className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 glow-effect-sm p-8  transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-5 text-foreground relative inline-block">
                Terms of Use
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-electric-blue transform -skew-x-12"></span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  <span className="font-semibold text-primary">Effective Date:</span> 28th March 2025
                </p>
                <p className="mb-6">
                  Welcome to ESGai. By accessing our website (https://www.esgai.space), you agree to these Terms of Use.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h3>
                    <p>By using this website, you accept and agree to be bound by these Terms of Use. If you do not agree, please refrain from using our website.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Website Content</h3>
                    <p className="mb-2">Our website provides information about ESGai, including research materials, demo access, and video content.</p>
                    <p>All content on the website is for informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any information presented.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h3>
                    <p className="mb-2">All content on this website, including text, images, and videos, is the property of ESGai or used with permission.</p>
                    <p>Users may not copy, reproduce, or distribute any content without prior written permission.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. External Links</h3>
                    <p className="mb-2">Our website contains links to third-party services such as Google Docs and YouTube.</p>
                    <p>We do not control these third-party websites and are not responsible for their content or data practices.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h3>
                    <p>We are not responsible for any damages, losses, or issues arising from the use of our website or third-party links.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">6. Governing Law</h3>
                    <p>These Terms of Use are governed by the laws of India. Any disputes shall be resolved in the appropriate courts of India.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">7. Changes to These Terms</h3>
                    <p>We may update these Terms of Use at any time. Changes will be posted on this page with a revised effective date.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">8. Contact Us</h3>
                    <p>For any questions regarding these Terms of Use, please contact us through the details available on our website.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies Policy */}
            <div
              id="cookies"
              className="bg-card/50 backdrop-blur-sm rounded-xl border border-primary/30 glow-effect-sm p-8  transition-all duration-300"
            >
              <h2 className="text-3xl font-bold mb-5 text-foreground relative inline-block">
                Cookies Policy
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-electric-blue transform -skew-x-12"></span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  <span className="font-semibold text-primary">Effective Date:</span> 28th March 2025
                </p>
                <p className="mb-6">
                  ESGai does not use cookies to track or store any user data. However, third-party services embedded in our website may use cookies.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. What Are Cookies?</h3>
                    <p>Cookies are small text files stored on your device by websites you visit. They help improve user experience by remembering preferences, tracking interactions, or enabling functionalities.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Our Use of Cookies</h3>
                    <p className="mb-2">We do not directly use cookies. However, the following third-party services may use cookies:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>YouTube: Embedded YouTube videos may use cookies to track views and user interactions.</li>
                      <li>Google Docs: If you view our research paper via Google Docs, Google may use cookies as per their policies.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Managing Cookies</h3>
                    <p>You can control and manage cookies through your browser settings. You may disable cookies, but this may affect how certain third-party services function.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Changes to This Cookies Policy</h3>
                    <p>We may update this Cookies Policy from time to time. Any changes will be reflected on this page with a revised effective date.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">5. Contact Us</h3>
                    <p>If you have any questions about our Cookies Policy, please contact us through the details available on our website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background/80 backdrop-blur-sm pt-16 pb-12 border-t border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="space-y-6 flex flex-col items-center text-center max-w-md">
              <div className="flex items-center justify-center">
                <img src="/ai/image/logo.png" alt="ESGai Logo" className="h-10 w-auto rounded-lg" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Exploring the future of ESG analysis through innovative AI research and multi-agent systems.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/AdityasArsenal/deploy-dana-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition duration-300 transform hover:scale-110 hover-neon"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/cryptorohittt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition duration-300 transform hover:scale-110 hover-neon"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/cryptorohittt?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition duration-300 transform hover:scale-110 hover-neon"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=esgai.space@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition duration-300 transform hover:scale-110 hover-neon"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoliciesPage;