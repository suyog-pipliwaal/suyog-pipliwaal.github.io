import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Suyog Pipliwal's professional experience as AI Research Engineer at Queen Mary University of London and Full-stack Developer at Antares.Tech. Specialized in machine learning, NLP, and web applications.",
  openGraph: {
    title: "Experience - Suyog Pipliwal",
    description: "AI Research Engineer at Queen Mary University of London and Full-stack Developer at Antares.Tech. Specialized in machine learning, NLP, and web applications.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      <Breadcrumbs />
      
      {/* Experience Section */}
      <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 sm:mb-12 md:mb-16">
            Experience
          </h1>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "AI Research Engineer",
                company: "Cognitive Science Group, Queen Mary University of London (QMUL)",
                location: "London, United Kingdom",
                period: "May 2022 - November 2024",
                description: [
                  "Initiated research initiatives centered on RemoteDialogPlus and Multi-Model Disfluency Detection, resulting in the identification of over 3 key areas for machine learning application within therapeutic web-based platforms.",
                  "RemoteDialog+ is the first approach specifically implemented for routine patient-clinician meetings that are therapeutically effective using Machine learning.",
                  "Collected and manipulated complex medical datasets, identifying three key areas where data mining and machine learning-based solutions were applied and applied in web-based applications.",
                  "Designed machine learning algorithms within the RemoteDialog+ project, enhancing therapy session quality for the East London NHS Foundation Trust clinical group by 20% as measured by clinicians.",
                  "Developed the RemoteDialog+ platform, now being piloted by the East London NHS Foundation Trust, projected to serve 50+ NHS trusts across the United Kingdom upon full rollout.",
                  "Engineered a multi-modal disfluency detection model specifically for the German language by integrating transcripts, audio samples, and hand gestures.",
                  "Realized state-of-the-art performance utilizing BERT frameworks and audio transformer architectures tailored for the German dialect, resulting in exceptional metrics including a remarkable accuracy rate of 0.98 and F1 score at 0.41.",
                ],
              },
              {
                title: "Full-stack Developer",
                company: "Antares.Tech",
                location: "Noida, India",
                period: "May 2019 - February 2020",
                description: [
                  "Delivered tailored application development services focusing on both business-to-business (B2B) and business-to-consumer (B2C) platforms; findings were used to address core customer needs resulting in enhanced product-market fit.",
                  "Most of the contribution was on an app called Crowd Mics which is available on Google Play Store and Apple App Store for mobile devices.",
                  "Collaborated on innovative solutions targeting audio processing delays; achieved a reduction of latency from 400ms down to just 80ms, dramatically improving real-time interaction for users on both iOS and Android platforms.",
                  "Launched a CI/CD pipeline with Jenkins and Docker, achieving 99.99% uptime and reducing deployment time.",
                  "Developed and deployed mobile applications for mobile operating systems utilizing React-Native, achieving a 100% shared UI codebase that enhanced development efficiency across device ecosystems.",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-black dark:text-white mb-1 opacity-80">
                      {exp.company}
                    </p>
                    <p className="text-sm sm:text-base text-black dark:text-white opacity-60">
                      {exp.location}
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-black dark:text-white font-medium mt-4 md:mt-0 opacity-80">
                    {exp.period}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-black dark:text-white opacity-80 pl-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
