export const profile = {
  name: "Hustin Cao",
  role: "Full-stack engineer",
  intro:
    "I build clear, useful digital products with a soft spot for thoughtful front-end work.",
  bio: [
    "I’m a full-stack developer who enjoys turning complex ideas into interfaces that feel simple. My work lives across the stack, but I’m happiest where product thinking, design details, and front-end engineering meet.",
    "I’m a University of Michigan–Ann Arbor graduate, a curious toolmaker, and a firm believer that the last 10% of polish is where a product starts to feel genuinely good.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/hustincao" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hustin-cao" },
  ],
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
];

export const projects = [
  {
    number: "01",
    title: "Michigan Riftbound",
    category: "Community product",
    description:
      "A local card inventory tool that helps Riftbound players compare availability and prices across Michigan game stores.",
    tags: ["React", "React Router", "Tailwind CSS"],
    href: "https://michiganriftbound.com",
    art: "riftbound",
  },
  {
    number: "02",
    title: "Compiler Optimization Research",
    category: "Research project",
    description:
      "Exploring neural architecture-aware compiler optimizations across LLVM, TVM, BERT, and ResNet models.",
    tags: ["LLVM", "TVM", "Deep learning"],
    href: "https://github.com/hustincao/eecs583_project",
    art: "compiler",
  },
  {
    number: "03",
    title: "Parallel Nonogram",
    category: "Systems project",
    description:
      "A parallel puzzle solver implemented with Python, C++, OpenMP, and a supporting test suite.",
    tags: ["C++", "OpenMP", "Python"],
    href: "https://github.com/hustincao/parallel-nonogram",
    art: "nonogram",
  },
];

export const toolkit = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Vue",
  "Svelte",
  "shadcn/ui",
  "ASP.NET Core",
  "SQL",
];

export const strengths = [
  {
    number: "01",
    title: "Interface craft",
    description:
      "Responsive, accessible interfaces with a close eye on hierarchy, motion, and the details people feel before they notice.",
  },
  {
    number: "02",
    title: "Full-stack range",
    description:
      "Comfort moving from component systems and client state to APIs, data, and the infrastructure that holds a product together.",
  },
  {
    number: "03",
    title: "Product thinking",
    description:
      "A practical approach to shaping ambiguous ideas, finding the useful core, and shipping work that solves the right problem.",
  },
];

export const experience = [
  {
    company: "Initium.AI",
    period: "2022 — Present",
    summary:
      "Growing from an internship into a front-end engineering role, focused on building product experiences for an AI company.",
    roles: [
      { title: "Frontend Engineer", period: "2023 — 2026" },
      { title: "Frontend Intern", period: "2022 — 2023" },
    ],
  },
  {
    company: "The Really Useful Information Company",
    period: "2017 — 2022",
    summary:
      "Worked across legacy modernization, internal tools, content systems, and revenue-generating web products.",
    roles: [
      { title: "Full-stack Engineer", period: "2021 — 2022" },
      { title: "Full-stack Intern", period: "2017 — 2021" },
    ],
    highlights: [
      "Modernized front-end foundations with Bootstrap 5 and Webpack.",
      "Migrated an internal CMS from Knockout.js to Vue.js.",
      "Built single-page applications and internal productivity tools.",
      "Worked with ASP.NET Core, Microsoft SQL, and Azure Cosmos DB.",
    ],
  },
  {
    company: "Saagara",
    period: "2016 — 2017",
    summary:
      "An early role spanning product research, quality assurance, and hands-on web work for mobile health products.",
    roles: [{ title: "Research / QA Intern", period: "2016 — 2017" }],
  },
];

export const education = [
  {
    degree: "MSE in Computer Science",
    school: "University of Michigan–Ann Arbor",
    period: "2022 — 2023",
  },
  {
    degree: "BSE in Computer Science",
    school: "University of Michigan–Ann Arbor",
    period: "2017 — 2021",
  },
];
