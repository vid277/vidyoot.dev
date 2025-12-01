import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AmplitudeProvider from "./components/AmplitudeProvider";

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
    "Hey! I'm Vidyoot, a software engineer. I'm currently working at Trieve, a startup building enterprise RAG and Search solutions. I'm also working at Threshold Security, a startup building a multi-sig wallet for the web3 world. In the past, I've worked at Caterpillar, on the Product Services and Logistics teams and also at the University of Chicago, where I was a research assistant creating a platform to run molecular dynamic and coarse-grained simulations for proteins.",
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "System Architecture",
    "API Development",
    "Georgia Tech",
    "Cloud Computing",
    "Vidyoot Senthil",
    "Node.js",
    "Python",
    "Rust",
    "C#",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Caterpillar",
    "University of Chicago",
    "RAG",
    "Search",
  ],
  authors: [{ name: "Vidyoot Senthil" }],
  creator: "Vidyoot Senthil",
  openGraph: {
    title: "vidyoot.dev",
    description:
      "Hey! I'm Vidyoot, a software engineer. I'm currently working at Trieve, a startup building enterprise RAG and Search solutions. I'm also working at Threshold Security, a startup building a multi-sig wallet for the web3 world. In the past, I've worked at Caterpillar, on the Product Services and Logistics teams and also at the University of Chicago, where I was a research assistant creating a platform to run molecular dynamic and coarse-grained simulations for proteins.",
    url: "https://vidyoot.dev",
    siteName: "vidyoot.dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "vidyoot.dev",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "vidyoot.dev",
    description:
      "Hey! I'm Vidyoot, a software engineer. I'm currently working at Trieve, a startup building enterprise RAG and Search solutions. I'm also working at Threshold Security, a startup building a multi-sig wallet for the web3 world. In the past, I've worked at Caterpillar, on the Product Services and Logistics teams and also at the University of Chicago, where I was a research assistant creating a platform to run molecular dynamic and coarse-grained simulations for proteins.",
    creator: "@vidyoot",
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
        <AmplitudeProvider>{children}</AmplitudeProvider>
      </body>
    </html>
  );
}
