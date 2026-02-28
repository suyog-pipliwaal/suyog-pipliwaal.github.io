import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Research publications by Suyog Pipliwal, including systematic reviews and taxonomy of experimental dialogue tasks in AI and machine learning research.",
  openGraph: {
    title: "Publications - Suyog Pipliwal",
    description:
      "Research publications including systematic reviews and taxonomy of experimental dialogue tasks in AI and machine learning research.",
  },
};

const publications = [
  {
    title: "Characteristics of Common Experimental Dialogue Tasks: A Systematic Review and Taxonomy",
    authors: ["Ella Cullen", "Patrick Healey", "Paraskevi Argyriou", "Suyog Pipliwal"],
    venue: "Research Publication",
    year: "2024",
    description:
      "A structured review and taxonomy of experimental dialogue tasks, offering a consolidated view of task design patterns and evaluation practices in dialogue research.",
  },
];

export default function PublicationsPage() {
  const articleSchema = publications.map((pub) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    author: pub.authors.map((author) => ({
      "@type": "Person",
      name: author,
    })),
    datePublished: pub.year,
    publisher: {
      "@type": "Organization",
      name: pub.venue,
    },
    description: pub.description,
  }));

  return (
    <div className="site-shell min-h-screen font-sans">
      <Navigation />
      <Breadcrumbs />

      <main className="px-4 sm:px-6 pb-10 sm:pb-14">
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 sm:px-8 sm:py-9">
            <p className="text-sm font-medium text-[var(--primary)]">Research Output</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              Publications
            </h1>
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[var(--muted)]">
              Selected research work focused on dialogue systems and experimental task analysis in applied AI.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7 shadow-[0_12px_30px_rgba(25,38,35,0.08)]"
                itemScope
                itemType="https://schema.org/ScholarlyArticle"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-[var(--foreground)]" itemProp="headline">
                  {pub.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[var(--muted)]" itemProp="author">
                  {pub.authors.join(", ")}
                </p>
                <p className="mt-2 text-sm sm:text-base italic text-[var(--accent)]">
                  <span itemProp="publisher">{pub.venue}</span>, <span itemProp="datePublished">{pub.year}</span>
                </p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--muted)]" itemProp="description">
                  {pub.description}
                </p>
              </article>
            ))}
          </div>
        </section>
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
