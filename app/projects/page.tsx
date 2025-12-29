import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      
      {/* Projects Section */}
      <section className="py-32 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-16">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Researcher Agent",
                description:"An intelligent research assistant that combines web search, content scraping, and AI-powered information extraction to provide structured research results.",
                tech: ["Machine Learning", "Python", "langchain", "Serper API  ","Nextjs", "Docker"],
                github: "https://github.com/suyog-pipliwaal/Deep-search-agent",
              },
              {
                title: "Emotions_Prediction",
                description:"Build Emotions Prediction for a Hackathon Develop a robust image classification model capable of predicting the emotion depicted in an image Global rank 4",
                tech: ["Deep Learning", "Pytorch", "Huggingface", "Torchvision"],
                github: "https://github.com/suyog-pipliwaal/Emotions_Prediction",
              },
             {
              title: "Ultra-Lightweight Client-Side AI for Voice Interview Summaries",
              description:`
                          A fully client-side browser-based AI system that performs real-time speech transcription
                          interview summarization with ultra-low latency, running entirely offline without server dependencies.`,
              tech: ["Client-Side AI", "Speech Processing", "ONNX","WebAssembly (WASM)", "JavaScript","Web Audio API"],
              github: "https://github.com/suyog-pipliwaal/Ultra-Lightweight-Client-Side-AI-for-Voice-Interview-Summaries",
            }, {
              title: "Automated Essay Scoring",
              description:`This project implements an automated essay scoring system based on a Kaggle competition.
It explores a progression from classical NLP baselines to transformer-based models.
Traditional machine learning approaches are benchmarked against fine-tuned BERT to capture deeper semantic and contextual information.
Model performance is evaluated using Quadratic Weighted Kappa, ensuring strong agreement with human raters.
`,
              tech: ["Python", "scikit-learn", "Hugging Face Transformers", "PyTorch  "],
              github: "https://github.com/suyog-pipliwaal/Ultra-Lightweight-Client-Side-AI-for-Voice-Interview-Summaries",
            }

            ].map((project, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-80 transition-opacity"
              >
                <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-black dark:text-white mb-6 leading-relaxed opacity-80">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity border border-black dark:border-white px-4 py-2 rounded"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Source Code
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
