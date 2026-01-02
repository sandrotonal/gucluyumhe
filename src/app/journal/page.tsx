export default function JournalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 inline-block">
            Gelişim Günlüğü
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Öğrenme sürecim, hedeflerim ve karşılaştığım zorluklar.
          </p>
        </div>

        <div className="space-y-12">
          {/* Timeline Item 1 */}
          <div className="relative pl-8 border-l-2 border-blue-100 dark:border-blue-900/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-gray-900"></div>
            <div className="mb-2 text-sm text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
              Mart 2024
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Next.js ile Profesyonel Adımlar
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <span className="text-green-500">✓</span> Öğrendiklerim
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>App Router yapısı</li>
                    <li>Server Components</li>
                    <li>Tailwind CSS v4</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">⚠</span> Zorlandıklarım
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Hydration hataları</li>
                    <li>Middleware kullanımı</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <span className="text-blue-500">🎯</span> Hedeflerim
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Fullstack SaaS projesi</li>
                    <li>Database optimizasyonu</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-8 border-l-2 border-blue-100 dark:border-blue-900/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-gray-900"></div>
            <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold tracking-wider uppercase">
              Şubat 2024
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 opacity-80">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🌱 Yazılım Dünyasına Giriş ve Temeller
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Doğubayazıt&apos;ta kendi imkanlarımla yazılım öğrenmeye başladığım dönem. Algoritma mantığını kavramak ve temel web teknolojilerini öğrenmekle geçti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
