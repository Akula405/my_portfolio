export type SocialPlatform = "github" | "linkedin" | "x" | "instagram" | "youtube" | "email";
export type IconName = SocialPlatform | "external" | "arrow" | "download";

export const portfolio = {
  person: {
    name: "Satish Akula",
    displayName: "Satish Akula",
    initials: "SA",
    role: "Frontend-focused Full-stack Developer",
    location: "Hyderabad, India",
    email: "akulasatish405@gmail.com",
    intro: "I turn ideas into intuitive interfaces, connecting thoughtful frontend design with dependable APIs and practical AI experiences.",
    about: "I’m a frontend-focused full-stack developer who cares as much about how a product feels as how it works. I bring together React, Next.js, and modern web technologies to build clear, responsive experiences backed by thoughtful application logic.",
    aboutMore: "My approach starts with the person using the product: simplify the journey, make interactions feel natural, and keep the code easy to evolve. Alongside frontend engineering, I’m building my backend and Python toolkit and exploring how retrieval, language models, and AI-assisted workflows can make everyday software more useful.",
    availability: "Frontend · Fullstack · AI-assisted development",
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
  tickerSkills: ["React", "Next.js", "JavaScript", "TypeScript", "Redux", "Node.js", "Python", "REST APIs", "Tailwind", "AI / OpenAI", "RAG", "Embeddings", "Vector databases", "LLMs", "Tokenization"],
  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Kakinada Institute of Engineering and Technologies",
    detail: "Kakinada · May 2018",
  },
  experience: [
    {
      "period": "Dec 2025 — Jun 2026",
      "role": "Software Engineer",
      "company": "Nisum Technologies",
      "location": "Hyderabad",
      "summary": "Focused on the point where product discovery meets frontend engineering. I shaped API-driven shopping interfaces into reusable React experiences, balancing clear navigation, responsive layouts, and thoughtful loading states. Working with backend and QA teams helped keep the experience consistent from the first interaction to the final result.",
      "technologies": [
        "React",
        "React Router",
        "JavaScript",
        "REST APIs",
        "Tailwind CSS",
        "AI-assisted development"
      ]
    },
    {
      "period": "May 2025 — Sep 2025",
      "role": "Associate",
      "company": "Synechron",
      "location": "Hyderabad",
      "summary": "Worked on making insurance self-service feel approachable. I connected policy, profile, and payment information into coherent dashboard journeys, paying attention to how people find answers and complete everyday tasks. Debugging state and rendering behavior was an important part of keeping those experiences dependable.",
      "technologies": [
        "React",
        "Redux",
        "REST APIs",
        "JavaScript",
        "React Profiler",
        "Chrome DevTools"
      ]
    },
    {
      "period": "Jul 2022 — May 2025",
      "role": "Frontend Developer",
      "company": "SGR Info Systems Pvt Ltd",
      "location": "Hyderabad",
      "summary": "Translated asset-management workflows into a practical Vue application. My focus was a consistent interface across inventory views and lifecycle actions, supported by reusable components and predictable state. I worked through the details of API integration, search, and feedback so complex operational data stayed easy to navigate.",
      "technologies": [
        "Vue 3",
        "Pinia",
        "JavaScript",
        "REST APIs",
        "CSS",
        "Vue DevTools"
      ]
    },
    {
      "period": "Apr 2019 — Jun 2022",
      "role": "IT & BME Specialist",
      "company": "Sarvottam Healthcare Pvt Ltd",
      "location": "Kakinada",
      "summary": "Healthcare gave me a close view of how people rely on technology in everyday work and sparked my move into frontend development. I explored patient and doctor journeys through a React dashboard, connecting health-record views with mock APIs and learning to balance information density, performance, and clarity.",
      "technologies": [
        "React",
        "Context API",
        "Tailwind CSS",
        "JavaScript",
        "Mock REST APIs",
        "Lighthouse"
      ]
    }
  ],
  skills: [
    { title: "Frontend", symbol: "</>", description: "Responsive interfaces, reusable components, and thoughtful interactions.", items: ["React.js", "Vue.js", "Next.js", "JavaScript", "TypeScript", "HTML / CSS", "Tailwind CSS", "Material UI", "DaisyUI"] },
    { title: "State & data flow", symbol: "{ }", description: "Predictable application state and efficient server data management.", items: ["Redux Toolkit", "Zustand", "Pinia", "Context API", "TanStack Query"] },
    { title: "Backend & APIs", symbol: "↔", description: "Connected experiences with secure API integration and real-time data.", items: ["Node.js", "Python", "REST APIs", "GraphQL", "Fetch / Axios", "WebSocket", "Socket.io", "JWT / OAuth", "CORS"] },
    { title: "Databases", symbol: "DB", description: "Working with relational and document-based data stores.", items: ["SQLite", "MongoDB"] },
    { title: "CI/CD & developer tools", symbol: "~/", description: "Version control and build tooling that support delivery workflows.", items: ["Git / GitHub", "NPM", "Webpack", "Babel", "VS Code", "Agile / Scrum"] },
    { title: "Testing & performance", symbol: "✓", description: "Reliable interfaces, focused debugging, and faster browsing experiences.", items: ["Jest", "React Testing Library", "Chrome DevTools", "React Profiler", "Redux DevTools", "Lazy loading"] },
    { title: "AI applications & GenAI", symbol: "✧", description: "Exploring language models and context-aware AI application patterns.", items: ["AI / OpenAI", "LLMs", "RAG", "Vector databases (VDB)", "Embeddings", "Tokenization", "Semantic search", "Context windows", "MCP servers", "Prompt engineering", "AI agents", "Evaluation"] },
    { title: "AI-assisted development", symbol: "⌘", description: "AI tools for coding, debugging, refactoring, and code review.", items: ["ChatGPT", "GitHub Copilot", "Cursor", "Claude", "AI-assisted coding", "AI code review"] },
  ],
  projects: [
    { number: "01", title: "Netflix GPT", description: "A movie discovery project bringing a Netflix-inspired browsing experience and AI into one interface.", tags: ["Movies", "AI", "Web application"], accent: "coral", liveUrl: "https://netflix-gpt-iota-six.vercel.app/", githubUrl: "https://github.com/" },
    { number: "02", title: "Recipe App", description: "A recipe discovery application for exploring dishes and finding inspiration for your next meal.", tags: ["Recipes", "Discovery", "Web application"], accent: "green", liveUrl: "https://recipe-app-gules-xi.vercel.app/", githubUrl: "https://github.com/" },
    { number: "03", title: "Next project", description: "More project details will be shared here soon.", tags: ["Coming soon"], accent: "violet", liveUrl: null, githubUrl: "https://github.com/" },
    { number: "04", title: "More to come", description: "Another project is on its way. Check back for the details and live demo.", tags: ["Coming soon"], accent: "blue", liveUrl: null, githubUrl: "https://github.com/" },
  ],
  socials: [
    { label: "GitHub (platform homepage)", platform: "github", href: "https://github.com/" },
    { label: "LinkedIn", platform: "linkedin", href: "https://www.linkedin.com/in/akulaSatish" },
    { label: "X / Twitter (platform homepage)", platform: "x", href: "https://x.com/" },
    { label: "Instagram (platform homepage)", platform: "instagram", href: "https://www.instagram.com/" },
    { label: "YouTube (platform homepage)", platform: "youtube", href: "https://www.youtube.com/" },
    { label: "Email", platform: "email", href: "mailto:akulasatish405@gmail.com" },
  ],
} as const;
