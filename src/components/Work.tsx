import { ExternalLink, Users, TrendingUp, Zap, ShoppingCart } from "lucide-react";

const workExperience = [
  {
    title: "The Family of Students (TFS)",
    role: "Founder",
    description: "Built TFS from scratch into the largest online community of university students in Nigeria with over 30,000 university students across 28+ universities.",
    icon: Users,
    color: "coral",
    stats: "30,000+ students | 28+ universities",
    tags: ["Product Strategy", "Community Building", "Growth", "Leadership"]
  },
  {
    title: "Movam Application",
    role: "Product Manager",
    description: "Managed the launch of the second version (v2) of movam's application, enabling logistics business owners to manage their drivers, fleet, and entire operations more efficiently.",
    icon: TrendingUp,
    color: "blue",
    stats: "40% increase in product adoption",
    tags: ["Product Launch", "B2B SaaS", "Operations"]
  },
  {
    title: "Facile (FutaExpress)",
    role: "Product Builder",
    description: "Built Facile (formerly FUTAExpress), a food-ordering app that helped FUTA students order from nearby restaurants at a time when the only options were to go in person or rely on favors.",
    icon: Zap,
    color: "mixed",
    stats: "Campus-wide adoption",
    tags: ["Mobile App", "Food Tech", "Student Experience"]
  },
  {
    title: "FutaOrders",
    role: ,
    description: "Collaborated towards building FutaOrders, an e-commerce product that helped business owners in FUTA sell more efficiently.",
    icon: ShoppingCart,
    color: "coral",
    stats: "Enhanced business efficiency",
    tags: ["E-commerce", "SME Tools", "Collaboration"]
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <p className="text-subheading text-electric-blue">What I've Built</p>
          <h2 className="text-heading-1 text-primary">
            Turning <span className="text-gradient-coral">Ideas</span> into Impact
          </h2>
          <p className="text-body-large text-secondary max-w-3xl mx-auto">
            From founding one of Nigeria's largest student communities to building products for students of his university, managing SaaS products, and tinkering with AI, 
            I've consistently delivered results that matter.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {workExperience.map((work, index) => {
            const Icon = work.icon;
            const colorClass = work.color === 'coral' ? 'coral' : work.color === 'blue' ? 'electric-blue' : 'mixed';
            
            return (
              <div 
                key={work.title}
                className={`card-featured group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:translate-y-8' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                  work.color === 'coral' ? 'bg-gradient-coral' :
                  work.color === 'blue' ? 'bg-gradient-blue' : 'bg-gradient-mixed'
                }`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-heading-3 text-primary group-hover:text-coral transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-caption text-electric-blue font-semibold">
                      {work.role}
                    </p>
                  </div>

                  <p className="text-body text-secondary">
                    {work.description}
                  </p>

                  {/* Stats */}
                  <div className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                    work.color === 'coral' ? 'bg-coral/10 text-coral' :
                    work.color === 'blue' ? 'bg-electric-blue/10 text-electric-blue' :
                    'bg-gradient-mixed/10 text-coral'
                  }`}>
                    {work.stats}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-coral group-hover:gap-3 transition-all duration-300">
                    <span className="font-medium">Learn more</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-body text-secondary mb-6">
            Want to see how I can help your product succeed?
          </p>
          <a 
            href="#contact" 
            className="btn-blue inline-flex items-center gap-2"
          >
            Let's Talk Product Strategy
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;