import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Research publications by Suyog Pipliwal. Including systematic reviews and taxonomy of experimental dialogue tasks in AI and machine learning research.",
  openGraph: {
    title: "Publications - Suyog Pipliwal",
    description: "Research publications including systematic reviews and taxonomy of experimental dialogue tasks in AI and machine learning research.",
  },
};

export default function PublicationsPage() {
  const publications = [
    {
      title: "Characteristics of Common Experimental Dialogue Tasks: a Systematic Review & Taxonomy",
      authors: "Ella Cullen, Patrick Healey, Paraskevi Argyriou and Suyog Pipliwal",
      venue: "Research Publication",
      year: "2024",
      description: "A systematic review and taxonomy of common experimental dialogue tasks, providing comprehensive analysis and classification of dialogue research methodologies.",
    },
  ];

  const articleSchema = publications.map((pub) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    author: pub.authors.split(" and ").map((author) => ({
      "@type": "Person",
      name: author.trim(),
    })),
    datePublished: pub.year,
    publisher: {
      "@type": "Organization",
      name: pub.venue,
    },
    description: pub.description,
  }));

  return (
    <div className="min-h-screen bg-white font-sans dark:bg-black">
      <Navigation />
      <Breadcrumbs />
      
      {/* Publications Section */}
      <main className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 sm:mb-12 md:mb-16">
            Publications
          </h1>
          <div className="space-y-6 sm:space-y-8">
            {publications.map((pub, index) => (
              <article
                key={index}
                className="p-6 sm:p-8 rounded-lg bg-white dark:bg-black border border-black dark:border-white hover:opacity-80 transition-opacity"
                itemScope
                itemType="https://schema.org/ScholarlyArticle"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3" itemProp="headline">
                  {pub.title}
                </h2>
                <p className="text-sm sm:text-base text-black dark:text-white mb-2 opacity-80" itemProp="author">
                  {pub.authors}
                </p>
                <p className="text-sm sm:text-base text-black dark:text-white mb-4 italic opacity-60">
                  <span itemProp="publisher">{pub.venue}</span>, <span itemProp="datePublished">{pub.year}</span>
                </p>
                <p className="text-sm sm:text-base text-black dark:text-white mb-6 leading-relaxed opacity-80" itemProp="description">
                  {pub.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>

      {articleSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Footer />
    </div>
  );
}
