import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import StructuredData from "./components/StructuredData";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://suyog-pipliwaal.github.io";
const siteName = "Suyog Pipliwal - AI Research Engineer";
const defaultDescription = "AI Research Engineer and Deep Learning Specialist. Portfolio showcasing research projects, publications, and experience in machine learning and AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "AI Research Engineer",
    "Deep Learning Specialist",
    "Machine Learning Engineer",
    "Artificial Intelligence",
    "Neural Networks",
    "Natural Language Processing",
    "PyTorch",
    "TensorFlow",
    "Research Publications",
    "Queen Mary University of London",
    "Suyog Pipliwal",
  ],
  authors: [{ name: "Suyog Pipliwal" }],
  creator: "Suyog Pipliwal",
  publisher: "Suyog Pipliwal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Suyog Pipliwal - AI Research Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    creator: "@suyogpipliwal",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased`}
      >
        <StructuredData />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
