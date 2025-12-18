import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      
      {/* Publications Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-16">
            Publications
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Characteristics of Common Experimental Dialogue Tasks: a Systematic Review & Taxonomy",
                authors: "Ella Cullen, Patrick Healey, Paraskevi Argyriou and Suyog Pipliwal",
                venue: "Research Publication",
                year: "2024",
                description: "A systematic review and taxonomy of common experimental dialogue tasks, providing comprehensive analysis and classification of dialogue research methodologies.",
              },
            ].map((pub, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-80 transition-opacity"
              >
                <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                  {pub.title}
                </h3>
                <p className="text-black dark:text-white mb-2 opacity-80">
                  {pub.authors}
                </p>
                <p className="text-black dark:text-white mb-4 italic opacity-60">
                  {pub.venue}, {pub.year}
                </p>
                <p className="text-black dark:text-white mb-6 leading-relaxed opacity-80">
                  {pub.description}
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
