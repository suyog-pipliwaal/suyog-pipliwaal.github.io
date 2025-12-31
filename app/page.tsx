import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      
      {/* Home Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-black dark:bg-white flex items-center justify-center text-2xl sm:text-4xl font-bold text-white dark:text-black mb-4 sm:mb-6 border-2 border-black dark:border-white">
              SP
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black dark:text-white mb-4 sm:mb-6 px-2">
            Hi, I'm <span className="text-black dark:text-white">Suyog Pipliwal</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white mb-6 sm:mb-8 px-2">
            AI Research Engineer | Deep Learning Specialist
          </p>
          <p className="text-base sm:text-lg text-black dark:text-white max-w-2xl mx-auto mb-8 sm:mb-12 opacity-80 px-2 leading-relaxed">
            Machine Learning Engineer aspirant with over 4 years of experience in algorithm development 
            and data analysis. Spearheaded research initiatives that enhanced patient-clinician interactions 
            within therapeutic web-based platforms. Holds a Master of Science in Artificial Intelligence 
            from Queen Mary University of London.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap px-2">
            <Link
              href="/cv"
              className="px-6 sm:px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity font-medium border-2 border-black dark:border-white text-sm sm:text-base"
            >
              View CV
            </Link>
            <Link
              href="/projects"
              className="px-6 sm:px-8 py-3 rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-medium text-sm sm:text-base"
            >
              View Projects
            </Link>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 justify-center px-2">
            <a href="https://github.com/suyog-pipliwaal" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-70 transition-opacity text-sm sm:text-base">
              GitHub
            </a>
            <a href="https://linkedin.com/in/suyogpipliwal" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:opacity-70 transition-opacity text-sm sm:text-base">
              LinkedIn
            </a>
            <a href="mailto:suyogpiplwal@gmail.com" className="text-black dark:text-white hover:opacity-70 transition-opacity text-sm sm:text-base">
              Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
