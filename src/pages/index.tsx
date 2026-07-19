import Head from 'next/head';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Python', level: 90, color: '#3776AB' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'JavaScript', level: 88, color: '#F7DF1E' },
  { name: 'React', level: 83, color: '#61DAFB' },
  { name: 'Next.js', level: 80, color: '#000000' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'FastAPI', level: 82, color: '#009688' },
  { name: 'Solidity', level: 72, color: '#363636' },
  { name: 'React Native', level: 78, color: '#61DAFB' },
  { name: 'Docker', level: 80, color: '#2496ED' },
  { name: 'Kubernetes', level: 65, color: '#326CE5' },
  { name: 'PostgreSQL', level: 85, color: '#4169E1' },
  { name: 'MongoDB', level: 78, color: '#47A248' },
  { name: 'Redis', level: 75, color: '#DC382D' },
  { name: 'GraphQL', level: 80, color: '#E10098' },
];

const projects = [
  {
    title: 'FastAPI Tasks',
    description: 'RESTful task management API with JWT authentication, async PostgreSQL, and Docker containerization.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/mamadiezad/fastapi-tasks',
  },
  {
    title: 'TS Design Patterns',
    description: 'Clean implementation of GoF design patterns in TypeScript with comprehensive unit tests.',
    tags: ['TypeScript', 'OOP', 'Patterns', 'Jest'],
    github: 'https://github.com/mamadiezad/ts-design-patterns',
  },
  {
    title: 'React Kanban',
    description: 'Drag & drop Kanban board built with React and @dnd-kit, with local storage persistence.',
    tags: ['React', 'TypeScript', 'DnD', 'Vite'],
    github: 'https://github.com/mamadiezad/react-kanban',
  },
  {
    title: 'Node GraphQL API',
    description: 'Production-ready GraphQL API using Apollo Server, Prisma ORM, and PostgreSQL with cursor pagination.',
    tags: ['Node.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/mamadiezad/node-graphql-api',
  },
  {
    title: 'Py-Algorithms',
    description: 'Comprehensive collection of algorithms & data structures in Python with pytest coverage.',
    tags: ['Python', 'Algorithms', 'DSA', 'Pytest'],
    github: 'https://github.com/mamadiezad/py-algorithms',
  },
  {
    title: 'Next.js Portfolio',
    description: 'Personal portfolio website with dark theme, responsive design, and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/mamadiezad/nextjs-portfolio',
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <Head>
        <title>Mohammad — Security Specialist & Full-Stack Developer</title>
        <meta name="description" content="Security & network specialist, blockchain developer, and full-stack engineer from Iran. Python • TypeScript • React • Node.js" />
      </Head>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-block mb-6 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            🔐 Security Specialist • ⛓️ Blockchain Developer • 💻 Full-Stack Engineer
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mohammad
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Security & Network Specialist, Blockchain Developer, and Full-Stack Senior Engineer from <b className="text-white">🇮🇷 Mashhad, Iran</b>.
            I build secure, scalable systems and write clean code that makes a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#resume"
              className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="border border-border hover:border-primary/50 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="border border-border hover:border-primary/50 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              Contact
            </a>
            <a
              href="https://github.com/mamadiezad"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-primary/50 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-10 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted leading-relaxed mb-4">
                I&apos;m a software engineer based in <b className="text-white">🇮🇷 Mashhad, Iran</b> with a B.Sc. in Software Engineering 
                from <b className="text-white">Ferdowsi University of Mashhad</b> (GPA: 17.2/20). My expertise spans 
                network security, blockchain development, and full-stack web/mobile engineering.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Currently working as a Senior Full-Stack Developer at <b className="text-white">راهبرد پردازش خاورمیانه</b>, 
                I lead a team of 3 in migrating monolithic systems to microservices architecture. 
                I've built enterprise contract management systems that reduced document retrieval time by 30%.
              </p>
              <p className="text-muted leading-relaxed">
                I hold a <b className="text-white">Professional Scrum Master I (PSM I)</b> certification from Scrum.org 
                and I&apos;m passionate about clean architecture, robust security practices, and building 
                software that makes a real impact.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-lg">Quick Facts</h3>
              <div className="space-y-4">
                {[
                  { label: '📍 Location', value: 'Mashhad, Iran' },
                  { label: '🎓 Degree', value: 'B.Sc. Software Engineering' },
                  { label: '🏫 University', value: 'Ferdowsi University' },
                  { label: '📊 GPA', value: '17.2 / 20' },
                  { label: '📜 Certification', value: 'PSM I (Scrum.org)' },
                  { label: '💼 Experience', value: '6+ years' },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                    <span className="text-muted">{stat.label}</span>
                    <span className="font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section (Persian) */}
      <section id="resume" className="py-24 bg-darker">
        <div className="max-w-5xl mx-auto px-4" dir="rtl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right">رزومه</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-10 rounded-full"></div>

          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">💼 سوابق کاری</h3>

            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-start mb-3 flex-wrap">
                <h4 className="text-lg font-bold text-white">توسعه‌دهنده ارشد فول‌استک</h4>
                <span className="text-sm text-muted bg-darker px-3 py-1 rounded-lg">مهر ۱۴۰۰ – اکنون</span>
              </div>
              <p className="text-primary font-medium mb-3">شرکت نرم‌افزاری راهبرد پردازش خاورمیانه | مشهد</p>
              <ul className="space-y-3 text-muted pr-5">
                <li className="list-disc">✓ طراحی و توسعه سامانه جامع مدیریت قراردادها و اسناد برای شرکت پیمانکاری بزرگ — کاهش <span className="text-green-400 font-bold">۳۰٪</span> زمان جستجو و بازیابی اسناد</li>
                <li className="list-disc">✓ پیاده‌سازی ماژول گزارش‌گیری پیشرفته با داشبوردهای سفارشی‌سازی شده برای تصمیم‌گیری مدیران</li>
                <li className="list-disc">✓ رهبری تیم ۳ نفره در مهاجرت سیستم از معماری Monolithic به Microservices</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-start mb-3 flex-wrap">
                <h4 className="text-lg font-bold text-white">توسعه‌دهنده وب</h4>
                <span className="text-sm text-muted bg-darker px-3 py-1 rounded-lg">خرداد ۱۳۹۸ – شهریور ۱۴۰۰</span>
              </div>
              <p className="text-primary font-medium mb-3">شرکت مهندسی نوآوران داده‌پیما | سبزوار</p>
              <ul className="space-y-3 text-muted pr-5">
                <li className="list-disc">✓ توسعه پورتال اختصاصی اتحادیه تاکسیرانی سبزوار شامل درخواست آنلاین، پیگیری مسیر و پرداخت الکترونیکی</li>
                <li className="list-disc">✓ یکپارچه‌سازی درگاه پرداخت پی‌لاین و نقشه‌های نشان برای تجربه کاربری یکپارچه</li>
                <li className="list-disc">✓ بهینه‌سازی کوئری‌های دیتابیس — بهبود <span className="text-green-400 font-bold">۶۰٪</span> زمان پاسخگویی سرور</li>
              </ul>
            </div>
          </div>

          {/* Side Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">📱 پروژه‌های جانبی</h3>
            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">اپلیکیشن رزرو نوبت سالن‌های زیبایی (موبایل)</h4>
              <p className="text-primary text-sm mb-2">React Native • Node.js • MongoDB</p>
              <p className="text-muted">✓ توسعه اپلیکیشن برای ۵ سالن در مشهد — افزایش رضایت مشتریان با امکان رزرو آنلاین و انتخاب آرایشگر</p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">🎓 تحصیلات</h3>
              <p className="font-medium text-white">کارشناسی مهندسی نرم‌افزار</p>
              <p className="text-primary text-sm">دانشگاه فردوسی مشهد</p>
              <p className="text-muted text-sm mt-2">گرایش: نرم‌افزار | فارغ‌التحصیلی: شهریور ۱۳۹۸</p>
              <p className="text-green-400 font-bold mt-1">معدل: ۱۷.۲</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">📜 گواهینامه‌ها</h3>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                  <span className="font-bold text-sm">PSM</span>
                </div>
                <div>
                  <p className="font-medium text-white">Professional Scrum Master I (PSM I)</p>
                  <p className="text-primary text-sm">Scrum.org</p>
                  <p className="text-muted text-xs mt-1">دی ۱۴۰۱</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Tools</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-10 rounded-full"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              mounted && (
                <div key={skill.name} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all group">
                  <h3 className="font-semibold mb-3 text-sm">{skill.name}</h3>
                  <div className="w-full bg-darker rounded-full h-2 mb-1">
                    <div
                      className="h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted">{skill.level}%</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-darker">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-10 rounded-full"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all group block"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm">
                    📁
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6 mx-auto rounded-full"></div>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate. 
            Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:mamadiezad@gmail.com"
              className="flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-3 hover:border-primary/30 transition-all"
            >
              <span className="text-xl">📧</span>
              <span>mamadiezad@gmail.com</span>
            </a>
            <a
              href="https://github.com/mamadiezad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-3 hover:border-primary/30 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/mamadiezad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-3 hover:border-primary/30 transition-all"
            >
              <span className="text-xl">💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://t.me/mamadiezad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-card border border-border rounded-xl px-6 py-3 hover:border-primary/30 transition-all"
            >
              <span className="text-xl">✈️</span>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
