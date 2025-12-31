const defaultDescription = "AI Research Engineer and Deep Learning Specialist. Portfolio showcasing research projects, publications, and experience in machine learning and AI.";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suyog Pipliwal",
    jobTitle: "AI Research Engineer",
    description: "Deep Learning Specialist and Machine Learning Engineer with over 4 years of experience in algorithm development and data analysis.",
    url: "https://suyog-pipliwaal.github.io",
    sameAs: [
      "https://github.com/suyog-pipliwaal",
      "https://linkedin.com/in/suyogpipliwal",
    ],
    email: "suyogpiplwal@gmail.com",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Queen Mary University of London",
        address: {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "United Kingdom",
        },
      },
      {
        "@type": "EducationalOrganization",
        name: "Indian Institute of Information Technology",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Guwahati",
          addressCountry: "India",
        },
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "PyTorch",
      "TensorFlow",
      "Python",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Cognitive Science Group, Queen Mary University of London",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Suyog Pipliwal - AI Research Engineer",
    url: "https://suyog-pipliwaal.github.io",
    description: defaultDescription,
    author: {
      "@type": "Person",
      name: "Suyog Pipliwal",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

