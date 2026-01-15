import { getMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";

export const metadata = getMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

const features = [
  {
    title: "Signal stitching",
    description:
      "Unify reviews, tickets, NPS notes, and community threads into a single “customer truth” timeline.",
  },
  {
    title: "Auto-prioritization",
    description:
      "Rank themes by impact and urgency with a transparent scoring model your team can trust.",
  },
  {
    title: "Instant narratives",
    description:
      "Turn raw feedback into crisp, exec-ready narratives—complete with quotes and supporting evidence.",
  },
] as const;

const useCases = [
  {
    title: "B2B SaaS",
    description:
      "Stop losing deals to “missing features” you didn’t know were trending.",
  },
  {
    title: "Consumer apps",
    description: "Detect churn triggers before ratings start to dip.",
  },
  {
    title: "Dev tools",
    description: "Translate GitHub issues into roadmap-ready themes.",
  },
] as const;

const plans = [
  {
    name: "Starter",
    price: "$0",
    subtitle: "For validating signal sources.",
    bullets: ["1 workspace", "Basic themes", "Email summaries"],
    highlight: false,
  },
  {
    name: "Team",
    price: "$39",
    subtitle: "For product teams shipping weekly.",
    bullets: [
      "3 workspaces",
      "Impact scoring",
      "Notion export",
      "Priority queue",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    subtitle: "For multi-product orgs.",
    bullets: [
      "Unlimited workspaces",
      "SSO",
      "Custom pipelines",
      "Dedicated onboarding",
    ],
    highlight: false,
  },
] as const;

const faqs = [
  {
    q: "Is PulseBoard a real product?",
    a: "This is a frontend-only landing page project designed as a reusable template. It’s intentionally built like a real startup site—minus the backend.",
  },
  {
    q: "How do I toggle search engine indexing?",
    a: "Set NEXT_PUBLIC_ALLOW_INDEXING=0 to output a disallowing robots.txt and apply noindex meta via page metadata usage.",
  },
  {
    q: "Can I reuse this for my own brand?",
    a: "Yes—swap the copy + links in src/lib/site.ts and replace sections as needed. The structure is intentionally modular.",
  },
] as const;

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />

        <Container className="relative py-16 sm:py-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                Built for product teams in 2026
                <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-white/30" />
                SEO-first Next.js landing
              </p>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl">
                Make customer feedback{" "}
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  actionable
                </span>{" "}
                in minutes.
              </h1>
              <p className="mt-6 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                PulseBoard turns reviews, tickets, and community chatter into
                prioritized product insights. Your roadmap, finally backed by
                real signals.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <LinkButton href="/#cta">Request a demo</LinkButton>
                <LinkButton href="/project" variant="secondary">
                  Project Details
                </LinkButton>
              </div>
              <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
                No backend in this demo. Smooth animations, modular sections,
                production-ready SEO.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { k: "2.1x", v: "Faster roadmap decisions" },
                  { k: "34%", v: "Less feedback triage time" },
                  { k: "12", v: "Signal sources stitched" },
                ].map((s) => (
                  <div key={s.k} className="text-center">
                    <p className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                      {s.k}
                    </p>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="features"
        className="bg-white py-16 dark:bg-zinc-950 sm:py-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Why it works"
            title="Signal in. Clarity out."
            description="A modern product team doesn’t need more dashboards—just the right decisions, faster."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {features.map((f) => (
              <Reveal key={f.title} className="h-full">
                <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
                  <p className="text-base font-semibold text-zinc-950 dark:text-white">
                    {f.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="use-cases"
        className="bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Built for teams"
            title="Use cases that map to real work."
            description="Landing pages should feel like a product—these sections make it easy to adapt the template to any startup."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {useCases.map((u) => (
              <Reveal key={u.title}>
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <p className="text-base font-semibold text-zinc-950 dark:text-white">
                    {u.title}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {u.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="pricing"
        className="bg-white py-16 dark:bg-zinc-950 sm:py-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Plans that scale with signal volume."
            description="Simple tiers, strong visual hierarchy, and a clear default—ready for real-world conversions."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((p) => (
              <Reveal key={p.name}>
                <div
                  className={[
                    "relative h-full rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-950",
                    p.highlight
                      ? "border-violet-300 shadow-violet-200/30 dark:border-violet-500/40 dark:shadow-none"
                      : "border-zinc-200 dark:border-white/10",
                  ].join(" ")}
                >
                  {p.highlight ? (
                    <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Most popular
                    </span>
                  ) : null}
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                    {p.name}
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                    {p.price}
                    <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                      {p.price === "$39" ? "/mo" : ""}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {p.subtitle}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <LinkButton
                      href="/#cta"
                      variant={p.highlight ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Get started
                    </LinkButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="faq" className="bg-zinc-50 py-16 dark:bg-zinc-950 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers, without the fluff."
            description="The FAQ is structured for both users and SEO snippets (clear questions, direct answers)."
          />

          <div className="mx-auto mt-12 max-w-3xl divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
            {faqs.map((f) => (
              <Reveal key={f.q} className="p-6">
                <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                  {f.q}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {f.a}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="cta" className="bg-white py-16 dark:bg-zinc-950 sm:py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-10 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/0 sm:p-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 blur-2xl" />
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                  Turn noisy feedback into confident roadmap decisions.
                </h2>
                <p className="mt-4 text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  Clone the repo, replace the copy, and ship a modern startup
                  landing page in hours.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <LinkButton href="/project">See Project Details</LinkButton>
                  <LinkButton
                    href={siteConfig.githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    View source on GitHub
                  </LinkButton>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
