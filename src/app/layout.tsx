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
  title: "Yazılım Portfolyo Blog | Ömer Özbay",
  description: "Ömer Özbay'ın kişisel portfolyo ve blog sitesi. Yazılım projelerim, deneyimlerim ve teknoloji üzerine yazılarım.",
  openGraph: {
    title: "Yazılım Portfolyo Blog | Ömer Özbay",
    description: "Ömer Özbay'ın kişisel portfolyo ve blog sitesi.",
    url: 'https://omer-ozbay-blog.vercel.app',
    siteName: 'Ömer Özbay Portfolyo',
    locale: 'tr_TR',
    type: 'website',
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
