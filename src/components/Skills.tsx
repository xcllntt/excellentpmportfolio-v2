import { Target, Users2, Code2, TrendingUp, Lightbulb, MessageSquare } from "lucide-react";
const skills = [{
  title: "Strategy & Execution",
  icon: Target,
  color: "coral",
  description: "I drive products with a clear vision, ensuring alignment with business goals through user research, market insights, and data-driven decisions. I prioritize effectively, balancing impact and feasibility while keeping execution on track with roadmap planning and key metrics to measure success.",
  highlights: ["User Research & Market Analysis", "Data-Driven Decision Making", "Roadmap Planning & Prioritization", "Impact vs Feasibility Assessment"]
}, {
  title: "Collaboration & Communication",
  icon: MessageSquare,
  color: "blue",
  description: "I excel at bridging the gap between engineering, design, and business teams, ensuring alignment through clear PRDs, structured communication, and strong stakeholder management. Whether presenting decisions, handling trade-offs, or negotiating priorities, I keep teams focused and moving forward.",
  highlights: ["Cross-functional Team Leadership", "Clear PRD Documentation", "Stakeholder Management", "Trade-off Negotiation"]
}, {
  title: "Technical Fluency & Growth",
  icon: Code2,
  color: "mixed",
  description: "I have a strong understanding of APIs, data structures, and scalability trade-offs, enabling effective collaboration with engineers and informed product decisions. Constant learning drives me—I embrace feedback, iteration, and innovation to build impactful, customer-focused products.",
  highlights: ["API & Data Structure Understanding", "Scalability Trade-offs", "Engineering Collaboration", "Continuous Learning & Innovation"]
}];
const achievements = [{
  metric: "30,000+",
  label: "Community Members",
  icon: Users2
}, {
  metric: "40%",
  label: "Product Adoption Increase",
  icon: TrendingUp
}, {
  metric: "28+",
  label: "Universities Reached",
  icon: Target
}, {
  metric: "4+",
  label: "Products Built",
  icon: Lightbulb
}];
const Skills = () => {
  return <section id="skills" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <p className="text-subheading text-electric-blue">Core Competencies</p>
          <h2 className="text-heading-1 text-primary">
            <span className="text-gradient-coral">Skills</span> that Drive Results
          </h2>
          <p className="text-body-large text-secondary max-w-3xl mx-auto">
            Three key areas where I excel in turning product vision into reality, 
            backed by proven results and continuous growth.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => {
          const Icon = skill.icon;
          return <div key={skill.title} className="card-featured group" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${skill.color === 'coral' ? 'bg-gradient-coral' : skill.color === 'blue' ? 'bg-gradient-blue' : 'bg-gradient-mixed'}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <h3 className="text-heading-3 text-primary group-hover:text-coral transition-colors duration-300">
                    {skill.title}
                  </h3>

                  <p className="text-body text-secondary leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-electric-blue uppercase tracking-wide">
                      Key Strengths
                    </h4>
                    <ul className="space-y-2">
                      {skill.highlights.map(highlight => <li key={highlight} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${skill.color === 'coral' ? 'bg-coral' : skill.color === 'blue' ? 'bg-electric-blue' : 'bg-coral'}`} />
                          <span className="text-body text-secondary">{highlight}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>;
        })}
        </div>

        {/* Achievements */}
        

        {/* Skills CTA */}
        
      </div>
    </section>;
};
export default Skills;