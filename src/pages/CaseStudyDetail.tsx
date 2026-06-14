import { Helmet } from 'react-helmet-async';
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Define the comprehensive CaseStudy type to support both basic and detailed layouts
export type CaseStudy = {
  title: string;
  layoutVariant?: 'default' | 'reference';
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
  userRoles?: { title: string; points: string[] }[];
  personasIntro?: string;
  personasLayout?: 'timeline' | 'cards' | 'simple' | 'simple-list';
  personas?: { name: string; role?: string; bio?: string; points: string[]; goals?: string[]; painPoints?: string[] }[];
  
  // New specific sections for GMB style layout
  competitiveAnalysis?: {
    intro?: string;
    columns: { title: string; items: { text: string; subtitle?: string }[] }[];
  };
  researchDiscovery?: { description: string; points: string[] };
  keyFindings?: string[];
  designSolutions?: { id: string; title: string; description: string }[];
  designProcessLayout?: 'vertical' | 'zigzag';
  designProcess?: { id: string; title: string; points: string }[];
  keyTakeaways?: string[];
  keyLearningsLayout?: 'purple-cards' | 'text-grid';
  keyLearnings?: { title: string; description: string }[];
  testimonialsLayout?: 'default' | 'purple-bg';
  testimonials?: { quote: string; author: string; colorClass?: string }[];

  wireframesIntro?: string;
  wireframes?: { desktop?: string; mobile?: string[] };
  wireframeShowcase?: string;
  metrics?: { value: string; label: string; color?: string; sublabel?: string }[];
  finalOutcomes?: { value: string; label: string; color?: string; description?: string }[];
  solutionIntro?: string;
  solutionImage?: string;
  solutions?: { title: string; description: string }[];
  designSystemIntro?: string;
  designGuideImage?: string;
  styleGuide?: {
    colors: { name: string; hex: string; class: string }[];
    typography: { primary: string; secondary?: string[]; weights: string[] };
    accessibility?: { title: string; description: string }[];
  };
  uiFeatures?: { image: string; title: string; description: string }[];
  finalDeviceImage?: string;
  nextSteps?: { title: string; description: string; points?: string[] }[];
  objectivesLayout?: 'default' | 'grey-bg-grid';
  targetAudienceIntro?: string;
  designProcessTitle?: string;
  aboutProject?: { title: string; description: string };
  keyFindingsGrid?: { title: string; description: string }[];
  overviewImage?: string;
  userPainPoints?: { title: string; description: string }[];
  successMetricsBullets?: string[];
  designSystemLists?: { title: string; items: string[] }[];
  impactSummary?: string;
  conclusion?: string;
};

const caseStudiesData: Record<string, CaseStudy> = {
  // --- GMB App Case Study ---
  "gmb-app": {
    title: "GMB App",
    heroText: {
      part1: "Empowering the workforce - ",
      part2: "GMB App"
    },
    subtitle: "A digital transformation for the UK's general trade union.",
    service: "UX/UI Design",
    category: "Mobile Application",
    year: "2024",
    link: "https://gmb.org.uk/app",
    heroImage: "/case-study/gmb.png",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Role Type": "Contract",
      "Project": "Mobile App Redesign",
      "Duration": "4 Months"
    },
    overview: [
      "The GMB Union required a comprehensive digital solution to better serve its over 500,000 members across the UK. The goal was to provide an accessible, centralized hub for union resources, support, and communication.",
      "This project involved a complete redesign of the member experience, translating complex union processes into an intuitive mobile interface."
    ],
    challenge: {
      description: "The primary challenge was consolidating vast amounts of information and services into a user-friendly mobile format while addressing diverse user needs.",
      points: [
        "Low engagement with existing digital tools.",
        "Difficulty for members to find relevant workplace support quickly.",
        "Inefficient communication channels between members and representatives.",
        "Complex onboarding for new members."
      ]
    },
    objectivesLayout: 'grey-bg-grid',
    objectives: [
      { title: "Primary Goals", description: "Increase member engagement\nImprove communication" },
      { title: "Secondary Goals", description: "Streamline support requests\nBoost event attendance" },
      { title: "KPIs", description: "40% Increase in Active Users\n25% Reduction in Support Time\n50% Higher Event Turnout" }
    ],
    aboutProject: {
      title: "What is GMB App?",
      description: "The GMB App is a dedicated mobile platform designed to connect union members with their representatives and essential resources. It aims to streamline communication, provide easy access to workplace support, and foster a stronger sense of community among members across the UK."
    },
    userRoles: [
      {
        title: "Members",
        points: [
          "Need quick access to workplace advice.",
          "Want to update their details easily.",
          "Looking for local branch information.",
          "Require secure messaging with reps."
        ]
      },
      {
        title: "Workplace Reps",
        points: [
          "Need tools to manage member cases.",
          "Access to union training and resources.",
          "Ability to communicate with their branch.",
          "Require quick reference to policies."
        ]
      },
      {
        title: "GMB Officials",
        points: [
          "Need oversight of branch activities.",
          "Tools for broadcasting announcements.",
          "Access to membership data analytics.",
          "Secure channels for sensitive communications."
        ]
      }
    ],
    researchDiscovery: {
      description: "Research involved deep-dives into member pain points and evaluating the friction in current union-member interactions.",
      points: [
        "Conducted workshops with regional organizers.",
        "Surveyed 1000+ members on their digital needs.",
        "Analyzed support ticket trends.",
        "Reviewed accessibility standards for diverse user base."
      ]
    },
    keyFindingsGrid: [
      { title: "Mobile-First Preference", description: "75% of members prefer accessing union info on their phones." },
      { title: "Information Overload", description: "Existing site navigation was too complex." },
      { title: "Desire for Connection", description: "Members felt disconnected from their local reps." },
      { title: "Urgency of Support", description: "When members need help, they need it immediately." }
    ],
    personasLayout: 'simple-list',
    personasIntro: "We identified four primary user types, each with distinct needs and interaction patterns with the union.",
    personas: [
      { name: "General Members", points: [] },
      { name: "Workplace Representatives", points: [] },
      { name: "Union Officials", points: [] },
      { name: "New Members", points: [] }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Understanding member needs through extensive user interviews and surveys across different sectors." },
      { id: "02", title: "Wireframing & Prototyping", points: "Structuring the vast amount of union resources into a logical, intuitive navigation model." },
      { id: "03", title: "UI Design", points: "Applying the GMB brand guidelines to create a modern, accessible user interface." },
      { id: "04", title: "Usability Testing", points: "Working closely with the development team to ensure accurate implementation of the design." }
    ],
    wireframesIntro: "Wireframes focused on simplifying the core user journeys: getting help, finding information, and managing membership.",
    wireframes: {
      desktop: "/case-study/gmb/GMB-Union-desktop.png",
      mobile: [
        "/case-study/gmb/GMB-Union-mob-1.png",
        "/case-study/gmb/GMB-Union-mob-2.png",
        "/case-study/gmb/GMB-Union-mob-3.png"
      ]
    },
    styleGuide: {
      colors: [
        { name: "GMB Green", hex: "#007A33", class: "bg-[#007A33]" },
        { name: "Dark Slate", hex: "#1E293B", class: "bg-slate-800" },
        { name: "Action Blue", hex: "#2563EB", class: "bg-blue-600" }
      ],
      typography: {
        primary: "Inter",
        weights: ["Regular (400)", "Medium (500)", "Bold (700)"]
      }
    },
    solutionIntro: "The resulting application provides a streamlined, accessible platform that puts union power directly in the members' hands.",
    solutionImage: "/case-study/gmb.png",
    solutions: [
      { title: "Personalized Dashboard", description: "A home screen tailored to the user's role and region, surfacing relevant news and quick actions." },
      { title: "Digital Membership Card", description: "Easy access to membership details for verification and benefits." },
      { title: "Direct Rep Messaging", description: "Secure, direct communication channels between members and their workplace representatives." }
    ],
    metrics: [
      { value: "+60%", label: "App Adoption", color: "text-green-600", sublabel: "Increase in active digital users" },
      { value: "-40%", label: "Support Calls", color: "text-slate-800", sublabel: "Reduction in basic queries" },
      { value: "+85%", label: "User Satisfaction", color: "text-blue-600", sublabel: "Positive feedback on app store" }
    ],
    testimonialsLayout: 'purple-bg',
    testimonials: [
      { quote: "The new app makes it so much easier to find my rep and get advice when I need it.", author: "Sarah T., Retail Worker" },
      { quote: "As a rep, having all the policies and member info on my phone is a game changer.", author: "Mark D., Workplace Rep" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "Simplifying complex workflows", description: "Union processes can be bureaucratic. Translating these into simple digital flows was crucial for user adoption." },
      { title: "Inclusive design is paramount", description: "With a diverse membership base, ensuring high accessibility standards (WCAG) was a primary focus." },
      { title: "Feature prioritization", description: "Learning to focus on the 'must-haves' for launch to avoid overwhelming the user." },
      { title: "Information architecture", description: "Structuring content logically is as important as the visual design itself." }
    ],
    nextSteps: [
      { title: "Phase 2 Features", description: "Implementing advanced case management tools for reps and expanding the digital benefits platform." }
    ]
  },
  // --- Connect Local App Case Study ---
  "connect-local-app": {
    title: "Connect Local App",
    heroText: {
      part1: "Support local businesses, connect with local community - ",
      part2: "connectlocal App"
    },
    subtitle: "A platform to connect local businesses with their community",
    service: "Product Design",
    category: "Mobile Application",
    year: "2024",
    link: "https://connectlocal.app",
    heroImage: "/case-study/gmb.png",
    roleDetails: {
      "Role": "Lead UX / UI Designer",
      "Duration": "3 months",
      "Tools": "Figma, Illustrator, Miro"
    },
    overview: [
      "ConnectLocal is an initiative designed to bridge the gap between local communities and local small businesses. With the advent of large e-commerce platforms, small businesses often find it hard to maintain visibility and customer loyalty.",
      "This application aims to provide a unified platform for residents to discover, interact with, and support their local businesses effortlessly while offering those businesses a robust digital presence."
    ],
    challenge: {
      description: "Local businesses face significant challenges in competing with larger, well-funded companies in the digital space. The core problems include:",
      points: [
        "Lack of digital presence and marketing budget.",
        "Difficulty for residents to discover diverse local offerings.",
        "Inconvenient ways for local communities to engage consistently.",
        "A fragmented approach to community building and loyalty programs."
      ]
    },
    objectivesLayout: 'grey-bg-grid',
    objectives: [
      { title: "Primary Goals", description: "Increase local business visibility\nCreate a seamless ordering experience" },
      { title: "Secondary Goals", description: "Foster community engagement\nStreamline loyalty programs" },
      { title: "KPIs", description: "40% Increase in App Downloads\n30% Growth in Local Orders\n50% Higher User Retention" }
    ],
    aboutProject: {
      title: "What is Connect Local App?",
      description: "Connect Local App is a community-driven platform designed to bridge the gap between residents and their neighborhood businesses. It provides an intuitive interface for users to discover, support, and interact with local shops, while giving small businesses a powerful digital presence."
    },
    keyFindingsGrid: [
      { title: "Visibility Gap", description: "Residents struggled to discover new local businesses." },
      { title: "Ordering Friction", description: "Ordering from multiple local shops was cumbersome." },
      { title: "Lack of Engagement", description: "There was no centralized hub for community news and events." },
      { title: "Fragmented Loyalty", description: "Users were tired of carrying multiple loyalty cards." }
    ],
    researchDiscovery: {
      description: "Extensive research was conducted to understand the needs of both the consumers (local residents) and the providers (small business owners).",
      points: [
        "User Interviews",
        "Surveys",
        "Competitor Analysis",
        "Usability Testing"
      ]
    },
    personasLayout: 'simple-list',
    personasIntro: "We identified four primary user types, each with distinct needs and interaction patterns with the community.",
    personas: [
      { name: "Local Residents", points: [] },
      { name: "Small Business Owners", points: [] },
      { name: "Community Organizers", points: [] },
      { name: "Local Influencers", points: [] }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Empathy", points: "Understanding the dual-sided market needs through interviews and surveys." },
      { id: "02", title: "Ideation & Architecture", points: "Mapping out user flows for both business owners and residents." },
      { id: "03", title: "UI Design", points: "Developing a friendly, accessible, and community-focused UI." },
      { id: "04", title: "Prototyping & Testing", points: "Creating wireframes and conducting usability testing with real users." }
    ],
    wireframesIntro: "The wireframing phase focused on creating an intuitive layout that balanced discovery with actionable features.",
    wireframes: {
      desktop: "/case-study/gmb.png",
      mobile: [
        "/case-study/gmb.png",
        "/case-study/gmb.png"
      ]
    },
    styleGuide: {
      colors: [
        { name: "Primary Brand", hex: "#8B31FF", class: "bg-[#8B31FF]" },
        { name: "Secondary Accent", hex: "#FF31A0", class: "bg-[#FF31A0]" },
        { name: "Dark Neutral", hex: "#0A0B10", class: "bg-[#0A0B10]" }
      ],
      typography: {
        primary: "Inter",
        secondary: ["Plus Jakarta Sans"],
        weights: ["Regular (400)", "Medium (500)", "Bold (700)", "Extra Bold (800)"]
      }
    },
    solutionIntro: "The ConnectLocal app delivers a unified experience with distinct portals for users and businesses, prioritizing ease of use and immediate value.",
    solutionImage: "/case-study/gmb.png",
    solutions: [
      { title: "Hyper-Local Feed", description: "A dynamic feed prioritizing updates, offers, and events from businesses within a specific radius." },
      { title: "Simplified Business Dashboard", description: "An intuitive interface for owners to manage their profile, post updates, and track engagement effortlessly." },
      { title: "Integrated Loyalty System", description: "A digital punch-card and rewards system to incentivize repeat local shopping." }
    ],
    metrics: [
      { value: "+45%", label: "Conversion Rate", color: "text-teal-500", sublabel: "Increase in local orders" },
      { value: "-30%", label: "Bounce Rate", color: "text-pink-500", sublabel: "Improved user retention" },
      { value: "+25%", label: "Engagement", color: "text-purple-500", sublabel: "More active daily users" }
    ],
    finalOutcomes: [
      { value: "500+", label: "Local Businesses Onboarded", description: "Within the first three months of launch." }
    ],
    keyLearnings: [
      { title: "Balancing Dual Needs", description: "Designing for a two-sided marketplace requires constant balancing. What benefits the resident must also be easy for the business owner to manage." },
      { title: "Simplicity is Key for Adoption", description: "Local business owners have limited time. The onboarding and management tools needed to be drastically simplified compared to initial complex designs." }
    ],
    nextSteps: [
      { title: "Expand Delivery Integration", description: "Partner with local delivery services to offer seamless logistics for small businesses." },
      { title: "Enhanced Analytics", description: "Provide business owners with deeper insights into customer demographics and campaign performance." },
      { title: "Community Forums", description: "Introduce localized discussion boards to foster stronger community ties beyond commerce." }
    ]
  },
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
    layoutVariant: 'reference',
    heroText: {
      part1: "Transforming the UK's leading trade union digital presence - ",
      part2: "GMB Union"
    },
    subtitle: "website redesign",
    service: "UI/UX Design",
    category: "Web Redesign",
    year: "2024",
    link: "https://www.gmb.org.uk/",
    heroImage: "/case-study/gmb.png",
    roleDetails: {
      "Role": "UI/UX Design",
      "Project Type": "Web redesign",
      "Duration": "5 months",
      "Platform": "Desktop & Mobile Responsive Website",
      "Tools Used": "Figma, Adobe Photoshop",
      "Status": "Live"
    },
    overviewImage: "/case-study/gmb/GMB-Union-desktop.png",
    overview: [
      "GMB Union needed to redesign their website and mobile app to better serve their members, improve engagement, and streamline the union joining process. The previous digital experience was outdated, difficult to navigate, and did not effectively communicate the union's value."
    ],
    challenge: {
      description: "The old website and app were holding the union back from effectively supporting its members and attracting new ones:",
      points: [
        "Outdated, unresponsive design",
        "Confusing navigation and information architecture",
        "Lengthy, complicated \"Join the Union\" process",
        "Inconsistent branding across digital touchpoints",
        "Poor mobile experience, where most users were accessing the site"
      ]
    },
    userRoles: [
      {
        title: "Members",
        points: [
          "Need quick access to workplace advice.",
          "Want to update their details easily.",
          "Looking for local branch information.",
          "Require secure messaging with reps."
        ]
      },
      {
        title: "Workplace Reps",
        points: [
          "Need tools to manage member cases.",
          "Access to union training and resources.",
          "Ability to communicate with their branch.",
          "Require quick reference to policies."
        ]
      },
      {
        title: "GMB Officials",
        points: [
          "Need oversight of branch activities.",
          "Tools for broadcasting announcements.",
          "Access to membership data analytics.",
          "Secure channels for sensitive communications."
        ]
      }
    ],
    objectives: [
      {
        title: "Business Goals",
        points: ["Increase online membership", "Improve user engagement", "Increase the digital experience"]
      },
      {
        title: "User Goals",
        points: ["Find support easily", "Access resources faster", "Receive accurate union information"]
      },
      {
        title: "UX Goals",
        points: ["Simplify navigation", "Improve accessibility", "Create a consistent brand identity"]
      }
    ],
    targetAudience: [
      { title: "Ages", description: "18-65+" },
      { title: "Union Members & Non-Members", description: "Individuals seeking workplace representation and support." },
      { title: "Varying Tech Fluency", description: "Ranging from highly tech-savvy young workers to older members with basic digital skills." }
    ],
    researchDiscovery: {
      description: "Competitive analysis focused on trade unions, non-profit organizations, and advocacy groups to understand how similar platforms support members.",
      points: [
        "Navigation patterns",
        "Content organization",
        "Accessibility features",
        "Member tools"
      ]
    },
    keyFindings: [
      "Content Overload: Current content density made it hard for users to find what they needed.",
      "Navigation Complexity: Navigation proved confusing, especially for first-time visitors.",
      "Mobile Experience: Large portions of the audience relied on mobile access.",
      "Conversion Opportunities: The join flow needed to be more prominent throughout the site."
    ],
    userPainPoints: [
      { title: "Finding Relevant Information", description: "Users struggled to locate key workplace advice and membership information." },
      { title: "Understanding Complex Activities", description: "Campaigns and union activities were difficult to browse and discover." },
      { title: "Membership Journey", description: "The onboarding process was not sufficiently highlighted for prospective members." },
      { title: "Mobile Browsing", description: "Large content sections created scanning challenges on smaller screens." }
    ],
    personasLayout: 'simple',
    personasIntro: "We identified three primary user types, each with distinct needs and interaction patterns with the union.",
    personas: [
      {
        name: "General Members",
        points: [
          "Need accessible workplace advice and rights information.",
          "Want to see the value of their union membership.",
          "Require a simple way to contact support."
        ]
      },
      {
        name: "Workplace Representatives",
        points: [
          "Need resources to support members effectively.",
          "Require training materials and policy updates.",
          "Want to track cases and member issues."
        ]
      },
      {
        name: "GMB Officials",
        points: [
          "Need a broad overview of union activities.",
          "Require secure communication channels.",
          "Want to push important campaigns to members."
        ]
      }
    ],
    designSolutions: [
      { id: "01", title: "Mobile-First Design", description: "A responsive layout optimized for all devices, prioritizing mobile usability." },
      { id: "02", title: "Simplified Joining Process", description: "A streamlined, multi-step form that reduced friction and improved conversion rates." },
      { id: "03", title: "Clear Navigation", description: "A restructured mega-menu for easy access to critical information and resources." },
      { id: "04", title: "Accessible Information", description: "A robust search feature and categorized advice hub for quick answers." }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Interviews, competitor benchmarking, content audit" },
      { id: "02", title: "Information Architecture", points: "Reworked user paths, grouped advice, defined support flow" },
      { id: "03", title: "Wireframing & Prototyping", points: "Low-fidelity wireframes, user flows, navigation patterns" },
      { id: "04", title: "Visual Design", points: "Brand-consistent layouts, accessibility, clear content hierarchy" },
      { id: "05", title: "Responsive Design", points: "Optimised experience across desktop, tablet, and mobile" }
    ],
    wireframesIntro: "Wireframes focused on simplifying the core user journeys: getting help, finding information, and managing membership.",
    wireframes: {
      desktop: "/case-study/gmb/GMB-Union-desktop.png",
      mobile: [
        "/case-study/gmb/GMB-Union-mob-1.png",
        "/case-study/gmb/GMB-Union-mob-2.png",
        "/case-study/gmb/GMB-Union-mob-3.png"
      ]
    },
    wireframeShowcase: "/case-study/gmb/gmb-wireframe.jpg",
    solutionIntro: "To address these issues, we designed a comprehensive digital solution with a focus on usability, accessibility, and modern aesthetics.",
    solutionImage: "/case-study/gmb.png",
    solutions: [
      { title: "Member-First Dashboard", description: "Created a personalized dashboard for members to easily access their information." },
      { title: "Streamlined Joining", description: "A frictionless onboarding flow that dramatically reduced drop-off rates." },
      { title: "Resource Center", description: "An organized, searchable hub for workplace advice and union resources." }
    ],
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#F36F21", class: "bg-[#F36F21]" },
        { name: "Secondary", hex: "#00A3A1", class: "bg-[#00A3A1]" },
        { name: "Dark Blue", hex: "#1D2B44", class: "bg-[#1D2B44]" }
      ],
      typography: {
        primary: "Roboto",
        secondary: ["Inter"],
        weights: ["Regular", "Medium", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." }
      ]
    },
    designSystemLists: [
      { title: "Color Palette", items: ["Primary Orange", "Secondary Teal", "Accent Grey", "Accessibility-first contrast ratios"] },
      { title: "Components", items: ["Buttons", "Cards", "Navigation Elements", "Content Tags", "Alerts & Notifications"] },
      { title: "Typography", items: ["Clear visual hierarchy", "Bold accent headings", "Accessible text sizing"] }
    ],
    designGuideImage: "/case-study/gmb/gmb-design-guide.jpg",
    uiFeatures: [
      { 
        image: "/case-study/gmb.png", 
        title: "Final UI", 
        description: "A comprehensive look at the new platform." 
      }
    ],
    finalDeviceImage: "/case-study/gmb/gmb-desktop-mobile.jpg",
    metrics: [
      { value: "52%", label: "Increase membership inquiries", color: "text-[#FF6A00]" },
      { value: "70%", label: "Decrease in navigation friction", color: "text-[#F59E0B]" },
      { value: "95%", label: "Improved usability satisfaction", color: "text-[#FF7A21]" }
    ],
    successMetricsBullets: [
      "Reduce the bounce rate by tailoring metrics were defined",
      "Increase membership inquiries",
      "Better user engagement",
      "Improve navigation friction",
      "Improve overall satisfaction"
    ],
    impactSummary: "The redesign improved member discoverability, strengthened navigation clarity, and created a more effective member-first digital experience.",
    testimonialsLayout: 'purple-bg',
    testimonials: [
      { quote: "The new website made it easy to understand what the union offers and how I can get support.", author: "GMB Member" },
      { quote: "It now feels like a digital hub members can trust and navigate with confidence.", author: "GMB Official" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "User-Centered Approach", description: "Working closely with users uncovered the biggest friction points and shaped better decisions." },
      { title: "Accessibility First", description: "Building accessibility into the design from the start made the product more robust and faster to iterate." },
      { title: "Mobile Optimisation", description: "Mobile patterns had to be first-class because a large share of users arrived on smaller devices." },
      { title: "Iterative Testing", description: "Regular review and validation helped the experience stay useful and aligned with member needs." }
    ],
    conclusion: "The GMB Union redesign successfully transformed a content-heavy website into a modern, accessible, and conversion-focused platform. Through research-led design, improved information architecture, and responsive execution, the experience became far easier to use for both current and prospective members."
  },
  "innov-8-2-create": {
    title: "Innov-8-2-Create",
    layoutVariant: 'reference',
    heroText: {
      part1: "Supporting and creating a more connected, inclusive ",
      part2: "& engaging way to manage the work"
    },
    subtitle: "Innov-8-2-Create is a digital platform that makes it easy for you to innovate, ideate, and collaborate. It's a space where you can share your ideas and work together to bring them to life.",
    service: "UI/UX Design",
    category: "Platform Design",
    year: "2023",
    link: "https://innov-8-2-create.eu/",
    heroImage: "/case-study/innvo-2-create/innovate-2-create-desktop.png",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Web Design & UX Optimization",
      "Duration": "2 months",
      "Platform": "Desktop & Mobile Platform",
      "Tools Used": "Figma, Adobe Photoshop",
      "Status": "Live"
    },
    overviewImage: "/case-study/innvo-2-create/innovate-2-create-desktop.png",
    overview: [
      "Innov-8 is a digital platform designed to support innovators and startups with resources, collaboration tools, and knowledge sharing. The website needed to clearly communicate its mission, showcase its initiatives, and provide a user-friendly experience for multiple user types, all while reflecting a modern, innovative brand identity."
    ],
    challenge: {
      description: "As this was a brand-new website, the challenge wasn't fixing an existing site. it was defining the experience from scratch:",
      points: [
        "Communicate ecosystem value clearly",
        "Support multiple audience types",
        "Encourage programme participation",
        "Create a responsive experience"
      ]
    },
    objectivesLayout: 'grey-bg-grid',
    objectives: [
      {
        title: "Primary Goals",
        points: ["Reduce Bounce Rate", "Streamline User Flow"]
      },
      {
        title: "Secondary Goals",
        points: ["Increase user engagement", "Improve session duration"]
      },
      {
        title: "KPIs",
        points: [
          "33% Decrease in Bounce Rate",
          "28% Increase in Engagement",
          "45% Growth in User Base"
        ]
      }
    ],
    aboutProject: {
      title: "What is Innov-8-2-Create?",
      description: "Innov-8 is a digital platform designed to support innovators and startups with resources, collaboration tools, and knowledge sharing. The website needed to clearly communicate its mission, showcase its initiatives, and provide a user-friendly experience for multiple user types, all while reflecting a modern, innovative brand identity."
    },
    keyFindingsGrid: [
      { title: "User Confusion", description: "Users found the current navigation confusing and struggled to find specific resources." },
      { title: "Poor Readability", description: "Text heavy pages without clear visual hierarchy led to high bounce rates." },
      { title: "Inconsistent Branding", description: "Visual elements varied wildly across different sections of the platform." },
      { title: "Lack of mobile responsiveness", description: "A significant portion of users accessed the site via mobile but had a poor experience." }
    ],
    researchDiscovery: {
      description: "To understand current expectations and audience ecosystems, research was conducted across innovation platforms, event-driven communities, university ecosystems, and European research initiatives.",
      points: ["Navigation models", "Content structure", "Visual hierarchy", "Accessibility patterns"]
    },
    keyFindings: [
      "Multiple Audience Groups: The platform needed to serve innovators, students, entrepreneurs, investors, and institutional partners.",
      "Content Complexity: Programme, event, and support information required clearer categorisation.",
      "Programme Visibility: Key initiatives needed stronger entry points and participation cues.",
      "Mobile Accessibility: Discovery and updates had to work across devices."
    ],
    userPainPoints: [
      { title: "Information Discovery", description: "Users needed a simple way to access project information and opportunities." },
      { title: "Resource Access", description: "Educational and programme material required better organisation." },
      { title: "Programme Participation", description: "Event and programme entry points were too low-visibility." },
      { title: "Cross-Device Experience", description: "The platform needed to perform across desktop, tablet, and mobile devices." }
    ],
    personasLayout: 'simple-list',
    personas: [
      { name: "Small to Medium Enterprises (SMEs)", points: [] },
      { name: "Innovation Managers", points: [] },
      { name: "R&D Departments", points: [] },
      { name: "Academic Researchers", points: [] }
    ],
    designProcessTitle: "Design Process",
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Stakeholder interviews, audience mapping, competitor review" },
      { id: "02", title: "Information Architecture", points: "Resource structure, programme flows, user segmentation" },
      { id: "03", title: "Wireframing & Prototyping", points: "Content hierarchy, navigation options, page structure" },
      { id: "04", title: "Visual Design", points: "Modern branding, accessibility, ecosystem-ready interface" },
      { id: "05", title: "Responsive Design", points: "Layouts refined for tablet and mobile behaviour" }
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
    wireframeShowcase: "/case-study/innvo-2-create/innov-8-2-create-wireframe.jpg",
    metrics: [
      { value: "42%", label: "Increase in programme registrations", color: "text-[#FF8A1D]" },
      { value: "68%", label: "Increase in engagement", color: "text-[#FF6A00]" },
      { value: "82%", label: "User satisfaction score", color: "text-[#FF8A1D]" }
    ],
    successMetricsBullets: [
      "Increase project interaction, the following goals were established",
      "Increase programme registrations",
      "Improve onboarding participation",
      "Increase content discoverability",
      "Support long term platform scalability"
    ],
    solutionIntro: "To address the challenges identified during the research phase, I designed a solution that focused on streamlining the user experience, enhancing visual appeal, and improving overall engagement.",
    solutions: [
      { title: "Streamlined User Flow", description: "I simplified the primary user journey by restructuring the navigation and removing unnecessary steps. The new flow is intuitive, allowing users to find what they need quickly and easily." },
      { title: "Modernized Visuals", description: "A fresh, modern visual identity was implemented. This included a new color palette, updated typography, and consistent UI elements that align with the brand's premium positioning." },
      { title: "Enhanced Dashboard", description: "The dashboard was redesigned to provide a comprehensive overview of key metrics and activities. Customizable widgets allow users to tailor the dashboard to their specific needs." },
      { title: "Improved Collaboration Features", description: "New features were introduced to facilitate better team collaboration, including real-time updates, integrated messaging, and seamless file sharing." }
    ],
    designSystemIntro: "To ensure consistency across the platform, a comprehensive design system was created. This included a detailed style guide outlining colors, typography, spacing, and UI components.",
    designGuideImage: "/case-study/innvo-2-create/innov-8-2-create-design-guide.jpg",
    designSystemLists: [
      { title: "Color Palette", items: ["Deep navy", "Bright magenta", "Accent pink", "Gradient energy"] },
      { title: "Components", items: ["Buttons", "Programme Cards", "Resource Cards", "Event Modules", "Navigation"] },
      { title: "Typography", items: ["Accessible heading scale", "Supportive body text", "Clear information hierarchy"] }
    ],
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
    impactSummary: "The platform successfully established a professional digital presence for the Innov-8 ecosystem while improving programme visibility, audience engagement, and access to key resources.",
    testimonials: [
      { quote: "The new structure made it far easier to see how our innovation programmes connect and where to start.", author: "Innovation Manager" },
      { quote: "We now have a much more engaging experience that reflects the quality of the initiative.", author: "SME Partner" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "Designing for Multiple Audiences", description: "Supporting diverse stakeholder groups meant every major route needed a clear point of entry." },
      { title: "Information Architecture Is Foundational", description: "Strong content organisation directly improved engagement and discovery." },
      { title: "Scalability Matters", description: "The system had to support new content and programmes without compromising clarity." },
      { title: "Early Planning Reduces Complexity", description: "Aligning navigation and hierarchy early made the later design stages far more efficient." }
    ],
    conclusion: "The Innov-8-2-Create redesign created a support-focused, collaborative, and responsive digital experience. By improving structure, visibility, and navigation, the platform became easier to understand and more effective for its broad innovation audience."
  },
  "alpine": {
    title: "Alpine",
    layoutVariant: 'reference',
    heroText: {
      part1: "Driving digital transformation for construction - ",
      part2: "Alpine"
    },
    subtitle: "Alpine is a leading international infrastructure group. They finance, develop, build and maintain complex infrastructure such as transportation, power and utility systems, social and commercial buildings.",
    service: "UX/UI Design",
    category: "Platform Redesign",
    year: "2024",
    link: "#",
    heroImage: "/case-study/alpine/alpine-desktop.png",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Platform Redesign",
      "Duration": "4 months",
      "Platform": "Desktop & Mobile Responsive Website",
      "Tools Used": "Figma, Adobe Photoshop",
      "Status": "Live"
    },
    overviewImage: "/case-study/alpine/alpine-desktop.png",
    overview: [
      "Alpine Property Finders is a specialist real estate agency helping clients buy, sell, and invest in luxury properties across France. The previous website lacked the premium feel and structured discovery needed to support high-intent property searches.",
      "The goal of the redesign was to modernise the website, improve property discovery, streamline user journeys, and create a more engaging experience that generates high-quality enquiries."
    ],
    challenge: {
      description: "The existing website created friction for property discovery, decision-making, and conversions:",
      points: [
        "Complex search experience",
        "Limited trust-building content",
        "Difficult property comparison",
        "Weak mobile-first responsiveness",
        "Inconsistent branding"
      ]
    },
    objectivesLayout: 'grey-bg-grid',
    objectives: [
      { title: "Business Goals", points: ["Increase enquiry requests", "Improve premium positioning", "Reduce property search drop-offs"] },
      { title: "User Goals", points: ["Find relevant properties faster", "View richer property details", "Navigate smoothly across listings"] },
      { title: "UX Goals", points: ["Simplify search and content hierarchy", "Create visual consistency", "Build mobile-first trust"] }
    ],
    aboutProject: {
      title: "What is Alpine?",
      description: "Alpine Property Finders helps users search and evaluate premium real estate opportunities. The redesigned website was built to make browsing, filtering, and enquiring far more seamless while reinforcing a high-end brand experience."
    },
    keyFindings: [
      "Property Discovery Challenges: Users needed better filtering and clearer property information.",
      "Search & Filtering: Search had to be more intuitive and efficient.",
      "Trust & Credibility: Visual hierarchy needed to reinforce confidence throughout the decision-making process.",
      "Mobile Experience: Discovery had to work smoothly across mobile devices."
    ],
    userPainPoints: [
      { title: "Finding Relevant Properties", description: "Users struggled to discover properties efficiently." },
      { title: "Understanding Locations", description: "Area, lifestyle, and neighbourhood context were limited or absent." },
      { title: "Accessing Buying Information", description: "The purchase process and agency guidance needed stronger explanation." },
      { title: "Mobile Browsing", description: "Property browsing and input patterns lacked mobile optimisation." }
    ],
    personasLayout: 'simple-list',
    personasIntro: "Alpine caters to a diverse user base, primarily targeting construction professionals.",
    personas: [
      { name: "Property Buyers", points: [] },
      { name: "Investors", points: [] },
      { name: "International Clients", points: [] },
      { name: "Lifestyle Movers", points: [] }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Competitor analysis, content audit, journey mapping" },
      { id: "02", title: "Information Architecture", points: "Property listings, buying guides, district navigation" },
      { id: "03", title: "Wireframing & Prototyping", points: "Search experience, listing detail pages, enquiry patterns" },
      { id: "04", title: "Visual Design", points: "Premium feel, property photography, clear content hierarchy" },
      { id: "05", title: "Responsive Design", points: "Layouts refined for desktop, tablet, and mobile" }
    ],
    wireframesIntro: "The wireframing phase focused on structuring a clear, task-driven experience for property search, listings, and user actions across desktop and mobile.",
    wireframes: {
      desktop: "/case-study/alpine/alpine-desktop.png"
    },
    wireframeShowcase: "/case-study/alpine/alpine-wireframe.png",
    solutionIntro: "The final experience focused on clarity, trust, and speed, making it easier for users to search properties, review listings, and take action without friction.",
    solutionImage: "/case-study/alpine/alpine-desktop.png",
    solutions: [
      { title: "Enhanced Property Discovery", description: "Search, filter, and browse flows were simplified so users could reach relevant properties faster with less effort." },
      { title: "Improved Client Services", description: "Clearer listing structure and stronger content hierarchy made Alpine's premium service feel more credible and easier to understand." },
      { title: "Stronger Lead Generation", description: "Calls-to-action were surfaced throughout the journey to support enquiries, bookings, and high-intent user conversion." }
    ],
    metrics: [
      { value: "42%", label: "Increase in property enquiries", color: "text-[#FF8A1D]" },
      { value: "40%", label: "Increase in listing engagement", color: "text-[#C26B00]" },
      { value: "89%", label: "User satisfaction score", color: "text-[#FF8A1D]" }
    ],
    successMetricsBullets: [
      "Increase property's enquiries",
      "Improve premium brand engagement",
      "Increase on-page discoverability",
      "Improve user satisfaction",
      "Support long-term performance"
    ],
    designSystemIntro: "A refined design system was created to support Alpine's premium positioning, using a restrained palette, consistent component patterns, and clear typography.",
    designGuideImage: "/case-study/alpine/alpine-design-guide.png",
    designSystemLists: [
      { title: "Color Palette", items: ["Alpine Beige", "Premium Gold Accent", "Muted neutrals"] },
      { title: "Components", items: ["Property Cards", "Search Fields", "Buttons", "Editorial Sections", "Navigation"] },
      { title: "Typography", items: ["Clear hierarchy", "Accessible font sizing", "Readable body text"] }
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
    },
    finalDeviceImage: "/case-study/alpine/alpine-desktop-2.png",
    impactSummary: "The Alpine Property Finders redesign improved property discovery, reinforced the premium nature of the service, and created a more persuasive digital experience across every stage of the enquiry journey.",
    testimonials: [
      { quote: "Navigating properties is now far more enjoyable and premium. It feels aligned with the market we serve.", author: "Alpine Team" },
      { quote: "The new experience made our search feel much more structured and trustworthy from the first interaction.", author: "Buyer" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "Visual Presentation Influences Trust", description: "Premium property brands need high visual polish to reinforce perceived value." },
      { title: "Search Experience Drives Engagement", description: "Improved property discovery directly increases browsing depth and user confidence." },
      { title: "Mobile Optimisation Is Essential", description: "Many users start property searches on mobile, so usability there cannot be secondary." },
      { title: "Early Planning Reduces Complexity", description: "A clear content framework simplifies later design and refinement decisions." }
    ],
    conclusion: "The Alpine Property Finders redesign transformed the platform into a more premium, search-focused website. Through better navigation, stronger property discovery, and responsive refinement, the experience now supports both brand trust and enquiry generation."
  },
  "tiny-vision": {
    title: "Tiny-Vision",
    layoutVariant: 'reference',
    heroText: {
      part1: "Support in building responsive & optimized ",
      part2: "landing pages - Tiny-Vision"
    },
    subtitle: "Tiny Drawings is an illustration studio creating children’s books, educational resources, animations, and digital content that brings playful storytelling to life.",
    service: "Web Designer",
    category: "Website Redesign",
    year: "2024",
    link: "#",
    heroImage: "/case-study/tiny/tiny-desktop.png",
    roleDetails: {
      "Role": "Web Designer",
      "Project Type": "Website Redesign",
      "Duration": "6 weeks",
      "Platform": "Desktop & Mobile Responsive Website",
      "Tools Used": "Figma, Adobe Photoshop",
      "Status": "Live"
    },
    overviewImage: "/case-study/tiny/tiny-desktop.png",
    overview: [
      "Tiny Vision is a creative studio specialising in video production, animation, storytelling, and digital content creation. The studio needed a website that would showcase its expressive brand, highlight services, and communicate its playful premium identity more clearly.",
      "The goal of the redesign was to modernise the website, improve portfolio presentation, strengthen brand identity, and create a more engaging user experience that converts visitors into enquiries."
    ],
    challenge: {
      description: "The existing website created barriers for brand communication, content discovery, and conversion:",
      points: [
        "Inconsistent visual storytelling",
        "Limited service clarity",
        "Underdeveloped portfolio structure",
        "Weak mobile-first layout",
        "Missing clear conversion paths"
      ]
    },
    objectivesLayout: 'grey-bg-grid',
    objectives: [
      {
        title: "Business Goals",
        points: ["Increase project enquiries", "Improve brand visibility", "Strengthen client credibility"]
      },
      {
        title: "User Goals",
        points: ["Explore creative portfolio", "Understand services easily", "Contact the studio with ease"]
      },
      {
        title: "UX Goals",
        points: ["Improve navigation and content hierarchy", "Enhance visual storytelling", "Ensure usability across devices"]
      }
    ],
    researchDiscovery: {
      description: "Research focused on creative agencies, video production studios, design portfolios, and storytelling platforms to understand how expressive brands communicate value online.",
      points: [
        "Navigation structures",
        "Service clarity",
        "Visual hierarchy",
        "Audience engagement"
      ]
    },
    keyFindings: [
      "Portfolio Visibility: Visitors needed immediate access to recent and standout projects.",
      "Service Clarity: Offerings had to be understandable at a glance with minimal friction.",
      "Trust & Credibility: The website needed stronger social proof and business signals.",
      "Mobile Experience: Creative work had to remain visually engaging and usable across smaller screens."
    ],
    userPainPoints: [
      { title: "Discovering Relevant Work", description: "Users struggled to quickly find projects related to their industry or needs." },
      { title: "Understanding Services", description: "Service details were not explained with enough clarity or structure." },
      { title: "Building Trust", description: "The previous site lacked strong proof of expertise and project success." },
      { title: "Mobile Portfolio Viewing", description: "Visual content needed to be enjoyable and clear on handheld devices." }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Content audit, competitor review, user journey mapping" },
      { id: "02", title: "Information Architecture", points: "Portfolio flows, service pages, editorial structure" },
      { id: "03", title: "Wireframing & Prototyping", points: "Navigation structure, landing layouts, service pages, trust signals" },
      { id: "04", title: "Visual Design", points: "Creativity, branding, playful illustrations, clear hierarchy" },
      { id: "05", title: "Responsive Design", points: "Desktop, tablet, mobile, touch-friendly interactions" }
    ],
    wireframesIntro: "The wireframing phase focused on structuring the studio’s content and portfolio journeys for both desktop and mobile users.",
    wireframes: {
      desktop: "/case-study/tiny/tiny-desktop.png"
    },
    wireframeShowcase: "/case-study/tiny/tiny-wireframe.png",
    solutionIntro: "The redesigned website positions Tiny Vision as a more expressive, story-led creative studio with clearer services and a stronger conversion path.",
    solutionImage: "/case-study/tiny/tiny-desktop.png",
    solutions: [
      { title: "Enhanced Portfolio Experience", description: "Creative work was surfaced more clearly so visitors could browse projects and understand the studio’s style faster." },
      { title: "Clear Service Presentation", description: "Service structure and messaging were refined to communicate value without overwhelming visitors." },
      { title: "Stronger Storytelling", description: "Brand voice, visual rhythm, and playful illustration choices were used to make the experience more memorable." },
      { title: "Improved Conversion Paths", description: "Contact and call-to-action placement was strengthened to support enquiry generation." }
    ],
    metrics: [
      { value: "48%", label: "Increase in project enquiries", color: "text-[#FF8A1D]" },
      { value: "42%", label: "Growth in portfolio engagement", color: "text-[#FF6A00]" },
      { value: "91%", label: "User satisfaction score", color: "text-[#FF8A1D]" }
    ],
    successMetricsBullets: [
      "Increase project enquiries",
      "Improve portfolio engagement",
      "Reduce on-page drop-offs",
      "Improve contact discoverability",
      "Support brand consistency"
    ],
    designSystemIntro: "A playful but structured design system was created to maintain consistency throughout the website while supporting Tiny Vision’s imaginative visual language.",
    designSystemLists: [
      { title: "Color Palette", items: ["Vibrant Blue", "Cloud White", "Warm Orange", "Playful accent tones"] },
      { title: "Components", items: ["Project Cards", "Buttons", "Portfolio Thumbnails", "Editorial Sections", "Navigation Elements"] },
      { title: "Typography", items: ["Rounded friendly hierarchy", "Readable service copy", "Accessible sizing"] }
    ],
    designGuideImage: "/case-study/tiny/tiny-design-guide.png",
    styleGuide: {
      colors: [
        { name: "Primary Orange", hex: "#FF5A00", class: "bg-[#FF5A00]" },
        { name: "Deep Black", hex: "#000000", class: "bg-[#000000]" },
        { name: "Warm White", hex: "#FAFAFA", class: "bg-[#FAFAFA]" }
      ],
      typography: {
        primary: "Roboto",
        secondary: ["Inter", "Outfit"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." },
        { title: "Responsive Design", description: "Fully responsive layouts that adapt seamlessly from desktop to mobile, ensuring a consistent experience." },
        { title: "Fast Load Times", description: "Optimized assets and lazy loading to ensure the site loads quickly even on slow connections." }
      ]
    },
    finalDeviceImage: "/case-study/tiny/tiny-desktop-2.png",
    impactSummary: "The Tiny Vision redesign improved portfolio discoverability, clarified services, and created a more expressive online presence that better reflects the creativity and quality of the studio.",
    testimonialsLayout: 'purple-bg',
    testimonials: [
      { quote: "Understanding our services and creative style is much easier now. The new site feels fresh and intentional.", author: "Client" },
      { quote: "The website feels playful, creative, and professional in a way the old version never did.", author: "Team Lead" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "Storytelling Enhances Engagement", description: "Narrative structure and expressive visuals helped visitors stay engaged longer." },
      { title: "Visual Hierarchy Drives Discovery", description: "Clear content order made projects and services easier to scan and understand." },
      { title: "Trust Is Built Through Case Studies", description: "Showing process, outcomes, and client success improved perceived credibility." },
      { title: "Early Planning Reduces Complexity", description: "A strong content framework simplified later design and responsiveness decisions." }
    ],
    conclusion: "The Tiny Vision redesign elevated a creative portfolio site into a more expressive, strategically organised digital experience. Through improved storytelling, better portfolio structure, and responsive design, the platform now communicates the studio’s personality and value far more effectively."
  },
  "climate-jobs": {
    title: "Climate Jobs",
    layoutVariant: 'reference',
    heroText: {
      part1: "Empowering workers for a sustainable future - ",
      part2: "Climate Jobs"
    },
    subtitle: "Climate Jobs is a coalition of trade unions campaigning for a zero-carbon energy transition that supports workers, communities, and the UK’s energy future.",
    service: "UX/UI Design",
    category: "Web Design",
    year: "2023",
    link: "https://climatejobs.org.uk/",
    heroImage: "/case-study/climate/climate-desktop.png",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Web Design & UX Optimization",
      "Duration": "3 months",
      "Platform": "Desktop & Mobile Responsive Website",
      "Tools Used": "Figma, Adobe Photoshop",
      "Status": "Live"
    },
    overviewImage: "/case-study/climate/climate-desktop.png",
    overview: [
      "Climate Jobs is a coalition of trade unions campaigning for a zero-carbon energy transition that supports workers, communities, and long-term economic resilience. The platform needed a website that could clearly present climate policies, promote campaigns and events, and make reports, resources, and research more accessible.",
      "The goal of the redesign was to modernise the website, improve political communication, strengthen user journeys, and create clearer pathways for users to discover content, resources, and campaign updates."
    ],
    challenge: {
      description: "The project required solving for a wide audience that includes policymakers, campaigners, unions, and the public. Key challenges included:",
      points: [
        "Heavy information density",
        "Content discoverability",
        "Campaign visibility",
        "User engagement",
        "Mobile accessibility"
      ]
    },
    objectivesLayout: 'grey-bg-grid',
    objectives: [
      { title: "Business Goals", points: ["Improve campaign visibility", "Increase donation and support awareness", "Strengthen policy education"] },
      { title: "User Goals", points: ["Learn about Climate Jobs UK", "Access campaign and news information", "Get involved with climate action"] },
      { title: "UX Goals", points: ["Simplify navigation and content discovery", "Create clear user journeys", "Reduce engagement drop-off"] }
    ],
    researchDiscovery: {
      description: "Stakeholder research explored campaign sites, advocacy platforms, trade unions, and public-interest websites to understand how complex information can be communicated effectively.",
      points: [
        "Content complexity",
        "Calls to action",
        "Campaign visibility",
        "Mobile accessibility"
      ]
    },
    keyFindings: [
      "Content Complexity: Dense policy and campaign information needed to be simplified for broader audiences.",
      "Campaign Visibility: Active campaigns and initiatives needed stronger prominence.",
      "User Engagement: Clear calls to action were necessary to encourage participation.",
      "Mobile Accessibility: Content-heavy pages needed stronger support for on-the-go reading."
    ],
    userPainPoints: [
      { title: "Understanding Climate Policies", description: "Users needed help connecting policy discussion to tangible worker and climate outcomes." },
      { title: "Finding Relevant Information", description: "Important campaign updates and briefings were difficult to surface quickly." },
      { title: "Engagement Opportunities", description: "Users needed clear signposts for support, reading, and involvement." },
      { title: "Mobile Browsing", description: "Long-form content needed better scannability on smaller screens." }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Content mapping, stakeholder interviews, campaign review" },
      { id: "02", title: "Information Architecture", points: "Campaigns, resources, news, reports, donation flows" },
      { id: "03", title: "Wireframing & Prototyping", points: "Hierarchy patterns, content blocks, campaign modules, call-to-action placement" },
      { id: "04", title: "Visual Design", points: "Trust and authority focused on clarity, hierarchy, and campaign branding" },
      { id: "05", title: "Responsive Design", points: "The experience was optimised for desktop, tablet, and mobile accessibility" }
    ],
    wireframesIntro: "Wireframes focused on creating accessible campaign and content pathways that support discovery, reading, and action.",
    wireframes: {
      desktop: "/case-study/climate/climate-desktop.png"
    },
    wireframeShowcase: "/case-study/climate/climate-wireframe.png",
    solutionIntro: "The redesigned site clarifies campaigns, resources, and action routes while making Climate Jobs’ mission easier to understand and engage with.",
    solutionImage: "/case-study/climate/climate-desktop.png",
    solutions: [
      { title: "Clear Navigation", description: "Important campaign, resource, and news updates are now easier to discover." },
      { title: "Improved Content Hierarchy", description: "Complex topics are presented in a more understandable and engaging way." },
      { title: "Stronger Calls to Action", description: "Users can more easily support, read, donate, and follow the coalition’s work." },
      { title: "Mobile-First Responsive", description: "The platform remains readable and accessible across all devices." }
    ],
    metrics: [
      { value: "45%", label: "Increase in campaign engagement", color: "text-[#FF8A1D]" },
      { value: "38%", label: "Growth in resource access", color: "text-[#FF6A00]" },
      { value: "82%", label: "User satisfaction score", color: "text-[#FF8A1D]" }
    ],
    successMetricsBullets: [
      "Increase campaign engagement and volunteer interest",
      "Improve access to reports, news, and resources",
      "Increase content and supporter sign-up rates",
      "Strengthen readability and credibility",
      "Improve overall UX across desktop and mobile"
    ],
    designSystemIntro: "A structured design system was created to maintain consistency across the platform while reinforcing Climate Jobs’ campaign-led identity.",
    designSystemLists: [
      { title: "Color Palette", items: ["Deep Green", "Light Green", "Neutral White"] },
      { title: "Components", items: ["Buttons", "Campaign Cards", "News Cards", "Action Panels", "Navigation Elements"] },
      { title: "Typography", items: ["Accessible font sizing", "Readable content structure", "Clear visual hierarchy"] }
    ],
    designGuideImage: "/case-study/climate/climate-design-guide.png",
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
    },
    finalDeviceImage: "/case-study/climate/climate-desktop-2.png",
    impactSummary: "The updated platform strengthened Climate Jobs UK’s ability to communicate policy, campaigns, and supporter opportunities more clearly, improving trust and discoverability across a broad audience.",
    testimonials: [
      { quote: "The information is much easier to follow now and it feels far more credible and useful.", author: "Supporter" },
      { quote: "Understanding our actions is quicker now and the campaign routes are much clearer.", author: "Campaign Lead" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "Simplifying Complex Topics", description: "Campaign and policy content becomes stronger when it is structured for broad public understanding." },
      { title: "Strong Calls to Action Drive Engagement", description: "Clear participation paths directly improve volunteer and donor momentum." },
      { title: "Accessibility Improves Reach", description: "Accessible design ensures information can be understood by a wider audience." },
      { title: "Early Planning Reduces Complexity", description: "Defining content structure and campaign journeys early created a more effective platform." }
    ],
    conclusion: "The Climate Jobs UK website was redesigned from the ground up to support education, advocacy, and engagement around climate-focused careers and policy. Through clearer navigation, accessible experiences, and stronger campaign communication, the platform now communicates its mission more effectively to a wide audience."
  },
  "act-for-change": {
    title: "Act for Change",
    layoutVariant: 'reference',
    heroText: {
      part1: "Amplifying voices for environmental justice - ",
      part2: "Act for Change"
    },
    subtitle: "Act for Change is a UK-based charity dedicated to supporting children, young people, and families affected by knife crime, county lines, and social inequality through education, advocacy, and emotional support.",
    service: "UX/UI Design",
    category: "Platform Redesign",
    year: "2022",
    link: "https://actforchange.org.uk/",
    heroImage: "/case-study/act for change/act-for-change-desktop.png",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Platform Redesign",
      "Duration": "2 months",
      "Platform": "Desktop & Mobile Responsive Website",
      "Tools Used": "Figma, Adobe Photoshop",
      "Status": "Live"
    },
    overviewImage: "/case-study/act for change/act-for-change-desktop.png",
    overview: [
      "Act for Change needed a website that would communicate trust, support, and clear pathways for action. The goal of the redesign was to modernise the website, improve content accessibility, simplify navigation, and create stronger pathways for users to discover services, resources, and support opportunities."
    ],
    challenge: {
      description: "The existing website created barriers for children, young people, and community stakeholders. Key issues included:",
      points: [
        "Inconsistent content structure",
        "Limited trust-building elements",
        "Navigation confusion",
        "Difficult mobile browsing",
        "Weak emotional hierarchy"
      ]
    },

    objectivesLayout: 'grey-bg-grid',
    objectives: [
      { title: "Business Goals", points: ["Improve awareness of Act for Change’s mission", "Increase support and service discovery", "Encourage community participation"] },
      { title: "User Goals", points: ["Access help and resources quickly", "Understand programmes and services", "Connect with the organisation with confidence"] },
      { title: "UX Goals", points: ["Simplify navigation and content hierarchy", "Improve accessibility and trust", "Create clear user journeys"] }
    ],
    researchDiscovery: {
      description: "Stakeholder interviews, community feedback, and support organisation analysis helped uncover what structure and tone users expected online.",
      points: [
        "Navigation models",
        "Content hierarchy",
        "Support pathways",
        "Emotional branding"
      ]
    },
    keyFindings: [
      "Service Visibility: Users struggled to understand the different services and programmes.",
      "Content Overload: Important information was present but poorly prioritised.",
      "Trust & Credibility: Clearer trust signals and proof points were needed to build confidence.",
      "Mobile Accessibility: Support seekers frequently relied on mobile devices."
    ],
    userPainPoints: [
      { title: "Finding Support Services", description: "Users were unsure where to begin when looking for help or resources." },
      { title: "Understanding Programmes", description: "Programme information needed stronger structure and explanation." },
      { title: "Accessing Resources", description: "Key materials and support references were too difficult to discover." },
      { title: "Mobile Navigation", description: "Long content pages were difficult to use on mobile devices." }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Content audit, competitor analysis, community needs mapping" },
      { id: "02", title: "Information Architecture", points: "Service areas, resources, programmes, donation pathways" },
      { id: "03", title: "Wireframing & Prototyping", points: "Landing structure, content hierarchy, user flows, call-to-action placement" },
      { id: "04", title: "Visual Design", points: "Trust and clarity focused on emotional resonance and accessible patterns" },
      { id: "05", title: "Responsive Design", points: "Desktop, tablet, mobile, ensuring accessibility for all users" }
    ],
    wireframesIntro: "Wireframes focused on clear pathways into support, programmes, and community action.",
    wireframes: {
      desktop: "/case-study/act for change/act-for-change-desktop.png"
    },
    wireframeShowcase: "/case-study/act for change/act-for-change-wireframe.png",
    solutionIntro: "The final website prioritised trust, support visibility, and clear engagement routes for families, supporters, and community partners.",
    solutionImage: "/case-study/act for change/act-for-change-desktop.png",
    solutions: [
      { title: "Simplified Navigation", description: "Users can now find support services, programmes, and resources without confusion." },
      { title: "Improved Content Hierarchy", description: "Important service areas and emotional trust cues are easier to scan." },
      { title: "Stronger User Engagement", description: "Calls-to-action now better support donations, event participation, and contact." },
      { title: "Responsive Experience", description: "A seamless experience is provided across all devices." }
    ],
    metrics: [
      { value: "48%", label: "Increase in service enquiries", color: "text-[#FF8A1D]" },
      { value: "38%", label: "Growth in service engagement", color: "text-[#FF6A00]" },
      { value: "88%", label: "User satisfaction score", color: "text-[#FF8A1D]" }
    ],
    successMetricsBullets: [
      "Increase service enquiries and support requests",
      "Improve programme engagement",
      "Increase resource accessibility",
      "Improve user trust",
      "Strengthen overall charity visibility"
    ],
    designSystemIntro: "A structured design system was created to maintain consistency throughout the platform while supporting accessibility and trust-led communication.",
    designSystemLists: [
      { title: "Color Palette", items: ["Trust Blue", "Soft Red", "Supportive neutrals"] },
      { title: "Components", items: ["Buttons", "Service Cards", "Resource Cards", "Action Panels", "Navigation"] },
      { title: "Typography", items: ["Clear hierarchy", "Accessible font sizing", "Readable body text"] }
    ],
    designGuideImage: "/case-study/act for change/act-for-change-design-guide.png",
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
    },
    finalDeviceImage: "/case-study/act for change/act-for-change-desktop-2.png",
    impactSummary: "The redesign created a more accessible and emotionally aligned website that better reflects Act for Change’s mission while helping users connect with support, services, and community action.",
    testimonials: [
      { quote: "The site now feels more supportive and much easier to trust when someone is looking for help.", author: "Staff" },
      { quote: "Finding support services is much more natural now and the information is far easier to follow.", author: "User" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "Empathy Drives Better Design", description: "Designing for vulnerable users requires both emotional sensitivity and clarity." },
      { title: "Content Prioritisation Matters", description: "Organising information effectively improves trust and makes support pathways more usable." },
      { title: "Accessibility Benefits Everyone", description: "Accessible design creates a better experience for every audience, not only some." },
      { title: "Early Planning Reduces Complexity", description: "Clear structure and user journeys made later design refinement much easier." }
    ],
    conclusion: "The Act for Change redesign transformed an outdated charity website into a clearer, more trust-driven platform. Through improved information architecture, supportive design, and stronger user journeys, the website now better supports young people, families, and communities seeking guidance, support, and resources."
  },
  "astp4kt": {
    title: "ASTP",
    layoutVariant: 'reference',
    heroText: {
      part1: "Support in building responsive & optimized ",
      part2: "landing pages - ASTP"
    },
    subtitle: "ASTP is the pan-European association for knowledge transfer professionals, connecting experts across research, innovation, and industry.",
    service: "UX/UI Design",
    category: "Web Design & UX Optimization",
    year: "2024",
    link: "https://astp4kt.eu/",
    heroImage: "/case-study/astp4kt/astp4kt-desktop.png",
    roleDetails: {
      "Role": "UX/UI Designer",
      "Project Type": "Web Design & UX Optimization",
      "Duration": "3 months",
      "Platform": "Desktop & Mobile Responsive Website",
      "Tools Used": "Figma, Adobe Photoshop",
      "Status": "Live"
    },
    overviewImage: "/case-study/astp4kt/astp4kt-desktop.png",
    overview: [
      "ASTP4KT is the Association of European Science & Technology Transfer Professionals, supporting a knowledge-transfer ecosystem that spans universities, research organisations, and industry stakeholders.",
      "The goal of the redesign was to modernise the digital experience, improve content accessibility, streamline navigation, and create a more engaging platform for members, training participants, event attendees, and knowledge-transfer professionals."
    ],
    challenge: {
      description: "The existing digital experience had to support a complex mix of users, events, research, memberships, and education. Key issues included:",
      points: [
        "Complex information architecture",
        "Content discoverability",
        "Event and registration friction",
        "Inconsistent visual hierarchy",
        "Mobile navigation challenges"
      ]
    },
    objectivesLayout: 'grey-bg-grid',
    objectives: [
      { title: "Business Goals", points: ["Increase membership retention", "Promote training courses and events", "Strengthen resource accessibility"] },
      { title: "User Goals", points: ["Find relevant learning and event opportunities", "Access member resources efficiently", "Browse content with confidence"] },
      { title: "UX Goals", points: ["Simplify navigation and content hierarchy", "Create consistent pathways", "Improve engagement through clearer structure"] }
    ],
    researchDiscovery: {
      description: "Research focused on professional associations, learning platforms, membership organisations, and innovation networks to understand how expert audiences interact with content and gated educational resources.",
      points: [
        "Content complexity",
        "Resource discovery",
        "Membership value",
        "Event accessibility"
      ]
    },
    keyFindings: [
      "Content Complexity: The website had large volumes of information spread across multiple sections.",
      "Resource Discovery: Important resources and learning materials required better categorisation and visibility.",
      "Membership Value: Members needed clearer access to exclusive content and benefits.",
      "Event Accessibility: User flows for training events, booking programmes, and registration information needed refinement."
    ],
    userPainPoints: [
      { title: "Finding Training Opportunities", description: "Users had difficulty locating relevant courses and events." },
      { title: "Accessing Resources", description: "Learning materials and industry insights were difficult to browse efficiently." },
      { title: "Understanding Membership Benefits", description: "The value of ASTP membership needed clearer communication." },
      { title: "Mobile Navigation", description: "Content-heavy pages reduced usability on smaller screens." }
    ],
    designProcessLayout: 'zigzag',
    designProcess: [
      { id: "01", title: "Research & Discovery", points: "Stakeholder interviews, content audit, user journey mapping" },
      { id: "02", title: "Information Architecture", points: "Training, resources, events, membership, community pages" },
      { id: "03", title: "Wireframing & Prototyping", points: "Navigation structure, registration flows, content opportunities" },
      { id: "04", title: "Visual Design", points: "Professional visual treatment, information hierarchy, accessibility" },
      { id: "05", title: "Responsive Design", points: "Desktop, tablet, mobile, ensuring smooth experience for users" }
    ],
    wireframesIntro: "Wireframes focused on clarifying content-heavy journeys and making event, member, and resource access easier across devices.",
    wireframes: {
      desktop: "/case-study/astp4kt/astp4kt-desktop.png"
    },
    wireframeShowcase: "/case-study/astp4kt/astp4kt-wireframe.png",
    solutionIntro: "The redesigned ASTP experience supports clearer discovery of courses, events, membership, and research content while preserving a professional, authoritative tone.",
    solutionImage: "/case-study/astp4kt/astp4kt-desktop.png",
    solutions: [
      { title: "Simplified Navigation", description: "Users can more easily find training courses, events, memberships, and resources." },
      { title: "Improved Content Hierarchy", description: "Important information is now prioritised to support professional audiences." },
      { title: "Enhanced Member Experience", description: "Exclusive and member-focused pathways are clearer and more accessible." },
      { title: "Responsive Experience", description: "The platform delivers a consistent experience across desktop and mobile devices." }
    ],
    styleGuide: {
      colors: [
        { name: "Primary", hex: "#0F4C81", class: "bg-[#0F4C81]" },
        { name: "Secondary", hex: "#2CB1BC", class: "bg-[#2CB1BC]" }
      ],
      typography: {
        primary: "Open Sans",
        secondary: ["Inter", "Roboto"],
        weights: ["Light", "Regular", "Medium", "Semi Bold", "Bold"]
      },
      accessibility: [
        { title: "High Contrast Colors", description: "Ensuring all text and UI elements meet WCAG contrast guidelines for optimal readability." },
        { title: "Clear Navigation", description: "Implementing straightforward and intuitive navigation paths to help users find information easily." }
      ]
    },
    designSystemIntro: "A structured design system was created to maintain consistency throughout the platform.",
    designSystemLists: [
      { title: "Color Palette", items: ["Professional Blue", "Secondary Teal", "Neutral White"] },
      { title: "Components", items: ["Buttons", "Event Cards", "Resource Cards", "Member Sections", "Navigation Elements"] },
      { title: "Typography", items: ["Accessible font sizing", "Open Sans body text", "Clear visual hierarchy"] }
    ],
    designGuideImage: "/case-study/astp4kt/astp4kt-design-guide.png",
    metrics: [
      { value: "45%", label: "Increase in event engagement", color: "text-[#FF8A1D]" },
      { value: "40%", label: "Growth in resource access", color: "text-[#FF6A00]" },
      { value: "88%", label: "User satisfaction score", color: "text-[#FF8A1D]" }
    ],
    successMetricsBullets: [
      "Increase membership engagement",
      "Improve event registrations",
      "Increase resource accessibility",
      "Strengthen mobile usability",
      "Improve user satisfaction"
    ],
    finalDeviceImage: "/case-study/astp4kt/astp4kt-desktop-2.png",
    impactSummary: "The redesign created a more accessible and engaging platform for knowledge transfer professionals, helping users find events, resources, and membership opportunities more efficiently.",
    testimonials: [
      { quote: "Finding relevant training and member content is much easier now.", author: "User" },
      { quote: "The new layout feels more organised and helpful for our members.", author: "Team" }
    ],
    keyLearningsLayout: 'text-grid',
    keyLearnings: [
      { title: "Content Structure Improves Discoverability", description: "Professional audiences need clearly organised entry points to find what matters quickly." },
      { title: "Professional Consistency Must Guide User Journeys", description: "A strong visual system reinforces trust and credibility for knowledge-transfer platforms." },
      { title: "Accessibility Enhances Learning Experiences", description: "Accessible layouts improve usability for a diverse international audience." },
      { title: "Early Planning Reduces Complexity", description: "Clarifying content-heavy flows early simplifies later implementation and scaling." }
    ],
    conclusion: "The ASTP website redesign transformed a content-heavy platform into a modern, accessible, and user-focused experience. Through improved information architecture, responsive design, and clearer navigation, the platform now better supports member discovery, professional learning, event engagement, and knowledge transfer across Europe."
  }
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !caseStudiesData[slug]) {
    return <Navigate to="/case-studies" replace />;
  }

  const study = caseStudiesData[slug];
  const isReferenceLayout = study.layoutVariant === 'reference';
  const referenceAccent = slug === 'gmb-website-redesign' ? '#6D28D9' : '#7C3AED';
  const roleEntries = study.roleDetails ? Object.entries(study.roleDetails) : [];

  const renderReferenceLayout = () => (
    <div className="bg-[#FAFAFA]">
      <section className="py-14 md:py-16 px-4">
        <div className="container max-w-5xl mx-auto space-y-14 md:space-y-16">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
              <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
              <span>Project Overview</span>
            </div>
            <div className="space-y-4 text-[15px] leading-7 text-slate-600">
              {study.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {roleEntries.length > 0 && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Project Details</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-0 rounded-[18px] border border-slate-200 bg-white overflow-hidden">
                {roleEntries.map(([key, value], index) => (
                  <div key={key} className={`min-h-[92px] p-5 ${index % 3 !== 2 ? 'md:border-r' : ''} ${index < roleEntries.length - (roleEntries.length % 3 === 0 ? 3 : roleEntries.length % 3) ? 'border-b' : ''} border-slate-200`}>
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">{key}</div>
                    <div className="text-[14px] leading-6 text-slate-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(study.overviewImage || study.heroImage) && (
            <div className="rounded-[22px] bg-white px-6 py-6 md:px-10 md:py-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] border border-slate-200">
              <img src={study.overviewImage || study.heroImage} alt={`${study.title} overview`} className="w-full h-auto object-contain" />
            </div>
          )}

          {study.challenge && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>The Challenge</span>
              </div>
              <p className="text-[15px] leading-7 text-slate-600">{study.challenge.description}</p>
              <ul className="space-y-2 text-[14px] leading-6 text-slate-600">
                {study.challenge.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {study.objectives && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Goals & Objectives</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 rounded-[18px] border border-slate-200 bg-white overflow-hidden">
                {study.objectives.map((objective, idx) => (
                  <div key={idx} className={`p-5 md:p-6 ${idx !== study.objectives!.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} border-slate-200`}>
                    <h3 className="text-[14px] font-bold text-slate-900 mb-3">{objective.title}</h3>
                    <ul className="space-y-2 text-[13px] leading-6 text-slate-600">
                      {(objective.points || (objective.description ? objective.description.split('\n') : [])).map((point, pointIdx) => (
                        <li key={pointIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {study.researchDiscovery && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Research & Discovery</span>
              </div>
              {study.researchDiscovery.description && <p className="text-[15px] leading-7 text-slate-600">{study.researchDiscovery.description}</p>}
              <ul className="space-y-2 text-[14px] leading-6 text-slate-600">
                {study.researchDiscovery.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {study.keyFindings && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Key Findings</span>
              </div>
              <div className="space-y-4">
                {study.keyFindings.map((finding, idx) => {
                  const parts = finding.split(': ');
                  return (
                    <div key={idx}>
                      <h3 className="text-[14px] font-bold text-slate-900">{parts[0]}</h3>
                      {parts[1] && <p className="mt-1 text-[14px] leading-6 text-slate-600">{parts.slice(1).join(': ')}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {study.userPainPoints && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>User Pain Points</span>
              </div>
              <div className="space-y-4">
                {study.userPainPoints.map((point, idx) => (
                  <div key={idx}>
                    <h3 className="text-[14px] font-bold text-slate-900">{point.title}</h3>
                    <p className="mt-1 text-[14px] leading-6 text-slate-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {study.successMetricsBullets && (
            <div className="rounded-[16px] bg-gradient-to-r from-[#5B21B6] to-[#D946EF] p-6 md:p-8 text-white">
              <div className="flex items-center gap-2 text-[15px] font-bold mb-5">
                <span className="inline-block h-4 w-1 rounded-full bg-white"></span>
                <span>Success Metrics</span>
              </div>
              <ul className="space-y-2 text-[14px] leading-6 text-white/90">
                {study.successMetricsBullets.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/80"></span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {study.designProcess && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Design Process</span>
              </div>
              <div className="relative py-2">
                <div className="absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-[#A78BFA] md:block"></div>
                <div className="space-y-5">
                  {study.designProcess.map((step, idx) => (
                    <div key={step.id} className={`relative flex flex-col gap-4 md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className="hidden md:flex absolute left-1/2 top-8 h-3 w-3 -translate-x-1/2 rounded-full bg-[#5B21B6]"></div>
                      <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                        <div className="rounded-[16px] border border-[#D8D7FF] bg-white p-5 shadow-[0_6px_16px_rgba(99,102,241,0.06)]">
                          <div className="mb-2 text-[14px] font-bold text-[#5B21B6]">{step.id} {step.title}</div>
                          <p className="text-[13px] leading-6 text-slate-600">{step.points}</p>
                        </div>
                      </div>
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {(study.wireframeShowcase || study.wireframes?.desktop || study.wireframes?.mobile?.length) && (
            <div className="space-y-5">
              <div className="rounded-[20px] overflow-hidden">
                {study.wireframeShowcase ? (
                  <img src={study.wireframeShowcase} alt={`${study.title} wireframes`} className="w-full h-auto object-cover" />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {study.wireframes?.desktop && <img src={study.wireframes.desktop} alt={`${study.title} desktop wireframe`} className="md:col-span-2 w-full h-auto rounded-[18px] border border-slate-200 bg-white" />}
                    {study.wireframes?.mobile?.map((mobile, idx) => (
                      <img key={idx} src={mobile} alt={`${study.title} mobile wireframe ${idx + 1}`} className="w-full h-auto rounded-[18px] border border-slate-200 bg-white" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {study.styleGuide && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Design System</span>
              </div>
              {study.designSystemIntro && <p className="text-[15px] leading-7 text-slate-600">{study.designSystemIntro}</p>}
              {study.designSystemLists && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.designSystemLists.map((list, idx) => (
                    <div key={idx}>
                      <h3 className="text-[14px] font-bold text-slate-900 mb-3">{list.title}</h3>
                      <ul className="space-y-2 text-[13px] leading-6 text-slate-600">
                        {list.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {study.designGuideImage && <img src={study.designGuideImage} alt={`${study.title} design system`} className="w-full h-auto rounded-[12px] border border-slate-200" />}
            </div>
          )}

          {(study.solutions || study.finalDeviceImage) && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Final Solution</span>
              </div>
              {study.solutions && (
                <div className="space-y-4">
                  {study.solutions.map((solution, idx) => (
                    <div key={idx}>
                      <h3 className="text-[14px] font-bold text-slate-900">{solution.title}</h3>
                      <p className="mt-1 text-[14px] leading-6 text-slate-600">{solution.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {study.finalDeviceImage && <img src={study.finalDeviceImage} alt={`${study.title} final solution`} className="w-full h-auto object-cover" />}
            </div>
          )}

          {(study.metrics || study.impactSummary) && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Results & Impact</span>
              </div>
              {study.metrics && (
                <div className="rounded-[18px] bg-[#F4F7FB] border border-slate-200 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className={`px-6 py-8 text-center ${idx !== study.metrics!.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} border-slate-200`}>
                        <div className={`text-[28px] font-bold ${metric.color || 'text-slate-900'}`}>{metric.value}</div>
                        <div className="mt-2 text-[13px] font-semibold text-slate-900">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  {study.impactSummary && (
                    <div className="border-t border-slate-200 px-6 py-7 text-center">
                      <h3 className="text-[15px] font-bold text-slate-900 mb-2">Project Impact</h3>
                      <p className="mx-auto max-w-3xl text-[14px] leading-6 text-slate-600">{study.impactSummary}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {study.testimonials && (
            <div className="space-y-5">
              <div className="rounded-[18px] bg-gradient-to-r from-[#6D28D9] to-[#9333EA] p-6 md:p-8">
                <h2 className="text-center text-[18px] font-bold text-white mb-6">User Feedback</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {study.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="rounded-[14px] bg-white p-5">
                      <p className="text-[13px] leading-6 text-slate-600">"{testimonial.quote}"</p>
                      <div className="mt-4 text-[12px] font-bold text-slate-900">{testimonial.author}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {study.keyLearnings && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-[15px] font-bold text-slate-900">
                <span className="inline-block h-4 w-1 rounded-full" style={{ backgroundColor: referenceAccent }}></span>
                <span>Key Learnings</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {study.keyLearnings.map((learning, idx) => (
                  <div key={idx} className="rounded-[16px] border border-slate-200 bg-white p-5">
                    <h3 className="text-[14px] font-bold text-slate-900">{learning.title}</h3>
                    <p className="mt-2 text-[13px] leading-6 text-slate-600">{learning.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {study.conclusion && (
            <div className="space-y-4 text-center">
              <h2 className="text-[18px] font-bold text-slate-900">Conclusion</h2>
              <p className="mx-auto max-w-4xl text-[14px] leading-7 text-slate-600">{study.conclusion}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );

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
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transform hover:-translate-y-1 tracking-wide mb-10"
              >
                Live Project
              </a>
            )}
            
            {study.heroImage && (
              <div className="mt-8 w-full max-w-5xl mx-auto z-10">
                <img src={study.heroImage} alt={`${study.title} hero`} className="w-full h-auto drop-shadow-2xl" />
              </div>
            )}
          </div>
        </section>

        {isReferenceLayout ? renderReferenceLayout() : (
        <div className="bg-[#F8FAFC]">
          {/* ROLE DETAILS & OVERVIEW */}
          <section className="py-24 px-4">
            <div className="container max-w-6xl mx-auto">
              
              {/* Horizontal Project Details */}
              <div className="bg-[#F8FAFC] rounded-[2rem] p-8 md:p-10 border border-slate-200/60 mb-16 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
                {study.roleDetails ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Object.entries(study.roleDetails).map(([key, value]) => (
                      <div key={key} className="relative pl-5 py-1">
                        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8B31FF] rounded-full"></div>
                        <div className="text-[13px] font-bold text-slate-500 mb-2 uppercase tracking-wider">{key}</div>
                        <div className="text-slate-900 font-medium text-[16px] leading-relaxed">{value}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="relative pl-5 py-1">
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8B31FF] rounded-full"></div>
                      <div className="text-[13px] font-bold text-slate-500 mb-2 uppercase tracking-wider">Service</div>
                      <div className="text-slate-900 font-medium text-[16px] leading-relaxed">{study.service}</div>
                    </div>
                    <div className="relative pl-5 py-1">
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8B31FF] rounded-full"></div>
                      <div className="text-[13px] font-bold text-slate-500 mb-2 uppercase tracking-wider">Category</div>
                      <div className="text-slate-900 font-medium text-[16px] leading-relaxed">{study.category}</div>
                    </div>
                    <div className="relative pl-5 py-1">
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#8B31FF] rounded-full"></div>
                      <div className="text-[13px] font-bold text-slate-500 mb-2 uppercase tracking-wider">Year</div>
                      <div className="text-slate-900 font-medium text-[16px] leading-relaxed">{study.year}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Full Width Overview */}
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Overview</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  {study.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CHALLENGES & OBJECTIVES */}
          {(study.challenges || study.challenge || study.objectives) && (
            <section className="py-16 px-4">
              <div className="container max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 ${study.challenge && study.objectives && study.objectivesLayout !== 'grey-bg-grid' ? 'lg:grid-cols-2 gap-16' : 'gap-16'}`}>
                  
                  {/* Left Column: The Problem / Challenges */}
                  <div className="space-y-16">
                    {/* The Problem */}
                    {study.challenge && (
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">The Challenge</h2>
                        <p className="text-slate-600 leading-relaxed text-[17px] mb-6">{study.challenge.description}</p>
                        <ul className="space-y-4">
                          {study.challenge.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-600 text-[16px] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        {study.challenge.additionalDescription && (
                          <p className="text-slate-600 leading-relaxed text-[16px] mt-6">{study.challenge.additionalDescription}</p>
                        )}
                      </div>
                    )}
                    
                    {/* Key Challenges */}
                    {study.challenges && !study.challenge && (
                      <div>
                        <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Challenges</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {study.challenges.map((challenge, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 rounded-[1rem] border border-slate-200 flex flex-col gap-2 hover:shadow-md transition-shadow">
                              <h4 className="font-bold text-[16px] text-slate-900">{challenge.title}</h4>
                              <p className="text-slate-500 leading-relaxed text-[15px]">{challenge.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Objectives */}
                  <div className={study.objectivesLayout === 'grey-bg-grid' ? "w-full" : ""}>
                    {study.objectives && (
                      <div className={study.objectivesLayout === 'grey-bg-grid' ? "bg-[#F8FAFC] p-10 md:p-12 rounded-[2.5rem] mt-4 border border-slate-100" : ""}>
                        <h2 className="text-3xl font-bold mb-8 text-slate-900">Goals & Objectives</h2>
                        <div className={`grid grid-cols-1 ${study.objectivesLayout === 'grey-bg-grid' ? 'md:grid-cols-3' : (!study.challenge ? 'md:grid-cols-2' : '')} gap-6`}>
                          {study.objectives.map((obj, idx) => (
                            <div key={idx} className={study.objectivesLayout === 'grey-bg-grid' ? "bg-transparent" : "bg-white p-8 rounded-[1.5rem] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100"}>
                              <h4 className="font-bold text-[18px] mb-4 text-slate-900">{obj.title}</h4>
                              {obj.description && <p className="text-slate-500 leading-relaxed text-[15px] mb-4">{obj.description}</p>}
                              {obj.points && (
                                <ul className="space-y-3 text-slate-600 text-[15px]">
                                  {obj.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span className="text-[#00B4A8] mt-0.5">✓</span>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* COMPETITIVE ANALYSIS */}
          {study.competitiveAnalysis && (
            <section className="py-16 px-4">
              <div className="container max-w-6xl mx-auto">
                <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-slate-100">
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">Competitive Analysis</h2>
                  {study.competitiveAnalysis.intro && <p className="text-slate-500 mb-10 text-lg leading-relaxed">{study.competitiveAnalysis.intro}</p>}
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    {study.competitiveAnalysis.columns.map((col, idx) => (
                      <div key={idx} className="pt-8 md:pt-0 md:px-8 first:pt-0 first:px-0 first:pl-0">
                        <h4 className="font-bold text-lg mb-6 text-slate-900">{col.title}</h4>
                        <ul className="space-y-5">
                          {col.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8B31FF] mt-2.5 flex-shrink-0"></span>
                              <div>
                                <div className="text-slate-700 text-[15px] font-medium leading-relaxed">{item.text}</div>
                                {item.subtitle && <div className="text-slate-500 text-[14px] mt-1">{item.subtitle}</div>}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

                {/* Success Metrics */}
                {study.metrics && (
                  <div className="bg-[#F8FAFC] p-8 md:p-10 rounded-[1.5rem] mt-16">
                    <h2 className="text-2xl font-bold mb-8 text-slate-900">Success Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
                      {study.metrics.map((result, idx) => (
                        <div key={idx} className="pt-6 md:pt-0 md:px-8 first:px-0 first:pt-0">
                          <div className={`text-4xl md:text-[40px] font-medium mb-3 ${result.color || 'text-slate-900'}`}>{result.value}</div>
                          <div className="text-slate-900 font-bold text-[18px] mb-1">{result.label}</div>
                          {result.sublabel && <div className="text-slate-500 text-[15px] leading-relaxed">{result.sublabel}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Target Audience */}
                {study.targetAudience && (
                  <div className="bg-white p-10 mt-10">
                    <h2 className={`text-2xl font-bold mb-6 text-slate-900 ${study.targetAudienceIntro ? 'text-left' : 'text-center mb-10'}`}>Target Audience</h2>
                    {study.targetAudienceIntro && <p className="text-slate-500 max-w-3xl text-[16px] mb-10 leading-relaxed">{study.targetAudienceIntro}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                      {study.targetAudience.map((audience, idx) => (
                        <div key={idx} className={`pt-6 md:pt-0 ${study.targetAudienceIntro ? 'md:pl-8 first:md:pl-0' : 'md:px-8 text-center items-center'} flex flex-col`}>
                          <h4 className={`font-bold text-lg mb-4 text-[#8B31FF] ${study.targetAudienceIntro ? 'w-full text-left' : ''}`}>{audience.title}</h4>
                          <p className={`text-slate-500 text-[15px] leading-relaxed ${study.targetAudienceIntro ? 'w-full text-left' : 'max-w-xs'}`}>{audience.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* User Roles */}
                {study.userRoles && (
                  <div className="bg-[#F8FAFC] p-10 md:p-12 rounded-[2.5rem] mt-10 border border-slate-100">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900">Users of GMB App</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {study.userRoles.map((role, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[1.5rem] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100">
                          <h4 className="font-bold text-xl mb-6 text-slate-900">{role.title}</h4>
                          <ul className="space-y-4">
                            {role.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#8B31FF] mt-2.5 flex-shrink-0"></span>
                                <span className="text-slate-600 text-[15px] leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* About Project */}
                {study.aboutProject && (
                  <div className="mt-20 mb-10">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">{study.aboutProject.title}</h2>
                    <p className="text-slate-600 leading-relaxed text-[17px]">{study.aboutProject.description}</p>
                  </div>
                )}

                {/* Key Findings Grid */}
                {study.keyFindingsGrid && (
                  <div className="mt-16 mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">Key Findings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {study.keyFindingsGrid.map((finding, idx) => (
                        <div key={idx} className="bg-white p-6 md:p-8 rounded-[1rem] border border-slate-200 flex flex-col gap-2 hover:shadow-md transition-shadow relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#4338CA]"></div>
                          <h4 className="font-bold text-[16px] text-[#4338CA] pl-2">{finding.title}</h4>
                          <p className="text-slate-500 leading-relaxed text-[15px] pl-2">{finding.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Research & Discovery */}
                {study.researchDiscovery && (
                  <div className="bg-[#8B31FF] p-10 md:p-12 rounded-[2.5rem] mt-10 text-white shadow-xl shadow-purple-500/10">
                    <h2 className="text-3xl font-bold mb-6">Research & Discovery</h2>
                    <p className="text-white/90 text-[16px] leading-relaxed mb-8">{study.researchDiscovery.description}</p>
                    <ul className="space-y-4">
                      {study.researchDiscovery.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-white/90 text-[16px] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Key Findings */}
                {study.keyFindings && (
                  <div className="bg-[#00B4A8] p-10 md:p-12 rounded-[2.5rem] mt-10 text-white shadow-xl shadow-teal-500/10">
                    <h2 className="text-3xl font-bold mb-8">Key Findings</h2>
                    <ul className="space-y-6">
                      {study.keyFindings.map((finding, idx) => {
                        const parts = finding.split(': ');
                        return (
                          <li key={idx} className="flex items-start gap-4 text-[15px] leading-relaxed">
                            <span className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0"></span>
                            <span>
                              {parts.length > 1 ? (
                                <>
                                  <span className="font-bold">{parts[0]}: </span>
                                  {parts.slice(1).join(': ')}
                                </>
                              ) : (
                                finding
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                
                {/* Design Solutions */}
                {study.designSolutions && (
                  <div className="mt-16">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900">Design Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {study.designSolutions.map((solution, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[1.5rem] shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                          <div className="w-12 h-12 rounded-full bg-[#8B31FF]/10 text-[#8B31FF] flex items-center justify-center font-bold mb-6 text-lg border border-[#8B31FF]/20">
                            {solution.id}
                          </div>
                          <h4 className="font-bold text-[18px] text-slate-900 mb-3">{solution.title}</h4>
                          <p className="text-slate-500 leading-relaxed text-[15px]">{solution.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Design Process */}
                {study.designProcess && (
                  <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900">{study.designProcessTitle || "Design Process"}</h2>
                    
                    {study.designProcessLayout === 'zigzag' ? (
                      <div className="relative py-8">
                        {/* Center Line for ZigZag */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2 hidden md:block"></div>
                        
                        <div className="space-y-12 md:space-y-0">
                          {study.designProcess.map((step, idx) => (
                            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 last:mb-0`}>
                              
                              {/* Connector & Number */}
                              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-[#8B31FF] rounded-full border-4 border-white items-center justify-center text-white font-bold text-xl shadow-md z-10">
                                {step.id}
                              </div>

                              {/* Card */}
                              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                <div className="bg-white p-8 rounded-[1.5rem] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-100 hover:-translate-y-1 transition-transform">
                                  <div className="w-12 h-12 bg-[#8B31FF] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 md:hidden">{step.id}</div>
                                  <h4 className="font-bold text-[20px] text-slate-900 mb-3">{step.title}</h4>
                                  <p className="text-slate-500 leading-relaxed text-[15px]">{step.points}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-0 relative">
                        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block"></div>
                        {study.designProcess.map((step, idx) => (
                          <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center p-4 md:p-6 relative group">
                            <div className="w-12 h-12 rounded-full bg-white border-[3px] border-[#8B31FF] flex items-center justify-center font-bold text-[#8B31FF] z-10 hidden md:flex flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                              {step.id}
                            </div>
                            <div className="flex-grow bg-white p-8 rounded-[1.5rem] shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-slate-100 w-full hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden">
                              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#8B31FF]"></div>
                              <div className="font-bold text-[#8B31FF] mb-2 md:hidden">{step.id}</div>
                              <h4 className="font-bold text-[20px] text-slate-900 mb-2">{step.title}</h4>
                              <p className="text-slate-500 leading-relaxed text-[15px]">{step.points}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}



          {/* USER PERSONAS */}
          {study.personas && (
            <section className="py-24 px-4 bg-white border-y border-slate-100">
              <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-6 text-slate-900">User Personas</h2>
                  {study.personasIntro && <p className="text-slate-500 max-w-2xl mx-auto text-lg">{study.personasIntro}</p>}
                </div>

                {study.personasLayout === 'simple' ? (
                  <div className="bg-[#8B31FF] p-10 md:p-12 rounded-[2.5rem] text-white shadow-xl shadow-purple-500/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {study.personas.map((persona, idx) => (
                        <div key={idx} className="bg-white/10 p-8 rounded-[1.5rem] border border-white/10 hover:bg-white/15 transition-all duration-300">
                          <h4 className="font-bold text-xl mb-4 text-white">{persona.name}</h4>
                          {persona.role && <div className="text-white/80 font-medium mb-3 text-[14px]">{persona.role}</div>}
                          {persona.bio && <p className="text-white/70 text-[14px] italic leading-relaxed mb-4">"{persona.bio}"</p>}
                          <ul className="space-y-3">
                            {persona.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                                <span className="text-white/90 text-[14px] leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : study.personasLayout === 'simple-list' ? (
                  <div className="bg-[#8B31FF] p-10 md:p-12 rounded-[2.5rem] text-white shadow-xl shadow-purple-500/10">
                    <ul className="space-y-4">
                      {study.personas.map((persona, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-white/90 text-[18px] font-medium leading-relaxed">
                          <span className="w-2 h-2 rounded-full bg-white mt-2.5 flex-shrink-0"></span>
                          <span>{persona.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : study.personas[0]?.goals ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {study.personas.map((persona, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] p-8 md:p-10 rounded-[2rem] border border-slate-200 flex flex-col hover:shadow-lg transition-shadow">
                        <div className="border-b border-slate-200 pb-6 mb-6">
                          <h4 className="text-2xl font-bold text-[#8B31FF] mb-2">{persona.name}</h4>
                          {persona.role && <div className="text-slate-600 font-medium mb-4">{persona.role}</div>}
                          {persona.bio && <p className="text-slate-500 text-[15px] italic leading-relaxed">"{persona.bio}"</p>}
                        </div>
                        
                        <div className="grid grid-cols-1 gap-6 flex-grow">
                          {persona.goals && (
                            <div>
                              <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><span className="text-teal-500 text-lg">✦</span> Goals</h5>
                              <ul className="space-y-2">
                                {persona.goals.map((goal, i) => (
                                  <li key={i} className="text-slate-600 text-[14px] flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></span>
                                    <span>{goal}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {persona.painPoints && (
                            <div>
                              <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><span className="text-pink-500 text-lg">✕</span> Pain Points</h5>
                              <ul className="space-y-2">
                                {persona.painPoints.map((point, i) => (
                                  <li key={i} className="text-slate-600 text-[14px] flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative py-4 max-w-5xl mx-auto">
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
                )}
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

          {study.wireframeShowcase && (
            <section className="py-8 px-4 bg-[#F8FAFC]">
              <div className="container max-w-6xl mx-auto">
                <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                  <img src={study.wireframeShowcase} alt={`${study.title} wireframe overview`} className="w-full h-auto object-cover" />
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
                <div className="flex flex-col md:flex-row gap-16 items-center">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6 text-slate-900">The Solution</h2>
                    {study.solutionIntro && <p className="text-slate-500 mb-10 text-lg leading-relaxed">{study.solutionIntro}</p>}

                    <div className="space-y-6">
                      {study.solutions.map((solution, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[1.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#8B31FF]"></div>
                          <h4 className="text-[18px] font-bold mb-3 text-slate-900">{solution.title}</h4>
                          <p className="text-slate-500 leading-relaxed text-[15px]">{solution.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {study.solutionImage && (
                    <div className="w-full md:w-1/2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#8B31FF]/10 translate-x-4 translate-y-4 rounded-[2rem] -z-10"></div>
                        <img src={study.solutionImage} alt="The Solution" className="w-full h-auto rounded-[2rem] shadow-xl border border-slate-100 object-cover" />
                      </div>
                    </div>
                  )}
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

          {study.designGuideImage && (
            <section className="py-10 px-4 bg-white">
              <div className="container max-w-6xl mx-auto">
                <div className="bg-[#F8FAFC] rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                  <img src={study.designGuideImage} alt={`${study.title} design guide`} className="w-full h-auto object-cover" />
                </div>
              </div>
            </section>
          )}

          {study.finalDeviceImage && (
            <section className="py-10 px-4 bg-[#F8FAFC]">
              <div className="container max-w-5xl mx-auto">
                <div className="overflow-hidden">
                  <img src={study.finalDeviceImage} alt={`${study.title} responsive mockups`} className="w-full h-auto object-contain" />
                </div>
              </div>
            </section>
          )}

          {/* FINAL OUTCOMES */}
          {study.finalOutcomes && (
            <section className="py-24 px-4 bg-[#F8FAFC]">
              <div className="container max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Final Outcomes</h2>
                <div className={`grid grid-cols-1 gap-8 ${study.finalOutcomes.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-3'}`}>
                  {study.finalOutcomes.map((outcome, idx) => (
                    <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-center">
                      <div className={`text-5xl md:text-[56px] font-bold mb-4 ${outcome.color || 'text-slate-900'}`}>{outcome.value}</div>
                      <h4 className="font-bold text-xl text-slate-900 mb-2">{outcome.label}</h4>
                      {outcome.description && <p className="text-slate-500 text-[15px] leading-relaxed mt-2">{outcome.description}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* KEY LEARNINGS */}
          {study.keyLearnings && (
            <section className="py-24 px-4 bg-white">
              <div className="container max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-slate-900 text-center">Key Learnings</h2>
                {study.keyLearningsLayout === 'text-grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {study.keyLearnings.map((learning, idx) => (
                      <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 relative group flex gap-5 items-start">
                        <div className="w-10 h-10 rounded-full bg-[#8B31FF]/10 text-[#8B31FF] flex items-center justify-center font-bold flex-shrink-0 text-sm">
                          0{idx + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-[#8B31FF] transition-colors">{learning.title}</h4>
                          <p className="text-slate-500 text-[15px] leading-relaxed">{learning.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {study.keyLearnings.map((learning, idx) => (
                      <div key={idx} className="bg-[#8B31FF] p-10 md:p-12 rounded-[2.5rem] shadow-xl shadow-purple-500/10 text-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                        <h4 className="text-2xl font-bold mb-4">{learning.title}</h4>
                        <p className="text-white/90 text-[16px] leading-relaxed relative z-10">{learning.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* KEY TAKEAWAYS */}
          {study.keyTakeaways && (
            <section className="py-16 px-4 bg-white">
              <div className="container max-w-5xl mx-auto">
                <div className="bg-[#8B31FF] p-10 md:p-14 rounded-[2.5rem] text-white shadow-xl shadow-purple-500/10 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-8">Key Takeaways</h2>
                  <ul className="space-y-6">
                    {study.keyTakeaways.map((takeaway, idx) => {
                      const parts = takeaway.split(': ');
                      return (
                        <li key={idx} className="flex flex-col md:flex-row items-center md:items-start gap-4 text-[16px] md:text-lg leading-relaxed text-white/90">
                          <span className="w-2 h-2 rounded-full bg-white/80 mt-2 flex-shrink-0 hidden md:block"></span>
                          <span>
                            {parts.length > 1 ? (
                              <>
                                <span className="font-bold text-white">{parts[0]}: </span>
                                {parts.slice(1).join(': ')}
                              </>
                            ) : (
                              takeaway
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* TESTIMONIALS */}
          {study.testimonials && (
            <section className={`py-24 px-4 border-t border-slate-100 ${study.testimonialsLayout === 'purple-bg' ? 'bg-[#8B31FF]' : 'bg-white'}`}>
              <div className="container max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {study.testimonials.map((testimonial, idx) => {
                    const isPurpleBg = study.testimonialsLayout === 'purple-bg';
                    return (
                      <div key={idx} className={`${isPurpleBg ? 'bg-white/10 border-white/10 text-white' : 'bg-[#F8FAFC] border border-slate-100 text-slate-700'} p-10 md:p-12 rounded-[2.5rem] relative ${!isPurpleBg ? 'border' : ''}`}>
                        <div className={`text-[120px] font-serif leading-none absolute top-4 left-6 opacity-10 ${isPurpleBg ? 'text-white' : 'text-slate-400'}`}>"</div>
                        <p className={`text-lg md:text-xl leading-relaxed mb-8 relative z-10 italic ${isPurpleBg ? 'text-white' : 'text-slate-700'}`}>"{testimonial.quote}"</p>
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full ${testimonial.colorClass || (isPurpleBg ? 'bg-white/20' : 'bg-slate-300')} flex-shrink-0`}></div>
                          <div>
                            <div className={`font-bold ${isPurpleBg ? 'text-white' : 'text-slate-900'}`}>{testimonial.author}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
