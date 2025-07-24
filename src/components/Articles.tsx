import { ArrowRight, BookOpen, Clock, ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Users' intent VS Product Manager's intent",
    subtitle: "What do you do when you create a product 'abc' to do 'xyz', but users see 'abc' and decide to do '123'?",
    category: "Product Strategy",
    readTime: "5 min read",
    featured: true,
    url: "https://medium.com/@xcllntt/users-intent-vs-product-managers-intent-afc643d783b4"
  },
  {
    title: "Ride-hailing is a mess, this product fixes it",
    subtitle: "What If You Could Book Any Ride from One App?",
    category: "Product Innovation",
    readTime: "7 min read",
    featured: false,
    url: "https://medium.com/@xcllntt/what-if-you-could-book-any-ride-from-one-app-b7a7800675c1"
  },
  {
    title: "Should you listen to your users or spy on your competitors?",
    subtitle: "The best route to shipping new features is to listen to the customers, but what if you follow your users' concerns, and it leads you to your competitor's features?",
    category: "Product Development",
    readTime: "6 min read",
    featured: true,
    url: "https://medium.com/@xcllntt/listen-to-your-users-or-spy-on-your-competitors-9d97f27b1522"
  },
  {
    title: "Disruption: How inDrive's product is shaking up the ride-hailing market",
    subtitle: "A product review that highlights how inDrive's product strategy facilitated their evident disruption.",
    category: "Case Study",
    readTime: "8 min read",
    featured: false,
    url: "https://medium.com/@xcllntt/disruption-a-product-review-of-the-indrive-app-2e52a6fc1708"
  },
  {
    title: "Product innovation meets brags",
    subtitle: "HelloCV Can Build Trust Back Into Professional Resumes",
    category: "Product Review",
    readTime: "5 min read",
    featured: false,
    url: "https://medium.com/@xcllntt/hellocv-can-build-trust-back-into-professional-resumes-52a1dc458515"
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
          <a
            href={articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block card-featured p-8 md:p-12 bg-gradient-to-br from-surface to-coral/5 border-coral/20 hover:scale-105 transition-transform duration-300"
            style={{ textDecoration: 'none' }}
          >
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
                
                <span className="inline-flex items-center gap-2 text-coral font-semibold hover:gap-3 transition-all duration-300">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
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
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-elegant group cursor-pointer hover:shadow-coral/20 block"
              style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none' }}
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
            </a>
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
                Read more product articles from Excellent
              </h3>
              <p className="text-body text-secondary">
                Interesting things I notice about software products. Insights from building products, and thoughts from my Product Management journey.
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
                I often share my reflections and personal stories that explore the subtleties of daily life on my Substack. This has nothing to do with Product, so it's fine if you're not interested
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                // <input 
                //   type="email" 
                //   placeholder="Enter your email"
                //   className="flex-1 px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-300"
                // />
                <button className="btn-blue whitespace-nowrap">
                  I'm interested, sign me up!
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