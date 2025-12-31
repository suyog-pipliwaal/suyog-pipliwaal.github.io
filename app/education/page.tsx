import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      
      {/* Education Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 sm:mb-12 md:mb-16">
            Education
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                degree: "Master of Science in Artificial Intelligence",
                institution: "Queen Mary University of London",
                location: "London, United Kingdom",
                period: "September 2021 - September 2022",
                description: "Specialized in artificial intelligence, machine learning, and deep learning. Focused on advanced topics including neural networks, natural language processing, and research methodologies.",
              },
              {
                degree: "Bachelor of Technology in Computer Science",
                institution: "Indian Institute of Information Technology",
                location: "Guwahati, India",
                period: "June 2015 - May 2019",
                description: "Comprehensive computer science curriculum covering algorithms, data structures, software engineering, and system design. Foundation in programming and software development.",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg sm:text-xl text-black dark:text-white mb-1 opacity-80">
                      {edu.institution}
                    </p>
                    <p className="text-sm sm:text-base text-black dark:text-white opacity-60">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-left md:text-right mt-4 md:mt-0">
                    <p className="text-sm sm:text-base text-black dark:text-white font-medium opacity-80">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-black dark:text-white leading-relaxed opacity-80">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
