
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from '@/components/ui/Button';

const Navigation = () => {
  const isMobile = useIsMobile(); // Use this to adjust UI for mobile

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'The Agents', href: '#agents' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Example: Mobile-only banner using useIsMobile */}
      {isMobile && (
        <div className="md:hidden bg-primary text-primary-foreground text-center py-1 text-xs">
          Mobile View
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">ESGai</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
  item.name === 'Contact' ? (
    <a
      key={item.name}
      href="/contact"
      className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
    >
      {item.name}
    </a>
  ) : (
    <a
      key={item.name}
      href={item.href}
      className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
    >
      {item.name}
    </a>
  )
))}
            </div>
          </div>

          <div className="hidden md:block">
            <a href="/chat">
  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-effect">
    Try out ESGai
  </Button>
</a>
          </div>

          <div className="md:hidden">
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
              <Button className="w-full mt-4 bg-primary text-primary-foreground  hover:bg-primary/90">
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
