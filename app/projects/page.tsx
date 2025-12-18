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
                title: "RemoteDialog+",
                description: "The first approach specifically implemented for routine patient-clinician meetings that are therapeutically effective using Machine learning. Designed machine learning algorithms that enhanced therapy session quality for the East London NHS Foundation Trust clinical group by 20% as measured by clinicians. The platform is now being piloted by the East London NHS Foundation Trust and projected to serve 50+ NHS trusts across the United Kingdom upon full rollout.",
                tech: ["Machine Learning", "Python", "PyTorch", "BERT", "Web Applications"],
              },
              {
                title: "Multi-Modal Disfluency Detection",
                description: "Engineered a multi-modal disfluency detection model specifically for the German language by integrating transcripts, audio samples, and hand gestures. Realized state-of-the-art performance utilizing BERT frameworks and audio transformer architectures tailored for the German dialect, resulting in exceptional metrics including a remarkable accuracy rate of 0.98 and F1 score at 0.41.",
                tech: ["Deep Learning", "BERT", "Transformers", "PyTorch", "torchaudio", "Multi-modal Learning"],
              },
              {
                title: "Crowd Mics Mobile Application",
                description: "Developed and deployed mobile applications for iOS and Android platforms utilizing React-Native, achieving a 100% shared UI codebase that enhanced development efficiency across device ecosystems. Collaborated on innovative solutions targeting audio processing delays; achieved a reduction of latency from 400ms down to just 80ms, dramatically improving real-time interaction for users. The app is available on Google Play Store and Apple App Store.",
                tech: ["React Native", "JavaScript", "Node.js", "Audio Processing", "iOS", "Android"],
              },
              {
                title: "CI/CD Pipeline with Jenkins and Docker",
                description: "Launched a CI/CD pipeline with Jenkins and Docker, achieving 99.99% uptime and reducing deployment time significantly. This infrastructure improvement enhanced the development workflow and ensured reliable, automated deployments for production applications.",
                tech: ["Jenkins", "Docker", "CI/CD", "DevOps", "Linux"],
              },
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
