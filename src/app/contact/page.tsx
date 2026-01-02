'use client';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 page-transition">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-dark)] to-[var(--accent)] dark:from-[var(--primary)] dark:to-[var(--accent)]">
          İletişime Geç
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10 text-lg">
          Projeleriniz, iş birlikleri veya sadece tanışmak için benimle iletişime geçebilirsiniz.
        </p>

        <div className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg border border-[var(--card-border)] p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                placeholder="Adınız"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
                placeholder="ornek@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Konu
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all"
              >
                <option value="project">Proje Teklifi</option>
                <option value="collaboration">İş Birliği</option>
                <option value="general">Genel Soru</option>
                <option value="other">Diğer</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Mesajınızı buraya yazın..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Gönder
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <a
            href="mailto:info@example.com"
            className="p-4 rounded-lg bg-[var(--card-bg)] dark:bg-gray-800 border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors group"
          >
            <div className="w-10 h-10 mx-auto bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mb-3 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">info@example.com</p>
          </a>

          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-[var(--card-bg)] dark:bg-gray-800 border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors group"
          >
            <div className="w-10 h-10 mx-auto bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mb-3 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">GitHub</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">@username</p>
          </a>

          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-lg bg-[var(--card-bg)] dark:bg-gray-800 border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors group"
          >
            <div className="w-10 h-10 mx-auto bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mb-3 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">LinkedIn</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">@username</p>
          </a>
        </div>
      </div>
    </div>
  );
}
