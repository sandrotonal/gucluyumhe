"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white/90 shadow-md dark:bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center">
          <div className="mr-2 relative">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center text-white font-bold text-lg transform rotate-12 transition-transform duration-300 hover:rotate-0">
              P
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Ömer</span> Özbay
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              href="/" 
              className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium relative btn-transition group flex items-center ${pathname === '/' ? 'text-[var(--primary)] dark:text-[var(--primary)]' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Ana Sayfa</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full ${pathname === '/' ? 'w-full' : ''}`}></span>
            </Link>
          </li>
           <li>
            <Link
              href="/projects"
              className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium relative btn-transition group flex items-center ${pathname === '/projects' ? 'text-[var(--primary)] dark:text-[var(--primary)]' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span>Projeler</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full ${pathname === '/projects' ? 'w-full' : ''}`}></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium relative btn-transition group flex items-center ${pathname.startsWith('/blog') ? 'text-[var(--primary)] dark:text-[var(--primary)]' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span>Blog</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full ${pathname.startsWith('/blog') ? 'w-full' : ''}`}></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/about"
              className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium relative btn-transition group flex items-center ${pathname === '/about' ? 'text-[var(--primary)] dark:text-[var(--primary)]' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Hakkımda</span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full ${pathname === '/about' ? 'w-full' : ''}`}></span>
            </Link>
          </li>
          <li>
            <Link 
              href="/contact"
              className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white rounded-lg transition-all duration-300 flex items-center text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              İletişim
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-90' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-6 py-2 pb-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link 
                href="/" 
                className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium flex items-center py-2 ${pathname === '/' ? 'text-[var(--primary)]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium flex items-center py-2 ${pathname === '/projects' ? 'text-[var(--primary)]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                Projeler
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium flex items-center py-2 ${pathname.startsWith('/blog') ? 'text-[var(--primary)]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium flex items-center py-2 ${pathname === '/about' ? 'text-[var(--primary)]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Hakkımda
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className={`text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] font-medium flex items-center py-2 ${pathname === '/contact' ? 'text-[var(--primary)]' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;