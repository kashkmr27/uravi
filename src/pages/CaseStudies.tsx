import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const caseStudies = [
  {
    slug: "gmb-website-redesign",
    title: "GMB Website Redesign",
    subtitle: "Transforming the UK's leading trade union digital presence",
    service: "UI/UX Design",
    category: "Web Redesign",
    year: "2024",
    link: "https://www.gmb.org.uk/",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    slug: "innov-8-2-create",
    title: "Innov-8-2-Create",
    subtitle: "Building Europe's innovation ecosystem platform",
    service: "UI/UX Design",
    category: "Platform Design",
    year: "2023",
    link: "https://innov-8-2-create.eu/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    slug: "climate-jobs",
    title: "Climate Jobs",
    subtitle: "Connecting workers with sustainable career paths",
    service: "Web Design",
    category: "Platform",
    year: "2023",
    link: "https://climatejobs.org.uk/",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
  },
  {
    slug: "act-for-change",
    title: "Act for Change",
    subtitle: "Empowering communities through advocacy",
    service: "UI Design",
    category: "Branding",
    year: "2022",
    link: "https://actforchange.org.uk/",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
  },
  {
    slug: "astp4kt",
    title: "ASTP4KT",
    subtitle: "Accelerating European knowledge transfer",
    service: "UX Research",
    category: "Platform",
    year: "2022",
    link: "https://astp4kt.eu/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Uravi Sharma - UI/UX & Digital Designer</title>
        <meta 
          name="description" 
          content="Explore detailed case studies of my UI/UX design projects. Learn about my design process, challenges, and solutions." 
        />
        <meta name="keywords" content="UX Case Studies, UI Design Process, Design Portfolio, User Research" />
        <link rel="canonical" href="https://uravisharma.com/case-studies" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Case <span className="text-accent">Studies</span>
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Deep dives into my design process, from research and ideation to final implementation.
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {caseStudies.map((study) => (
                  <Link
                    key={study.slug}
                    to={`/case-studies/${study.slug}`}
                    className="group block"
                  >
                    <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        {/* Meta Info - Caard style */}
                        <div className="grid grid-cols-4 gap-4 mb-6 text-sm">
                          <div>
                            <span className="text-muted-foreground block mb-1">SERVICE</span>
                            <span className="text-foreground font-medium">{study.service}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block mb-1">CATEGORY</span>
                            <span className="text-foreground font-medium">{study.category}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block mb-1">YEAR</span>
                            <span className="text-foreground font-medium">{study.year}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground block mb-1">WEBSITE</span>
                            <a
                              href={study.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1"
                            >
                              See live
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {study.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {study.subtitle}
                        </p>

                        {/* View More */}
                        <div className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                          <span>View Case Study</span>
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Let's create something amazing together
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Have a project in mind? I'd love to hear about it.
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

export default CaseStudies;
