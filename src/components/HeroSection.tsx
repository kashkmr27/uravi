import { ArrowRight, Download, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileAvatar from '@/assets/profile-avatar.png';
const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}Uravi_Sharma_CV.pdf`;
    link.download = 'Uravi_Sharma_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto">

        {/* About Card - Left */}
        <div className="md:col-span-3 bento-card flex flex-col justify-between min-h-[320px] md:min-h-[360px] bg-[#1E1E2A] border-white/5 px-6 py-7 md:px-6 md:py-7 opacity-0 animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
          <div>
            <div className="w-14 h-14 flex items-center justify-center mb-9">
              <img src="/logo.png" alt="Logo" className="w-14 h-14" />
            </div>
            <div className="space-y-8">
              <div className="text-[1rem] leading-[1.24] tracking-[-0.03em] text-[#D9D5F6] font-normal">
                &quot;I&apos;m Uravi, a digital designer blending creativity and usability to craft designs people love  just ask my <span className="text-[#FF7A45] font-semibold">mom</span> and <span className="text-[#FF7A45] font-semibold">son</span>!&quot;
              </div>

              <p className="text-[1rem] leading-[1.24] tracking-[-0.03em] text-[#D9D5F6]">
                I create conversion-focused e-commerce store, website design, landing pages, dashboards, web apps, mobile apps, logos, and social posts for ecommerce and service businesses.
              </p>
            </div>
          </div>
          <a href="#about" className="inline-flex items-center gap-3 text-[#D9D5F6] hover:text-white transition-colors mt-8 group">
            <span className="text-[1.35rem] md:text-[1.5rem] font-semibold tracking-[-0.03em]">About me</span>
            <ArrowRight size={30} strokeWidth={2.4} className="text-[#FF7A45] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Hero Center Card */}
        <div className="md:col-span-6 md:row-span-2 rounded-2xl hero-gradient p-8 flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[500px] relative overflow-hidden opacity-0 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight font-semibold font-sans">
              Web<br />
              UI / UX & Digital<br />
              Designer
            </h1>
          </div>

          {/* Profile Avatar with rotating badge */}
          <div className="relative mt-4 z-10">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-background/20 border-4 border-background/30 overflow-hidden">
              <img src={profileAvatar} alt="Uravi Sharma - UI/UX Designer" className="w-full h-full object-cover" />
            </div>
            {/* Rotating text badge */}
            <div className="absolute -inset-8 md:-inset-10">
              <svg className="w-full h-full rotating-badge" viewBox="0 0 200 200">
                <defs>
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text className="text-xs fill-foreground/60 uppercase tracking-[0.3em]">
                  <textPath href="#circlePath">
                    • AVAILABLE FOR WORK • AVAILABLE FOR WORK
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="absolute top-20 right-10 w-2 h-2 rounded-full bg-accent opacity-60" />
          <div className="absolute bottom-32 right-16 w-3 h-3 rounded-full bg-primary opacity-40" />
          <div className="absolute top-32 left-10 w-2 h-2 rounded-full bg-foreground/30" />
        </div>

        {/* Download CV Card */}
        <div className="md:col-span-3 bento-card flex flex-col items-center justify-center min-h-[140px] opacity-0 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
          <button type="button" onClick={handleDownloadCV} className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-full transition-all duration-300 hover:shadow-glow group">
            <Download size={18} />
            <span className="font-medium">Download CV</span>
          </button>
        </div>

        {/* Social Links Card */}
        <div className="md:col-span-3 bento-card  flex items-center justify-center min-h-[140px] opacity-0 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.linkedin.com/in/uravisharma/" target="_blank" rel="noopener noreferrer" className=" hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300" aria-label="LinkedIn">
              {/* <Linkedin size={100} /> */}
              <img src="/LinkedIn_logo.svg" alt="LinkedIn" className="w-36" />
            </a>

          </div>
        </div>

        {/* Let's Work Together Card */}
        <div className="md:col-span-3 bento-card  flex flex-col justify-between min-h-[180px] opacity-0 animate-fade-in" style={{
          animationDelay: '0.5s'
        }}>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Let's work<br />
              <span className="text-accent">together</span>
            </h3>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors group">
            <span className="text-sm font-medium">Get in touch</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Case Studies Card */}
        <div className="md:col-span-3 bento-card  flex flex-col justify-center min-h-[180px] opacity-0 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-1">Case Studies</h4>
          <p className="text-muted-foreground text-sm mb-4">Fresh creations from our creative journey.</p>
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors group">
            <span className="text-sm font-medium">All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Portfolio Card */}
        <div className="md:col-span-3 bento-card  flex flex-col justify-center min-h-[180px] opacity-0 animate-fade-in" style={{
          animationDelay: '0.7s'
        }}>
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-1">Portfolio</h4>
          <p className="text-muted-foreground text-sm mb-4">Designed with heart. Crafted with purpose.</p>
          <Link to="/work" className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors group">
            <span className="text-sm font-medium">All Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats Card */}
        <div className="md:col-span-3 bento-card min-h-[240px] md:min-h-[280px] bg-[#1E1E2A] border-white/5 px-5 py-6 md:px-5 md:py-6 opacity-0 animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 h-full">
            <div className="flex flex-col justify-start">
              <div className="text-[2.35rem] md:text-[2.7rem] leading-none tracking-[-0.06em] font-semibold text-[#E1DEFF]">
                7<span className="text-[#FF7A45]">+</span>
              </div>
              <div className="mt-2.5 text-[0.8rem] md:text-[0.9rem] leading-[1.28] tracking-[-0.03em] text-[#A99BEA]">
                Years of work
                <br />
                experience
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <div className="text-[2.35rem] md:text-[2.7rem] leading-none tracking-[-0.06em] font-semibold text-[#E1DEFF]">
                98<span className="text-[#FF7A45]">%</span>
              </div>
              <div className="mt-2.5 text-[0.8rem] md:text-[0.9rem] leading-[1.28] tracking-[-0.03em] text-[#A99BEA]">
                Satisfied happy
                <br />
                customers
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <div className="text-[2.35rem] md:text-[2.7rem] leading-none tracking-[-0.06em] font-semibold text-[#E1DEFF]">
                08
              </div>
              <div className="mt-2.5 text-[0.8rem] md:text-[0.9rem] leading-[1.28] tracking-[-0.03em] text-[#A99BEA]">
                Recognitions
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <div className="text-[2.35rem] md:text-[2.7rem] leading-none tracking-[-0.06em] font-semibold text-[#E1DEFF]">
                27<span className="text-[#FF7A45]">+</span>
              </div>
              <div className="mt-2.5 text-[0.8rem] md:text-[0.9rem] leading-[1.28] tracking-[-0.03em] text-[#A99BEA]">
                Projects Done
              </div>
            </div>
          </div>
        </div>

        {/* Services Card */}
        <div className="md:col-span-3 bento-card  flex flex-col justify-between min-h-[280px] opacity-0 animate-fade-in" style={{
          animationDelay: '0.9s'
        }}>
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Services<br />
              that i <span className="text-accent">do</span> <ArrowRight className="inline w-5 h-5 text-accent" />
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-4 py-2 rounded-full border border-accent text-accent text-xs font-medium">UI Design</span>
            <span className="px-4 py-2 rounded-full border border-primary/50 text-primary text-xs font-medium rotate-[-5deg]">UX Design</span>
            <span className="px-4 py-2 rounded-full border border-border text-muted-foreground text-xs font-medium">BRANDING</span>
            <span className="px-4 py-2 rounded-full border border-border text-muted-foreground text-xs font-medium">LOGO</span>
          </div>
          <div className="flex gap-3 mt-4">
            {/* Figma Icon */}
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent-foreground">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="currentColor" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="currentColor" />
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="currentColor" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="currentColor" />
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="currentColor" />
              </svg>
            </div>
            {/* Illustrator Icon */}
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
                <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="hsl(var(--primary))">Ai</text>
              </svg>
            </div>
            {/* Photoshop Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#31A8FF] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
                <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#001E36">Ps</text>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>;
};
export default HeroSection;
