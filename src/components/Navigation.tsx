
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from '@/components/ui/Button';

const Navigation = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile(); // Use this to adjust UI for mobile

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Solutions', href: '/#solutions' },
    { name: 'Roadmap', href: '/#roadmap' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact us', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Example: Mobile-only banner using useIsMobile */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center h-16 w-full">
          {/* Logo - always at far left */}
          <div className="flex items-center">
            <button
              className="focus:outline-none hover:scale-105 transition-transform ml-8"
              onClick={() => navigate('/')}
              aria-label="Refresh page"
              style={{ background: 'none', border: 'none', padding: 0 }}
            >
              <img
                src="/icons/logo.png"
                alt="ESGai Logo"
                className="h-10 w-auto rounded-lg shadow-md"
                style={{ display: 'inline-block' }}
              />
            </button>
          </div>

          {/* Navigation links - center (hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Support Our Research button - far right */}
          <div className="hidden md:flex items-center ml-auto">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect mr-8"
                onClick={() => navigate('/chat')}
              >
                Get Started
              </Button>
          </div>

          {/* Mobile menu button - far right on mobile */}
          <div className="md:hidden ml-20 pl-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/50 backdrop-blur-md rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="w-full mt-4 bg-transparent border border-primary text-primary hover:bg-primary/10"
                onClick={() => {
                  navigate('/contact');
                  setIsOpen(false);
                }}
              >
                Support Our Research
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
