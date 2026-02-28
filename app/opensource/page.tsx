import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description:
    "Open source contributions by Suyog Pipliwal across AI and engineering projects, including merged pull requests and production-quality improvements.",
  openGraph: {
    title: "Open Source Contributions - Suyog Pipliwal",
    description: "Open source contributions to AI and software engineering repositories.",
  },
};

const contributions = [
  {
    project: "LightAgent",
    description:
      "LightAgent is a lightweight open-source agent framework by Wanxing AI with support for memory, tools, and tree-of-thought based multi-agent collaboration.",
    repository: "https://github.com/wxai-space/LightAgent",
    contribution:
      "Contributed and merged Pull Request #19, improving framework capabilities and project quality.",
    tech: ["Python", "AI Agents", "Framework Engineering"],
    pullRequest: "https://github.com/wxai-space/LightAgent/pull/19",
  },
];

export default function OpenSourcePage() {
  return (
    <div className="site-shell min-h-screen font-sans">
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 sm:px-6 pb-10 sm:pb-14">
        <section className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-medium text-[var(--primary)]">Community Work</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Open Source Contributions
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              Contributions focused on practical engineering improvements in AI tooling and developer-facing frameworks.
            </p>
          </div>

          {contributions.length > 0 ? (
            <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-5 sm:gap-6">
              {contributions.map((item) => (
                <article
                  key={item.project}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_12px_30px_rgba(25,38,35,0.08)]"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">{item.project}</h2>
                  <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">{item.description}</p>
                  <p className="mt-4 text-sm sm:text-base text-[var(--foreground)]/85">
                    <span className="font-semibold">Contribution:</span> {item.contribution}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-xs sm:text-sm text-[var(--foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={item.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-sm sm:text-base font-medium text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      Repository
                    </a>
                    <a
                      href={item.pullRequest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-sm sm:text-base font-medium text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      Pull Request
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 sm:mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-8 text-center">
              <p className="text-sm sm:text-base text-[var(--muted)]">Open source contributions will appear here.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
