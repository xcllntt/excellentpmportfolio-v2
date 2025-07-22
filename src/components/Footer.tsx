import { Linkedin, Mail, Calendar, Download, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://i.postimg.cc/1tqnX1Fb/Excellent-Kayode-Folorunsho-Professional-Portrait-1.jpg" 
                  alt="Excellent Kayode-Folorunsho - Product Manager & Builder"
                  className="w-12 h-12 rounded-full object-cover border-2 border-coral/20"
                />
                <div>
                  <h3 className="font-bold text-xl text-primary-foreground">Excellent Kayode-Folorunsho</h3>
                  <p className="text-sm text-primary-foreground/80">Product Manager & Builder</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 max-w-md">
                Product Manager with a founder's fire and a builder's mindset. 
                Turning ideas into products, and products into results.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="mailto:hello@example.com"
                className="w-10 h-10 bg-coral/20 hover:bg-coral text-coral hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                className="w-10 h-10 bg-electric-blue/20 hover:bg-electric-blue text-electric-blue hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://calendly.com/yourprofile"
                target="_blank"
                className="w-10 h-10 bg-coral/20 hover:bg-coral text-coral hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
              </a>
              <a 
                href="/cv.pdf"
                target="_blank"
                className="w-10 h-10 bg-electric-blue/20 hover:bg-electric-blue text-electric-blue hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#work" className="text-primary-foreground/80 hover:text-coral transition-colors duration-300">
                  My Work
                </a>
              </li>
              <li>
                <a href="#articles" className="text-primary-foreground/80 hover:text-coral transition-colors duration-300">
                  Product Articles
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-foreground/80 hover:text-coral transition-colors duration-300">
                  Skills & Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-coral transition-colors duration-300">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Let's Connect</h4>
            <div className="space-y-3">
              <p className="text-primary-foreground/80">
                Ready to build something amazing together?
              </p>
              <a 
                href="#contact"
                className="inline-block px-6 py-3 bg-coral hover:bg-coral-muted text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Product Manager & Builder. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-coral" />
              <span>and modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;