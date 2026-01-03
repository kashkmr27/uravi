import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const caseStudiesData: Record<string, {
  title: string;
  subtitle: string;
  service: string;
  category: string;
  year: string;
  link: string;
  heroImage: string;
  overview: string[];
  challenge: {
    description: string;
    points: string[];
  };
  results: {
    description: string;
    points: string[];
  };
  galleryImages: string[];
}> = {
  "gmb-website-redesign": {
    title: "GMB Website Redesign",
    subtitle: "Transforming the UK's leading trade union digital presence",
    service: "UI/UX Design",
    category: "Web Redesign",
    year: "2024",
    link: "https://www.gmb.org.uk/",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop",
    overview: [
      "GMB Union is one of the largest trade unions in the UK, representing over 500,000 members across various sectors. The project aimed to completely redesign their digital presence to better serve their members and attract new ones.",
      "The redesign focused on improving accessibility, streamlining the user journey, and creating a modern, engaging experience that reflects GMB's values of solidarity and worker empowerment.",
    ],
    challenge: {
      description: "The existing website had significant usability issues and outdated design patterns that were hindering member engagement and new sign-ups.",
      points: [
        "Complex navigation structure with over 200 pages",
        "Poor mobile experience with 60% mobile traffic",
        "Accessibility issues affecting older members",
        "Inconsistent branding across different sections",
      ],
    },
    results: {
      description: "The new website launched to positive reception from both members and stakeholders, with significant improvements in key metrics.",
      points: [
        "40% increase in membership sign-ups",
        "65% improvement in mobile engagement",
        "WCAG 2.1 AA accessibility compliance",
        "Unified design system across all pages",
      ],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    ],
  },
  "innov-8-2-create": {
    title: "Innov-8-2-Create",
    subtitle: "Building Europe's innovation ecosystem platform",
    service: "UI/UX Design",
    category: "Platform Design",
    year: "2023",
    link: "https://innov-8-2-create.eu/",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
    overview: [
      "Innov-8-2-Create is a European initiative aimed at fostering innovation and collaboration across research institutions, startups, and enterprises.",
      "The platform connects stakeholders across the innovation ecosystem, providing tools for collaboration, knowledge sharing, and project management.",
    ],
    challenge: {
      description: "Creating a unified platform that serves diverse user groups with different needs and technical capabilities.",
      points: [
        "Multiple user personas with varying needs",
        "Complex data visualization requirements",
        "Multilingual support for EU partners",
        "Integration with existing EU systems",
      ],
    },
    results: {
      description: "Successfully launched platform now serving innovation networks across 12 European countries.",
      points: [
        "500+ registered organizations",
        "50+ active innovation projects",
        "Support for 8 EU languages",
        "Seamless EU system integration",
      ],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    ],
  },
  "climate-jobs": {
    title: "Climate Jobs",
    subtitle: "Connecting workers with sustainable career paths",
    service: "Web Design",
    category: "Platform",
    year: "2023",
    link: "https://climatejobs.org.uk/",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&h=900&fit=crop",
    overview: [
      "Climate Jobs is a UK initiative promoting green employment opportunities and climate action. The platform connects workers with sustainable career paths in the growing green economy.",
      "The project aimed to create an engaging, informative platform that educates visitors about green jobs while providing practical resources for career transition.",
    ],
    challenge: {
      description: "Making complex climate and employment data accessible and actionable for diverse audiences.",
      points: [
        "Communicating complex policy information",
        "Engaging younger job seekers",
        "Building trust with trade union members",
        "Showcasing regional job opportunities",
      ],
    },
    results: {
      description: "The platform has become a key resource for green job information in the UK.",
      points: [
        "100,000+ monthly visitors",
        "Featured in major UK publications",
        "Partnership with 20+ organizations",
        "Comprehensive green jobs database",
      ],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    ],
  },
  "act-for-change": {
    title: "Act for Change",
    subtitle: "Empowering communities through advocacy",
    service: "UI Design",
    category: "Branding",
    year: "2022",
    link: "https://actforchange.org.uk/",
    heroImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&h=900&fit=crop",
    overview: [
      "Act for Change is an advocacy platform empowering communities to take action on social and environmental issues. The project involved creating a compelling digital presence that inspires action.",
      "The design focused on storytelling, making it easy for visitors to understand issues and take meaningful action through campaigns and events.",
    ],
    challenge: {
      description: "Creating an emotionally engaging platform that motivates action while maintaining credibility.",
      points: [
        "Balancing urgency with hope",
        "Making campaign participation easy",
        "Building community engagement",
        "Measuring impact effectively",
      ],
    },
    results: {
      description: "The platform has successfully mobilized communities across multiple campaigns.",
      points: [
        "50,000+ campaign participants",
        "Strong social media presence",
        "Regular community events",
        "Measurable policy impact",
      ],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    ],
  },
  "astp4kt": {
    title: "ASTP4KT",
    subtitle: "Accelerating European knowledge transfer",
    service: "UX Research",
    category: "Platform",
    year: "2022",
    link: "https://astp4kt.eu/",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop",
    overview: [
      "ASTP4KT is a European knowledge transfer platform connecting researchers, innovators, and industry professionals. The platform facilitates technology transfer and commercialization of research.",
      "The UX research project focused on understanding user needs and optimizing the platform for effective knowledge exchange.",
    ],
    challenge: {
      description: "Understanding and serving the complex needs of diverse stakeholders in the knowledge transfer ecosystem.",
      points: [
        "Complex user journeys",
        "Technical content accessibility",
        "Cross-border collaboration needs",
        "Legacy system constraints",
      ],
    },
    results: {
      description: "Research insights led to significant platform improvements and increased user engagement.",
      points: [
        "35% increase in user engagement",
        "Streamlined user journeys",
        "Improved content discovery",
        "Enhanced collaboration tools",
      ],
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
    ],
  },
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !caseStudiesData[slug]) {
    return <Navigate to="/case-studies" replace />;
  }

  const study = caseStudiesData[slug];
  const studySlugs = Object.keys(caseStudiesData);
  const currentIndex = studySlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? studySlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < studySlugs.length - 1 ? studySlugs[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{study.title} | Case Study - Uravi Sharma</title>
        <meta 
          name="description" 
          content={study.subtitle} 
        />
        <link rel="canonical" href={`https://uravisharma.com/case-studies/${slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24">
          {/* Hero Section - Caard Style */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-6">
              {/* Back Link */}
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                <span>Back to Case Studies</span>
              </Link>

              {/* Title */}
              <div className="text-center mb-12">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  {study.title}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {study.subtitle}
                </p>
              </div>

              {/* Meta Info - Caard Style */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 text-sm">
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">SERVICE</span>
                  <span className="text-foreground font-medium">{study.service}</span>
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">CATEGORY</span>
                  <span className="text-foreground font-medium">{study.category}</span>
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">YEAR</span>
                  <span className="text-foreground font-medium">{study.year}</span>
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground block mb-1">WEBSITE</span>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 justify-center"
                  >
                    See live
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Overview
                </h2>
                {study.overview.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Image */}
          {study.galleryImages[0] && (
            <section className="py-8">
              <div className="container mx-auto px-6">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={study.galleryImages[0]}
                    alt={`${study.title} - Design showcase`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Challenge Section */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.challenge.description}
                </p>
                <ul className="space-y-3">
                  {study.challenge.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-12 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Results
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.results.description}
                </p>
                <ul className="space-y-3">
                  {study.results.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Second Gallery Image */}
          {study.galleryImages[1] && (
            <section className="py-8">
              <div className="container mx-auto px-6">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={study.galleryImages[1]}
                    alt={`${study.title} - Design detail`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Navigation */}
          <section className="py-12 md:py-20 border-t border-border">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center">
                {prevSlug ? (
                  <Link
                    to={`/case-studies/${prevSlug}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Previous Project</span>
                  </Link>
                ) : (
                  <div />
                )}
                {nextSlug ? (
                  <Link
                    to={`/case-studies/${nextSlug}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <span>Next Project</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudyDetail;
