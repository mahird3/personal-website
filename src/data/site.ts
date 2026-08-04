export const site = {
  initials: "MD",
  name: "Mahir Dursunoglu",
  email: "dursunoglumahir@gmail.com",
  location: "Paris, France",
  role: "AI Engineer & Data Scientist",
  headline: "Mahir Dursunoglu",
  bio: [
    "AI Engineer & Data Scientist focused on generative AI, large language models, and MLOps.",
    "I design, evaluate, and industrialize AI systems, from research prototypes to production services, across financial services and cybersecurity.",
  ],
  availability: "Available for full-time roles starting from October 2026.",
  links: {
    email: "mailto:dursunoglumahir@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahir-dursunoglu/",
    github: "https://github.com/mahird3",
    booking: "https://cal.com/mahir-dursunoglu",
  },
} as const;

export type TechItem = {
  name: string;
  icon: string;
};

export const techStack: TechItem[] = [
  // Languages
  { name: "Python", icon: "python" },
  { name: "SQL", icon: "sql" },
  { name: "C/C++", icon: "cplusplus" },
  // Classical ML & data
  { name: "NumPy", icon: "numpy" },
  { name: "Pandas", icon: "pandas" },
  { name: "Scikit-learn", icon: "sklearn" },
  { name: "XGBoost", icon: "xgboost" },
  // Deep learning
  { name: "PyTorch", icon: "pytorch" },
  { name: "TensorFlow", icon: "tensorflow" },
  // GenAI
  { name: "Hugging Face", icon: "huggingface" },
  { name: "LangChain", icon: "langchain" },
  { name: "LangGraph", icon: "langgraph" },
  { name: "AWS Bedrock", icon: "bedrock" },
  { name: "LiteLLM", icon: "litellm" },
  // Backend & data stores
  { name: "FastAPI", icon: "fastapi" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Milvus", icon: "milvus" },
  // Infra & MLOps
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "AWS", icon: "aws" },
  { name: "Airflow", icon: "airflow" },
  { name: "Git", icon: "git" },
];

/**
 * Project card template - replace these entries with your own work.
 * Fields: name, description, status ("Active" | "Completed" | "Sold" | "Under construction"), icon, href?
 */
export type Project = {
  name: string;
  description: string;
  status: "Active" | "Completed" | "Sold" | "Under construction";
  icon: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Père Lachaise Online",
    description:
      "A visit planner for Père Lachaise cemetery in Paris, built around AI-assisted search: ask in plain language, like \"the singer who recorded Milord\", \"mathematicians who lived through the Belle Époque\", or \"Polish composers\", and get the matching graves, no exact name needed. Add them to an itinerary and the app orders them into an efficient walking route on an interactive map. Maps 293 graves to exact locations and indicates divisions for roughly 7,000 more, combining the APPL notable-graves database with OpenStreetMap, Wikipedia, and Wikidata.",
    status: "Active",
    icon: "tomb",
    href: "https://www.perelachaise.online/",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  logo: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Mindlapse",
    role: "AI Engineer Intern",
    period: "Apr. 2026 – Oct. 2026",
    location: "Paris, France",
    logo: "/companies/mindlapse.png",
    bullets: [
      "Built 10+ AI features across nine Python/FastAPI microservices (LangGraph, LangChain, LiteLLM, Docker), including RAG pipelines that automate compliance work analysts used to do by hand: drafting risk scenarios, recommending risk treatments, generating executive summaries, and extracting questions from security questionnaires.",
      "Made every AI answer cite the NIST CSF, NIS2 or ENISA control it came from, using Milvus vector search and schema validation to stop the model inventing controls that don't exist.",
      "Improved AI-assessed security maturity accuracy from ~40% to ~90% across 135 NIST controls. Built an evaluation harness to measure quality first, then tuned retrieval and prompts against it. The results feed a deterministic scoring engine, so final scores stay auditable.",
      "Kept the AI services reliable in production with automatic retries on model failures, typed API contracts, prompt-injection checks, and async webhook delivery so slow LLM calls never block the app (FastAPI, PostgreSQL, APISIX).",
    ],
  },
  {
    company: "Société Générale via Alenia Consulting",
    role: "Data Scientist / AI Consultant Intern",
    period: "Apr. 2024 – Oct. 2024",
    location: "Paris, France",
    logo: "/companies/sg.png",
    bullets: [
      "Architected an intelligent AI coding agent (LangGraph, Python) that uses RAG to dynamically query technical documentation and automate complex DevOps and data engineering workflows.",
      "Automated multi-cloud CI/CD pipeline generation (Jenkins, Docker, Kubernetes), accelerating deployment configuration turnaround from hours down to ~3 minutes.",
      "Elevated generated-code accuracy from 55% to 90% by building systematic evaluation frameworks and refining prompt engineering prior to production rollout.",
    ],
  },
  {
    company: "EY (Ernst & Young)",
    role: "Data Analyst & Consultant Intern",
    period: "Jun. 2022 – Aug. 2022",
    location: "Istanbul, Turkey",
    logo: "/companies/ey.webp",
    bullets: [
      "Assisted the Forensic Technology & Discovery Services (FTDS) team in cleaning and reconciling ERP enterprise data using SQL.",
      "Utilized Python for basic statistical analysis and NLP semantic filtering to help identify potential anomalies in financial transactions.",
      "Supported senior analysts with data preparation, audit checks, and quantitative reporting for ongoing forensic investigations.",
    ],
  },
  {
    company: "Yapı Kredi",
    role: "Credit Risk Control and Modeling Assistant Specialist Intern",
    period: "Feb. 2022 – Apr. 2022",
    location: "Istanbul, Turkey",
    logo: "/companies/yapikredi.png",
    bullets: [
      "Assisted in developing baseline probability-of-default (PD) machine learning models using Logistic Regression and XGBoost to support credit risk assessments.",
      "Supported the migration of legacy risk workflows from SAS to Python, helping improve code maintainability and execution speed.",
      "Contributed to data preparation, model validation checks, and routine reporting alongside the senior risk modeling team.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  period: string;
  logo: string;
};

export const education: Education[] = [
  {
    school: "Université Paris-Saclay",
    degree: "M.Sc. in Data Science",
    period: "Sep. 2025 – Sep. 2026",
    logo: "/universities/paris-saclay.webp",
  },
  {
    school: "Sorbonne Université",
    degree: "M.Sc. in Applied Mathematics",
    period: "Sep. 2022 – Sep. 2024",
    logo: "/universities/sorbonne-logo.webp",
  },
  {
    school: "École Polytechnique",
    degree: "Exchange Program in Mathematics and Informatics",
    period: "Jan. 2020 – Jul. 2020",
    logo: "/universities/polytechnique.svg",
  },
  {
    school: "Bosphorus University",
    degree: "M.Sc. in Mathematics (dropped out)",
    period: "Sep. 2021 – Sep. 2022",
    logo: "/universities/bogazici.webp",
  },
  {
    school: "Bosphorus University",
    degree: "B.Sc. in Mathematics",
    period: "Sep. 2016 – Jul. 2021",
    logo: "/universities/bogazici.webp",
  },
];

export type Social = {
  name: string;
  href: string;
  icon: string;
};

export const socials: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mahir-dursunoglu/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    href: "https://github.com/mahird3",
    icon: "github",
  },
];
