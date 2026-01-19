import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description: "Open source contributions by Suyog Pipliwal. Contributions to various open source projects and repositories.",
  openGraph: {
    title: "Open Source Contributions - Suyog Pipliwal",
    description: "Open source contributions to various projects and repositories.",
  },
};

export default function OpenSourcePage() {
  const contributions = [
    {
      project: "LightAgent",
      description: "LightAgent is a lightweight open-source agent framework by Wanxing AI that supports memory, tools, and tree-of-thought for multi-agent collaboration.",
      repository: "https://github.com/wxai-space/LightAgent",
      contribution: "Successfully contributed and merged Pull Request #19 to the LightAgent project.",
      tech: ["Python", "AI/ML", "Agent Framework"],
      pullRequest: "https://github.com/wxai-space/LightAgent/pull/19",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      <Breadcrumbs />
      
      {/* Open Source Section */}
      <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 sm:mb-12 md:mb-16">
            Open source Contribution
          </h1>
          {contributions.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {contributions.map((contribution, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-80 transition-opacity"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4">
                  {contribution.project}
                </h3>
                <p className="text-sm sm:text-base text-black dark:text-white mb-4 sm:mb-6 leading-relaxed opacity-80">
                  {contribution.description}
                </p>
                <div className="mb-4">
                  <p className="text-sm sm:text-base text-black dark:text-white mb-2 opacity-80">
                    <strong>Contribution:</strong> {contribution.contribution}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  {contribution.repository && (
                    <a
                      href={contribution.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity border border-black dark:border-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Repository
                    </a>
                  )}
                  {contribution.pullRequest && (
                    <a
                      href={contribution.pullRequest}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity border border-black dark:border-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Pull Request
                    </a>
                  )}
                </div>
              </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-black dark:text-white opacity-60">
                Open source contributions will be displayed here.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
