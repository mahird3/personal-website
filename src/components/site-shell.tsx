import Link from "next/link";
import { BrandIcon } from "@/components/icons";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
] as const;

export function SiteShell({
  children,
  active,
}: {
  children: React.ReactNode;
  active: "home" | "resume";
}) {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-[720px] flex-col px-5 sm:px-8">
      <header className="flex items-center justify-between gap-4 pt-7 pb-2 animate-fade-up">
        <Link
          href="/"
          className="inline-flex items-baseline gap-1 text-[15px] font-semibold tracking-tight"
        >
          <span className="text-foreground">//</span>
          <span className="text-accent">{site.initials}</span>
        </Link>

        <nav className="flex items-center gap-1 text-[13px]">
          {nav.map((item) => {
            const isActive =
              (active === "home" && item.href === "/") ||
              (active === "resume" && item.href === "/resume");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 transition ${
                  isActive
                    ? "bg-foreground text-white"
                    : "text-neutral-600 hover:bg-pill hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="flex-1 py-10 sm:py-14">{children}</main>

      <footer className="mt-auto flex flex-col gap-2 border-t border-border py-6 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Built by {site.name.split(" ")[0]}</p>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5"
        >
          <BrandIcon name="github" className="size-3" />
          <span>
            This website is{" "}
            <span className="accent-underline text-foreground">open-source</span>
          </span>
        </a>
      </footer>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
      {children}
    </h2>
  );
}
