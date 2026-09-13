import Image from "next/image";
import { SectionLabel, SiteShell } from "@/components/site-shell";
import { education, experiences, site } from "@/data/site";

export const metadata = {
  title: `Resume - ${site.name}`,
  description: `Professional experience and education - ${site.name}`,
};

export default function ResumePage() {
  return (
    <SiteShell active="resume">
      <section className="animate-fade-up">
        <h1 className="mb-2 text-[1.65rem] font-semibold tracking-tight sm:text-[2rem]">
          Resume
        </h1>
        <p className="mb-8 max-w-[36rem] text-[14px] leading-relaxed text-neutral-700 sm:text-[15px]">
          {site.role} based in {site.location}. Experience across generative AI,
          data science, and production ML systems.
        </p>
      </section>

      <section className="animate-fade-up-delay-1">
        <SectionLabel>Experience</SectionLabel>
        <ol className="space-y-6">
          {experiences.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="rounded-xl border border-border bg-white p-4 sm:p-5"
            >
              <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-[60px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={60}
                      height={60}
                      className="size-[60px] object-contain p-1.5"
                    />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-tight sm:text-[16px]">
                      {job.role}
                    </h3>
                    <p className="text-[14px] text-neutral-700">{job.company}</p>
                  </div>
                </div>
                <div className="shrink-0 text-[13px] text-muted sm:text-right">
                  <p>{job.period}</p>
                  {job.location ? <p>{job.location}</p> : null}
                </div>
              </div>
              {job.summary ? (
                <p className="mb-3 text-[13px] leading-relaxed text-neutral-800">
                  {job.summary}
                </p>
              ) : null}
              <ul className="space-y-2 text-[13px] leading-relaxed text-neutral-700">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[0.45em] size-1 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 animate-fade-up-delay-2">
        <SectionLabel>Education</SectionLabel>
        <ul className="space-y-3">
          {education.map((item) => (
            <li
              key={`${item.school}-${item.degree}`}
              className="flex flex-col gap-3 border-b border-border py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex size-[60px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
                  <Image
                    src={item.logo}
                    alt={`${item.school} logo`}
                    width={60}
                    height={60}
                    className="size-[60px] object-contain p-1.5"
                  />
                </span>
                <div>
                  <p className="text-[15px] font-semibold tracking-tight">
                    {item.school}
                  </p>
                  <p className="text-[14px] text-neutral-700">{item.degree}</p>
                </div>
              </div>
              <p className="shrink-0 text-[13px] text-muted sm:text-right">
                {item.period}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 mb-2 animate-fade-up-delay-3">
        <SectionLabel>Contact</SectionLabel>
        <p className="text-[14px] text-neutral-700">
          {site.email} ·{" "}
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="accent-underline text-foreground"
          >
            LinkedIn
          </a>{" "}
          ·{" "}
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="accent-underline text-foreground"
          >
            GitHub
          </a>
        </p>
      </section>
    </SiteShell>
  );
}
