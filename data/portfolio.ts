export type SocialPlatform = "github" | "linkedin" | "x" | "instagram" | "youtube" | "email";
export type IconName = SocialPlatform | "external" | "arrow" | "download";

export const portfolio = {
  person: {
    name: "Satish Akula",
    initials: "SA",
    role: "Software Engineer",
    location: "Hyderabad, India",
    email: "akulasatish405@gmail.com",
    phone: "+91 8074090653",
    phoneUrl: "tel:+918074090653",
    intro: "I build responsive web experiences with React, Vue, and modern JavaScript, with a focus on performance and practical AI applications.",
    about: "I’m Satish, a software engineer based in Hyderabad with 7 years of experience and 4+ years of hands-on experience in React.js. I specialize in frontend development, from reusable interfaces to API-driven applications.",
    aboutMore: "My work spans commerce, insurance, inventory management, and healthcare. I enjoy solving UI and performance problems, collaborating with cross-functional Agile teams, and using AI-assisted coding, debugging, and refactoring to support product delivery.",
    availability: "React · Vue · AI-assisted development",
    resumeUrl: "/satish_resume_UI.pdf",
    imageUrl: "/profile-placeholder.svg",
    imageAlt: "Profile photo placeholder",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "7", label: "Years of experience" },
    { value: "4+", label: "Years with React" },
    { value: "4", label: "Industry domains" },
  ],
  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Kakinada Institute of Engineering and Technologies",
    detail: "Kakinada · May 2018",
  },
  experience: [
    {
      period: "Dec 2025 — Jun 2026",
      role: "Software Engineer",
      company: "Nisum Technologies · Hyderabad",
      summary: "Built responsive React product browsing experiences backed by REST APIs, with a focus on smooth navigation and performance.",
      highlights: [
        "Developed product listings and reusable product cards with filtering, sorting, debounced search, and throttled interactions.",
        "Implemented lazy loading, pagination, shimmer loading states, and online/offline indicators.",
        "Built dynamic and protected routes with React Router and responsive interfaces with Tailwind CSS.",
        "Used AI-assisted coding and debugging while collaborating with QA, backend engineers, and business analysts in Agile/Scrum teams.",
      ],
    },
    {
      period: "May 2025 — Sep 2025",
      role: "Associate",
      company: "Synechron · Hyderabad",
      summary: "Developed insurance dashboard features for policy management, renewals, customer profiles, and payments.",
      highlights: [
        "Integrated APIs for policy details, renewals, payment history, and upcoming payment schedules.",
        "Built profile update workflows and a responsive accordion-based FAQ experience.",
        "Resolved defects using Redux, React, Chrome Developer Tools, and React Profiler.",
      ],
    },
    {
      period: "Jul 2022 — May 2025",
      role: "Frontend Developer",
      company: "SGR Info Systems Pvt Ltd · Hyderabad",
      summary: "Built a responsive inventory management dashboard using Vue 3 and Pinia for organizational asset tracking.",
      highlights: [
        "Created reusable components for inventory CRUD, asset details, and status management.",
        "Implemented asset assignment, return, repair, and retirement workflows.",
        "Integrated inventory and employee REST APIs with loading and error handling; optimized UI performance with computed properties, debounced search, and lazy loading.",
      ],
    },
    {
      period: "Apr 2019 — Jun 2022",
      role: "IT & BME Specialist",
      company: "Sarvottam Healthcare Pvt Ltd · Kakinada",
      summary: "Transitioned from biomedical engineering into frontend development through JavaScript, React, and modern web technologies.",
      highlights: [
        "Built a responsive patient dashboard with React, Tailwind CSS, and Context API for health records and consultations.",
        "Integrated mock REST APIs for lab results, prescription history, and doctor availability, with role-based Patient and Doctor views.",
        "Used lazy loading for medical history components and images, achieving a 90+ Lighthouse score.",
      ],
    },
  ],
  skills: [
    { title: "Frontend", symbol: "</>", description: "Responsive interfaces, reusable components, and thoughtful interactions.", items: ["React.js", "Vue.js", "Next.js", "JavaScript", "TypeScript", "HTML / CSS", "Tailwind CSS", "Material UI", "DaisyUI"] },
    { title: "State & data flow", symbol: "{ }", description: "Predictable application state and efficient server data management.", items: ["Redux Toolkit", "Zustand", "Pinia", "Context API", "TanStack Query"] },
    { title: "Backend & APIs", symbol: "↔", description: "Connected experiences with secure API integration and real-time data.", items: ["Node.js", "REST APIs", "GraphQL", "Fetch / Axios", "WebSocket", "Socket.io", "JWT / OAuth", "CORS"] },
    { title: "Databases", symbol: "DB", description: "Working with relational and document-based data stores.", items: ["SQLite", "MongoDB"] },
    { title: "CI/CD & developer tools", symbol: "~/", description: "Version control and build tooling that support delivery workflows.", items: ["Git / GitHub", "NPM", "Webpack", "Babel", "VS Code", "Agile / Scrum"] },
    { title: "Testing & performance", symbol: "✓", description: "Reliable interfaces, focused debugging, and faster browsing experiences.", items: ["Jest", "React Testing Library", "Chrome DevTools", "React Profiler", "Redux DevTools", "Lazy loading"] },
    { title: "AI applications & GenAI", symbol: "✧", description: "Exploring language models and context-aware AI application patterns.", items: ["AI / OpenAI", "LLMs", "Base models", "RAG", "MCP servers", "Prompt engineering"] },
    { title: "AI-assisted development", symbol: "⌘", description: "AI tools for coding, debugging, refactoring, and code review.", items: ["ChatGPT", "GitHub Copilot", "Cursor", "Claude", "AI-assisted coding", "AI code review"] },
  ],
  projects: [
    { number: "01", title: "Netflix GPT", description: "A movie discovery project bringing a Netflix-inspired browsing experience and AI into one interface.", tags: ["Movies", "AI", "Web application"], accent: "coral", liveUrl: "https://netflix-gpt-iota-six.vercel.app/", githubUrl: null },
    { number: "02", title: "Recipe App", description: "A recipe discovery application for exploring dishes and finding inspiration for your next meal.", tags: ["Recipes", "Discovery", "Web application"], accent: "green", liveUrl: "https://recipe-app-gules-xi.vercel.app/", githubUrl: null },
    { number: "03", title: "Next project", description: "More project details will be shared here soon.", tags: ["Coming soon"], accent: "violet", liveUrl: null, githubUrl: null },
    { number: "04", title: "More to come", description: "Another project is on its way. Check back for the details and live demo.", tags: ["Coming soon"], accent: "blue", liveUrl: null, githubUrl: null },
  ],
  socials: [
    { label: "GitHub", platform: "github", href: null },
    { label: "LinkedIn", platform: "linkedin", href: "https://www.linkedin.com/in/akulaSatish" },
    { label: "X / Twitter", platform: "x", href: null },
    { label: "Instagram", platform: "instagram", href: null },
    { label: "YouTube", platform: "youtube", href: null },
    { label: "Email", platform: "email", href: "mailto:akulasatish405@gmail.com" },
  ],
} as const;
