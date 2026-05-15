<div align="center">

# 🚀 Full-Stack Developer Portfolio

A modern, full-stack portfolio website built with Next.js 14, Express.js, and PostgreSQL.
Features AI chatbot, real-time visitor tracking, contact form with email, and a complete blog system.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Express](https://img.shields.io/badge/Express.js-4-green?style=for-the-badge&logo=express)](https://expressjs.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue?style=for-the-badge&logo=postgresql)](https://neon.tech)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Render](https://img.shields.io/badge/Deployed%20on-Render-blue?style=for-the-badge&logo=render)](https://render.com)

**[🌐 Live Demo](https://your-vercel-url.vercel.app)** • **[📧 Contact](mailto:abdulkhalilmohammadi472@gmail.com)**

</div>

---

## ✨ Features

- 🎨 **Modern UI** — Glassmorphism design with dark and light mode
- 🤖 **AI Chatbot** — Powered by Google Gemini API with streaming
- 🔴 **Real-time** — Live visitor counter with Socket.io
- 📧 **Contact Form** — Saves to database and sends email
- 🗄️ **Database** — PostgreSQL with Prisma ORM on Neon
- 🔒 **Security** — Helmet, CORS, Rate limiting, Input validation
- 📱 **Responsive** — Works on all screen sizes
- ⚡ **Fast** — React Query caching and Next.js SSR
- 🎭 **Animations** — Framer Motion page transitions
- 📝 **Blog System** — Full blog stored in database
- 🏗️ **Projects** — Filterable grid with live demos

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| Next.js 14 App Router | React framework with SSR |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Three.js / React Three Fiber | 3D graphics |
| Zustand | Global state management |
| React Query | Server state and caching |
| Socket.io Client | Real-time features |
| Axios | HTTP client |

### Backend
| Technology | Purpose |
|---|---|
| Node.js 18+ | Runtime |
| Express.js | Server framework |
| TypeScript | Type safety |
| Socket.io | Real-time WebSocket |
| Nodemailer | Email via Gmail SMTP |
| Helmet | Security headers |
| Express Rate Limit | API protection |
| Morgan | Request logging |

### Database and Cloud
| Technology | Purpose |
|---|---|
| PostgreSQL on Neon | Cloud database |
| Prisma ORM | Type-safe queries |
| Google Gemini API | AI chatbot |
| Vercel | Frontend hosting |
| Render | Backend hosting |

---

## 🚀 Getting Started Locally

### Prerequisites

```bash
Setup database:

```bash
npx prisma migrate dev
npx prisma db seed
```

Start backend:

```bash
npm run dev
```

Backend runs on http://localhost:5000

### Step 3 — Setup Frontend

```bash
cd frontend
npm install
```

Create .env.local file inside frontend folder:
---

## 🔒 Environment Variables

### Backend
| Variable | Description |
|---|---|
| PORT | Server port, defaults to 5000 |
| NODE_ENV | development or production |
| FRONTEND_URL | Frontend URL for CORS |
| DATABASE_URL | PostgreSQL connection string |
| GEMINI_API_KEY | Google AI Studio API key |
| EMAIL_USER | Gmail address |
| EMAIL_PASS | Gmail App Password |
| EMAIL_TO | Email to receive messages |
| EMAIL_FROM | Display name for sent emails |

### Frontend
| Variable | Description |
|---|---|
| NEXT_PUBLIC_API_URL | Backend server URL |

---

## 🚢 Deployment

### Frontend on Vercel
1. Go to vercel.com and sign in with GitHub
2. Import my_portfolio repository
3. Set Root Directory to frontend
4. Add NEXT_PUBLIC_API_URL environment variable
5. Deploy

### Backend on Render
1. Go to render.com and sign in with GitHub
2. Create Web Service and connect my_portfolio
3. Set Root Directory to backend
4. Build Command: npm install and npm run build
5. Start Command: npm start
6. Add all environment variables
7. Deploy

---

## 📸 Pages

| Page | Route | Description |
|---|---|---|
| Home | / | Hero, stats, featured projects |
| About | /about | Story, experience, values |
| Projects | /projects | Filterable projects grid |
| Skills | /skills | Tech stack and tools |
| Blog | /blog | All blog posts |
| Contact | /contact | Contact form with email |

---

## 📄 License

MIT License — free to use as inspiration for your own portfolio.

---

## 📬 Contact

Abdul Khalil Mohammadi

- 📧 abdulkhalilmohammadi472@gmail.com
- 🐙 github.com/Abdulkhalil99
- 🌐 your-vercel-url.vercel.app

---

<div align="center">

Built with ❤️ by Abdul Khalil Mohammadi

⭐ Star this repo if you found it helpful!

</div>
