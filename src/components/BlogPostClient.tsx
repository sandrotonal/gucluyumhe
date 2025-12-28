'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Post } from '@/utils/markdown';
import { useEffect } from 'react';

// SVG bileşenleri
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const User = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

interface BlogPostClientProps {
  postData: Post;
}

export default function BlogPostClient({ postData }: BlogPostClientProps) {
  useScrollAnimation();

  // Scroll animasyonu için manuel tetikleme
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    // Sayfa yüklendiğinde animasyonu başlat
    setTimeout(() => {
      scrollElements.forEach((el) => {
        el.classList.add('visible');
      });
    }, 100);
  }, []);

  // Demo fonksiyonu
  const showDemo = (postId: string) => {
    alert(`${postId} için demo başlatılıyor...`);
    // Burada gerçek bir demo başlatma kodu olabilir
    // Örneğin: window.open(`/demo/${postId}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-12 page-transition">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] dark:hover:text-[var(--primary-light)] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Tüm Yazılara Dön
        </Link>

        <article className="bg-[var(--card-bg)] dark:bg-gray-800/50 rounded-xl shadow-md border border-[var(--card-border)] p-6 md:p-8 page-transition">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              {postData.title}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6 gap-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2 text-[var(--primary)]" />
                <span className="font-medium">{postData.author}</span>
              </div>

              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[var(--primary)]" />
                <time dateTime={postData.date}>
                  {new Date(postData.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>

            {postData.tags && postData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {postData.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {postData.coverImage && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden border border-[var(--card-border)]">
                <Image
                  src={postData.coverImage}
                  alt={postData.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-800 dark:prose-headings:text-white prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 relative inline-block">
            <span className="relative z-10">Bu Yazıyı Paylaş</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h3>
          <div className="flex gap-4">
            <button
              onClick={() => showDemo(postData.id)}
              className="p-3 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primary-dark)] transition-all duration-300 hover:scale-110 btn-transition"
              aria-label="Demo Göster"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/blog/${postData.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-[#0c85d0] transition-all duration-300 hover:scale-110 btn-transition"
              aria-label="Twitter'da Paylaş"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/blog/${postData.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0077B5] text-white rounded-full hover:bg-[#005885] transition-all duration-300 hover:scale-110 btn-transition"
              aria-label="LinkedIn'de Paylaş"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
