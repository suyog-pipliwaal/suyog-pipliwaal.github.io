import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Suyog Resume",
  description: "AI Research Engineer and Deep Learning Specialist. Portfolio showcasing research projects, publications, and experience in machine learning and AI.",
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
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
