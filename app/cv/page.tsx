import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description:
    "Download Suyog Pipliwal's CV. Machine Learning Engineer with expertise in Python, PyTorch, TensorFlow, NLP, LLM applications, and production AI systems.",
  openGraph: {
    title: "Curriculum Vitae - Suyog Pipliwal",
    description:
      "Machine Learning Engineer with expertise in Python, PyTorch, TensorFlow, NLP, LLM applications, and production AI systems.",
  },
};

const skillGroups = [
  {
    title: "Tools and Languages",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Torchaudio",
      "Librosa",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "TensorBoard",
      "MySQL",
      "MariaDB",
      "JavaScript",
      "React",
      "React Native",
      "Node.js",
    ],
  },
  {
    title: "Research and Modeling",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Transformers",
      "Generative Models",
      "Information Retrieval",
      "Natural Language Processing",
      "Text Classification",
      "Named Entity Recognition",
      "Neural Machine Translation",
    ],
  },
  {
    title: "Frameworks and Platforms",
    items: [
      "Linux",
      "Git",
      "Hugging Face",
      "Tailwind CSS",
      "LangChain",
      "Large Language Models",
      "OpenAI API",
      "Material UI",
    ],
  },
];

export default function CVPage() {
  return (
    <div className="site-shell min-h-screen font-sans">
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 sm:px-6 pb-10 sm:pb-14">
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-medium text-[var(--primary)]">Professional Profile</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Curriculum Vitae
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              Machine Learning Engineer with 4+ years of experience building and deploying applied AI systems across healthcare, speech, and real-time product environments.
            </p>
            <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              Core competencies: ML model development, LLM applications, NLP, low-resource TTS, multimodal modeling, model integration, CI/CD-enabled delivery, and production-focused AI engineering.
            </p>
            <a
              href="/suyog_pipliwal_resume.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm sm:text-base font-medium text-white hover:brightness-110 transition-all"
              aria-label="Download Suyog Pipliwal's CV in PDF format"
            >
              Download CV (PDF)
            </a>
          </div>

          <article className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_12px_30px_rgba(25,38,35,0.08)]">
            <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">Summary</h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              I have delivered end-to-end ML solutions from research to integration, including low-resource Indian-accent TTS pipelines, multimodal disfluency detection, and production speech optimization. My work includes measurable outcomes such as improved therapy workflows and major latency reduction in real-time mobile audio systems. I hold an MSc in Artificial Intelligence from Queen Mary University of London.
            </p>
          </article>

          <div className="mt-6 space-y-5 sm:space-y-6">
            {skillGroups.map((group) => (
              <section
                key={group.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_12px_30px_rgba(25,38,35,0.08)]"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]">{group.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-xs sm:text-sm text-[var(--foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
