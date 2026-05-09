import { Helmet } from 'react-helmet-async';
import { ExternalLink, ArrowLeft, ArrowRight, CheckCircle2, Target, Users, Search, Lightbulb, Palette, Code2 } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define the comprehensive CaseStudy type to support both basic and detailed layouts
export type CaseStudy = {
  title: string;
  subtitle: string;
  service: string;
  category: string;
  year: string;
  link?: string;
  heroImage: string;
  overview: string[];
  
  // Core sections (support for existing case studies)
  challenge: {
    description: string;
    points: string[];
  };
  results: {
    description: string;
    points: string[];
  };
  galleryImages: string[];

  // Detailed sections (for the new, rich layout)
  roleDetails?: Record<string, string>;
  objectives?: { title: string; description: string }[];
  demographics?: { label: string; value: string }[];
  personas?: { role: string; description: string; initials: string }[];
  process?: { title: string; description: string; icon: string }[];
  wireframes?: { description: string; images: string[] };
  styleGuide?: {
    colors: { name: string; hex: string; class: string }[];
    typography: { primary: string; weights: string[] };
    accessibility: string[];
  };
  techStack?: string[];
  finalSolution?: { title: string; description: string }[];
  metrics?: { value: string; label: string; colorClass?: string }[];
};

const caseStudiesData: Record<string, CaseStudy> = {
  // --- New Uravi Case Study ---
  "uravi": {
    title: "Make work feel less like work",
    subtitle: "Supporting and connecting more connected, inclusive, and effective workplace cultures with HR tech.",
    service: "UX/UI Design",
    category: "B2B SaaS / Productivity",
    year: "2024",
    link: "https://uravi.com",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop", // Placeholder
    overview: [
      "URavi is a SaaS platform designed to streamline team collaboration, improve project tracking, and foster a more connected workplace. Our goal was to design an intuitive interface that makes daily work tasks less burdensome and more engaging."
    ],
    roleDetails: {
      "My Role": "UX/UI Designer",
      "Role Type": "Full-time / Contract",
      "Industry": "B2B SaaS / HR Tech",
      "Duration": "3 Months",
      "Platform": "Web App & Mobile App"
    },
    challenge: {
      description: "The modern workplace is often fragmented, with teams using disjointed tools that hinder communication and collaboration. This leads to decreased productivity, lowered employee engagement, and a lack of unified company culture.",
      points: [
        "Limited Collaboration: Teams struggled to collaborate efficiently in real-time.",
        "Cluttered Interface: Existing tools were too complex, causing cognitive overload.",
        "Slow Onboarding: New users found it difficult to navigate the platform.",
        "Low Engagement: Employees felt disconnected from the company culture."
      ]
    },
    objectives: [
      { title: "Improve Collaboration", description: "Create a unified workspace for real-time communication." },
      { title: "Streamline Navigation", description: "Simplify the user interface for easier access to tools." },
      { title: "Boost Engagement", description: "Design an interactive and visually appealing platform." }
    ],
    demographics: [
      { label: "Age", value: "25 - 45" },
      { label: "Gender", value: "All" },
      { label: "Geography", value: "Global" },
      { label: "Tech Savvy", value: "Medium" }
    ],
    personas: [
      { role: "Project Manager", description: "Needs tools for tracking progress and managing team workloads efficiently.", initials: "PM" },
      { role: "Creative Director", description: "Requires a centralized space for reviewing designs and providing feedback.", initials: "CD" },
      { role: "Team Member", description: "Looks for clear task assignments, easy communication, and a simple interface.", initials: "TM" }
    ],
    process: [
      { icon: "search", title: "Discovery & Research", description: "User interviews, competitor analysis, surveys" },
      { icon: "lightbulb", title: "Ideation & Concepting", description: "Brainstorming, user journeys, wireframing" },
      { icon: "target", title: "Prototyping & Testing", description: "High-fidelity prototypes, usability testing" },
      { icon: "code", title: "Development & QA", description: "Design handoff, implementation, bug fixing" }
    ],
    wireframes: {
      description: "Initial low-fidelity wireframes focused on layout, information architecture, and core user flows before committing to visual design.",
      images: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", // placeholder
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ]
    },
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#4F46E5", class: "bg-indigo-600" },
        { name: "Secondary", hex: "#EC4899", class: "bg-pink-500" },
        { name: "Background", hex: "#0F172A", class: "bg-slate-900" }
      ],
      typography: {
        primary: "Inter",
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: ["AA Compliant", "High contrast colors", "Tap targets minimum 44x44px"]
    },
    techStack: ["Figma", "Miro", "Next.js", "Tailwind CSS"],
    finalSolution: [
      { title: "Real-Time Collaboration", description: "Seamless communication tools integrated directly into the workspace." },
      { title: "Intuitive Dashboard", description: "Clean and user-friendly dashboard for quick access to key features." },
      { title: "Advanced Search", description: "Powerful search functionality to find documents instantly." },
      { title: "Customizable Workspaces", description: "Personalized layouts to suit different team needs." }
    ],
    metrics: [
      { value: "85%", label: "Increase in User Engagement", colorClass: "text-indigo-500" },
      { value: "30%", label: "Reduction in Task Time", colorClass: "text-pink-500" },
      { value: "95%", label: "Positive User Feedback", colorClass: "text-orange-500" }
    ],
    results: {
      description: "The redesigned platform delivered a modern, cohesive experience that directly addressed the initial user pain points.",
      points: [
        "Significantly improved team collaboration and communication",
        "Reduced onboarding time for new employees",
        "High adoption rate among targeted user groups"
      ]
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&h=900&fit=crop"
    ]
  },
  // --- Existing Case Studies ---
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
      "The redesign focused on improving accessibility, streamlining the user journey, and creating a modern, engaging experience that reflects GMB's values of solidarity and worker empowerment."
    ],
    challenge: {
      description: "The existing website had significant usability issues and outdated design patterns that were hindering member engagement and new sign-ups.",
      points: [
        "Complex navigation structure with over 200 pages",
        "Poor mobile experience with 60% mobile traffic",
        "Accessibility issues affecting older members",
        "Inconsistent branding across different sections"
      ]
    },
    results: {
      description: "The new website launched to positive reception from both members and stakeholders, with significant improvements in key metrics.",
      points: [
        "40% increase in membership sign-ups",
        "65% improvement in mobile engagement",
        "WCAG 2.1 AA accessibility compliance",
        "Unified design system across all pages"
      ]
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
    ]
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
      "The platform connects stakeholders across the innovation ecosystem, providing tools for collaboration, knowledge sharing, and project management."
    ],
    challenge: {
      description: "Creating a unified platform that serves diverse user groups with different needs and technical capabilities.",
      points: [
        "Multiple user personas with varying needs",
        "Complex data visualization requirements",
        "Multilingual support for EU partners",
        "Integration with existing EU systems"
      ]
    },
    results: {
      description: "Successfully launched platform now serving innovation networks across 12 European countries.",
      points: [
        "500+ registered organizations",
        "50+ active innovation projects",
        "Support for 8 EU languages",
        "Seamless EU system integration"
      ]
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
    ]
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
      "The project aimed to create an engaging, informative platform that educates visitors about green jobs while providing practical resources for career transition."
    ],
    challenge: {
      description: "Making complex climate and employment data accessible and actionable for diverse audiences.",
      points: [
        "Communicating complex policy information",
        "Engaging younger job seekers",
        "Building trust with trade union members",
        "Showcasing regional job opportunities"
      ]
    },
    results: {
      description: "The platform has become a key resource for green job information in the UK.",
      points: [
        "100,000+ monthly visitors",
        "Featured in major UK publications",
        "Partnership with 20+ organizations",
        "Comprehensive green jobs database"
      ]
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    ]
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
      "The design focused on storytelling, making it easy for visitors to understand issues and take meaningful action through campaigns and events."
    ],
    challenge: {
      description: "Creating an emotionally engaging platform that motivates action while maintaining credibility.",
      points: [
        "Balancing urgency with hope",
        "Making campaign participation easy",
        "Building community engagement",
        "Measuring impact effectively"
      ]
    },
    results: {
      description: "The platform has successfully mobilized communities across multiple campaigns.",
      points: [
        "50,000+ campaign participants",
        "Strong social media presence",
        "Regular community events",
        "Measurable policy impact"
      ]
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    ]
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
      "The UX research project focused on understanding user needs and optimizing the platform for effective knowledge exchange."
    ],
    challenge: {
      description: "Understanding and serving the complex needs of diverse stakeholders in the knowledge transfer ecosystem.",
      points: [
        "Complex user journeys",
        "Technical content accessibility",
        "Cross-border collaboration needs",
        "Legacy system constraints"
      ]
    },
    results: {
      description: "Research insights led to significant platform improvements and increased user engagement.",
      points: [
        "35% increase in user engagement",
        "Streamlined user journeys",
        "Improved content discovery",
        "Enhanced collaboration tools"
      ]
    },
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop"
    ]
  }
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

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'search': return <Search className="w-6 h-6" />;
      case 'lightbulb': return <Lightbulb className="w-6 h-6" />;
      case 'target': return <Target className="w-6 h-6" />;
      case 'code': return <Code2 className="w-6 h-6" />;
      default: return <Search className="w-6 h-6" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{study.title} | Case Study - Uravi Sharma</title>
        <meta name="description" content={study.subtitle} />
        <link rel="canonical" href={`https://uravisharma.com/case-studies/${slug}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-12">
          
          {/* HERO SECTION */}
          <section className="py-12 md:py-20 relative overflow-hidden bg-foreground text-background">
            {/* Background elements if needed for dark mode feel inside hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background/5 to-transparent pointer-events-none z-0"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                <span>Back to Case Studies</span>
              </Link>

              <div className="max-w-4xl mb-12">
                <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-6">
                  Case Study
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                  {study.title}
                </h1>
                <p className="text-xl md:text-2xl text-background/70 mb-8 max-w-2xl leading-relaxed">
                  {study.subtitle}
                </p>
                
                {study.link && (
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Visit Website <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* ROLE DETAILS */}
          {study.roleDetails && (
            <section className="py-12 border-b border-border bg-card">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl">
                  {Object.entries(study.roleDetails).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">{key}</div>
                      <div className="text-sm font-medium text-foreground">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* OVERVIEW */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
                  Overview
                </h2>
                {study.overview.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* THE CHALLENGE & OBJECTIVES */}
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                <div>
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6">
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {study.challenge.description}
                  </p>
                  
                  <div className="space-y-6">
                    {study.challenge.points.map((point, index) => {
                      const [title, desc] = point.includes(":") ? point.split(":") : [point, ""];
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="text-foreground font-semibold mb-1 text-lg">{title}</h4>
                            {desc && <p className="text-muted-foreground leading-relaxed">{desc.trim()}</p>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {study.objectives && (
                  <div>
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6">
                      Goal / Objectives
                    </h2>
                    <div className="grid gap-6">
                      {study.objectives.map((obj, idx) => (
                        <div key={idx} className="bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
                            <Target className="w-5 h-5" />
                          </div>
                          <h4 className="text-foreground font-semibold mb-2 text-lg">{obj.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{obj.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* AUDIENCE / DEMOGRAPHICS & PERSONAS */}
          {(study.demographics || study.personas) && (
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  {study.demographics && (
                    <div className="mb-20">
                      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
                        User Demographics
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {study.demographics.map((demo, idx) => (
                          <div key={idx} className="bg-card border border-border p-6 rounded-2xl text-center">
                            <div className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wide">{demo.label}</div>
                            <div className="text-2xl font-bold text-foreground">{demo.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {study.personas && (
                    <div>
                      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
                        User Personas
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {study.personas.map((persona, idx) => (
                          <div key={idx} className="bg-secondary/20 border border-border p-8 rounded-3xl relative">
                            <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl mb-6 shadow-sm border border-indigo-200 dark:border-indigo-800">
                              {persona.initials}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">{persona.role}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                              "{persona.description}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* DESIGN PROCESS */}
          {study.process && (
            <section className="py-16 md:py-24 bg-card border-y border-border">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
                    Design Process
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {study.process.map((step, idx) => (
                      <div key={idx} className="relative group">
                        {idx < study.process.length - 1 && (
                          <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border z-0"></div>
                        )}
                        <div className="relative z-10 bg-background border border-border p-6 rounded-2xl h-full shadow-sm hover:shadow-md transition-all group-hover:-translate-y-1">
                          <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 text-foreground border border-border">
                            {renderIcon(step.icon)}
                          </div>
                          <div className="text-indigo-500 text-xs font-bold tracking-wider uppercase mb-3">
                            Phase 0{idx + 1}
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* WIREFRAMES */}
          {study.wireframes && (
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
                      Wireframes & Prototyping
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      {study.wireframes.description}
                    </p>
                  </div>
                  
                  <div className="bg-secondary/40 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {study.wireframes.images.map((img, idx) => (
                        <div key={idx} className="rounded-xl overflow-hidden shadow-lg bg-background border border-border">
                          <img src={img} alt={`Wireframe ${idx+1}`} className="w-full h-auto" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* STYLE GUIDE */}
          {study.styleGuide && (
            <section className="py-16 md:py-24 bg-card border-y border-border">
              <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
                    Design System
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Colors */}
                    <div className="bg-background border border-border p-8 rounded-3xl shadow-sm">
                      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Palette className="w-5 h-5 text-muted-foreground" /> Color Palette
                      </h3>
                      <div className="space-y-4">
                        {study.styleGuide.colors.map((color, idx) => (
                          <div key={idx} className="flex items-center gap-4 bg-secondary/30 p-3 rounded-xl border border-border">
                            <div className={`w-16 h-16 rounded-lg ${color.class} shadow-inner`}></div>
                            <div>
                              <div className="font-semibold text-foreground">{color.name}</div>
                              <div className="text-muted-foreground font-mono text-sm">{color.hex}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typography & Accessibility */}
                    <div className="flex flex-col gap-6">
                      <div className="bg-background border border-border p-8 rounded-3xl shadow-sm flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-6">Typography</h3>
                        <div className="flex items-end gap-6 mb-6">
                          <div className="text-7xl font-bold text-foreground leading-none">Aa</div>
                          <div className="text-2xl font-medium text-muted-foreground pb-2">{study.styleGuide.typography.primary}</div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-8">
                          {study.styleGuide.typography.weights.map((weight, idx) => (
                            <span key={idx} className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground font-medium border border-border">
                              {weight}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-background border border-border p-8 rounded-3xl shadow-sm">
                        <h3 className="text-xl font-bold text-foreground mb-4">Accessibility Focus</h3>
                        <ul className="space-y-3">
                          {study.styleGuide.accessibility.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FINAL RESULTS & METRICS */}
          <section className="py-16 md:py-24 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                
                {/* Metrics Banner */}
                {study.metrics && (
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-1 mb-20 shadow-2xl">
                    <div className="bg-foreground dark:bg-background/95 backdrop-blur-xl rounded-[23px] p-8 md:p-12">
                      <h2 className="text-3xl font-bold mb-10 text-center text-background dark:text-foreground">Impact & Results</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-background/10 dark:divide-foreground/10">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center pt-8 md:pt-0 md:px-4">
                            <div className={`text-5xl md:text-6xl font-bold mb-3 ${metric.colorClass}`}>{metric.value}</div>
                            <div className="text-background/80 dark:text-muted-foreground font-medium text-lg">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Final Solution Images */}
                <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
                  Final Product
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  {study.galleryImages.map((img, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-xl border border-border">
                      <img src={img} alt={`Final product ${idx+1}`} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                    </div>
                  ))}
                </div>

                {/* Final Features */}
                {study.finalSolution && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {study.finalSolution.map((feature, idx) => (
                      <div key={idx} className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                          <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </section>

          {/* CTA / Navigation */}
          <section className="py-16 md:py-24 border-t border-border bg-foreground text-background text-center">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something great together.</h2>
              <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto">
                Looking for a product designer to bring your idea to life? I'm currently available for new projects.
              </p>
              <Link to="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground hover:bg-background/90 font-bold rounded-xl transition-all duration-300 text-lg shadow-lg">
                Get in Touch
              </Link>
            </div>
          </section>

          {/* Prev / Next Links */}
          <section className="py-8 border-t border-border bg-background">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center max-w-6xl mx-auto">
                {prevSlug ? (
                  <Link
                    to={`/case-studies/${prevSlug}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group font-medium"
                  >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Previous Project</span>
                  </Link>
                ) : <div />}
                {nextSlug ? (
                  <Link
                    to={`/case-studies/${nextSlug}`}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group font-medium"
                  >
                    <span>Next Project</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : <div />}
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
