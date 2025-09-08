'use client';

import Link from 'next/link';
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

// Blog yazıları verileri
const blogPosts = [
  {
    id: 'yapay-zeka-yazilim-gelistirme',
    title: 'Yapay Zeka ile Yazılım Geliştirme: Fırsatlar ve Zorluklar',
    date: '2023-10-15',
    coverImage: '/images/blog/ai-development.jpg',
    excerpt: 'Yapay zeka teknolojilerinin yazılım geliştirme süreçlerine entegrasyonu, avantajları ve karşılaşılan zorluklar.',
    tags: ['Yapay Zeka', 'Yazılım Geliştirme', 'AI Araçları'],
    author: 'Ahmet Yılmaz',
    content: `
# Yapay Zeka ile Yazılım Geliştirme: Fırsatlar ve Zorluklar

Yapay zeka (AI) teknolojileri, yazılım geliştirme süreçlerini kökten değiştiriyor. Bu yazıda, AI'ın yazılım geliştirme süreçlerine entegrasyonunu, sunduğu fırsatları ve beraberinde getirdiği zorlukları inceleyeceğiz.

## Yapay Zeka Destekli Yazılım Geliştirme Nedir?

Yapay zeka destekli yazılım geliştirme (AI-Assisted Software Development), yapay zeka teknolojilerinin yazılım geliştirme süreçlerine entegre edilmesidir. Bu entegrasyon, kod yazma, hata ayıklama, test etme ve bakım gibi süreçlerde AI teknolojilerinden yararlanmayı içerir.

## Yazılım Geliştirmede AI'ın Sunduğu Fırsatlar

### 1. Kod Üretimi ve Tamamlama

GitHub Copilot, Tabnine ve Amazon CodeWhisperer gibi AI araçları, geliştiricilerin kod yazma sürecini hızlandırıyor. Bu araçlar:

- Bağlam tabanlı kod önerileri sunuyor
- Tekrarlayan görevleri otomatikleştiriyor
- Dokümantasyon oluşturmaya yardımcı oluyor
- Farklı programlama dillerinde kod üretebiliyor

### 2. Hata Ayıklama ve Kod Kalitesi

AI destekli araçlar, kodda potansiyel hataları ve güvenlik açıklarını tespit etmeye yardımcı oluyor:

- Statik kod analizi yaparak hataları önceden tespit ediyor
- Kod kalitesini ve performansını iyileştirme önerileri sunuyor
- Güvenlik açıklarını belirliyor ve çözüm önerileri getiriyor
- Kod tekrarlarını ve karmaşıklığı azaltmaya yardımcı oluyor

### 3. Test Otomasyonu

AI, test süreçlerini otomatikleştirerek, test kapsamını genişletiyor ve hata bulma olasılığını artırıyor:

- Otomatik test senaryoları oluşturuyor
- Regresyon testlerini optimize ediyor
- Kullanıcı arayüzü testlerini otomatikleştiriyor
- Test sonuçlarını analiz ederek, hata kaynaklarını belirliyor

### 4. Proje Yönetimi ve Planlama

AI, proje yönetimi süreçlerini iyileştirerek, daha doğru tahminler ve planlamalar yapılmasını sağlıyor:

- Görev tahminlerini iyileştiriyor
- Kaynak tahsisini optimize ediyor
- Risk analizini geliştiriyor
- Proje zaman çizelgelerini daha doğru bir şekilde oluşturuyor

## Yazılım Geliştirmede AI'ın Getirdiği Zorluklar

### 1. Kod Kalitesi ve Güvenilirlik

AI tarafından üretilen kodun her zaman en iyi kalitede veya güvenilir olmayabileceği endişeleri bulunuyor:

- AI'ın ürettiği kodun doğruluğunu ve güvenilirliğini değerlendirme zorluğu
- Lisanslama ve telif hakkı sorunları
- Güvenlik açıkları ve kötü niyetli kod üretme riski
- Kodun bakımı ve sürdürülebilirliği ile ilgili endişeler

### 2. Öğrenme Eğrisi ve Adaptasyon

AI araçlarının etkin kullanımı, geliştiricilerin yeni beceriler edinmesini gerektiriyor:

- AI araçlarını etkili bir şekilde kullanmayı öğrenme süreci
- Mevcut geliştirme süreçlerine AI araçlarını entegre etme zorluğu
- Geleneksel geliştirme yöntemlerinden AI destekli yöntemlere geçiş
- Ekip üyelerinin farklı adaptasyon hızları

### 3. Etik ve Sorumluluk

AI'ın yazılım geliştirmede kullanımı, çeşitli etik sorunları beraberinde getiriyor:

- AI'ın ürettiği kodun sorumluluğu kime ait?
- Telif hakkı ve fikri mülkiyet sorunları
- Veri gizliliği ve güvenliği endişeleri
- İş gücü üzerindeki potansiyel etkiler

### 4. Aşırı Bağımlılık

Geliştiricilerin AI araçlarına aşırı bağımlı hale gelmesi, bazı temel becerilerin körelmesine yol açabilir:

- Temel programlama becerilerinin zayıflaması
- Problem çözme yeteneklerinin azalması
- Algoritma ve veri yapıları bilgisinin önemini yitirmesi
- Kodun nasıl çalıştığını anlama yeteneğinin azalması

## Dengeli Bir Yaklaşım: İnsan-AI İşbirliği

Yapay zeka, yazılım geliştirme süreçlerini tamamen değiştirme potansiyeline sahip olsa da, en etkili yaklaşım insan-AI işbirliğidir:

- AI'ı bir yardımcı olarak kullanmak, bir yedek olarak değil
- AI'ın önerilerini eleştirel bir gözle değerlendirmek
- AI araçlarını kullanırken temel programlama becerilerini korumak
- AI'ın sınırlamalarının farkında olmak ve buna göre hareket etmek

## Sonuç

Yapay zeka, yazılım geliştirme süreçlerini dönüştürme potansiyeline sahip güçlü bir araçtır. Sunduğu fırsatlardan yararlanırken, beraberinde getirdiği zorlukların da farkında olmak önemlidir. Dengeli bir yaklaşım benimseyerek, AI'ın avantajlarından yararlanabilir ve potansiyel dezavantajlarını en aza indirebilirsiniz.

Yazılım geliştirme dünyası hızla evrilmeye devam ederken, AI teknolojilerini benimsemek ve bu teknolojilerle çalışma becerilerini geliştirmek, rekabetçi kalmak için giderek daha önemli hale geliyor. Ancak, AI'ı bir yardımcı olarak görmek ve temel programlama becerilerini korumak, uzun vadede başarılı olmanın anahtarıdır.
    `
  },
  {
    id: 'modern-frontend-mimarileri',
    title: 'Modern Frontend Mimarileri ve Performans Optimizasyonu',
    date: '2023-11-05',
    coverImage: '/images/blog/frontend-architecture.jpg',
    excerpt: 'Günümüz web uygulamalarında kullanılan modern frontend mimarileri ve performans optimizasyon teknikleri.',
    tags: ['Frontend', 'Performans', 'Mimari'],
    author: 'Mehmet Kaya',
    content: `
# Modern Frontend Mimarileri ve Performans Optimizasyonu

Günümüz web uygulamaları, kullanıcı deneyimini iyileştirmek ve karmaşık işlevselliği yönetmek için modern frontend mimarilerine ihtiyaç duyuyor. Bu yazıda, modern frontend mimarilerini ve performans optimizasyon tekniklerini inceleyeceğiz.

## Modern Frontend Mimarileri

### 1. Mikro Frontend Mimarisi

Mikro frontend mimarisi, büyük monolitik frontend uygulamalarını daha küçük, bağımsız parçalara ayıran bir yaklaşımdır. Bu mimari:

- Farklı ekiplerin bağımsız çalışmasına olanak tanır
- Ölçeklenebilirliği artırır
- Teknoloji çeşitliliğine izin verir
- Daha hızlı dağıtım ve geliştirme süreçleri sağlar

**Uygulama Örneği:**

```html
<!-- Ana uygulama shell'i -->
<html>
  <head>
    <title>Mikro Frontend Örneği</title>
  </head>
  <body>
    <header id="navbar"></header>
    <main>
      <div id="products"></div>
      <div id="cart"></div>
      <div id="recommendations"></div>
    </main>
    <footer id="footer"></footer>
    
    <!-- Her mikro frontend için ayrı script -->
    <script src="navbar.js" type="module"></script>
    <script src="products.js" type="module"></script>
    <script src="cart.js" type="module"></script>
    <script src="recommendations.js" type="module"></script>
    <script src="footer.js" type="module"></script>
  </body>
</html>
```

### 2. Atomic Tasarım Sistemi

Atomic tasarım, kullanıcı arayüzlerini atom, molekül, organizma, şablon ve sayfa gibi hiyerarşik bileşenlere ayıran bir metodoloji sunar:

- Atomlar: Butonlar, giriş alanları gibi en küçük bileşenler
- Moleküller: Atomların bir araya gelmesiyle oluşan form grupları gibi bileşenler
- Organizmalar: Moleküllerin bir araya gelmesiyle oluşan header, footer gibi bileşenler
- Şablonlar: Sayfaların iskeletini oluşturan yapılar
- Sayfalar: Son kullanıcının gördüğü tam sayfalar

**React ile Uygulama Örneği:**

```jsx
// Atom: Button bileşeni
const Button = ({ text, onClick }) => (
  <button className="btn" onClick={onClick}>{text}</button>
);

// Molekül: Form girişi bileşeni
const FormInput = ({ label, type, value, onChange }) => (
  <div className="form-group">
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} />
  </div>
);

// Organizma: Login formu bileşeni
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login işlemi
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormInput label="E-posta" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Şifre" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button text="Giriş Yap" onClick={handleSubmit} />
    </form>
  );
};
```

### 3. JAMstack Mimarisi

JAMstack (JavaScript, API, Markup), modern web geliştirme için bir mimari yaklaşımdır:

- JavaScript: İstemci tarafında dinamik işlevsellik
- API: Sunucu tarafı işlemleri için API'lar
- Markup: Önceden oluşturulmuş statik HTML

Bu mimari:
- Daha hızlı sayfa yükleme süreleri sağlar
- Güvenliği artırır
- Ölçeklenebilirliği iyileştirir
- CDN üzerinden dağıtımı kolaylaştırır

**Next.js ile Uygulama Örneği:**

```jsx
// pages/index.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  
  return {
    props: { posts },
    revalidate: 60 // Her 60 saniyede bir yeniden oluştur
  };
}

export default function Blog({ posts }) {
  return (
    <div>
      <h1>Blog Yazıları</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
```

## Performans Optimizasyon Teknikleri

### 1. Kod Bölme (Code Splitting)

Kod bölme, uygulamanızı daha küçük parçalara ayırarak, sadece gerektiğinde yüklenmesini sağlar:

```jsx
import React, { lazy, Suspense } from 'react';

// Tembel yükleme ile bileşen içe aktarma
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>Ana Uygulama</h1>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```

### 2. Resim Optimizasyonu

Resim optimizasyonu, sayfa yükleme sürelerini önemli ölçüde iyileştirebilir:

- Modern formatlar kullanın (WebP, AVIF)
- Responsive resimler için srcset kullanın
- Lazy loading uygulayın
- CDN kullanın

```jsx
// Next.js Image bileşeni örneği
import Image from 'next/image';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        loading="lazy"
        placeholder="blur"
        blurDataURL={product.thumbnailUrl}
      />
      <h3>{product.name}</h3>
      <p>{product.price} TL</p>
    </div>
  );
}
```

### 3. Memoizasyon ve Gereksiz Render'ları Önleme

React uygulamalarında, gereksiz render'ları önlemek için memoizasyon teknikleri kullanabilirsiniz:

```jsx
import React, { useState, useMemo, useCallback } from 'react';

function ProductList({ products, onProductSelect }) {
  // Pahalı hesaplama sonucunu önbelleğe alma
  const sortedProducts = useMemo(() => {
    console.log('Ürünler sıralanıyor...');
    return [...products].sort((a, b) => a.price - b.price);
  }, [products]);
  
  // Fonksiyonu önbelleğe alma
  const handleSelect = useCallback((productId) => {
    console.log('Ürün seçildi:', productId);
    onProductSelect(productId);
  }, [onProductSelect]);
  
  return (
    <div>
      {sortedProducts.map(product => (
        <ProductItem 
          key={product.id}
          product={product}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

// Gereksiz render'ları önlemek için React.memo kullanımı
const ProductItem = React.memo(({ product, onSelect }) => {
  console.log('ProductItem render:', product.id);
  return (
    <div onClick={() => onSelect(product.id)}>
      <h3>{product.name}</h3>
      <p>{product.price} TL</p>
    </div>
  );
});
```

### 4. Web Vitals Optimizasyonu

Core Web Vitals, kullanıcı deneyimini ölçen önemli metriklerdir:

- LCP (Largest Contentful Paint): Ana içeriğin yüklenme süresi
- FID (First Input Delay): İlk etkileşim gecikmesi
- CLS (Cumulative Layout Shift): Kümülatif düzen kayması

**Optimizasyon Stratejileri:**

- Kritik CSS'i satır içi olarak yükleyin
- Üçüncü taraf scriptleri için `defer` veya `async` kullanın
- Resim ve video boyutlarını önceden belirleyin
- Font yükleme stratejilerini optimize edin
- Önbelleğe alma stratejileri uygulayın

## Sonuç

Modern frontend mimarileri ve performans optimizasyon teknikleri, kullanıcı deneyimini iyileştirmek ve karmaşık web uygulamalarını yönetmek için kritik öneme sahiptir. Mikro frontend, atomic tasarım ve JAMstack gibi mimariler, ölçeklenebilir ve sürdürülebilir uygulamalar geliştirmenize yardımcı olurken; kod bölme, resim optimizasyonu ve memoizasyon gibi teknikler, uygulamanızın performansını önemli ölçüde artırabilir.

Bu yaklaşımları projelerinize entegre ederek, daha hızlı, daha ölçeklenebilir ve daha iyi bir kullanıcı deneyimi sunan web uygulamaları geliştirebilirsiniz.
    `
  },
  {
    id: 'yapay-zeka-ve-web-gelistirme-iliskisi',
    title: 'Yapay Zeka ve Web Geliştirme İlişkisi',
    date: '2023-05-15',
    coverImage: '/images/blog/ai-web-dev.jpg',
    excerpt: 'Yapay zeka teknolojilerinin web geliştirme süreçlerine nasıl entegre edildiğini ve geleceğin web uygulamalarını nasıl şekillendireceğini keşfedin.',
    tags: ['Yapay Zeka', 'Web Geliştirme', 'Teknoloji'],
    author: 'Ayşe Yılmaz',
    content: `
# Yapay Zeka ve Web Geliştirme İlişkisi

Yapay zeka (AI) teknolojileri, web geliştirme dünyasını hızla dönüştürüyor. Bu yazıda, AI'nın web geliştirme süreçlerine nasıl entegre edildiğini ve gelecekteki web uygulamalarını nasıl şekillendireceğini inceleyeceğiz.

## Yapay Zeka Web Geliştirmeyi Nasıl Etkiliyor?

Yapay zeka, web geliştirme süreçlerini birçok yönden etkilemektedir:

### 1. Otomatik Kod Üretimi

AI destekli araçlar, temel kod yapılarını otomatik olarak oluşturabilir, tekrarlayan görevleri otomatikleştirebilir ve hatta belirli işlevler için tam kod blokları önerebilir. Bu, geliştirme sürecini hızlandırır ve verimliliği artırır.

### 2. Kişiselleştirilmiş Kullanıcı Deneyimi

Yapay zeka algoritmaları, kullanıcı davranışlarını analiz ederek, her kullanıcı için özelleştirilmiş içerik ve deneyimler sunabilir. Bu, kullanıcı etkileşimini ve memnuniyetini artırır.

### 3. Akıllı Arama ve Filtreleme

AI destekli arama motorları, kullanıcıların doğal dil sorgularını anlayabilir ve daha alakalı sonuçlar sunabilir. Bu, özellikle büyük veri tabanlarına sahip e-ticaret siteleri için değerlidir.

### 4. Chatbotlar ve Sanal Asistanlar

AI destekli chatbotlar, kullanıcı sorularını anlayabilir ve gerçek zamanlı yardım sağlayabilir. Bu, müşteri hizmetleri maliyetlerini düşürürken kullanıcı memnuniyetini artırır.

## Yapay Zeka Entegrasyonu için Araçlar ve Kütüphaneler

Web geliştiricileri, projelerine yapay zeka yetenekleri eklemek için çeşitli araçlar ve kütüphaneler kullanabilirler:

### 1. TensorFlow.js

TensorFlow.js, tarayıcıda ve Node.js ortamında makine öğrenimi modellerini eğitmenize ve çalıştırmanıza olanak tanır.

```javascript
// TensorFlow.js ile basit bir sınıflandırma modeli
import * as tf from '@tensorflow/tfjs';

// Model oluşturma
const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));

// Modeli derleme
model.compile({
  optimizer: 'adam',
  loss: 'binaryCrossentropy',
  metrics: ['accuracy']
});

// Modeli eğitme
const xs = tf.randomNormal([100, 10]);
const ys = tf.randomUniform([100, 1]);

model.fit(xs, ys, {
  epochs: 10,
  callbacks: {
    onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch}: loss = ${logs.loss}`)
  }
});
```

### 2. Natural.js

Natural.js, doğal dil işleme için JavaScript kütüphanesidir. Metin sınıflandırma, duygu analizi ve daha fazlası için kullanılabilir.

```javascript
// Natural.js ile duygu analizi
const natural = require('natural');
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

const sentiment = analyzer.getSentiment(['I', 'love', 'this', 'product', 'it', 'is', 'amazing']);
console.log(sentiment); // Pozitif bir değer döndürür
```

### 3. Brain.js

Brain.js, JavaScript'te sinir ağları oluşturmak için kullanılan bir kütüphanedir. Basit makine öğrenimi görevleri için idealdir.

```javascript
// Brain.js ile sinir ağı
const brain = require('brain.js');
const net = new brain.NeuralNetwork();

net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

const output = net.run([1, 0]); // [0.987]
console.log(output);
```

## Yapay Zeka ve Web Geliştirmenin Geleceği

Yapay zeka ve web geliştirme arasındaki ilişki giderek güçlenmektedir. Gelecekte beklenen bazı gelişmeler şunlardır:

### 1. Kod Asistanları

AI destekli kod asistanları, geliştiricilerin düşüncelerini koda dönüştürmelerine yardımcı olacak ve hatta belirli işlevler için tam kod blokları önerebilecek.

### 2. Otomatik Hata Ayıklama

Yapay zeka sistemleri, kodunuzdaki hataları otomatik olarak tespit edebilecek ve düzeltme önerileri sunabilecek.

### 3. Sesli Web Uygulamaları

Ses tanıma ve işleme teknolojilerindeki ilerlemeler, tamamen sesle kontrol edilebilen web uygulamalarının geliştirilmesine olanak tanıyacak.

### 4. Gelişmiş Görsel Tanıma

AI destekli görsel tanıma, kullanıcıların görüntüler yükleyerek arama yapabilmesine ve web uygulamalarının bu görüntüleri analiz edebilmesine olanak tanıyacak.

## Sonuç

Yapay zeka, web geliştirme dünyasını dönüştürmeye devam ediyor. Geliştiriciler, bu teknolojileri projelerine entegre ederek daha akıllı, daha kişiselleştirilmiş ve daha etkileşimli web uygulamaları oluşturabilirler. Yapay zeka ve web geliştirme arasındaki sinerji, gelecekte daha da güçlenecek ve yeni fırsatlar sunacaktır.
    `
  },
  {
    id: 'web-gelistirme-hatalari',
    title: 'Web Geliştirmede Karşılaşılan Yaygın Hatalar ve Çözümleri',
    date: '2023-09-01',
    coverImage: '/images/blog/common-mistakes.jpg',
    excerpt: 'Web geliştirme sürecinde sık karşılaşılan hatalar ve bunları çözme yöntemleri.',
    tags: ['Hata Ayıklama', 'Web Geliştirme', 'Best Practices'],
    author: 'Zeynep Kaya',
    content: `
# Web Geliştirmede Karşılaşılan Yaygın Hatalar ve Çözümleri

Web geliştirme sürecinde, deneyimli geliştiriciler bile çeşitli hatalarla karşılaşabilir. Bu yazıda, web geliştirme sürecinde sık karşılaşılan hataları ve bunları çözme yöntemlerini inceleyeceğiz.

## 1. Responsive Tasarım Hataları

**Hata:** Uygulamanın farklı ekran boyutlarında düzgün görüntülenmemesi.

**Çözüm:**
- Mobil öncelikli (mobile-first) tasarım yaklaşımını benimseyin
- Esnek grid sistemleri kullanın
- Medya sorguları (media queries) ile farklı ekran boyutlarına uyum sağlayın
- Gerçek cihazlarda test edin, sadece tarayıcı simülasyonlarına güvenmeyin

## 2. Performans Sorunları

**Hata:** Yavaş yüklenen sayfalar ve kötü kullanıcı deneyimi.

**Çözüm:**
- Resimleri optimize edin ve modern formatlar kullanın (WebP, AVIF)
- Kod bölme (code splitting) ve tembel yükleme (lazy loading) tekniklerini uygulayın
- HTTP isteklerini minimize edin
- Tarayıcı önbelleğini etkin kullanın
- CDN kullanarak içeriği kullanıcılara daha yakın sunun

## 3. Erişilebilirlik İhlalleri

**Hata:** Uygulamanın engelli kullanıcılar için erişilebilir olmaması.

**Çözüm:**
- Semantik HTML kullanın
- ARIA özniteliklerini doğru şekilde uygulayın
- Klavye navigasyonunu destekleyin
- Renk kontrastını WCAG standartlarına uygun hale getirin
- Ekran okuyucu uyumluluğunu test edin

## 4. Güvenlik Açıkları

**Hata:** XSS, CSRF, SQL enjeksiyonu gibi güvenlik açıklarına sahip olmak.

**Çözüm:**
- Kullanıcı girdilerini her zaman doğrulayın ve temizleyin
- Content Security Policy (CSP) uygulayın
- HTTPS kullanın
- Güncel kütüphaneler ve framework'ler kullanın
- Güvenlik testleri yapın ve açıkları düzenli olarak tarayın

## 5. Tarayıcı Uyumluluk Sorunları

**Hata:** Uygulamanın farklı tarayıcılarda farklı davranması.

**Çözüm:**
- Autoprefixer gibi araçlar kullanarak CSS öneklerini otomatik ekleyin
- Feature detection kullanın, user agent sniffing'den kaçının
- Polyfill'ler ekleyerek eski tarayıcılarda modern özellikleri destekleyin
- Cross-browser testing yapın

## 6. Kötü Durum Yönetimi

**Hata:** Karmaşık ve bakımı zor durum yönetimi.

**Çözüm:**
- Durum yönetimi için uygun bir strateji belirleyin (Redux, Context API, Zustand vb.)
- İmmutable veri yapıları kullanın
- Durum güncellemelerini merkezileştirin
- Yan etkileri (side effects) izole edin

## 7. Yetersiz Hata İşleme

**Hata:** Kullanıcı dostu olmayan hata mesajları ve yetersiz hata yakalama.

**Çözüm:**
- Kapsamlı hata yakalama mekanizmaları uygulayın
- Kullanıcı dostu hata mesajları gösterin
- Hataları loglayın ve izleyin
- Beklenmeyen durumlar için fallback UI'lar tasarlayın

## 8. SEO Sorunları

**Hata:** Arama motorları tarafından düzgün indekslenmeyen sayfalar.

**Çözüm:**
- Semantik HTML kullanın
- Meta etiketlerini doğru şekilde yapılandırın
- Sayfa yükleme hızını optimize edin
- Responsive tasarım uygulayın
- Yapısal veri işaretlemesi (schema.org) ekleyin

## 9. Kötü Kod Organizasyonu

**Hata:** Bakımı zor, karmaşık ve tekrar eden kod.

**Çözüm:**
- DRY (Don't Repeat Yourself) prensibini uygulayın
- Modüler bir yapı oluşturun
- Kod standartları ve stil rehberleri belirleyin
- Kod incelemeleri yapın
- Teknik borcu düzenli olarak azaltın

## 10. Yetersiz Test Kapsamı

**Hata:** Test edilmemiş kod ve beklenmeyen hatalar.

**Çözüm:**
- Birim testleri yazın
- Entegrasyon testleri uygulayın
- End-to-end testler ekleyin
- Test Driven Development (TDD) yaklaşımını benimseyin
- Otomatik test süreçleri kurun

## Sonuç

Web geliştirme sürecinde hatalar kaçınılmazdır, ancak bu hataları önceden bilmek ve önlem almak, daha kaliteli ve sürdürülebilir uygulamalar geliştirmenize yardımcı olacaktır. Bu yazıda bahsedilen yaygın hataları ve çözüm önerilerini dikkate alarak, geliştirme sürecinizi iyileştirebilir ve kullanıcılarınıza daha iyi bir deneyim sunabilirsiniz.
    `
  },
  {
    id: 'web-gelistirme-hatalari',
    title: 'Web Geliştirmede Karşılaşılan Yaygın Hatalar ve Çözümleri',
    date: '2023-09-01',
    coverImage: '/images/blog/common-mistakes.jpg',
    excerpt: 'Web geliştirme sürecinde sık karşılaşılan hatalar ve bunları çözme yöntemleri.',
    tags: ['Hata Ayıklama', 'Web Geliştirme', 'Best Practices'],
    author: 'Zeynep Kaya',
    content: `
# Web Geliştirmede Karşılaşılan Yaygın Hatalar ve Çözümleri

Web geliştirme sürecinde, deneyimli geliştiriciler bile çeşitli hatalarla karşılaşabilir. Bu yazıda, web geliştirme sürecinde sık karşılaşılan hataları ve bunları çözme yöntemlerini inceleyeceğiz.

## 1. Responsive Tasarım Hataları

**Hata:** Uygulamanın farklı ekran boyutlarında düzgün görüntülenmemesi.

**Çözüm:**
- Mobil öncelikli (mobile-first) tasarım yaklaşımını benimseyin
- Esnek grid sistemleri kullanın
- Medya sorguları (media queries) ile farklı ekran boyutlarına uyum sağlayın
- Gerçek cihazlarda test edin, sadece tarayıcı simülasyonlarına güvenmeyin

## 2. Performans Sorunları

**Hata:** Yavaş yüklenen sayfalar ve kötü kullanıcı deneyimi.

**Çözüm:**
- Resimleri optimize edin ve modern formatlar kullanın (WebP, AVIF)
- Kod bölme (code splitting) ve tembel yükleme (lazy loading) tekniklerini uygulayın
- HTTP isteklerini minimize edin
- Tarayıcı önbelleğini etkin kullanın
- CDN kullanarak içeriği kullanıcılara daha yakın sunun

## 3. Erişilebilirlik İhlalleri

**Hata:** Uygulamanın engelli kullanıcılar için erişilebilir olmaması.

**Çözüm:**
- Semantik HTML kullanın
- ARIA özniteliklerini doğru şekilde uygulayın
- Klavye navigasyonunu destekleyin
- Renk kontrastını WCAG standartlarına uygun hale getirin
- Ekran okuyucu uyumluluğunu test edin

## 4. Güvenlik Açıkları

**Hata:** XSS, CSRF, SQL enjeksiyonu gibi güvenlik açıklarına sahip olmak.

**Çözüm:**
- Kullanıcı girdilerini her zaman doğrulayın ve temizleyin
- Content Security Policy (CSP) uygulayın
- HTTPS kullanın
- Güncel kütüphaneler ve framework'ler kullanın
- Güvenlik testleri yapın ve açıkları düzenli olarak tarayın

## 5. Tarayıcı Uyumluluk Sorunları

**Hata:** Uygulamanın farklı tarayıcılarda farklı davranması.

**Çözüm:**
- Autoprefixer gibi araçlar kullanarak CSS öneklerini otomatik ekleyin
- Feature detection kullanın, user agent sniffing'den kaçının
- Polyfill'ler ekleyerek eski tarayıcılarda modern özellikleri destekleyin
- Cross-browser testing yapın

## 6. Kötü Durum Yönetimi

**Hata:** Karmaşık ve bakımı zor durum yönetimi.

**Çözüm:**
- Durum yönetimi için uygun bir strateji belirleyin (Redux, Context API, Zustand vb.)
- İmmutable veri yapıları kullanın
- Durum güncellemelerini merkezileştirin
- Yan etkileri (side effects) izole edin

## 7. Yetersiz Hata İşleme

**Hata:** Kullanıcı dostu olmayan hata mesajları ve yetersiz hata yakalama.

**Çözüm:**
- Kapsamlı hata yakalama mekanizmaları uygulayın
- Kullanıcı dostu hata mesajları gösterin
- Hataları loglayın ve izleyin
- Beklenmeyen durumlar için fallback UI'lar tasarlayın

## 8. SEO Sorunları

**Hata:** Arama motorları tarafından düzgün indekslenmeyen sayfalar.

**Çözüm:**
- Semantik HTML kullanın
- Meta etiketlerini doğru şekilde yapılandırın
- Sayfa yükleme hızını optimize edin
- Responsive tasarım uygulayın
- Yapısal veri işaretlemesi (schema.org) ekleyin

## 9. Kötü Kod Organizasyonu

**Hata:** Bakımı zor, karmaşık ve tekrar eden kod.

**Çözüm:**
- DRY (Don't Repeat Yourself) prensibini uygulayın
- Modüler bir yapı oluşturun
- Kod standartları ve stil rehberleri belirleyin
- Kod incelemeleri yapın
- Teknik borcu düzenli olarak azaltın

## 10. Yetersiz Test Kapsamı

**Hata:** Test edilmemiş kod ve beklenmeyen hatalar.

**Çözüm:**
- Birim testleri yazın
- Entegrasyon testleri uygulayın
- End-to-end testler ekleyin
- Test Driven Development (TDD) yaklaşımını benimseyin
- Otomatik test süreçleri kurun

## Sonuç

Web geliştirme sürecinde hatalar kaçınılmazdır, ancak bu hataları önceden bilmek ve önlem almak, daha kaliteli ve sürdürülebilir uygulamalar geliştirmenize yardımcı olacaktır. Bu yazıda bahsedilen yaygın hataları ve çözüm önerilerini dikkate alarak, geliştirme sürecinizi iyileştirebilir ve kullanıcılarınıza daha iyi bir deneyim sunabilirsiniz.
    `
  }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  // Scroll animasyonu için fonksiyon
const handleScroll = () => {
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  const elementInView = (el, scrollOffset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= window.innerHeight - scrollOffset);
  };

  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add('visible');
    }
  });
};

// Demo fonksiyonu
const showDemo = (postId) => {
  alert(`${postId} için demo başlatılıyor...`);
  // Burada gerçek bir demo başlatma kodu olabilir
  // Örneğin: window.open(`/demo/${postId}`, '_blank');
};
  
  // Client-side kodları çalıştır
  useEffect(() => {
    // Scroll olayını dinle
    window.addEventListener('scroll', handleScroll);
    
    // İlk yükleme için scroll animasyonlarını kontrol et
    handleScroll();
    
    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Slug'a göre blog yazısını bul
  const postData = blogPosts.find(post => post.id === params.slug);
  
  // Eğer blog yazısı bulunamazsa hata mesajı göster
  if (!postData) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] dark:hover:text-[var(--primary-light)] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Tüm Yazılara Dön
        </Link>
        <div className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Yazı Bulunamadı</h1>
          <p className="text-gray-600 dark:text-gray-400">Aradığınız blog yazısı bulunamadı.</p>
        </div>
      </div>
    );
  }

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

        <article className="bg-[var(--card-bg)] dark:bg-gray-800/50 rounded-xl shadow-md border border-[var(--card-border)] p-6 md:p-8 scroll-animate opacity-0 transition-all duration-1000 transform translate-y-10">
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
                <img 
                  src={postData.coverImage} 
                  alt={postData.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </header>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-800 dark:prose-headings:text-white prose-a:text-[var(--primary)] prose-a:no-underline hover:prose-a:underline"
          >
            {postData.content.split('\n').map((paragraph, index) => {
              // Başlıkları işle
              if (paragraph.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('- ')) {
                // Liste öğelerini işle
                return <li key={index} className="ml-6 mb-1">{paragraph.replace('- ', '')}</li>;
              } else if (paragraph.startsWith('```')) {
                // Kod bloklarını işle (basit bir yaklaşım)
                return null; // Kod bloğu başlangıç ve bitiş etiketlerini atla
              } else if (paragraph.trim() === '') {
                return <br key={index} />;
              } else if (!paragraph.startsWith('```')) {
                // Normal paragrafları işle (kod bloğu içinde değilse)
                return <p key={index} className="mb-4">{paragraph}</p>;
              }
              return null;
            })}
          </div>
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
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(postData.title)}&url=${encodeURIComponent(`https://example.com/blog/${postData.id}`)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-[#0c85d0] transition-all duration-300 hover:scale-110 btn-transition"
              aria-label="Twitter'da Paylaş"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://example.com/blog/${postData.id}`)}`} 
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