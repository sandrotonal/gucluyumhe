---
title: 'React Hooks Kullanımı ve En İyi Pratikler'
date: '2023-06-15'
author: 'Yazılım Geliştirici'
excerpt: 'React Hooks ile fonksiyonel bileşenlerde state yönetimi ve yaşam döngüsü metodlarını nasıl kullanabileceğinizi öğrenin.'
coverImage: '/images/blog/react.jpg'
tags: ['React', 'JavaScript', 'Frontend']
---

# React Hooks Kullanımı ve En İyi Pratikler

React Hooks, React 16.8 sürümüyle birlikte tanıtılan ve fonksiyonel bileşenlerde state yönetimi ve yaşam döngüsü metodlarını kullanmamızı sağlayan özelliklerdir. Bu yazıda, en sık kullanılan React Hooks'ları ve bunların en iyi kullanım pratiklerini inceleyeceğiz.

## useState Hook'u

`useState` hook'u, fonksiyonel bileşenlerde state yönetimi sağlar. Kullanımı oldukça basittir:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Şu anki sayaç: {count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  );
}
```

## useEffect Hook'u

`useEffect` hook'u, bileşenin yaşam döngüsü metodlarını (componentDidMount, componentDidUpdate, componentWillUnmount) tek bir API altında birleştirir:

```jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
      }
    }

    fetchData();

    // Temizleme fonksiyonu (componentWillUnmount benzeri)
    return () => {
      console.log('Bileşen kaldırıldı');
    };
  }, []); // Boş bağımlılık dizisi, sadece mount olduğunda çalışmasını sağlar

  if (loading) return <div>Yükleniyor...</div>;
  return <div>{JSON.stringify(data)}</div>;
}
```

## useContext Hook'u

`useContext` hook'u, React Context API'sini fonksiyonel bileşenlerde daha kolay kullanmamızı sağlar:

```jsx
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={`btn-${theme}`}>
      {theme === 'light' ? 'Açık Tema' : 'Koyu Tema'}
    </button>
  );
}
```

## En İyi Pratikler

1. **Hook'ları Sadece En Üst Seviyede Kullanın**: Hook'ları döngüler, koşullar veya iç içe fonksiyonlar içinde kullanmayın.

2. **Özel Hook'lar Oluşturun**: Tekrar eden mantığı özel hook'lar içinde soyutlayın.

3. **Bağımlılık Dizisini Doğru Kullanın**: `useEffect` ve `useCallback` gibi hook'larda bağımlılık dizisini doğru şekilde belirtin.

4. **ESLint Plugin'ini Kullanın**: `eslint-plugin-react-hooks` eklentisi, hook'ların doğru kullanımını kontrol etmenize yardımcı olur.

## Sonuç

React Hooks, fonksiyonel bileşenlerde state yönetimi ve yan etkileri yönetmek için güçlü bir yol sunar. Doğru kullanıldığında, kodunuzu daha temiz, daha modüler ve daha test edilebilir hale getirebilirler.

Bir sonraki yazımızda, özel hook'lar oluşturma ve bunları projelerinizde kullanma konusunu daha detaylı inceleyeceğiz. Sorularınız veya yorumlarınız varsa, lütfen aşağıda belirtin!