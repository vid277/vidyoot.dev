import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vidyoot.dev",
  description:
    "Welcome to my portfolio! I am a passionate backend developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems. With expertise in cloud infrastructure and database optimization, I create efficient and reliable backend solutions.",
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "System Architecture",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "Microservices",
    "DevOps",
    "[Your Name]",
    "Node.js",
    "Python",
    "Java",
    "Distributed Systems",
    "System Design",
    "Backend Architecture",
  ],
  authors: [{ name: "[Your Name]" }],
  creator: "[Your Name]",
  openGraph: {
    title: "[Your Name] - Backend Developer Portfolio",
    description:
      "Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.",
    url: "https://your-domain.com",
    siteName: "[Your Name] - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "[Your Name] - Backend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Name] - Backend Developer",
    description:
      "Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
