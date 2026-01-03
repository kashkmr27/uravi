import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const projects = [
  {
    title: "GMB Website Redesign",
    logo: "GMB",
    description: "Led the complete redesign of GMB's digital presence, creating a modern, accessible, and user-friendly website that serves millions of union members across the UK.",
    link: "https://www.gmb.org.uk/",
    tags: ["UX Research", "UI Design", "Responsive", "Accessibility"],
    caseStudySlug: "gmb-website-redesign",
  },
  {
    title: "Innov-8-2-Create",
    logo: "Innov-8-2-Create",
    description: "Supporting and sustaining an efficient innovation ecosystem in Europe. A comprehensive platform designed to foster collaboration and drive innovation across European networks.",
    link: "https://innov-8-2-create.eu/",
    tags: ["UI/UX Design", "Web Design", "Innovation"],
    caseStudySlug: "innov-8-2-create",
  },
  {
    title: "Climate Jobs",
    logo: "Climate Jobs",
    description: "A platform dedicated to promoting green employment opportunities and climate action initiatives across the UK, connecting workers with sustainable career paths.",
    link: "https://climatejobs.org.uk/",
    tags: ["Web Design", "UX Design", "Sustainability"],
    caseStudySlug: "climate-jobs",
  },
  {
    title: "Act for Change",
    logo: "Act for Change",
    description: "An advocacy platform empowering communities to take action on social and environmental issues, featuring intuitive navigation and impactful storytelling.",
    link: "https://actforchange.org.uk/",
    tags: ["UI Design", "Branding", "Responsive"],
    caseStudySlug: "act-for-change",
  },
  {
    title: "ASTP4KT",
    logo: "ASTP4KT",
    description: "European knowledge transfer platform connecting researchers, innovators, and industry professionals to accelerate technology transfer and commercialization.",
    link: "https://astp4kt.eu/",
    tags: ["UX Research", "Web Design", "Innovation"],
    caseStudySlug: "astp4kt",
  },
];

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Work | Uravi Sharma - UI/UX & Digital Designer</title>
        <meta 
          name="description" 
          content="Explore my portfolio of UI/UX and digital design projects. Featured work includes website redesigns, branding, and user experience improvements." 
        />
        <meta name="keywords" content="UI Design Portfolio, UX Design Projects, Web Design Work, Digital Design Case Studies" />
        <link rel="canonical" href="https://uravisharma.com/work" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  My <span className="text-accent">Work</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  A collection of projects showcasing problem-solving, creativity, and attention to detail in UI/UX design.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-8 md:gap-12">
                {projects.map((project, index) => (
                  <article 
                    key={project.title}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 p-6 md:p-10">
                      {/* Project Logo */}
                      <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="bg-gradient-to-br from-primary/80 via-accent to-primary rounded-2xl p-12 md:p-16 w-full max-w-md">
                          <div className="bg-background/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
                            <div className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight text-center">
                              {project.logo}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <span className="text-accent text-sm font-medium mb-2 block">
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-full border border-border text-muted-foreground text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full transition-colors font-medium group/link"
                          >
                            <span>View Live Site</span>
                            <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                          </a>
                          <Link
                            to={`/case-studies/${project.caseStudySlug}`}
                            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-full transition-colors font-medium group/link"
                          >
                            <span>Case Study</span>
                            <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Interested in working together?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Let's discuss how I can help bring your next project to life.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full transition-all duration-300 hover:shadow-glow group font-medium"
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Work;
