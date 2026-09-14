type BrandIconProps = {
  name: string;
  className?: string;
};

const DEVICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

/** Colored Devicon logos for recognized brand marks. */
const deviconPath: Record<string, string> = {
  python: "python/python-original.svg",
  typescript: "typescript/typescript-original.svg",
  cplusplus: "cplusplus/cplusplus-original.svg",
  pytorch: "pytorch/pytorch-original.svg",
  tensorflow: "tensorflow/tensorflow-original.svg",
  fastapi: "fastapi/fastapi-original.svg",
  postgres: "postgresql/postgresql-original.svg",
  docker: "docker/docker-original.svg",
  kubernetes: "kubernetes/kubernetes-plain.svg",
  airflow: "apacheairflow/apacheairflow-original.svg",
  opentelemetry: "opentelemetry/opentelemetry-original.svg",
  grafana: "grafana/grafana-original.svg",
  githubactions: "githubactions/githubactions-original.svg",
  jenkins: "jenkins/jenkins-original.svg",
  sklearn: "scikitlearn/scikitlearn-original.svg",
  pandas: "pandas/pandas-original.svg",
  numpy: "numpy/numpy-original.svg",
  git: "git/git-original.svg",
  github: "github/github-original.svg",
  linkedin: "linkedin/linkedin-original.svg",
};

/** Local brand SVGs for icons that render poorly via Devicon / monochrome paths. */
const localBrandIcons: Record<string, string> = {
  huggingface: "/tech/huggingface.svg",
  langchain: "/tech/langchain.svg",
  langgraph: "/tech/langgraph.svg",
  milvus: "/tech/milvus.svg",
  aws: "/tech/aws.svg",
  sql: "/tech/sql.svg",
  xgboost: "/tech/xgboost.svg",
  bedrock: "/tech/bedrock.svg",
  litellm: "/tech/litellm.svg",
};

export function BrandIcon({ name, className = "size-4" }: BrandIconProps) {
  const local = localBrandIcons[name];
  if (local) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={local}
        alt=""
        aria-hidden
        className={className}
        width={14}
        height={14}
      />
    );
  }

  const path = deviconPath[name];
  if (path) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${DEVICON}/${path}`}
        alt=""
        aria-hidden
        className={className}
        width={14}
        height={14}
      />
    );
  }

  return <span className={`inline-block rounded-sm bg-neutral-300 ${className}`} />;
}

export function ProjectIcon({
  name,
  className = "size-4",
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9.5C7.5 20.5 4 17 4 12V6l8-3z" />
        </svg>
      );
    case "bot":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="4" y="8" width="16" height="12" rx="3" />
          <path d="M12 4v4M9 14h.01M15 14h.01" />
        </svg>
      );
    case "search":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      );
    case "chart":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M4 19h16M7 16V9M12 16V5M17 16v-4" />
        </svg>
      );
    case "tomb":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M7 20V10a5 5 0 0 1 10 0v10" />
          <path d="M4 20h16" />
          <path d="M10 11h4M10 14h4" />
        </svg>
      );
    case "layers":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="3" />
        </svg>
      );
  }
}

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

export function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
