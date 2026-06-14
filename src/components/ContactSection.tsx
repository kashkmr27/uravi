import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(+44) 07417 429395",
      href: "tel:+4407417429395",
    },
    {
      icon: Mail,
      label: "Email",
      value: "uravi.sharma@hotmail.com",
      href: "mailto:uravi.sharma@hotmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/uravisharma",
      href: "https://www.linkedin.com/in/uravisharma/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "United Kingdom",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-6 md:py-8 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work <span className="text-accent">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bento-card glow-effect p-6 flex items-center gap-4 group min-h-[110px]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <info.icon size={22} className="text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">{info.label}</span>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block text-foreground font-medium hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="block text-foreground font-medium">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bento-card glow-effect p-6 hero-gradient">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-foreground font-medium">Available for Work</span>
            </div>
            <p className="text-foreground/80 text-sm">
              Currently accepting new projects. Let&apos;s discuss how I can help bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
