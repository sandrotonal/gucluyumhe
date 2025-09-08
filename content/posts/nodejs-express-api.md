---
title: 'Node.js ve Express ile RESTful API Geliştirme'
date: '2023-07-20'
author: 'Yazılım Geliştirici'
excerpt: 'Node.js ve Express.js kullanarak modern, güvenli ve ölçeklenebilir RESTful API nasıl geliştirilir?'
coverImage: '/images/blog/nodejs-express.jpg'
tags: ['Node.js', 'Express', 'API', 'Backend']
---

# Node.js ve Express ile RESTful API Geliştirme

Modern web uygulamaları genellikle frontend ve backend olarak ayrılmış mimarilere sahiptir. Bu yazıda, Node.js ve Express.js kullanarak güçlü bir RESTful API nasıl geliştireceğimizi adım adım inceleyeceğiz.

## Proje Kurulumu

Öncelikle yeni bir Node.js projesi oluşturalım:

```bash
mkdir express-api
cd express-api
npm init -y
npm install express mongoose dotenv cors helmet
npm install --save-dev nodemon
```

Kurduğumuz paketler:
- **express**: Web sunucusu ve routing için
- **mongoose**: MongoDB veritabanı bağlantısı için
- **dotenv**: Ortam değişkenlerini yönetmek için
- **cors**: Cross-Origin Resource Sharing için
- **helmet**: Güvenlik başlıkları için
- **nodemon**: Geliştirme sırasında otomatik yeniden başlatma için

## Temel Proje Yapısı

Proje klasör yapımız şu şekilde olacak:

```
express-api/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Express Sunucusu Oluşturma

`src/app.js` dosyasını oluşturalım:

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API çalışıyor!' });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
```

## MongoDB Bağlantısı

`src/config/db.js` dosyasını oluşturalım:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## Kullanıcı Modeli Oluşturma

`src/models/User.js` dosyasını oluşturalım:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
```

## Kullanıcı Controller'ı

`src/controllers/userController.js` dosyasını oluşturalım:

```javascript
const User = require('../models/User');

// Tüm kullanıcıları getir
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Kullanıcı oluştur
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Email kontrolü
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Bu email zaten kullanılıyor' });
    }
    
    const user = new User({
      name,
      email,
      password, // Gerçek uygulamada şifre hash'lenmelidir!
    });
    
    await user.save();
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
```

## Kullanıcı Route'ları

`src/routes/userRoutes.js` dosyasını oluşturalım:

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

module.exports = router;
```

## Route'ları Ana Uygulamaya Bağlama

`src/app.js` dosyasını güncelleyelim:

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// MongoDB bağlantısı
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'API çalışıyor!' });
});

app.use('/api/users', userRoutes);

// Hata yakalama middleware'i
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Sunucu hatası!' });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
```

## .env Dosyası

Proje kök dizininde `.env` dosyası oluşturalım:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/express-api
JWT_SECRET=gizlianahtar123
```

## package.json Güncelleme

`package.json` dosyasındaki scripts bölümünü güncelleyelim:

```json
"scripts": {
  "start": "node src/app.js",
  "dev": "nodemon src/app.js"
}
```

## API Testi

API'mizi test etmek için:

```bash
npm run dev
```

Ardından Postman veya cURL ile endpoint'leri test edebiliriz:

```bash
# Kullanıcı oluşturma
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Kullanıcı","email":"test@example.com","password":"123456"}'

# Kullanıcıları listeleme
curl http://localhost:3000/api/users
```

## Sonuç

Bu yazıda, Node.js ve Express.js kullanarak temel bir RESTful API geliştirdik. Gerçek dünya uygulamalarında, JWT ile kimlik doğrulama, daha kapsamlı hata yönetimi, validasyon, loglama ve test gibi konuları da ele almak gerekir.

Bir sonraki yazımızda, bu API'ye JWT tabanlı kimlik doğrulama ekleyeceğiz ve güvenlik önlemlerini artıracağız.