import Image from "next/image";
import { BrandIcon, CalendarIcon, MailIcon, ProjectIcon } from "@/components/icons";
import { SectionLabel, SiteShell } from "@/components/site-shell";
import { projects, site, socials, techStack } from "@/data/site";

function statusClasses(status: string) {
  if (status === "Active") return "bg-green-soft text-green";
  if (status === "Sold") return "bg-orange-soft text-orange";
  if (status === "Under construction") return "bg-accent-soft text-neutral-700";
  return "bg-neutral-100 text-neutral-600";
}

export default function Home() {
  return (
    <SiteShell active="home">
      <section className="flex flex-col items-center text-center animate-fade-up">
        <Image
          src="/profile.jpg"
          alt={site.name}
          width={88}
          height={88}
          priority
          className="mb-6 size-[72px] rounded-full object-cover ring-1 ring-border sm:size-[88px]"
        />

        <h1 className="mb-4 max-w-[34rem] text-[1.65rem] leading-tight font-semibold tracking-tight sm:text-[2rem]">
          Hello, I&apos;m{" "}
          <span className="text-accent">{site.name}</span>
        </h1>

        <div className="mb-7 max-w-[34rem] space-y-3 text-[14px] leading-relaxed text-neutral-700 sm:text-[15px]">
          <p>
            {site.bio[0]} Based in {site.location}.
          </p>
          <p>{site.bio[1]}</p>
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-center gap-3 animate-fade-up-delay-1">
          <a
            href={site.links.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-neutral-800"
          >
            <CalendarIcon className="size-3.5" />
            Book a call
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-[13px] font-medium text-foreground transition hover:bg-pill"
          >
            <BrandIcon name="linkedin" className="size-3.5" />
            LinkedIn
          </a>
          <a
            href={site.links.email}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-[13px] font-medium text-foreground transition hover:bg-pill"
          >
            <MailIcon className="size-3.5" />
            Email
          </a>
        </div>

        <p className="flex items-center gap-2 text-[13px] text-muted animate-fade-up-delay-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-green opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-green" />
          </span>
          {site.availability}
        </p>
      </section>

      <section className="mt-14 sm:mt-16 animate-fade-up-delay-2">
        <SectionLabel>Tech Stack</SectionLabel>
        <p className="mb-4 text-[14px] text-neutral-700">
          Core technologies used across research and production systems:
        </p>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech.name}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-pill px-3 py-1.5 text-[12px] text-foreground transition hover:-translate-y-0.5 hover:border-neutral-300">
                <BrandIcon name={tech.icon} className="size-4 shrink-0" />
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 sm:mt-16 animate-fade-up-delay-3">
        <SectionLabel>Projects</SectionLabel>
        <p className="mb-4 text-[14px] text-neutral-700">
          Personal projects and experiments:
        </p>
        <ul className="grid gap-3 sm:grid-cols-1">
          {projects.map((project, index) => (
            <li key={`${project.name}-${index}`}>
              <div className="rounded-xl border border-dashed border-border bg-pill/60 p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-md border border-border bg-white text-neutral-700">
                      <ProjectIcon name={project.icon} className="size-3.5" />
                    </span>
                    <h3 className="text-[14px] font-semibold tracking-tight">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium ${statusClasses(project.status)}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-[12.5px] leading-relaxed text-neutral-600">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 sm:mt-16">
        <SectionLabel>Find Me On</SectionLabel>
        <p className="mb-4 text-[14px] text-neutral-700">
          Professional profiles and repositories:
        </p>
        <ul className="flex flex-wrap gap-2">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-pill px-3 py-1.5 text-[12px] text-foreground transition hover:-translate-y-0.5 hover:border-neutral-300"
              >
                <BrandIcon name={social.icon} className="size-3.5" />
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 sm:mt-16 mb-2">
        <SectionLabel>Get In Touch</SectionLabel>
        <div className="space-y-2 text-[14px] text-neutral-700">
          <p>
            Reach me at{" "}
            <a href={site.links.email} className="accent-underline text-foreground">
              {site.email}
            </a>
          </p>
          <p>
            Or{" "}
            <a
              href={site.links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline text-foreground"
            >
              book a call
            </a>
            {" · "}
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-underline text-foreground"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
