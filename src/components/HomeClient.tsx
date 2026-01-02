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
      <section className="text-center py-20 md:py-32 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl border border-white/50 dark:border-gray-800 page-transition relative overflow-hidden shadow-2xl shadow-blue-100/50 dark:shadow-none">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400/5 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-400/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 relative z-10 parallax-content">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium animate-fade-in-up">
            👋 Merhaba, Dünyama Hoş Geldiniz
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
            Ben <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Ömer Özbay</span>.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
            20 yaşındayım ve Ağrı / Doğubayazıt’tan yazılım geliştiriyorum.
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
             Web, SaaS ve AI tabanlı projeler üretiyorum.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Projelerim
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Yazılarım
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              İletişim
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="scroll-animate fade-up">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase">Blog</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">Son Yazılarım</h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            Tümünü Gör
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-100/50 dark:hover:shadow-none border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-56 w-full overflow-hidden">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-400">Görsel Yok</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Categories/Tags Badge */}
                {post.tags && post.tags.length > 0 && (
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {post.tags[0]}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-2">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span>{Math.ceil(post.excerpt.length / 100)} dk okuma</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  Devamını Oku
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Tüm Yazıları Gör
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="scroll-animate fade-up">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider text-sm uppercase">Portföy</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">Seçilmiş Projeler</h2>
          </div>
           <Link
            href="/projects"
            className="hidden md:flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            Tüm Projeler
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 dark:hover:shadow-none border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 relative overflow-hidden group">
                 {/* Decorative mock UI */}
                 <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm opacity-80 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="p-3 border-b border-gray-100 dark:border-gray-800 flex gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-red-400"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                       <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="p-4 space-y-2">
                       <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                       <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                       <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded w-full mt-4"></div>
                    </div>
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                     <span className="px-2.5 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-500 text-xs rounded-md font-medium">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors text-center"
                    >
                      Canlı Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
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

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Tüm Projeleri Gör
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white scroll-animate fade-up shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bir Projeniz mi Var?
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Fikirlerinizi hayata geçirmek veya mevcut projenizi geliştirmek için hazırım. Modern teknolojiler ve temiz kod prensipleriyle çalışıyorum.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              İletişime Geç
            </Link>
            <a href="mailto:omer@example.com" className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
