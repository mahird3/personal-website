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
  /** One-paragraph context: what the company/assignment was and the headline outcome. */
  summary?: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Mindlapse",
    role: "AI Engineer Intern",
    period: "Apr. 2026 – Oct. 2026",
    location: "Paris, France",
    logo: "/companies/mindlapse.png",
    summary: "Startup building an AI-augmented cyber governance platform.",
    bullets: [
      "Shipped 10+ AI features across nine Python/FastAPI microservices (LangGraph, LangChain, Docker, Kubernetes, PostgreSQL), used by the compliance teams of large enterprise clients to draft the risk scenarios, risk treatments, executive summaries and security questionnaires consultants used to write by hand.",
      "Built LLM agents and RAG pipelines that read a client's full document set and assess its security maturity against NIST CSF and NIS2: Airflow document processing, hybrid search over a Milvus vector index, a citation to the supporting passage on every answer, and a deterministic scoring engine downstream so final scores stay auditable.",
      "Raised the AI risk score's agreement with the experts' own assessment from ~40% to ~90% across 135 NIST controls: scoped correctness criteria with the founder and cyber experts, built an evaluation harness, then tuned retrieval and prompts against it.",
      "Fine-tuned the embedding model with LoRA (Hugging Face PEFT) on a question-to-passage reference set built with the domain experts, lifting retrieval recall from ~70% to ~90%.",
      "Built the LiteLLM gateway that carries every model call: automatic fallback to a backup model when a provider goes down, spend caps, and models served from AWS Bedrock or self-hosted on GPU with vLLM.",
      "Kept the services reliable in production: typed API contracts, prompt-injection checks, async webhook delivery so slow LLM calls never block the app (APISIX), OpenTelemetry traces and metrics in Grafana, and GitHub Actions regression tests on model answers for every release.",
    ],
  },
  {
    company: "Société Générale (via Alenia Consulting)",
    role: "Data Scientist / AI Consultant Intern",
    period: "Apr. 2024 – Oct. 2024",
    location: "Paris, France",
    logo: "/companies/sg.png",
    summary: "Consulting assignment at the client, scoped directly with its developers.",
    bullets: [
      "Built an AI coding agent (Python, LangGraph) that uses RAG over the internal documentation and 300 code repositories to follow the team's conventions; tried by ~10 developers.",
      "Automated multi-cloud CI/CD and deployment configuration: the agent generates Jenkins pipelines, Dockerfiles and Kubernetes manifests and shows them to the developer for approval before writing anything, cutting new-service setup from several hours to ~3 minutes.",
      "Reached a 90% field-by-field match against hand-written files (vs 55% for the same LLM without the agent) by building a held-out evaluation set from test projects excluded from tuning and iterating the prompts against it.",
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
