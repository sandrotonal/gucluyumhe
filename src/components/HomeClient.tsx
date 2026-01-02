'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PostMetadata } from '@/utils/markdown';
import { projects } from '@/data/projects';

interface HomeClientProps {
  recentPosts: PostMetadata[];
}

export default function HomeClient({ recentPosts }: HomeClientProps) {
  useScrollAnimation();

  // Show last 3 posts
  const displayedPosts = recentPosts.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section - Parallax Effect */}
      <section className="text-center py-20 bg-gradient-to-r from-[#0ea5e910] to-[#06b6d410] dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-100 dark:border-gray-800 page-transition relative overflow-hidden">
        {/* Parallax background elements */}
        <div className="absolute inset-0 parallax-hero">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/10 dark:bg-blue-500/20"></div>
          <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-purple-500/10 dark:bg-purple-500/20"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 rounded-full bg-green-500/10 dark:bg-green-500/20"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-yellow-500/10 dark:bg-yellow-500/20"></div>
        </div>

        {/* Content - reverse parallax effect */}
        <div className="max-w-3xl mx-auto px-4 relative z-10 parallax-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-dark)] to-[var(--accent)] dark:from-[var(--primary)] dark:to-[var(--accent)]">
            Merhaba, ben Ömer Özbay.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            20 yaşındayım ve Ağrı / Doğubayazıt’tan yazılım geliştiriyorum.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
             Web, SaaS ve AI tabanlı projeler üretiyorum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-lg hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/30 transition-all duration-300 btn-transition"
            >
              Projelerim
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-[var(--primary)] font-medium rounded-lg border border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all duration-300 btn-transition"
            >
              Yazılarım
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 shadow-lg transition-all duration-300 btn-transition"
            >
              Benimle İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="page-transition scroll-animate fade-up">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white relative inline-block">
            <span className="relative z-10">Son Blog Yazıları</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
          <Link
            href="/blog"
            className="text-[var(--primary)] hover:text-[var(--primary-dark)] dark:text-[var(--primary)] dark:hover:text-[var(--primary-light)] font-medium group flex items-center btn-transition"
          >
            Tümünü Gör
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-[var(--card-border)] card-hover-effect group"
            >
              {post.coverImage && (
                <div className="relative h-52 w-full card-image overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <Link href={`/blog/${post.id}`} className="block group">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-[var(--primary)] dark:group-hover:text-[var(--primary)] transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)] dark:text-[var(--primary)] dark:hover:text-[var(--primary-light)] font-medium inline-flex items-center group btn-transition hover:scale-105 transition-transform"
                >
                  Devamını Oku
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="page-transition scroll-animate fade-up">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white relative inline-block">
            <span className="relative z-10">Projelerim</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
           <Link
            href="/projects"
            className="text-[var(--primary)] hover:text-[var(--primary-dark)] dark:text-[var(--primary)] dark:hover:text-[var(--primary-light)] font-medium group flex items-center btn-transition"
          >
            Tümünü Gör
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-[var(--card-border)] card-hover-effect group"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 flex items-center group-hover:text-[var(--primary)] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-xs rounded-full font-medium transition-transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-lg hover:bg-[var(--primary-dark)] transition-all duration-300 flex items-center gap-2 btn-transition hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 flex items-center gap-2 btn-transition hover:scale-105"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl scroll-animate fade-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Bir Projede Birlikte Çalışalım mı?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Yeni bir proje fikriniz mi var? Mevcut projenizi geliştirmek mi istiyorsunuz? Hemen iletişime geçin!
          </p>
          <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            İletişime Geç
          </Link>
        </div>
      </section>
    </div>
  );
}