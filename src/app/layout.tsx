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
  description: "Yazılım projelerimi, deneyimlerimi ve teknoloji dünyasındaki düşüncelerimi paylaştığım kişisel blog sitem.",
  openGraph: {
    title: "Ömer Özbay | Yazılım Geliştirici & Blog",
    description: "Yazılım projelerimi ve deneyimlerimi paylaştığım kişisel blog sitem.",
    url: 'https://omer-ozbay-blog.vercel.app',
    siteName: 'Ömer Özbay Blog',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ömer Özbay | Yazılım Geliştirici & Blog",
    description: "Yazılım projelerimi ve deneyimlerimi paylaştığım kişisel blog sitem.",
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
