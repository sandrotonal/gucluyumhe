import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://omer-ozbay-blog.vercel.app'),
  title: "Ömer Özbay | Yazılım Geliştirici & Blog",
  description: "Ağrı/Doğubayazıt'tan 20 yaşında bir yazılım geliştirici. SaaS projeleri, yapay zeka ve modern web teknolojileri üzerine blog yazıları ve portfolyo.",
  openGraph: {
    title: "Ömer Özbay | Yazılım Geliştirici",
    description: "Modern web teknolojileri ve yapay zeka üzerine çalışmalar.",
    type: "website",
    locale: "tr_TR",
    url: "https://omer-ozbay-blog.vercel.app",
    siteName: "Ömer Özbay Blog",
    images: [
      {
        url: "/images/og-image.jpg", // Make sure this exists or use a default
        width: 1200,
        height: 630,
        alt: "Ömer Özbay Portfolyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ömer Özbay | Yazılım Geliştirici",
    description: "SaaS ve AI odaklı yazılım geliştirme.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
