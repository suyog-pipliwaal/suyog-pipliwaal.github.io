import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Download Suyog Pipliwal's CV. Deep Learning Specialist and Machine Learning Engineer with expertise in Python, PyTorch, TensorFlow, NLP, and AI research. View skills, tools, and technologies.",
  openGraph: {
    title: "Curriculum Vitae - Suyog Pipliwal",
    description: "Deep Learning Specialist and Machine Learning Engineer with expertise in Python, PyTorch, TensorFlow, NLP, and AI research.",
  },
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      <Breadcrumbs />
      
      {/* CV Section */}
      <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 sm:mb-8">
            Curriculum Vitae
          </h1>
          <div className="mb-6 sm:mb-8">
            <a
              href="/suyog_pipliwal_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity font-medium border-2 border-black dark:border-white text-sm sm:text-base"
              aria-label="Download Suyog Pipliwal's CV in PDF format"
            >
              Download CV (PDF)
            </a>
          </div>
          <div className="space-y-6 sm:space-y-8 text-black dark:text-white">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">Summary</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Deep Learning Specialist and Machine Learning Engineer aspirant with over 4 years of experience 
                in algorithm development and data analysis. Spearheaded research initiatives that enhanced 
                patient-clinician interactions within therapeutic web-based platforms. Achievements include 
                reducing audio latency from 400ms to 80ms for the Crowd Mics app, resulting in improved user 
                experience on major platforms such as Google Play Store and Apple App Store. Holds a Master 
                of Science in Artificial Intelligence from Queen Mary University of London.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">Tools and Languages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  "Python",
                  "PyTorch",
                  "TensorFlow",
                  "torchaudio",
                  "Librosa",
                  "NumPy",
                  "Scikit-Learn",
                  "Matplotlib",
                  "TensorBoard",
                  "imbalanced-learn",
                  "networkx",
                  "MySQL",
                  "MariaDB",
                  "JavaScript",
                  "React",
                  "React Native",
                  "Node.js",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-3 sm:p-4 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-70 transition-opacity"
                  >
                    <div className="text-black dark:text-white font-medium text-sm sm:text-base">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">Quantitative Research</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  "Machine Learning",
                  "Deep Learning",
                  "Neural Networks",
                  "CNNs",
                  "RNNs",
                  "Generative Models",
                  "Transformers",
                  "Autoencoders",
                  "Linear Algebra",
                  "Information Retrieval",
                  "Natural Language Processing",
                  "Text Classification",
                  "Neural Machine Translation",
                  "Named Entity Recognition",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-3 sm:p-4 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-70 transition-opacity"
                  >
                    <div className="text-black dark:text-white font-medium text-sm sm:text-base">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">Technologies/Frameworks</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  "Linux",
                  "Git",
                  "Material UI",
                  "Hugging Face",
                  "Tailwind CSS",
                  "Open AI",
                  "Langchain",
                  "Large Language Models",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="p-3 sm:p-4 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-70 transition-opacity"
                  >
                    <div className="text-black dark:text-white font-medium text-sm sm:text-base">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
