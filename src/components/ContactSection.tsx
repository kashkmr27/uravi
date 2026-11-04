import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:uravi.sharma@hotmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };

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

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: Contact Form */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Opening mail client...' : 'Send Message'}</span>
                </button>
                {submitted && (
                  <p className="text-center text-sm text-green-400 font-medium">
                    ✓ Your mail client has been opened with your message!
                  </p>
                )}
              </form>
            </div>

            {/* Right: Contact Info Cards + Available */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Contact Info</h3>

              <div className="grid grid-cols-1 gap-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="bento-card glow-effect p-4 flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <info.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs">{info.label}</span>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block text-foreground font-medium hover:text-accent transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="block text-foreground font-medium text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bento-card glow-effect p-5 hero-gradient mt-2">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-foreground font-medium text-sm">Available for Work</span>
                </div>
                <p className="text-foreground/80 text-sm">
                  Currently accepting new projects. Let&apos;s discuss how I can help bring your vision to life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
