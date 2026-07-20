# Next.js Portfolio — Modern Developer Portfolio Template 🎨

> **Next.js 14** + **TypeScript** + **Tailwind CSS** — A stunning **developer portfolio** with dark theme, responsive design, project showcase, skills section, and resume. Perfect template for developers and freelancers.

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌙 **Dark Theme** | Modern dark UI with purple accent colors |
| 📱 **Fully Responsive** | Looks great on all devices — mobile, tablet, desktop |
| 🏗️ **Skills Showcase** | Animated skill progress bars with category grouping |
| 📁 **Project Grid** | Featured projects with GitHub links and tech tags |
| 📄 **Resume Section** | Work experience, education, certifications (Bilingual) |
| 🔗 **Contact Section** | Social links and contact information |
| ⚡ **Fast Performance** | Static generation with Next.js for instant loading |
| 🎯 **SEO Optimized** | Meta tags for search engine visibility |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with SSG |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **React 18** | UI component library |

---

## 🚀 Quick Start

```bash
# Clone & install
git clone https://github.com/mamadiezad/nextjs-portfolio.git
cd nextjs-portfolio
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  primary: '#7c3aed',    // Purple accent
  secondary: '#667eea',  // Blue accent
  dark: '#0d1117',       // Background
  card: '#1e1e2e',       // Card background
}
```

### Add Your Projects
Edit `src/pages/index.tsx` — the `projects` array:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description here',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/your-username/your-repo',
  },
  // Add more projects...
];
```

### Update Resume
Edit the **Resume section** in `src/pages/index.tsx` to add your work experience, education, and certifications.

---

## 📁 Project Structure

```
src/
├── components/
│   └── Layout.tsx           # Navigation bar & footer
├── pages/
│   ├── _app.tsx             # App entry with layout
│   ├── _document.tsx        # HTML document structure
│   └── index.tsx            # Home page with all sections
├── styles/
│   └── globals.css          # Global styles & Tailwind imports
└── public/                  # Static assets
```

---

## 🎯 Sections

1. **Hero** — Introduction with title and CTA buttons
2. **About Me** — Personal bio and quick facts
3. **Resume** — Work experience and education (Bilingual)
4. **Skills** — Technical skills with progress bars
5. **Projects** — Featured projects grid
6. **Contact** — Contact links and social media

---

## 🔗 Related Projects

- [FastAPI Tasks](https://github.com/mamadiezad/fastapi-tasks) — REST API backend
- [React Kanban](https://github.com/mamadiezad/react-kanban) — Task management board
- [Node GraphQL API](https://github.com/mamadiezad/node-graphql-api) — GraphQL API

---

## 📄 License

**MIT** — Free for personal and commercial use. Build your portfolio today!

---

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/mamadiezad">Mohammad</a></sub>
</p>
<p align="center">ساخته شده با ❤️ توسط <a href="https://github.com/mamadiezad">Mohammad</a> | <a href="https://t.me/llllxyz">📱 تلگرام</a></p>