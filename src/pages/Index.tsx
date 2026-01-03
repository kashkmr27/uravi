import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Uravi Sharma | UI/UX & Digital Designer</title>
        <meta 
          name="description" 
          content="Uravi Sharma is a seasoned UI/UX & Digital Designer with 7+ years of experience crafting user-centered digital experiences. Specializing in UX research, design systems, and generative AI tools." 
        />
        <meta name="keywords" content="UI Designer, UX Designer, Digital Designer, Figma Expert, Product Designer, Web Design, UK Designer" />
        <meta property="og:title" content="Uravi Sharma | UI/UX & Digital Designer" />
        <meta property="og:description" content="7+ years of experience crafting user-centered digital experiences. Let's create something amazing together." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://uravisharma.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
