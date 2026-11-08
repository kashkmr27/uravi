import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Research & Discovery',
    description:
      'Deeply understanding user needs, business goals, and competitive landscape through stakeholder interviews, analytics, and UX research.',
  },
  {
    number: '2',
    title: 'Strategy & Blueprint',
    description:
      'Translating insights into intuitive user journeys, information architecture, wireframes, and structural flows to validate layout early.',
  },
  {
    number: '3',
    title: 'Design & Concept',
    description:
      'Crafting high-fidelity UI designs, cohesive design systems, interactive states, and responsive visual layouts aligned with your brand.',
  },
  {
    number: '4',
    title: 'Prototype & Testing',
    description:
      'Building realistic, interactive prototypes to conduct usability testing, gathering direct user feedback to iterate and perfect every detail.',
  },
  {
    number: '5',
    title: 'Launch & Support',
    description:
      'Collaborating closely with development teams for flawless design handoff, QA testing, and continuous post-launch optimization.',
  },
];

const tools = [
  {
    name: 'Figma',
    color: '#F24E1E',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: 'Framer',
    color: '#0055FF',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
      </svg>
    ),
  },
  {
    name: 'Webflow',
    color: '#4353FF',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M22 6.5C18.8 6.5 17 8.5 16 11.2C15.2 8.6 13.5 6.5 10.5 6.5C8 6.5 6.2 8 5.4 10.4L2 19.5H6.2L8.2 13.6C8.5 12.6 9.1 11.8 10.1 11.8C11.3 11.8 11.8 12.8 11.8 14.1V19.5H16V13.8C16 12.4 16.7 11.8 17.6 11.8C18.8 11.8 19.4 12.8 19.4 14.1V19.5H23.5V13.2C23.5 8.9 20.8 6.5 22 6.5Z" fill="#4353FF" />
      </svg>
    ),
  },
  {
    name: 'Adobe XD',
    color: '#FF61F6',
    icon: (
      <div className="w-5 h-5 rounded-md bg-[#470137] flex items-center justify-center font-bold text-[9px] text-[#FF61F6]">
        Xd
      </div>
    ),
  },
  {
    name: 'Photoshop',
    color: '#31A8FF',
    icon: (
      <div className="w-5 h-5 rounded-md bg-[#001E36] flex items-center justify-center font-bold text-[9px] text-[#31A8FF]">
        Ps
      </div>
    ),
  },
  {
    name: 'Sketch',
    color: '#FDB300',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 9L12 22L20 9L12 2Z" fill="#FDB300" opacity="0.9" />
        <path d="M12 2L8 9L12 22L16 9L12 2Z" fill="#EA6C00" opacity="0.8" />
      </svg>
    ),
  },
  {
    name: 'Illustrator',
    color: '#FF9A00',
    icon: (
      <div className="w-5 h-5 rounded-md bg-[#330000] flex items-center justify-center font-bold text-[9px] text-[#FF9A00]">
        Ai
      </div>
    ),
  },
  {
    name: 'Miro',
    color: '#FFD02F',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M18.8 3H16L12.5 11.5L9 3H5.2L10 14.5L5.2 21H8L12.5 12.5L16 21H19.8L15 9.5L18.8 3Z" fill="#FFD02F" />
      </svg>
    ),
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-accent">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A structured approach to transforming ideas into intuitive, high-impact digital experiences.
          </p>
        </div>

        {/* Process Cards - Top Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={step.number}
              className="rounded-2xl p-7 md:p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl opacity-0 animate-fade-in group"
              style={{
                background: 'linear-gradient(145deg, #7C3AED 0%, #6366F1 55%, #4F46E5 100%)',
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Subtle inner highlight glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

              {/* Number Circle */}
              <div className="w-8 h-8 rounded-full bg-[#120F24]/80 text-white font-bold text-sm flex items-center justify-center mb-6 shadow-inner border border-white/20">
                {step.number}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Cards - Bottom Row (2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px] mx-auto mt-6">
          {steps.slice(3, 5).map((step, index) => (
            <div
              key={step.number}
              className="rounded-2xl p-7 md:p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl opacity-0 animate-fade-in group"
              style={{
                background: 'linear-gradient(145deg, #7C3AED 0%, #6366F1 55%, #4F46E5 100%)',
                animationDelay: `${(index + 3) * 0.15}s`,
              }}
            >
              {/* Subtle inner highlight glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

              {/* Number Circle */}
              <div className="w-8 h-8 rounded-full bg-[#120F24]/80 text-white font-bold text-sm flex items-center justify-center mb-6 shadow-inner border border-white/20">
                {step.number}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-white/85 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools & Tech Stack Strip */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-5 px-6 rounded-2xl bg-card/40 border border-border/40 backdrop-blur-sm">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors group cursor-default"
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-sm font-semibold tracking-tight">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
