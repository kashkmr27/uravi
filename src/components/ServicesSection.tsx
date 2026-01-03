import { Layers, Search, Figma, Globe, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: "UI Design",
      description: "Creating visually stunning interfaces that captivate users while maintaining usability and accessibility standards.",
      color: "accent",
    },
    {
      icon: Search,
      title: "UX Research",
      description: "Deep-diving into user behavior through interviews, testing, and analytics to inform design decisions that drive results.",
      color: "primary",
    },
    {
      icon: Figma,
      title: "Branding",
      description: "Leveraging Figma's full potential with auto-layout, components, variants, and design systems for scalable designs.",
      color: "accent",
    },
    {
      icon: Globe,
      title: "Product & Web Design",
      description: "End-to-end design for digital products including responsive websites, web apps, and mobile experiences.",
      color: "primary",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services I <span className="text-accent">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services tailored to bring your vision to life and create meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bento-card glow-effect p-8 group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                service.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'
              } group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} className={service.color === 'accent' ? 'text-accent' : 'text-primary'} />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              
              <a 
                href="#contact" 
                className={`inline-flex items-center gap-2 transition-colors group/link ${
                  service.color === 'accent' 
                    ? 'text-accent hover:text-accent-glow' 
                    : 'text-primary hover:text-primary-glow'
                }`}
              >
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
