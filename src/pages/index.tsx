import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Python', level: 95, color: '#3776AB' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'JavaScript', level: 92, color: '#F7DF1E' },
  { name: 'React', level: 88, color: '#61DAFB' },
  { name: 'Next.js', level: 85, color: '#000000' },
  { name: 'Node.js', level: 87, color: '#339933' },
  { name: 'FastAPI', level: 90, color: '#009688' },
  { name: 'PostgreSQL', level: 82, color: '#4169E1' },
  { name: 'Docker', level: 78, color: '#2496ED' },
  { name: 'Git', level: 90, color: '#F05032' },
];

const projects = [
  {
    title: 'FastAPI Tasks',
    description: 'RESTful task management API with JWT auth, PostgreSQL, and async SQLAlchemy.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/mamadiezad/fastapi-tasks',
  },
  {
    title: 'TS Design Patterns',
    description: 'Gang of Four design patterns implemented in TypeScript with clean architecture.',
    tags: ['TypeScript', 'OOP', 'Patterns', 'Jest'],
    github: 'https://github.com/mamadiezad/ts-design-patterns',
  },
  {
    title: 'React Kanban',
    description: 'Drag & drop Kanban board with real-time updates and local storage persistence.',
    tags: ['React', 'TypeScript', 'DnD', 'Vite'],
    github: 'https://github.com/mamadiezad/react-kanban',
  },
  {
    title: 'Node GraphQL API',
    description: 'GraphQL API with Apollo Server 4, Prisma ORM, and cursor-based pagination.',
    tags: ['Node.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/mamadiezad/node-graphql-api',
  },
  {
    title: 'Py-Algorithms',
    description: 'Comprehensive algorithms & data structures collection in Python with tests.',
    tags: ['Python', 'Algorithms', 'DSA', 'Pytest'],
    github: 'https://github.com/mamadiezad/py-algorithms',
  },
  {
    title: 'Next.js Portfolio',
    description: 'Modern developer portfolio with dark mode, responsive design, and blog.',
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
        <title>Mamadi Ezad — Full-Stack Developer</title>
        <meta name="description" content="Professional portfolio of Mamadi Ezad, a full-stack developer specializing in Python, TypeScript, React, and Node.js." />
      </Head>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            👋 Available for new projects
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mamadi Ezad
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-Stack Developer crafting clean, scalable applications with modern technologies.
            Passionate about open source, system design, and writing elegant code.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border hover:border-primary/50 text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              Get in Touch
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
                I&apos;m a full-stack developer based in Germany with a passion for building 
                robust, scalable applications. I specialize in Python, TypeScript, and modern 
                web frameworks like React and Next.js.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                With a strong foundation in computer science and system design, I focus on 
                writing clean, maintainable code that solves real problems. I&apos;m also an 
                active open-source contributor and continuous learner.
              </p>
              <p className="text-muted leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-lg">Quick Stats</h3>
              <div className="space-y-4">
                {[
                  { label: 'Years Coding', value: '5+' },
                  { label: 'Projects Built', value: '20+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Open Source', value: 'Active' },
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

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-darker">
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
      <section id="projects" className="py-24">
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
      <section id="contact" className="py-24 bg-darker">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-6 mx-auto rounded-full"></div>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
          </div>
        </div>
      </section>
    </>
  );
}
