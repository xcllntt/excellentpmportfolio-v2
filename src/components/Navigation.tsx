import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "#work" },
    { name: "Articles", href: "#articles" },
    { name: "Skills", href: "#skills" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-medium' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img 
              src="https://i.postimg.cc/1tqnX1Fb/Excellent-Kayode-Folorunsho-Professional-Portrait-1.jpg" 
              alt="Excellent Kayode-Folorunsho - Product Manager & Builder"
              className="w-10 h-10 rounded-full object-cover border-2 border-coral/20"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-primary">Excellent Kayode-Folorunsho</div>
              <div className="text-xs text-secondary -mt-1">Product Manager & Builder</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-coral transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="btn-coral"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-coral transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-surface/95 backdrop-blur-md">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-text-secondary hover:text-coral transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block btn-coral w-fit"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;