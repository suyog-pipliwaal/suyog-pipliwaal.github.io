import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Suyog Pipliwal's educational background. Master of Science in Artificial Intelligence from Queen Mary University of London and Bachelor of Technology in Computer Science from IIIT Guwahati.",
  openGraph: {
    title: "Education - Suyog Pipliwal",
    description:
      "Master of Science in Artificial Intelligence from Queen Mary University of London and Bachelor of Technology in Computer Science from IIIT Guwahati.",
  },
};

const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    institution: "Queen Mary University of London",
    location: "London, United Kingdom",
    period: "September 2021 - September 2022",
    description:
      "Advanced study in machine learning, deep learning, NLP, and experimental research methods with a strong emphasis on practical model development.",
    focus: ["Deep Learning", "NLP", "Research Methods", "AI Systems"],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Information Technology, Guwahati",
    location: "Guwahati, India",
    period: "June 2015 - May 2019",
    description:
      "Strong foundation in algorithms, software engineering, and system design, enabling end-to-end engineering from prototypes to production systems.",
    focus: ["Algorithms", "Software Engineering", "System Design", "Programming"],
  },
];

export default function EducationPage() {
  return (
    <div className="site-shell min-h-screen font-sans">
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 sm:px-6 pb-10 sm:pb-14">
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-medium text-[var(--primary)]">Academic Foundation</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Education
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              My academic path blends computer science fundamentals with specialized AI training, shaping the way I build practical machine learning systems.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
            {education.map((edu) => (
              <article
                key={edu.degree}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_12px_30px_rgba(25,38,35,0.08)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">{edu.degree}</h2>
                    <p className="mt-1 text-base sm:text-lg text-[var(--foreground)]/85">{edu.institution}</p>
                    <p className="mt-1 text-sm sm:text-base text-[var(--muted)]">{edu.location}</p>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-[var(--accent)]">{edu.period}</p>
                </div>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--muted)]">{edu.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-xs sm:text-sm text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
