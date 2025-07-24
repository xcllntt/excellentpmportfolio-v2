import { ArrowRight, BookOpen, Clock, ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Users' intent VS Product Manager's intent",
    subtitle: "What do you do when you create a product 'abc' to do 'xyz', but users see 'abc' and decide to do '123'?",
    category: "Product Strategy",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "Ride-hailing is a mess, this product fixes it",
    subtitle: "What If You Could Book Any Ride from One App?",
    category: "Product Innovation",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "Should you listen to your users or spy on your competitors?",
    subtitle: "The best route to shipping new features is to listen to the customers, but what if you follow your users' concerns, and it leads you to your competitor's features?",
    category: "Product Development",
    readTime: "6 min read",
    featured: true
  },
  {
    title: "Disruption: How inDrive's product is shaking up the ride-hailing market",
    subtitle: "A product review that highlights how inDrive's product strategy facilitated their evident disruption.",
    category: "Case Study",
    readTime: "8 min read",
    featured: false
  },
  {
    title: "Product innovation meets brags",
    subtitle: "HelloCV Can Build Trust Back Into Professional Resumes",
    category: "Product Review",
    readTime: "5 min read",
    featured: false
  }
];

const Articles = () => {
  return (
    <section id="articles" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <p className="text-subheading text-coral">Product Insights</p>
          <h2 className="text-heading-1 text-primary">
            Product starts, not with what you build, but <span className="text-gradient-blue">how you think</span>
          </h2>
          <p className="text-body-large text-secondary max-w-3xl mx-auto">
            Have a glance at the <b><i>Excellent</i></b> way of thinking about product below. Insights from building products 
            and understanding what makes them successful.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="card-featured p-8 md:p-12 bg-gradient-to-br from-surface to-coral/5 border-coral/20">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-coral text-white text-sm font-semibold rounded-full">
                    Featured Article
                  </span>
                  <div className="flex items-center gap-2 text-text-muted">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{articles[0].readTime}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-heading-2 text-primary">
                    {articles[0].title}
                  </h3>
                  <p className="text-body-large text-secondary">
                    {articles[0].subtitle}
                  </p>
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-coral font-semibold hover:gap-3 transition-all duration-300"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              
              <div className="relative">
                <div className="card-elegant p-6 bg-surface transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <BookOpen className="w-8 h-8 text-electric-blue" />
                    <h4 className="text-lg font-semibold text-primary">Product Thinking</h4>
                    <p className="text-body text-secondary">
                      Understanding user intent vs product intent is crucial for building successful products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <article 
              key={article.title}
              className="card-elegant group cursor-pointer hover:shadow-coral/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-text-muted">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{article.readTime}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-primary group-hover:text-coral transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-body text-secondary line-clamp-3">
                    {article.subtitle}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-coral group-hover:gap-3 transition-all duration-300">
                  <span className="font-medium">Read more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
          {/* Read More Card */}
          <a
            href="https://medium.com/@xcllntt"
            target="_blank"
            rel="noopener noreferrer"
            className="card-featured group cursor-pointer transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
            style={{ minHeight: '260px' }}
          >
            <div className="space-y-4">
              <h3 className="text-heading-3 text-primary group-hover:text-coral transition-colors duration-300">
                Read more product articles from <b><i>Excellent</i></b>
              </h3>
              <p className="text-body text-secondary">
                Explore more insights, stories, and lessons on product management, growth, and building impactful products on my Medium profile.
              </p>
            </div>
            <div className="flex items-center gap-2 text-coral group-hover:gap-3 transition-all duration-300 mt-4">
              <span className="font-medium">Visit Medium</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" /></svg>
            </div>
          </a>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="card-featured inline-block p-8 bg-gradient-to-r from-electric-blue/5 to-coral/5 border-electric-blue/20">
            <div className="space-y-4">
              <h3 className="text-heading-3 text-primary">Stay Updated</h3>
              <p className="text-body text-secondary max-w-md">
                Get insights on product management, building, and entrepreneurship delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-300"
                />
                <button className="btn-blue whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;