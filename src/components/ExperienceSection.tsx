import { Briefcase, MapPin, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Netrix Ltd",
      location: "Borehamwood",
      period: "April 2022 – Present",
      isCurrent: true,
      highlights: [
        "Lead design initiatives for enterprise-level web applications",
        "Conduct user research and usability testing to inform design decisions",
        "Create and maintain comprehensive design systems",
        "Collaborate with cross-functional teams to deliver pixel-perfect implementations",
      ],
    },
    {
      role: "Web & Digital Designer",
      company: "Party Buz",
      location: "Farnborough",
      period: "Aug 2018 – July 2021",
      isCurrent: false,
      highlights: [
        "Designed and developed responsive websites for event management",
        "Created marketing materials and brand collateral",
        "Improved user engagement through intuitive interface design",
        "Managed multiple projects simultaneously with tight deadlines",
      ],
    },
    {
      role: "Web & Graphics Designer",
      company: "The Knowledge Academy",
      location: "London",
      period: "June 2017 – Dec 2017",
      isCurrent: false,
      highlights: [
        "Designed landing pages and marketing assets",
        "Created visual content for digital campaigns",
        "Collaborated with marketing team on brand consistency",
      ],
    },
  ];

  return (
    <section className="py-6 md:py-8 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-accent">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my career growth and the impactful experiences that shaped my design expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent md:transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-accent transform -translate-x-1/2 md:-translate-x-1/2 z-10 pulse-glow" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bento-card glow-effect p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${exp.isCurrent ? 'bg-accent/20' : 'bg-primary/20'
                        }`}>
                        <Briefcase size={20} className={exp.isCurrent ? 'text-accent' : 'text-primary'} />
                      </div>
                      {exp.isCurrent && (
                        <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-accent font-medium mb-3">{exp.company}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 pl-6">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
