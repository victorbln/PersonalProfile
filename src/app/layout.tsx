import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Balan | Software Engineer — Backend, Cloud & Distributed Systems",
  description:
    "Software Engineer at ASSIST Software with 3+ years designing high-load distributed systems, cloud-native infrastructure, and iGaming backends. Specialising in Java, Spring Boot, Kubernetes, and Terraform.",
  keywords: [
    "Victor Balan", "Software Engineer", "Backend Engineer",
    "Java", "Spring Boot", "Kubernetes", "Distributed Systems",
    "Cloud Infrastructure", "Terraform", "Romania",
  ],
  authors: [{ name: "Victor Balan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Victor Balan | Software Engineer",
    description:
      "Backend engineer specialising in distributed systems, cloud-native infrastructure, and high-load platform development.",
    siteName: "Victor Balan — Portfolio",
    images: [{ url: "/profile.png", width: 400, height: 400, alt: "Victor Balan" }],
  },
  twitter: {
    card: "summary",
    title: "Victor Balan | Software Engineer",
    description: "Backend engineer — Java · Spring Boot · Kubernetes · Terraform · Distributed Systems",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
