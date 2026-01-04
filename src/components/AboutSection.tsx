import { Award, GraduationCap, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const certifications = [
    "Professional Figma UI/UX Design Specialization",
    "IBM UI/UX Designer Professional Certificate",
    "IBM Generative AI Engineering Professional Certificate",
  ];

  const education = [
    "Bachelor's in Fine Arts",
    "Diploma in Web & Graphic Design",
  ];

  return (
    <section id="about" className="py-6 md:py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Column - Bio */}
          <div className="bento-card glow-effect p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                <Sparkles size={20} className="text-foreground" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a seasoned <span className="text-foreground font-medium">UI/UX & Digital Designer</span> with over 7 years of experience crafting user-centered digital experiences. My design philosophy centers on blending creativity with usability to create interfaces that not only look beautiful but also solve real problems.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Specializing in UX research, design systems, and now leveraging <span className="text-accent font-medium">generative AI tools</span>, I bring a unique perspective to every project. From wireframes to high-fidelity prototypes, I ensure every pixel serves a purpose.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When I'm not designing, you'll find me exploring new design trends, mentoring aspiring designers, or spending quality time with my family.
            </p>
          </div>

          {/* Right Column - Certifications & Education */}
          <div className="flex flex-col gap-6">

            {/* Certifications */}
            <div className="bento-card glow-effect p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Award size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Certifications</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-foreground text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bento-card glow-effect p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
              </div>

              <div className="space-y-3">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground text-sm">{edu}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
