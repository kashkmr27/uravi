import { 
  Layers, 
  Search, 
  Figma, 
  Smartphone, 
  Palette, 
  PenTool, 
  Users, 
  Lightbulb 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { name: "UI Design", icon: Layers, level: 95, color: "accent" },
    { name: "UX Research", icon: Search, level: 90, color: "primary" },
    { name: "Figma (Advanced)", icon: Figma, level: 98, color: "accent" },
    { name: "Responsive Design", icon: Smartphone, level: 92, color: "primary" },
    { name: "Visual Design", icon: Palette, level: 88, color: "accent" },
    { name: "Branding", icon: PenTool, level: 85, color: "primary" },
    { name: "Collaboration", icon: Users, level: 95, color: "accent" },
    { name: "Product Design", icon: Lightbulb, level: 90, color: "primary" },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of creative and technical skills honed over 7+ years of professional design work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bento-card glow-effect p-6 group opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                skill.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'
              } group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={24} className={skill.color === 'accent' ? 'text-accent' : 'text-primary'} />
              </div>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">{skill.name}</h3>
              
              {/* Skill bar */}
              <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    skill.color === 'accent' ? 'bg-accent' : 'bg-primary'
                  }`}
                  style={{ 
                    width: `${skill.level}%`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                />
              </div>
              <span className="text-muted-foreground text-sm mt-2 block">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
