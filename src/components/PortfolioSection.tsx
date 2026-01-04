import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "GMB Website Redesign",
      logo: "GMB",
      description: "Led the complete redesign of GMB's digital presence, creating a modern, accessible, and user-friendly website that serves millions of union members across the UK.",
      link: "https://www.gmb.org.uk/",
      tags: ["UX Research", "UI Design", "Responsive", "Accessibility"],
    },
    {
      title: "Innov-8-2-Create",
      logo: "Innov-8-2-Create",
      description: "Supporting and sustaining an efficient innovation ecosystem in Europe. A comprehensive platform designed to foster collaboration and drive innovation across European networks.",
      link: "https://innov-8-2-create.eu/",
      tags: ["UI/UX Design", "Web Design", "Innovation"],
    },
    {
      title: "Climate Jobs",
      logo: "Climate Jobs",
      description: "A platform dedicated to promoting green employment opportunities and climate action initiatives across the UK, connecting workers with sustainable career paths.",
      link: "https://climatejobs.org.uk/",
      tags: ["Web Design", "UX Design", "Sustainability"],
    },
    {
      title: "Act for Change",
      logo: "Act for Change",
      description: "An advocacy platform empowering communities to take action on social and environmental issues, featuring intuitive navigation and impactful storytelling.",
      link: "https://actforchange.org.uk/",
      tags: ["UI Design", "Branding", "Responsive"],
    },
    {
      title: "ASTP4KT",
      logo: "ASTP4KT",
      description: "European knowledge transfer platform connecting researchers, innovators, and industry professionals to accelerate technology transfer and commercialization.",
      link: "https://astp4kt.eu/",
      tags: ["UX Research", "Web Design", "Innovation"],
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="work" className="py-6 md:py-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my best work showcasing problem-solving, creativity, and attention to detail.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div key={project.title} className="flex-[0_0_100%] min-w-0">
                  <div className="bg-gradient-to-br from-primary/80 via-accent to-primary rounded-2xl p-6 md:p-10 mx-2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      {/* Project Logo */}
                      <div className="flex items-center justify-center">
                        <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
                          <div className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight text-center">
                            {project.logo}
                          </div>
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className="text-left">
                        <span className="text-foreground/70 text-sm font-medium mb-2 block">
                          Featured Project
                        </span>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 rounded-full border border-foreground/30 text-foreground/90 text-xs font-medium"
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
                            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-foreground/80 transition-colors group"
                          >
                            <span>View Live Site</span>
                            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                          <a
                            href="#case-studies"
                            className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground px-4 py-2 rounded-full transition-colors group"
                          >
                            <span>Case Study</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-secondary/80 hover:bg-secondary text-foreground p-2 md:p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-secondary/80 hover:bg-secondary text-foreground p-2 md:p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === selectedIndex
                    ? 'bg-accent w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/80 text-foreground px-8 py-4 rounded-full transition-all duration-300 hover:shadow-glow group font-medium"
          >
            <span>Let's discuss your project</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
