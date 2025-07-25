import { Mail, Linkedin, Calendar, Download, MapPin, Clock, Send } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <p className="text-subheading text-coral">Get In Touch</p>
          <h2 className="text-heading-1 text-primary">
            Let's Build Something <span className="text-gradient-blue">Amazing</span>
          </h2>
          
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              
              <p className="text-body text-secondary">
                I'm always open to discussing new opportunities, sharing insights about product management, 
                or just having a great conversation about building products that matter.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a href="mailto:excellentfolrunsho@gmail.com" className="card-elegant flex flex-col items-center gap-4 p-6 hover:border-coral/30 hover:shadow-coral/20 transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-coral rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-coral transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-secondary">excellentfolorunsho@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/xcllntt" target="_blank" className="card-elegant flex flex-col items-center gap-4 p-6 hover:border-electric-blue/30 hover:shadow-blue/20 transition-all duration-300 group text-center">
                <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-electric-blue transition-colors duration-300">
                    LinkedIn
                  </h4>
                  <p className="text-secondary">Connect with me on LinkedIn</p>
                </div>
              </a>

              <a href="https://calendly.com/excellentfolorunsho/chat-with-excellent" target="_blank" className="card-elegant flex flex-col items-center gap-4 p-6 hover:border-coral/30 hover:shadow-coral/20 transition-all duration-300 group text-center md:col-span-2">
                <div className="w-12 h-12 bg-gradient-mixed rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary group-hover:text-coral transition-colors duration-300">
                    Schedule a Call
                  </h4>
                  <p className="text-secondary">Book a 15-minute chat</p>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-3 text-secondary">
                <MapPin className="w-5 h-5 text-coral" />
                <span>Based in Nigeria, Available Globally</span>
              </div>
              <div className="flex items-center gap-3 text-secondary">
                
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;