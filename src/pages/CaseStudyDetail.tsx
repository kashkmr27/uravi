import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define the comprehensive CaseStudy type to support both basic and detailed layouts
export type CaseStudy = {
  title: string;
  heroText?: { part1: string; part2: string };
  subtitle?: string;
  service: string;
  category: string;
  year: string;
  link?: string;
  heroImage?: string;
  overview: string[];
  
  // Core sections (support for existing case studies)
  challenge?: {
    description: string;
    points: string[];
    additionalDescription?: string;
  };
  results?: {
    description: string;
    points: string[];
  };
  galleryImages?: string[];

  // Detailed sections (for the new, rich layout based on image)
  roleDetails?: Record<string, string>;
  challenges?: { title: string; description: string }[];
  objectives?: { title: string; description?: string; points?: string[] }[];
  targetAudience?: { title: string; description: string }[];
  personasIntro?: string;
  personas?: { name: string; points: string[] }[];
  wireframesIntro?: string;
  wireframes?: { desktop?: string; mobile?: string[] };
  metrics?: { value: string; label: string; color?: string }[];
  solutionIntro?: string;
  solutions?: { title: string; description: string }[];
  designSystemIntro?: string;
  styleGuide?: {
    colors: { name: string; hex: string; class: string }[];
    typography: { primary: string; secondary?: string[]; weights: string[] };
    accessibility: { title: string; description: string }[];
  };
  uiFeatures?: { image: string; title: string; description: string }[];
  nextSteps?: { title: string; description: string }[];
};

const caseStudiesData: Record<string, CaseStudy> = {
  // --- New Uravi Case Study exactly matching image ---
  "uravi": {
    title: "Uravi Case Study",
    heroText: {
      part1: "Supporting and connecting more connected, inclusive ",
      part2: "& productive teams - Uravi."
    },
    service: "UX/UI Design",
    category: "B2B SaaS / Productivity",
    year: "2024",
    link: "https://uravi.com",
    roleDetails: {
      "Role": "UX / UI Designer",
      "Role Type": "Part-time / Freelance base",
      "Project": "B2B SaaS",
      "Duration": "3 Months",
      "Start / End Date": "1 Jan, 2024 - Present"
    },
    overview: [
      "Uravi is a B2B SaaS platform designed for mid-sized & enterprise companies to bridge the gap in employee engagement, alignment, and wellness.",
      "Currently, the platform struggles with a high bounce rate. The core user flow lacks intuition, leading to confusion among users. Additionally, the outdated visuals negatively impact brand perception.",
      "Through this redesign, my primary objective was to tackle these pain points head-on. The goal is to design an interface that is not only visually striking but also deeply rooted in user-centric principles."
    ],
    challenges: [
      { title: "High Bounce Rate", description: "Users are leaving the platform quickly due to confusion, indicating a disconnect between the initial impression and user expectations." },
      { title: "Unintuitive User Flow", description: "The primary user flow is complex, causing friction and frustration. Users find it difficult to navigate seamlessly to key features." },
      { title: "Outdated Visuals", description: "The platform's appearance lacks modern appeal, negatively impacting the brand's perception and failing to inspire user confidence." },
      { title: "Decreased Engagement", description: "Combined issues lead to reduced user engagement, as users struggle to find value and perform tasks efficiently." }
    ],
    objectives: [
      { title: "Reduce Bounce Rate", description: "Implement strategies to capture and retain user attention, minimizing immediate platform abandonment." },
      { title: "Streamline User Flow", description: "Simplify navigation and primary user paths, ensuring a frictionless and intuitive journey." }
    ],
    targetAudience: [
      { title: "Ages", description: "25-45" },
      { title: "Professionals, HRs, Management", description: "Corporate employees, team leads, human resource managers, and executives." },
      { title: "Tech Savvy", description: "Individuals comfortable using digital tools and platforms for daily tasks." }
    ],
    personasIntro: "Uravi caters to a diverse user base, primarily targeting professionals within corporate environments.",
    personas: [
      {
        name: "Sarah (HR Manager), 34",
        points: [
          "Needs an easy way to track employee well-being and engagement.",
          "Frustrated by low participation in company surveys.",
          "Wants actionable insights, not just raw data."
        ]
      },
      {
        name: "Alex (Software Engineer), 28",
        points: [
          "Seeks a quiet, focused work environment while staying connected.",
          "Finds current tools distracting and overwhelming with notifications.",
          "Values a clean interface and deep work features."
        ]
      },
      {
        name: "David (Team Lead), 40",
        points: [
          "Needs to ensure his team is aligned and productive.",
          "Wants a quick way to check project status without micromanaging.",
          "Values clear communication and transparency."
        ]
      },
      {
        name: "Emily (CEO), 45",
        points: [
          "Requires a high-level overview of company performance and employee sentiment.",
          "Finds current reporting tools inadequate and hard to use.",
          "Values data visualization and strategic insights."
        ]
      }
    ],
    wireframesIntro: "Following the research phase, I moved to wireframing and prototyping to visualize the core user flow and page layouts.",
    metrics: [
      { value: "33%", label: "Decrease in Bounce Rate", color: "text-white" },
      { value: "28%", label: "Increase in Engagement", color: "text-white" },
      { value: "45%", label: "Growth in User Base", color: "text-white" }
    ],
    solutionIntro: "To address the challenges identified during the research phase, I designed a solution that focused on streamlining the user experience, enhancing visual appeal, and improving overall engagement.",
    solutions: [
      { title: "Streamlined User Flow", description: "I simplified the primary user journey by restructuring the navigation and removing unnecessary steps. The new flow is intuitive, allowing users to find what they need quickly and easily." },
      { title: "Modernized Visuals", description: "A fresh, modern visual identity was implemented. This included a new color palette, updated typography, and consistent UI elements that align with the brand's premium positioning." },
      { title: "Enhanced Dashboard", description: "The dashboard was redesigned to provide a comprehensive overview of key metrics and activities. Customizable widgets allow users to tailor the dashboard to their specific needs." },
      { title: "Improved Collaboration Features", description: "New features were introduced to facilitate better team collaboration, including real-time updates, integrated messaging, and seamless file sharing." }
    ],
    designSystemIntro: "To ensure consistency across the platform, a comprehensive design system was created. This included a detailed style guide outlining colors, typography, spacing, and UI components.",
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#1E1B4B", class: "bg-[#1E1B4B]" },
        { name: "Secondary", hex: "#BE185D", class: "bg-[#BE185D]" }
      ],
      typography: {
        primary: "Inter",
        secondary: ["Roboto", "Poppins", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." },
        { title: "Focus States", description: "Designing visible focus indicators for all interactive elements to support keyboard navigation." },
        { title: "Scalable Text", description: "Allowing users to adjust text size without breaking the layout or functionality." }
      ]
    },
    nextSteps: [
      { title: "Development", description: "Collaborate closely with the development team to ensure accurate implementation of the new designs." },
      { title: "Usability Testing", description: "Conduct further usability testing on the live platform to gather feedback and identify areas for refinement." },
      { title: "Continuous Iteration", description: "Regularly review analytics and user feedback to continuously improve the platform's performance and user experience." }
    ]
  },
  // --- Existing Case Studies ---
  "gmb-website-redesign": {
    title: "GMB Union",
    heroText: {
      part1: "GMB Union - ",
      part2: "Make work better"
    },
    subtitle: "GMB Union is a general trade union in the United Kingdom that represents workers in many different industries, from retail to manufacturing, and the public sector.",
    service: "UI/UX Design",
    category: "Web Redesign",
    year: "2024",
    link: "https://www.gmb.org.uk/",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Platform": "Responsive Web (Desktop + Mobile)",
      "Duration": "6 months",
      "Tools Used": "Figma, Photoshop, Illustrator, UserTesting"
    },
    overview: [
      "The GMB Union is a UK-based trade union representing over 500,000 workers across industries, focused on improving pay, rights, and workplace conditions.",
      "This project involved evaluating and redesigning the GMB website experience to improve user engagement, accessibility, and membership conversion."
    ],
    challenge: {
      description: "Despite a strong mission, the website suffers from UX issues that impact usability and conversion:",
      points: [
        "Overloaded homepage with competing content (news, campaigns, signup)",
        "Weak visual hierarchy and unclear CTA prioritization",
        "Complex navigation structure",
        "Low emotional connection despite powerful mission",
        "Users struggle to quickly understand \"Why join?\""
      ],
      additionalDescription: "Additionally, external feedback suggests communication and support clarity issues, reinforcing the need for better UX clarity."
    },
    challenges: [
      { title: "Poor Navigation", description: "Members struggled to find relevant information quickly, leading to high bounce rates and support calls." },
      { title: "Outdated Design", description: "The visual design felt dated and didn't reflect GMB's progressive values and modern approach." },
      { title: "Mobile Experience", description: "The site wasn't optimized for mobile devices, despite 60% of traffic coming from mobile users." },
      { title: "Accessibility Issues", description: "Limited accessibility features prevented some members from effectively using the website." }
    ],
    objectives: [
      {
        title: "Secondary Goals",
        points: [
          "Strengthen trust and credibility",
          "Improve engagement with campaigns and news",
          "Enhance mobile usability"
        ]
      },
      {
        title: "Primary Goals",
        points: [
          "Increase membership sign-ups",
          "Improve clarity of value proposition",
          "Simplify navigation"
        ]
      }
    ],
    targetAudience: [
      { title: "Ages", description: "18-65+" },
      { title: "Professionals", description: "Workers across various sectors including retail, manufacturing, and public sector." },
      { title: "Tech Savvy", description: "Varying levels of tech savviness, from beginners to advanced users." }
    ],
    personasIntro: "GMB Union caters to a diverse user base, primarily targeting workers across various sectors in the UK.",
    personas: [
      {
        name: "Sarah (Retail Worker), 34",
        points: [
          "Needs an easy way to access union resources.",
          "Frustrated by the complex website navigation.",
          "Wants to quickly find information about her rights."
        ]
      },
      {
        name: "David (Manufacturing Worker), 45",
        points: [
          "Needs to stay updated on union news and events.",
          "Finds the current website outdated and hard to read.",
          "Wants a mobile-friendly experience."
        ]
      },
      {
        name: "Emily (Nurse), 28",
        points: [
          "Looking to join a union and wants a simple sign-up process.",
          "Needs clear information about membership benefits.",
          "Values transparency and modern digital experiences."
        ]
      },
      {
        name: "Michael (Public Sector Worker), 55",
        points: [
          "Requires accessible text and clear contrast.",
          "Needs to easily find contact information for representatives.",
          "Values straightforward and traditional communication."
        ]
      }
    ],
    wireframesIntro: "Following the research phase, I moved to wireframing and prototyping to visualize the core user flow and page layouts.",
    wireframes: {
      desktop: "/case-study/gmb/GMB-Union-desktop.png",
      mobile: [
        "/case-study/gmb/GMB-Union-mob-1.png",
        "/case-study/gmb/GMB-Union-mob-2.png",
        "/case-study/gmb/GMB-Union-mob-3.png"
      ]
    },
    uiFeatures: [
      { 
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop", 
        title: "Typography", 
        description: "The primary typeface chosen for GMB union is Poppins. It provides a clean, modern look while ensuring excellent readability across all devices." 
      },
      { 
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop", 
        title: "Color palette", 
        description: "The primary brand color is orange to maintain brand recognition, paired with teal and deep navy for a professional and engaging aesthetic." 
      }
    ],
    metrics: [
      { value: "50%", label: "Reduction in bounce rate", color: "text-[#00B4A8]" },
      { value: "3x", label: "Increase in mobile engagement", color: "text-slate-900" },
      { value: "95%", label: "Accessibility score achieved", color: "text-[#FF5A00]" }
    ],
    solutionIntro: "To address the challenges identified during the research phase, I designed a solution that focused on streamlining the user experience, enhancing visual appeal, and improving overall engagement.",
    solutions: [
      { title: "Streamlined Navigation", description: "I simplified the primary user journey by restructuring the navigation and removing unnecessary steps. The new flow is intuitive, allowing users to find what they need quickly and easily." },
      { title: "Accessible Design", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability and accessibility for all members." },
      { title: "Mobile-First Approach", description: "The platform was redesigned to provide a comprehensive and responsive experience across all devices, particularly on mobile." },
      { title: "Modernized Branding", description: "A fresh, modern visual identity was implemented. This included a new color palette, updated typography, and consistent UI elements that align with the brand's premium positioning." }
    ],
    designSystemIntro: "To ensure consistency across the platform, a comprehensive design system was created. This included a detailed style guide outlining colors, typography, spacing, and UI components.",
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#FF5A00", class: "bg-[#FF5A00]" },
        { name: "Secondary", hex: "#009F8C", class: "bg-[#009F8C]" }
      ],
      typography: {
        primary: "Poppins",
        secondary: ["Inter", "Roboto", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." },
        { title: "Focus States", description: "Designing visible focus indicators for all interactive elements to support keyboard navigation." },
        { title: "Scalable Text", description: "Allowing users to adjust text size without breaking the layout or functionality." }
      ]
    },
    nextSteps: [
      { title: "Development", description: "Collaborate closely with the development team to ensure accurate implementation of the new designs." },
      { title: "Usability Testing", description: "Conduct further usability testing on the live platform to gather feedback and identify areas for refinement." },
      { title: "Continuous Iteration", description: "Regularly review analytics and user feedback to continuously improve the platform's performance and user experience." }
    ]
  },
  "innov-8-2-create": {
    title: "Innov-8-2-Create",
    heroText: {
      part1: "Supporting and creating a more connected, inclusive ",
      part2: "& engaging way to manage the work"
    },
    subtitle: "Innov-8-2-Create is a digital platform that makes it easy for you to innovate, ideate, and collaborate. It's a space where you can share your ideas and work together to bring them to life.",
    service: "UI/UX Design",
    category: "Platform Design",
    year: "2023",
    link: "https://innov-8-2-create.eu/",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Web Design & UX Optimization",
      "Duration": "2 months",
      "Tools Used": "Figma, Photoshop, Illustrator, UserTesting"
    },
    overview: [
      "Innov-8 is a digital platform designed to support innovators and startups with resources, collaboration tools, and knowledge sharing. The website needed to clearly communicate its mission, showcase its initiatives, and provide a user-friendly experience for multiple user types, all while reflecting a modern, innovative brand identity."
    ],
    challenge: {
      description: "As this was a brand-new website, the challenge wasn't fixing an existing site. it was defining the experience from scratch:",
      points: [
        "How to clearly communicate Innov-8's mission and services",
        "Creating an intuitive information hierarchy for different user groups",
        "Designing a visually appealing, brand-aligned interface",
        "Ensuring mobile-first responsiveness"
      ]
    },
    challenges: [
      { title: "Defining Clear User Paths", description: "Ensuring users could easily navigate to key pages like About, Projects, and Resources." },
      { title: "Content Prioritization", description: "Organizing diverse content without overwhelming the user." },
      { title: "Brand Translation", description: "Translating Innov-8's brand identity into a cohesive digital design." },
      { title: "Responsive Design", description: "Creating layouts that work seamlessly across desktop, tablet, and mobile devices." }
    ],
    objectives: [
      { title: "Reduce Bounce Rate", description: "Implement strategies to capture and retain user attention, minimizing immediate platform abandonment." },
      { title: "Streamline User Flow", description: "Simplify navigation and primary user paths, ensuring a frictionless and intuitive journey." }
    ],
    targetAudience: [
      { title: "Ages", description: "25-45" },
      { title: "Professionals, HRs, Management", description: "Corporate employees, team leads, human resource managers, and executives." },
      { title: "Tech Savvy", description: "Individuals comfortable using digital tools and platforms for daily tasks." }
    ],
    personasIntro: "Innov-8-2-Create caters to a diverse user base, primarily targeting professionals within corporate environments.",
    personas: [
      {
        name: "Sarah (HR Manager), 34",
        points: [
          "Needs an easy way to track employee well-being and engagement.",
          "Frustrated by low participation in company surveys.",
          "Wants actionable insights, not just raw data."
        ]
      },
      {
        name: "Alex (Software Engineer), 28",
        points: [
          "Seeks a quiet, focused work environment while staying connected.",
          "Finds current tools distracting and overwhelming with notifications.",
          "Values a clean interface and deep work features."
        ]
      },
      {
        name: "David (Team Lead), 40",
        points: [
          "Needs to ensure his team is aligned and productive.",
          "Wants a quick way to check project status without micromanaging.",
          "Values clear communication and transparency."
        ]
      },
      {
        name: "Emily (CEO), 45",
        points: [
          "Requires a high-level overview of company performance and employee sentiment.",
          "Finds current reporting tools inadequate and hard to use.",
          "Values data visualization and strategic insights."
        ]
      }
    ],
    wireframesIntro: "Following the research phase, I moved to wireframing and prototyping to visualize the core user flow and page layouts.",
    wireframes: {
      desktop: "/case-study/innvo-2-create/innovate-2-create-desktop.png",
      mobile: [
        "/case-study/innvo-2-create/innov-2-create-mob-1.png",
        "/case-study/innvo-2-create/Innov-8-2-Create-mob-2.png",
        "/case-study/innvo-2-create/Innov-8-2-create-mob-3.png"
      ]
    },
    metrics: [
      { value: "33%", label: "Decrease in Bounce Rate", color: "text-[#00B4A8]" },
      { value: "28%", label: "Increase in Engagement", color: "text-slate-900" },
      { value: "45%", label: "Growth in User Base", color: "text-[#FF5A00]" }
    ],
    solutionIntro: "To address the challenges identified during the research phase, I designed a solution that focused on streamlining the user experience, enhancing visual appeal, and improving overall engagement.",
    solutions: [
      { title: "Streamlined User Flow", description: "I simplified the primary user journey by restructuring the navigation and removing unnecessary steps. The new flow is intuitive, allowing users to find what they need quickly and easily." },
      { title: "Modernized Visuals", description: "A fresh, modern visual identity was implemented. This included a new color palette, updated typography, and consistent UI elements that align with the brand's premium positioning." },
      { title: "Enhanced Dashboard", description: "The dashboard was redesigned to provide a comprehensive overview of key metrics and activities. Customizable widgets allow users to tailor the dashboard to their specific needs." },
      { title: "Improved Collaboration Features", description: "New features were introduced to facilitate better team collaboration, including real-time updates, integrated messaging, and seamless file sharing." }
    ],
    designSystemIntro: "To ensure consistency across the platform, a comprehensive design system was created. This included a detailed style guide outlining colors, typography, spacing, and UI components.",
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#1E1B4B", class: "bg-[#1E1B4B]" },
        { name: "Secondary", hex: "#BE185D", class: "bg-[#BE185D]" }
      ],
      typography: {
        primary: "Inter",
        secondary: ["Roboto", "Poppins", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." },
        { title: "Focus States", description: "Designing visible focus indicators for all interactive elements to support keyboard navigation." },
        { title: "Scalable Text", description: "Allowing users to adjust text size without breaking the layout or functionality." }
      ]
    },
    nextSteps: [
      { title: "Development", description: "Collaborate closely with the development team to ensure accurate implementation of the new designs." },
      { title: "Usability Testing", description: "Conduct further usability testing on the live platform to gather feedback and identify areas for refinement." },
      { title: "Continuous Iteration", description: "Regularly review analytics and user feedback to continuously improve the platform's performance and user experience." }
    ]
  },
  "alpine": {
    title: "Alpine",
    heroText: {
      part1: "Driving digital transformation for construction - ",
      part2: "Alpine"
    },
    subtitle: "Alpine is a leading international infrastructure group. They finance, develop, build and maintain complex infrastructure such as transportation, power and utility systems, social and commercial buildings.",
    service: "UX/UI Design",
    category: "Platform Redesign",
    year: "2024",
    link: "#",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Platform Redesign",
      "Duration": "4 months",
      "Tools Used": "Figma, Sketch, InVision, UserTesting"
    },
    overview: [
      "Alpine needed to modernize their internal project management and reporting platform. The existing system was outdated, fragmented, and difficult for on-site managers to use effectively.",
      "The primary goal was to create a unified, intuitive dashboard that would streamline data entry, improve real-time reporting, and enhance overall efficiency for project teams."
    ],
    challenge: {
      description: "The existing internal platform was slowing down operations and causing frustration among users:",
      points: [
        "Clunky, outdated interface that required extensive training",
        "Data silos and fragmented reporting tools",
        "Poor mobile experience for on-site workers",
        "High error rates in data entry due to confusing forms"
      ]
    },
    challenges: [
      { title: "Complex Data Visualization", description: "Translating dense project data into easily digestible, actionable insights." },
      { title: "Legacy System Integration", description: "Designing an interface that works seamlessly with their existing backend infrastructure." },
      { title: "User Adoption", description: "Overcoming resistance to change from users accustomed to the old system." },
      { title: "On-site Usability", description: "Ensuring the platform is fully functional and easy to use on mobile devices in challenging environments." }
    ],
    objectives: [
      {
        title: "Secondary Goals",
        points: ["Improve data accuracy", "Reduce training time for new employees", "Enhance cross-team collaboration"]
      },
      {
        title: "Primary Goals",
        points: ["Increase platform adoption rate", "Streamline reporting processes", "Deliver a mobile-first experience"]
      }
    ],
    targetAudience: [
      { title: "Ages", description: "30-55" },
      { title: "Professionals", description: "Project Managers, Site Engineers, Operations Directors responsible for overseeing construction projects and operations." },
      { title: "Tech Fluency", description: "Ranging from highly tech-savvy office staff to field workers with basic digital skills." }
    ],
    personasIntro: "Alpine caters to a diverse user base, primarily targeting construction professionals.",
    personas: [
      {
        name: "John (Site Manager), 45",
        points: [
          "Needs to quickly log updates from the field.",
          "Frustrated by slow, unresponsive mobile tools.",
          "Wants a simple, clear interface without distractions."
        ]
      },
      {
        name: "Sarah (Operations Director), 50",
        points: [
          "Requires high-level overviews of multiple projects.",
          "Needs accurate, real-time data for decision making.",
          "Values customizable dashboards and reporting."
        ]
      }
    ],
    metrics: [
      { value: "45%", label: "Increase in user adoption", color: "text-[#00703C]" },
      { value: "30%", label: "Reduction in reporting time", color: "text-slate-900" },
      { value: "60%", label: "Decrease in data entry errors", color: "text-[#005A32]" }
    ],
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#00703C", class: "bg-[#00703C]" },
        { name: "Secondary", hex: "#005A32", class: "bg-[#005A32]" }
      ],
      typography: {
        primary: "Inter",
        secondary: ["Roboto", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." }
      ]
    }
  },
  "tiny-vision": {
    title: "Tiny-Vision",
    heroText: {
      part1: "Support in building responsive & optimized ",
      part2: "landing pages - Tiny-Vision"
    },
    subtitle: "Tiny-Vision is a digital agency that specializes in creating high-performing landing pages for e-commerce brands. They needed a streamlined way to showcase their work and attract new clients.",
    service: "Web Designer",
    category: "Website Redesign",
    year: "2024",
    link: "#",
    roleDetails: {
      "Role": "Web Designer",
      "Project Type": "Website Redesign",
      "Duration": "6 weeks",
      "Tools Used": "Webflow, Figma, Adobe XD"
    },
    overview: [
      "Tiny-Vision required a modern, fast, and highly converting portfolio website. Their previous site was slow, difficult to update, and didn't effectively highlight their case studies.",
      "The objective was to design and develop a responsive website that not only looks great but also performs exceptionally well in terms of speed and SEO."
    ],
    challenge: {
      description: "The old website was holding the agency back from acquiring high-value clients:",
      points: [
        "Slow page load times impacting SEO and user experience",
        "Difficult CMS making case study updates a chore",
        "Lack of clear calls-to-action (CTAs)",
        "Non-responsive design that looked poor on mobile"
      ]
    },
    challenges: [
      { title: "Performance Optimization", description: "Achieving top scores on Google PageSpeed Insights." },
      { title: "Visual Impact", description: "Creating a design that stands out in a crowded agency market." },
      { title: "CMS Setup", description: "Building an intuitive backend for easy content management." },
      { title: "Conversion Rate", description: "Strategically placing CTAs to maximize lead generation." }
    ],
    objectives: [
      {
        title: "Secondary Goals",
        points: ["Improve SEO rankings", "Enhance brand perception"]
      },
      {
        title: "Primary Goals",
        points: ["Increase lead generation", "Reduce bounce rate", "Simplify content updates"]
      }
    ],
    targetAudience: [
      { title: "Ages", description: "25-50" },
      { title: "Professionals", description: "E-commerce Founders, Marketing Directors looking to scale their online businesses." },
      { title: "Focus", description: "Results-Oriented: Focused on ROI and measurable improvements." }
    ],
    personasIntro: "Tiny-Vision targets high-growth e-commerce founders and marketing directors.",
    personas: [
      {
        name: "Mark (E-commerce Founder), 35",
        points: [
          "Looking for an agency to boost his store's conversion rate.",
          "Values case studies and proven results.",
          "Needs a fast, reliable partner."
        ]
      },
      {
        name: "Lisa (Marketing Director), 42",
        points: [
          "Seeking a team to handle landing page creation for upcoming campaigns.",
          "Wants a seamless process and clear communication."
        ]
      }
    ],
    metrics: [
      { value: "50%", label: "Increase in lead generation", color: "text-[#FF5A00]" },
      { value: "2x", label: "Faster page load times", color: "text-slate-900" },
      { value: "40%", label: "Reduction in bounce rate", color: "text-[#000000]" }
    ],
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#FF5A00", class: "bg-[#FF5A00]" },
        { name: "Secondary", hex: "#000000", class: "bg-[#000000]" }
      ],
      typography: {
        primary: "Roboto",
        secondary: ["Inter", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." }
      ]
    }
  },
  "climate-jobs": {
    title: "Climate Jobs",
    heroText: {
      part1: "Empowering workers for a sustainable future - ",
      part2: "Climate Jobs"
    },
    subtitle: "Climate Jobs is a UK initiative promoting green employment opportunities and climate action. The platform connects workers with sustainable career paths in the growing green economy.",
    service: "UX/UI Design",
    category: "Web Design",
    year: "2023",
    link: "https://climatejobs.org.uk/",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Web Design & UX Optimization",
      "Duration": "3 months",
      "Tools Used": "Figma, Sketch, InVision, UserTesting"
    },
    overview: [
      "Climate Jobs needed a platform to connect job seekers with sustainable career opportunities. The existing resources were fragmented and difficult to navigate, hindering the transition to a green economy.",
      "The primary goal was to create a centralized, user-friendly job board and resource hub that simplifies the search for climate-positive careers and provides educational materials for upskilling."
    ],
    challenge: {
      description: "The previous digital landscape for green jobs was holding back the movement:",
      points: [
        "Fragmented job listings across multiple generic platforms",
        "Lack of clear pathways for transitioning into green careers",
        "Poor mobile experience for job seekers on the go",
        "Inconsistent information about required skills and qualifications"
      ]
    },
    challenges: [
      { title: "Data Aggregation", description: "Creating a system to pull and organize job listings from various sources." },
      { title: "User Guidance", description: "Designing intuitive career pathways for users transitioning from traditional industries." },
      { title: "Brand Trust", description: "Establishing a credible and authoritative platform in a new sector." },
      { title: "Accessibility", description: "Ensuring the platform is usable by people with diverse technical backgrounds." }
    ],
    objectives: [
      {
        title: "Secondary Goals",
        points: ["Increase newsletter sign-ups", "Grow the employer network"]
      },
      {
        title: "Primary Goals",
        points: ["Boost job applications", "Increase user retention", "Simplify career mapping"]
      }
    ],
    targetAudience: [
      { title: "Ages", description: "22-50" },
      { title: "Job Seekers", description: "Job Seekers, Career Changers, Employers looking for meaningful work and companies hiring for green roles." },
      { title: "Values", description: "Values-Driven: Motivated by environmental impact as well as career progression." }
    ],
    personasIntro: "Climate Jobs serves a broad audience looking to make a positive impact.",
    personas: [
      {
        name: "David (Recent Graduate), 24",
        points: [
          "Looking for his first role in renewable energy.",
          "Needs clear information on entry-level requirements and career progression."
        ]
      },
      {
        name: "Emma (Transitioning Professional), 38",
        points: [
          "Wants to move from oil & gas to a green industry.",
          "Needs guidance on transferring her skills and finding relevant opportunities."
        ]
      }
    ],
    metrics: [
      { value: "40%", label: "Increase in job applications", color: "text-[#10B981]" },
      { value: "25%", label: "Growth in employer sign-ups", color: "text-slate-900" },
      { value: "55%", label: "Improvement in mobile engagement", color: "text-[#047857]" }
    ],
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#10B981", class: "bg-[#10B981]" },
        { name: "Secondary", hex: "#047857", class: "bg-[#047857]" }
      ],
      typography: {
        primary: "Inter",
        secondary: ["Roboto", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." }
      ]
    }
  },
  "act-for-change": {
    title: "Act for Change",
    heroText: {
      part1: "Amplifying voices for environmental justice - ",
      part2: "Act for Change"
    },
    subtitle: "Act for Change is an advocacy platform empowering communities to take action on social and environmental issues. The project involved creating a compelling digital presence that inspires action.",
    service: "UX/UI Design",
    category: "Platform Redesign",
    year: "2022",
    link: "https://actforchange.org.uk/",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Platform Redesign",
      "Duration": "2 months",
      "Tools Used": "Figma, Photoshop, Illustrator, UserTesting"
    },
    overview: [
      "Act for Change required a complete website overhaul to better showcase their campaigns, streamline volunteer onboarding, and increase donations. The old site was visually outdated and lacked clear calls-to-action."
    ],
    challenge: {
      description: "The old website was failing to convert visitors into active participants:",
      points: [
        "Confusing navigation making it hard to find active campaigns",
        "Lengthy and complicated volunteer sign-up forms",
        "Lack of emotional resonance in the visual design",
        "Poor integration with donation platforms"
      ]
    },
    challenges: [
      { title: "Storytelling", description: "Weaving compelling narratives around complex environmental issues to drive engagement." },
      { title: "Conversion Optimization", description: "Streamlining the donation and volunteer sign-up flows." },
      { title: "Visual Impact", description: "Creating a design that is urgent yet hopeful, avoiding \"doom and gloom\"." },
      { title: "Campaign Management", description: "Designing a flexible system for the team to quickly launch and update campaigns." }
    ],
    objectives: [
      {
        title: "Secondary Goals",
        points: ["Increase newsletter subscribers", "Boost social media shares"]
      },
      {
        title: "Primary Goals",
        points: ["Increase donation volume", "Grow the volunteer base", "Improve campaign participation"]
      }
    ],
    targetAudience: [
      { title: "Ages", description: "18-45" },
      { title: "Audience", description: "Activists, Students, Concerned Citizens passionate about social and environmental justice." },
      { title: "Engagement", description: "Highly Engaged: Users who want to make a tangible difference and are likely to share content." }
    ],
    personasIntro: "Act for Change targets a passionate and active demographic.",
    personas: [
      {
        name: "Maya (Student Activist), 20",
        points: [
          "Wants to find local protests and volunteer opportunities.",
          "Needs a mobile-friendly site for quick updates.",
          "Values clear, shareable information."
        ]
      },
      {
        name: "Robert (Regular Donor), 45",
        points: [
          "Wants to see the impact of his contributions.",
          "Needs a simple, secure donation process.",
          "Values transparency and accountability."
        ]
      }
    ],
    metrics: [
      { value: "50%", label: "Increase in donation volume", color: "text-[#DC2626]" },
      { value: "30%", label: "Growth in volunteer sign-ups", color: "text-slate-900" },
      { value: "40%", label: "Improvement in campaign participation", color: "text-[#991B1B]" }
    ],
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#DC2626", class: "bg-[#DC2626]" },
        { name: "Secondary", hex: "#991B1B", class: "bg-[#991B1B]" }
      ],
      typography: {
        primary: "Inter",
        secondary: ["Roboto", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." }
      ]
    }
  },
  "astp4kt": {
    title: "ASTP",
    heroText: {
      part1: "Support in building responsive & optimized ",
      part2: "landing pages - ASTP"
    },
    subtitle: "ASTP is the premier pan-European association for professionals involved in knowledge transfer among universities and industry.",
    service: "UX/UI Design",
    category: "Web Design & UX Optimization",
    year: "2024",
    link: "https://astp4kt.eu/",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Web Design & UX Optimization",
      "Duration": "3 months",
      "Tools Used": "Figma, Photoshop, Illustrator, UserTesting"
    },
    overview: [
      "ASTP required a website overhaul to better serve its members, streamline event registrations, and improve resource accessibility. The old site was difficult to navigate and did not effectively communicate the value of membership."
    ],
    challenge: {
      description: "The previous website failed to engage users and made it difficult to find critical information:",
      points: [
        "Confusing navigation and poor information architecture",
        "Cumbersome event registration process",
        "Outdated aesthetic that didn't reflect their professional standing",
        "Resources and publications were hard to discover"
      ]
    },
    challenges: [
      { title: "Resource Organization", description: "Categorizing a vast library of documents and publications for easy retrieval." },
      { title: "Membership Portal", description: "Creating a seamless experience for members to access exclusive content and manage their profiles." },
      { title: "Event Management", description: "Designing an intuitive system for browsing and registering for conferences and training courses." },
      { title: "Global Audience", description: "Ensuring the site caters to a diverse European audience with varying linguistic and cultural backgrounds." }
    ],
    objectives: [
      {
        title: "Secondary Goals",
        points: ["Increase resource downloads", "Improve newsletter sign-ups", "Enhance mobile usability"]
      },
      {
        title: "Primary Goals",
        points: ["Boost event registrations", "Increase membership renewals", "Simplify resource discovery"]
      }
    ],
    targetAudience: [
      { title: "Ages", description: "28-60" },
      { title: "Professionals", description: "Knowledge Transfer Professionals, Researchers, Policy Makers involved in commercializing academic research." },
      { title: "Tech Fluency", description: "Highly Educated: Users expect a professional, authoritative, and efficient digital experience." }
    ],
    personasIntro: "ASTP caters to a diverse European audience with varying linguistic and cultural backgrounds.",
    personas: [
      {
        name: "Maria (Technology Transfer Officer), 38",
        points: [
          "Needs to quickly find templates and best practice guides.",
          "Frustrated by the current search functionality.",
          "Wants to easily connect with peers across Europe."
        ]
      },
      {
        name: "Dr. Schmidt (Senior Researcher), 52",
        points: [
          "Looking for upcoming training events to expand his skills.",
          "Needs a simple registration process.",
          "Values clear, professional communication."
        ]
      }
    ],
    metrics: [
      { value: "40%", label: "Increase in event registrations", color: "text-[#4338CA]" },
      { value: "25%", label: "Growth in resource downloads", color: "text-slate-900" },
      { value: "55%", label: "Improvement in mobile engagement", color: "text-[#00B4A8]" }
    ],
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#4338CA", class: "bg-[#4338CA]" },
        { name: "Secondary", hex: "#00B4A8", class: "bg-[#00B4A8]" }
      ],
      typography: {
        primary: "Outfit",
        secondary: ["Inter", "Roboto"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." }
      ]
    }
  }
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !caseStudiesData[slug]) {
    return <Navigate to="/case-studies" replace />;
  }

  const study = caseStudiesData[slug];

  return (
    <div className="bg-[#FAFAFA] text-slate-900 font-sans min-h-screen">
      <Helmet>
        <title>{study.title} | Case Study - Uravi Sharma</title>
        <meta name="description" content={study.subtitle || study.overview[0]} />
        <link rel="canonical" href={`https://uravisharma.com/case-studies/${slug}`} />
      </Helmet>

      <Header />

      <main className="pb-0 pt-20">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-24 px-4 overflow-hidden bg-[#0A0B10] text-white border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-[#0A0B10] to-[#0A0B10] z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
          
          <div className="container max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center pt-10">
            <Link to="/#work" className="text-white/60 hover:text-white mb-8 transition-colors">
              &larr; Back to Work
            </Link>
            
            {study.heroText ? (
              <>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight max-w-4xl">
                  {study.heroText.part1}
                  <span className="text-teal-400">{study.heroText.part2}</span>
                </h1>
                {study.subtitle && (
                  <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                    {study.subtitle}
                  </p>
                )}
              </>
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight max-w-4xl">
                  {study.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                  {study.subtitle}
                </p>
              </>
            )}
            
            {study.link && (
              <a 
                href={study.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:-translate-y-1 tracking-wide"
              >
                Live Project
              </a>
            )}
          </div>
        </section>

        <div className="bg-[#F8FAFC]">
          {/* ROLE DETAILS & OVERVIEW */}
          <section className="py-24 px-4">
            <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                {study.roleDetails ? (
                  <div className="bg-[#F8FAFC] rounded-[2rem] p-10 sticky top-32">
                    <h3 className="text-2xl font-bold mb-8 text-slate-800">Project Details</h3>
                    <div className="space-y-5">
                      {Object.entries(study.roleDetails).map(([key, value]) => (
                        <div key={key} className="relative pl-4 py-0.5">
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00B4A8] rounded-full"></div>
                          <div className="text-[15px] font-bold text-slate-800 mb-1">{key}</div>
                          <div className="text-slate-500 text-[15px]">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#F0F4F8] rounded-[2rem] p-10 border border-slate-200/60 sticky top-32">
                    <h3 className="text-2xl font-bold mb-8 text-slate-800">Project Details</h3>
                    <div className="space-y-6">
                      <div className="border-b border-slate-200/80 pb-4">
                        <div className="text-sm font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Service</div>
                        <div className="font-bold text-slate-800 text-lg">{study.service}</div>
                      </div>
                      <div className="border-b border-slate-200/80 pb-4">
                        <div className="text-sm font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Category</div>
                        <div className="font-bold text-slate-800 text-lg">{study.category}</div>
                      </div>
                      <div className="pb-4">
                        <div className="text-sm font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Year</div>
                        <div className="font-bold text-slate-800 text-lg">{study.year}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="lg:col-span-8 flex flex-col justify-start pt-4">
                <h2 className="text-4xl font-bold mb-8 text-slate-900">Overview</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  {study.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CHALLENGES & OBJECTIVES (New layout) or Fallback to Old Layout */}
          {(study.challenges || study.challenge) && (
            <section className="py-16 px-4">
              <div className="container max-w-6xl mx-auto space-y-16">
                
                {/* The Problem */}
                {study.challenge && (
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">The Problem</h2>
                    <p className="text-slate-500 leading-relaxed text-[16px] mb-6">{study.challenge.description}</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-500 text-[16px] mb-6">
                      {study.challenge.points.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>
                    {study.challenge.additionalDescription && (
                      <p className="text-slate-500 leading-relaxed text-[16px]">{study.challenge.additionalDescription}</p>
                    )}
                  </div>
                )}
                
                {/* Key Challenges */}
                {study.challenges && (
                  <div>
                    <h2 className="text-2xl font-bold mb-8 text-slate-900">Key Challenges</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {study.challenges.map((challenge, idx) => (
                        <div key={idx} className="bg-white p-6 md:p-8 rounded-[1rem] border border-slate-300 flex flex-col gap-2 transition-transform hover:-translate-y-1 duration-300">
                          <h4 className="font-bold text-[16px] text-slate-900">{challenge.title}</h4>
                          <p className="text-slate-500 leading-relaxed text-[15px]">{challenge.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Goals & Objectives */}
                {study.objectives && (
                  <div className="pt-8 mt-16">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900">Goals & Objectives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {study.objectives.map((obj, idx) => (
                        <div key={idx} className="bg-[#F8FAFC] p-8 rounded-[1rem] flex gap-5 items-start">
                          <div className="w-[3px] h-12 bg-[#00B4A8] rounded-full flex-shrink-0 mt-1"></div>
                          <div>
                            <h4 className="font-bold text-[16px] mb-3 text-slate-900">{obj.title}</h4>
                            {obj.description && <p className="text-slate-500 leading-relaxed text-[15px] mb-3">{obj.description}</p>}
                            {obj.points && (
                              <ul className="list-disc pl-4 space-y-2 text-slate-500 text-[15px]">
                                {obj.points.map((point, i) => (
                                  <li key={i}>{point}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Success Metrics */}
                {study.metrics && (
                  <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[1.5rem] mt-16">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900">Success Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
                      {study.metrics.map((result, idx) => (
                        <div key={idx} className="pt-6 md:pt-0 md:px-8 first:px-0 first:pt-0">
                          <div className={`text-4xl md:text-[40px] font-medium mb-3 ${result.color || 'text-slate-900'}`}>{result.value}</div>
                          <div className="text-slate-500 text-[16px]">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Target Audience */}
                {study.targetAudience && (
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_2px_20px_rgba(0,0,0,0.02)] border border-slate-100/80 mt-10">
                    <h2 className="text-2xl font-bold mb-10 text-slate-900 text-center">Target Audience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                      {study.targetAudience.map((audience, idx) => (
                        <div key={idx} className="pt-6 md:pt-0 md:px-8 text-center flex flex-col items-center">
                          <h4 className="font-bold text-lg mb-4 text-slate-900">{audience.title}</h4>
                          <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs">{audience.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </section>
          )}

          {/* USER PERSONAS */}
          {study.personas && (
            <section className="py-24 px-4 bg-white border-y border-slate-100">
              <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold mb-6 text-slate-900">User Personas</h2>
                  {study.personasIntro && <p className="text-slate-500 max-w-2xl mx-auto text-lg">{study.personasIntro}</p>}
                </div>

                <div className="relative py-4">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-teal-100 md:-translate-x-1/2"></div>
                  
                  {study.personas.map((persona, idx) => (
                    <div key={idx} className={`relative flex items-center mb-16 last:mb-0 ${idx % 2 === 0 ? 'justify-start md:pr-16' : 'justify-end md:pl-16'}`}>
                      {/* Dot on Timeline */}
                      <div className="absolute left-4 md:left-1/2 top-1/2 w-4 h-4 rounded-full bg-teal-400 border-4 border-white md:-translate-x-1/2 -translate-x-[7px] -translate-y-1/2 z-10 shadow-sm"></div>
                      
                      {/* Content Card */}
                      <div className={`w-full md:w-1/2 ml-10 md:ml-0 bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-teal-50/50 hover:shadow-[0_15px_50px_rgba(20,184,166,0.08)] transition-shadow duration-300 relative`}>
                        <h4 className="text-teal-600 font-bold mb-6 text-xl">{persona.name}</h4>
                        <ul className="space-y-4">
                          {persona.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-600 text-[15px] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* WIREFRAME & PROTOTYPING */}
          {study.wireframesIntro && (
            <section className="py-24 px-4 bg-[#F8FAFC]">
              <div className="container max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Wireframe / Prototyping</h2>
                <p className="text-slate-500 mb-16 max-w-3xl text-lg leading-relaxed">{study.wireframesIntro}</p>
                
                <div className="space-y-10">
                  {/* Web Wireframe */}
                  <div className="w-full bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] group flex">
                    {study.wireframes?.desktop ? (
                      <img src={study.wireframes.desktop} alt="Web Wireframe" className="w-full h-auto object-cover" />
                    ) : (
                      <div className="w-full aspect-[16/9] md:aspect-[21/9] flex items-center justify-center text-slate-400 font-medium bg-slate-50 group-hover:bg-slate-100 transition-colors">
                        Web Wireframe Image Placeholder
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Wireframes */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(study.wireframes?.mobile || [1, 2, 3]).map((img, idx) => (
                      <div key={idx} className="w-full bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] group flex">
                        {typeof img === 'string' ? (
                          <img src={img} alt={`Mobile Wireframe ${idx + 1}`} className="w-full h-auto object-cover" />
                        ) : (
                          <div className="w-full aspect-[9/18] md:aspect-[9/19] flex items-center justify-center text-slate-400 font-medium text-sm text-center px-6 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                            Mobile Wireframe {idx + 1} Placeholder
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* FINAL UI DESIGN & IMPACT */}
          <section className="py-24 px-4 bg-white border-t border-slate-100">
            <div className="container max-w-6xl mx-auto">
              {/* Final UI Design OR Gallery Images */}
              {(study.galleryImages || study.uiFeatures) && (
                <div className="mb-24">
                  <h2 className="text-4xl font-bold mb-12 text-slate-900">Final UI Design</h2>
                  
                  {study.galleryImages && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      {study.galleryImages.map((img, idx) => (
                        <div key={idx} className="rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200">
                          <img src={img} alt={`Final product ${idx+1}`} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                        </div>
                      ))}
                    </div>
                  )}

                  {study.uiFeatures && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {study.uiFeatures.map((feature, idx) => (
                        <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                          <div className="w-full aspect-[16/10] bg-slate-50 relative overflow-hidden group">
                            <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                          <div className="p-8 md:p-10 flex-grow flex flex-col justify-center">
                            <h4 className="font-bold text-xl mb-4 text-slate-900 flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                              {feature.title}
                            </h4>
                            <p className="text-slate-500 leading-relaxed text-[15px]">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Old Results Banner Removed in favor of standardized Success Metrics layout */}
            </div>
          </section>

          {/* THE SOLUTION */}
          {study.solutions && (
            <section className="py-24 px-4 bg-[#F8FAFC]">
              <div className="container max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-slate-900">The Solution</h2>
                {study.solutionIntro && <p className="text-slate-500 mb-16 max-w-3xl text-lg leading-relaxed">{study.solutionIntro}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {study.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                      <h4 className="text-xl font-bold mb-4 text-slate-900">{solution.title}</h4>
                      <p className="text-slate-500 leading-relaxed text-[15px]">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* DESIGN SYSTEM / STYLE GUIDE */}
          {study.styleGuide && (
            <section className="py-24 px-4 bg-white border-y border-slate-100">
              <div className="container max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-slate-900">Style Guide <span className="font-medium text-slate-400 text-3xl">(Typography & Color Palette)</span></h2>
                {study.designSystemIntro && <p className="text-slate-500 mb-20 max-w-3xl text-lg leading-relaxed">{study.designSystemIntro}</p>}

                <div className="space-y-24">
                  {/* Color Palette */}
                  <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900">Color Palette</h3>
                    <div className="flex flex-wrap gap-12">
                      {study.styleGuide.colors.map((color, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                          <div className={`w-36 h-36 rounded-3xl shadow-md ${color.class}`}></div>
                          <div>
                            <div className="font-bold text-slate-900 text-lg mb-1">{color.name}</div>
                            <div className="text-slate-500 text-sm uppercase tracking-wider font-mono">{color.hex}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900">Typography</h3>
                    <div className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-16 items-start md:items-center">
                      <div className="text-[120px] font-bold leading-none text-slate-900 -mt-6">Aa</div>
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-end gap-8 text-3xl font-bold text-slate-900">
                          <div>{study.styleGuide.typography.primary}</div>
                          {study.styleGuide.typography.secondary?.map((font, idx) => (
                            <div key={idx} className="text-slate-400 font-medium text-2xl">{font}</div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {study.styleGuide.typography.weights.map((weight, idx) => (
                            <span key={idx} className="px-5 py-2.5 bg-white rounded-full text-sm font-semibold text-slate-600 border border-slate-200/80 shadow-sm">
                              {weight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accessibility */}
                  <div>
                    <h3 className="text-2xl font-bold mb-8 text-slate-900">Accessibility First</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {study.styleGuide.accessibility.map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex gap-5 hover:bg-slate-100/50 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center flex-shrink-0 font-bold text-lg">✓</div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h4>
                            <p className="text-slate-500 text-[15px] leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* NEXT STEPS */}
          {study.nextSteps && (
            <section className="py-24 px-4 bg-[#F8FAFC]">
              <div className="container max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Next Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {study.nextSteps.map((step, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-14 h-14 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center font-bold text-2xl mx-auto mb-8 shadow-sm">
                        {idx + 1}
                      </div>
                      <h4 className="font-bold text-xl text-slate-900 mb-4">{step.title}</h4>
                      <p className="text-slate-500 text-[15px] leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CALL TO ACTION */}
          <section className="py-24 px-4 bg-[#0A0B10] text-white">
            <div className="container max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let&apos;s build something great together.</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Looking for a product designer or developer to bring your idea to life? I&apos;m currently available for new projects.
              </p>
              <Link to="/#contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#0A0B10] hover:bg-slate-200 font-bold rounded-full transition-all duration-300 text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
