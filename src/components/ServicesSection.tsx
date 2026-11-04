import { Monitor, Smartphone, Search, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Landing Pages & Websites",
      description: "Build high-converting pages that turn visitors into customers perfect for ecommerce, services, and SaaS launches",
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps & Web Apps",
      description: "Craft seamless user journeys for iOS/Android apps and responsive web applications. From onboarding to retention, intuitive flows",
      color: "primary",
    },
    {
      icon: Search,
      title: "UX Research & Strategy",
      description: "Conduct user research and strategy to uncover insights that drive better designs. Competitor analysis, user interviews, user journey maps",
      color: "primary",
    },
    {
      icon: Palette,
      title: "Branding & Visuals",
      description: "Create logos, social media posts, and brand assets that strengthen your market presence. Perfect for ecommerce stores and service",
      color: "primary",
    },
  ];

  return (
    <section id="services" className="py-6 md:py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The service I offer is specifically designed to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bento-card glow-effect p-8 group opacity-0 animate-fade-in flex gap-5 items-start"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-secondary group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-foreground" />
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/80 text-foreground px-8 py-4 rounded-full transition-all duration-300 hover:shadow-glow group font-medium"
          >
            <span>Check Portfolio</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
