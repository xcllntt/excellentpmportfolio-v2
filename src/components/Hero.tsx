import { ArrowRight, ExternalLink, Calendar, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-surface/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-coral rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-blue rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-mixed rounded-full opacity-15 animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-14 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-6">
              <div className="flex items-center gap-6 mb-4">
                <img 
                  src="https://i.postimg.cc/1tqnX1Fb/Excellent-Kayode-Folorunsho-Professional-Portrait-1.jpg" 
                  alt="Excellent Kayode-Folorunsho - Product Manager & Builder"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-coral/20 shadow-coral flex-shrink-0"
                />
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-2">Excellent Kayode-Folorunsho</h2>
                  <p className="text-subheading text-coral">Product Manager & Builder</p>
                </div>
              </div>
              <h1 className="text-display text-primary">
                Building products that solve
                <span className="text-gradient-mixed"> real-world problems</span>
              </h1>
              <p className="text-body-large text-secondary max-w-2xl">
                Product Manager with a founder's fire and a builder's mindset— Founder of TFS (The Family of Students), 
                Nigeria's largest community for university students. Now builds software products that solve real-world 
                problems at fast-paced startups.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="btn-coral inline-flex items-center gap-2"
              >
                Schedule a Call <Calendar className="w-4 h-4" />
              </a>
              <a 
                href="/cv" 
                target="_blank"
                className="btn-outline-coral inline-flex items-center gap-2"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
              {/*
              <a 
                href="mailto:hello@example.com"
                className="btn-blue inline-flex items-center gap-2"
              >
                Get in Touch <ExternalLink className="w-4 h-4" />
              </a>
              */}
            </div>
            
            {/* Quick Links */}
            <div className="flex items-center gap-6 pt-2">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank"
                className="text-electric-blue hover:text-electric-blue-muted transition-colors duration-300 font-medium"
              >
                LinkedIn
              </a>
              <span className="w-1 h-1 bg-text-muted rounded-full" />
              <a 
                href="#work" 
                className="text-text-secondary hover:text-coral transition-colors duration-300 font-medium"
              >
                View Work
              </a>
              <span className="w-1 h-1 bg-text-muted rounded-full" />
              <a 
                href="#articles" 
                className="text-text-secondary hover:text-coral transition-colors duration-300 font-medium"
              >
                Read Articles
              </a>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="card-featured bg-surface p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gradient-coral rounded-full" />
                    <div className="w-3 h-3 bg-gradient-blue rounded-full" />
                    <div className="w-3 h-3 bg-gradient-mixed rounded-full" />
                  </div>
                  <h3 className="text-heading-3 text-primary">Build → Ship → Repeat</h3>
                  <p className="text-body text-secondary">
                    Skilled in turning ideas into products, and products into results. 
                    Sharp with data, obsessed with users, always shipping. 🚀
                  </p>
                  <div className="flex items-center gap-2 text-coral font-semibold">
                    <span>Explore my work</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              {/* Background Cards */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-coral rounded-2xl opacity-20 -z-10 transform -rotate-3" />
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-blue rounded-2xl opacity-15 -z-20 transform rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
