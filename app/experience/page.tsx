import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Suyog Pipliwal's professional experience as ML Engineer at NavGurukul, AI Research Engineer at Queen Mary University of London, and Full-stack Developer at Antares.Tech.",
  openGraph: {
    title: "Experience - Suyog Pipliwal",
    description:
      "ML Engineer at NavGurukul, AI Research Engineer at Queen Mary University of London, and Full-stack Developer at Antares.Tech.",
  },
};

const experience = [
  {
    title: "Machine Learning Engineer",
    company: "NavGurukul",
    location: "India",
    period: "January 2026 - Present",
    impact: ["Low-resource TTS pipeline", "Indian-accent voice modeling", "Integrated across org projects"],
    achievements: [
      "Designed and implemented a text-to-speech (TTS) pipeline focused on low-resource Indian-accent speech modeling.",
      "Developed data-efficient speech modeling workflows for accent-specific synthesis quality and practical deployment constraints.",
      "Integrated the TTS pipeline into multiple NavGurukul products, enabling reusable voice AI capabilities across internal projects.",
    ],
  },
  {
    title: "AI Research Engineer",
    company: "Cognitive Science Group, Queen Mary University of London",
    location: "London, United Kingdom",
    period: "May 2022 - November 2024",
    impact: ["20% therapy quality uplift", "0.98 accuracy on multimodal model", "NHS pilot deployment"],
    achievements: [
      "Led applied AI research for RemoteDialogPlus and multimodal disfluency detection in therapeutic digital health settings.",
      "Built and evaluated machine learning pipelines on complex clinical datasets to identify high-impact automation opportunities.",
      "Shipped models that improved therapy session quality for East London NHS Foundation Trust clinicians by 20%.",
      "Developed a multimodal disfluency model using transcript, audio, and gesture signals, achieving strong benchmark performance.",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "Antares.Tech",
    location: "Noida, India",
    period: "May 2019 - February 2020",
    impact: ["400ms to 80ms latency improvement", "99.99% uptime pipeline", "Cross-platform app delivery"],
    achievements: [
      "Delivered production features for B2B and B2C platforms with focus on real-time mobile user experience quality.",
      "Optimized audio processing pipelines and reduced user-perceived latency from 400ms to 80ms in Crowd Mics.",
      "Implemented CI/CD using Jenkins and Docker to accelerate release cycles and improve operational reliability.",
      "Contributed to cross-platform React Native applications with a shared iOS/Android codebase.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="site-shell min-h-screen font-sans">
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 sm:px-6 pb-10 sm:pb-14">
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-medium text-[var(--primary)]">Professional Journey</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Experience
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              I build and deploy AI systems where measurable outcomes matter, from clinical research workflows to consumer-grade real-time applications.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
            {experience.map((role) => (
              <article
                key={`${role.company}-${role.title}`}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_12px_30px_rgba(25,38,35,0.08)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">{role.title}</h2>
                    <p className="mt-1 text-base sm:text-lg text-[var(--foreground)]/85">{role.company}</p>
                    <p className="mt-1 text-sm sm:text-base text-[var(--muted)]">{role.location}</p>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[var(--accent)]">{role.period}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {role.impact.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-xs sm:text-sm text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-sm sm:text-base leading-relaxed text-[var(--muted)]">
                  {role.achievements.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
