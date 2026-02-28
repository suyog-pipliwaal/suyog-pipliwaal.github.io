import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI and Machine Learning projects by Suyog Pipliwal. Including AI Researcher Agent, hackathon solutions, emotion prediction, client-side AI, and more.",
  openGraph: {
    title: "Projects - Suyog Pipliwal",
    description:
      "Explore AI and Machine Learning projects including AI Researcher Agent, hackathon solutions, emotion prediction, and more.",
  },
};

const projects = [
  {
    title: "AI Researcher Agent",
    description:
      "An intelligent research assistant that combines web search, content extraction, and AI-driven summarization to produce structured, high-signal research outputs.",
    tech: ["Machine Learning", "Python", "LangChain", "Serper API", "Next.js", "Docker"],
    github: "https://github.com/suyog-pipliwaal/Deep-search-agent",
    highlight: "Research automation",
  },
  {
    title: "MachineHack Solutions",
    description:
      "A curated repository of hackathon solutions across image classification, NLP, watermarking, and forecasting tasks with ranked leaderboard performance.",
    tech: ["Python", "CNN", "NLP", "Feature Engineering"],
    github: "https://github.com/suyog-pipliwaal/Machine-hack-Hackathon",
    highlight: "Multiple ranked entries",
  },
  {
    title: "Emotion Prediction",
    description:
      "An image emotion classification pipeline built for competitive performance, combining robust preprocessing, strong augmentation strategy, and deep learning models.",
    tech: ["Deep Learning", "PyTorch", "Hugging Face", "Torchvision"],
    github: "https://github.com/suyog-pipliwaal/Emotions_Prediction",
    highlight: "Global rank 4",
  },
  {
    title: "Ultra-Lightweight Client-Side AI for Voice Interview Summaries",
    description:
      "A fully client-side browser AI system for real-time transcription and summarization with ultra-low latency, designed to run offline without server dependencies.",
    tech: ["Client-Side AI", "ONNX", "WebAssembly", "Web Audio API", "JavaScript"],
    github:
      "https://github.com/suyog-pipliwaal/Ultra-Lightweight-Client-Side-AI-for-Voice-Interview-Summaries",
    highlight: "Offline real-time inference",
  },
  {
    title: "Automated Essay Scoring",
    description:
      "An end-to-end scoring system that benchmarks classical NLP baselines against transformer models, evaluated with Quadratic Weighted Kappa for human-like agreement.",
    tech: ["Python", "Scikit-learn", "Transformers", "PyTorch"],
    github: "https://github.com/suyog-pipliwaal/Automate-Essay-Scoring",
    highlight: "Classical vs transformer benchmarking",
  },
  {
    title: "Deeper Networks for Image Classification",
    description:
      "A hybrid architecture combining VGG16 and ResNet feature blocks for image classification, evaluated on MNIST and CIFAR10 with strong benchmark-level results.",
    tech: ["PyTorch", "VGG16", "ResNet", "SGD", "Cross-Entropy Loss"],
    github: "https://github.com/suyog-pipliwaal/Deeper-Networks-for-Image-Classification",
    highlight: "99.7% MNIST accuracy",
  },
  {
    title: "Activation Functions and CNN Performance (Fashion-MNIST)",
    description:
      "A comparative study of activation functions in CNNs, analyzing convergence behavior, classification accuracy, and generalization on Fashion-MNIST.",
    tech: ["PyTorch", "Fashion-MNIST", "CNN", "Activation Functions"],
    github: "https://github.com/suyog-pipliwaal/Fashion-Mnist-Classification",
    highlight: "Controlled architecture study",
  },
];

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-screen font-sans">
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 sm:px-6 pb-10 sm:pb-14">
        <section className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-medium text-[var(--primary)]">Portfolio Work</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Projects
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              Selected AI and ML projects spanning applied research, real-time systems, model benchmarking, and practical deployment workflows.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 grid md:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_12px_30px_rgba(25,38,35,0.08)]"
              >
                <p className="text-xs sm:text-sm font-medium text-[var(--primary)]">{project.highlight}</p>
                <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-[var(--foreground)]">{project.title}</h2>
                <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-1 text-xs sm:text-sm text-[var(--foreground)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-2 text-sm sm:text-base font-medium text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Source Code
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
