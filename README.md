<div align="center">

# 🌸 Hirvita Kabariya — Portfolio

### ✨ A modern, interactive portfolio with an AI assistant that talks about me ✨

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Express](https://img.shields.io/badge/Express-4-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![Groq](https://img.shields.io/badge/Groq-LLaMA_3.3_70B-F55036?style=for-the-badge&logo=meta&logoColor=white)](https://groq.com)
[![License](https://img.shields.io/badge/License-MIT-5EAEAE?style=for-the-badge)](LICENSE)

🔗 **[Live Demo](#)** &nbsp;•&nbsp; 💬 **[Ask Hirvita Bot](#)** &nbsp;•&nbsp; 📬 **[Get in Touch](#-contact)**

</div>

---

## 🎨 What's Inside

> A single-page React portfolio with smooth animations, a project carousel, and a personal AI chatbot trained on my resume that answers visitor questions in real time.

```
🏠 About    →    💼 Experience    →    🛠️ Skills    →    🚀 Projects    →    🤖 Ask Hirvita
```

---

## ✨ Features

| 🌟 | Feature | Description |
|----|---------|-------------|
| 🎭 | **Animated Canvas Background** | Smooth gradient orbs that drift across the screen |
| 🎠 | **Project Carousel** | Swipeable cards with categories, tags & GitHub links |
| 🤖 | **AI Chatbot** | "Ask Hirvita" — full-screen chat powered by Groq's LLaMA 3.3 70B |
| 🎨 | **Custom SVG Icons** | Hand-coded inline icons for every tool — zero icon libraries |
| 📱 | **Fully Responsive** | Crafted for mobile, tablet & desktop |
| ⚡ | **Lightning Fast** | Powered by Vite for instant HMR & blazing builds |
| 💅 | **Soft Teal Palette** | A calming, professional color story |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?logo=javascript&logoColor=black)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

### AI & APIs
![Groq](https://img.shields.io/badge/Groq_API-F55036?logo=meta&logoColor=white)
![LLaMA](https://img.shields.io/badge/LLaMA_3.3_70B-0467DF?logo=meta&logoColor=white)

### Dev Tools
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-17-ECD53F?logo=dotenv&logoColor=black)

</div>

---

## 📁 Project Structure

```
hirvita-portfolio/
│
├── 🌐 api/
│   └── chat.js              # Serverless chat endpoint
│
├── 🎨 public/
│   └── vite.svg
│
├── 💻 src/
│   ├── App.jsx              # ⭐ Main app — sections, carousel, chatbot
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── assets/
│       └── photo.png
│
├── 🚀 server.js             # Local Express server proxying Groq API
├── ⚙️  vite.config.js
├── 📦 package.json
└── 📖 README.md
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- 🟢 **Node.js** 18 or higher
- 🔑 A free **[Groq API key](https://console.groq.com/)**

### 1️⃣ Clone & Install

```bash
git clone https://github.com/hirvita-kabariya/hirvita-portfolio.git
cd hirvita-portfolio
npm install
```

### 2️⃣ Set Environment Variables

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
VITE_API_URL=/api/chat
```

### 3️⃣ Run the App

**🔥 Run frontend + API together:**
```bash
npm run dev:full
```

**Or run them separately:**
```bash
npm run server   # 🛰️  API → http://localhost:3003
npm run dev      # 🎨 UI  → http://localhost:5173
```

---

## 📜 Scripts

| Command | What it does |
|---------|--------------|
| 🎨 `npm run dev` | Start Vite dev server |
| 🛰️ `npm run server` | Start Express API |
| 🔥 `npm run dev:full` | Run both concurrently |
| 📦 `npm run build` | Build for production |
| 👀 `npm run preview` | Preview the built site |
| 🧹 `npm run lint` | Lint with ESLint |

---

## 🤖 The "Ask Hirvita" Bot

A floating chat button opens a full-screen AI assistant that knows my background, projects, and skills.

**How it works:**

```
🧑 User asks a question
      ↓
🌐 Frontend POSTs to /api/chat
      ↓
🛰️  Express server adds a system prompt with my bio
      ↓
🤖 Groq runs LLaMA 3.3 70B
      ↓
💬 Response streams back to the chat UI
```

> 💡 **Try asking:** *"What's your strongest project?"* · *"Walk me through your experience."* · *"What stack do you love most?"*

---

## ☁️ Deployment

This app is ready to ship to:

- ▲ **Vercel** — `api/chat.js` works out of the box as a serverless function
- 🌐 **Netlify** — drop into Netlify Functions
- 🚂 **Railway / Render** — uses `server.js` for traditional Node hosting

> 🔐 **Don't forget** to set `GROQ_API_KEY`, `GROQ_MODEL`, and `VITE_API_URL` in your hosting dashboard.

---

## 🎯 Featured Projects (inside the site)

| Project | Stack | Category |
|---------|-------|----------|
| 🧠 AI Knowledge Management | Python · LangChain · FAISS · GPT-4 | AI/ML |
| 🤟 Sign Language Recognition | OpenCV · MediaPipe · LSTM | Deep Learning |
| 📊 Nike Sales Dashboard | Streamlit · Pandas | Analytics |
| 📈 Market Data Services | FastAPI · PostgreSQL · Kafka | Data Eng |
| ⚖️ LLM Judge for History | Python · LLM · NLP | AI/ML |
| 🔐 OTP Verification System | Python · SMS API | Backend |

---

## 📬 Contact

<div align="center">

I'm always open to chatting about **Data Engineering**, **AI/ML**, or just exchanging ideas.

[![Email](https://img.shields.io/badge/Email-kabariya.h%40northeastern.edu-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kabariya.h@northeastern.edu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-hirvita_kabariya-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hirvita-kabariya-101938329/)
[![GitHub](https://img.shields.io/badge/GitHub-hirvita--kabariya-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hirvita-kabariya)

</div>

---

<div align="center">

### 💖 Built with care, caffeine, and a soft teal palette

⭐ **If you like this portfolio, drop a star — it makes my day!** ⭐

</div>
