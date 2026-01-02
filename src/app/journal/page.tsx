'use client';

export default function JournalPage() {
  const entries = [
    {
      id: 1,
      date: '10 Mart 2024',
      title: 'Next.js 14 ve Sunucu Bileşenleri',
      learnings: 'React Server Components mimarisini ve Next.js 14 ile gelen yenilikleri derinlemesine inceledim. Veri çekme stratejilerinde RSC\'nin sağladığı performans avantajlarını deneyimledim.',
      challenges: 'Client ve Server bileşenleri arasındaki veri akışını yönetmekte başlarda zorlandım.',
      goals: 'Bir sonraki projede tamamen RSC odaklı bir mimari kurmak.',
    },
    {
      id: 2,
      date: '25 Şubat 2024',
      title: 'SaaS Projesi ve Stripe Entegrasyonu',
      learnings: 'Bir SaaS projesinde abonelik modellerini yönetmek için Stripe entegrasyonunu öğrendim. Webhook\'lar ile ödeme durumlarını takip etmeyi başardım.',
      challenges: 'Stripe API dokümantasyonu çok kapsamlı olduğu için doğru endpointleri bulmak zaman aldı.',
      goals: 'Farklı ödeme sağlayıcılarını da (Iyzico gibi) entegre etmeyi denemek.',
    },
    {
      id: 3,
      date: '15 Şubat 2024',
      title: 'Yapay Zeka ile İçerik Üretimi',
      learnings: 'OpenAI API kullanarak otomatik içerik üreten bir araç geliştirdim. Prompt mühendisliğinin önemini kavradım.',
      challenges: 'API maliyetlerini optimize etmek ve yanıt sürelerini düşürmek zorlayıcıydı.',
      goals: 'Kendi fine-tune edilmiş modelimi eğitmek.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 page-transition">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-dark)] to-[var(--accent)] dark:from-[var(--primary)] dark:to-[var(--accent)] inline-block">
            Gelişim Günlüğü
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Haftalık/Aylık ne öğrendim, ne zorladı, ne hedefliyorum?
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-gray-700">
          {entries.map((entry) => (
            <div key={entry.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-900 bg-[var(--primary)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg border border-[var(--card-border)] card-hover-effect">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white">{entry.title}</h3>
                  <time className="text-xs font-medium text-gray-500 dark:text-gray-400">{entry.date}</time>
                </div>

                <div className="space-y-3">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-800/30">
                    <span className="block text-xs font-bold text-green-700 dark:text-green-400 mb-1 uppercase tracking-wide">Ne Öğrendim?</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{entry.learnings}</p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-800/30">
                    <span className="block text-xs font-bold text-red-700 dark:text-red-400 mb-1 uppercase tracking-wide">Ne Zorladı?</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{entry.challenges}</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <span className="block text-xs font-bold text-blue-700 dark:text-blue-400 mb-1 uppercase tracking-wide">Hedefim Ne?</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{entry.goals}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
