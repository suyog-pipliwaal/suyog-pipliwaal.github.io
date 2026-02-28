import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "AI Research Engineer and Deep Learning Specialist. Machine Learning Engineer with over 4 years of experience in algorithm development and data analysis. Master of Science in Artificial Intelligence from Queen Mary University of London.",
  openGraph: {
    title: "Suyog Pipliwal - AI Research Engineer",
    description: "AI Research Engineer and Deep Learning Specialist. Machine Learning Engineer with over 4 years of experience in algorithm development and data analysis.",
    type: "profile",
  },
};

export default function Home() {
  const highlights = [
    {
      metric: "Healthcare AI",
      detail: "Improved therapy-session outcomes through applied clinical ML systems.",
    },
    {
      metric: "Speech Systems",
      detail: "Built low-latency voice pipelines for production-grade user experiences.",
    },
    {
      metric: "Multimodal ML",
      detail: "Combined language, audio, and gesture signals for robust disfluency detection.",
    },
  ];

  const focusAreas = [
    "Applied AI research for healthcare and communication technology",
    "Multimodal modeling using language, audio, and gesture signals",
    "Production-grade systems with CI/CD, reliability, and scale in mind",
  ];

  return (
    <div className="site-shell min-h-screen font-sans">
      <Navigation />

      <main className="px-4 sm:px-6 pt-28 sm:pt-32 pb-10 sm:pb-16">
        <section className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
            <div className="reveal-up" style={{ animationDelay: "80ms" }}>
              <p className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs sm:text-sm font-medium text-[var(--muted)]">
                AI Research Engineer • Deep Learning Specialist
              </p>

              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-[1.08]">
                Building practical AI systems that ship, scale, and deliver measurable outcomes.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-3xl">
                I am Suyog Pipliwal, an AI engineer with an MSc in Artificial Intelligence from Queen Mary University of London. I work at the intersection of research and product, turning advanced models into reliable real-world tools.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="rounded-full px-6 py-3 bg-[var(--primary)] text-white font-medium hover:brightness-110 transition-all"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/cv"
                  className="rounded-full px-6 py-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  View CV
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm sm:text-base">
                <a href="https://github.com/suyog-pipliwaal" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/suyogpipliwal" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:suyogpiplwal@gmail.com" className="font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                  Email
                </a>
              </div>
            </div>

            <div className="reveal-up rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_14px_42px_rgba(26,42,37,0.14)]" style={{ animationDelay: "200ms" }}>
              <Image
                src="/profile-photo.png"
                alt="Portrait of Suyog Pipliwal"
                width={240}
                height={240}
                priority
                className="h-36 w-36 sm:h-44 sm:w-44 rounded-3xl object-cover border border-[var(--border)]"
              />

              <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-[var(--foreground)]">
                Research-first, product-ready.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                From healthcare NLP to low-latency voice systems, I focus on robust model design, clean engineering, and tangible user impact.
              </p>

              <div className="mt-5 grid gap-3">
                {highlights.map((item) => (
                  <div key={item.metric} className="rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
                    <p className="text-2xl font-bold text-[var(--accent)]">{item.metric}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-up mt-9 sm:mt-11 rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-8" style={{ animationDelay: "320ms" }}>
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">
              Core Focus Areas
            </h2>
            <ul className="mt-4 grid md:grid-cols-3 gap-3 sm:gap-4">
              {focusAreas.map((area) => (
                <li key={area} className="rounded-xl bg-[var(--surface-alt)] border border-[var(--border)] px-4 py-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
