import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Python', level: 99, color: '#3776AB' },
  { name: 'TypeScript', level: 97, color: '#3178C6' },
  { name: 'JavaScript', level: 99, color: '#F7DF1E' },
  { name: 'React', level: 95, color: '#61DAFB' },
  { name: 'Next.js', level: 93, color: '#000000' },
  { name: 'Node.js', level: 96, color: '#339933' },
  { name: 'FastAPI', level: 94, color: '#009688' },
  { name: 'Rust', level: 82, color: '#DEA584' },
  { name: 'Go', level: 78, color: '#00ADD8' },
  { name: 'Docker', level: 92, color: '#2496ED' },
  { name: 'Kubernetes', level: 80, color: '#326CE5' },
  { name: 'PostgreSQL', level: 91, color: '#4169E1' },
  { name: 'MongoDB', level: 85, color: '#47A248' },
  { name: 'Redis', level: 83, color: '#DC382D' },
  { name: 'GraphQL', level: 88, color: '#E10098' },
];

const projects = [
  {
    title: 'FastAPI Tasks',
    description: 'The ultimate task management API — JWT auth, async PostgreSQL, containerized with Docker. Speed of light, reliability of a god.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/mamadiezad/fastapi-tasks',
  },
  {
    title: 'TS Design Patterns',
    description: 'Every GoF design pattern reimagined in TypeScript. Architecture so clean it brings tears to your eyes.',
    tags: ['TypeScript', 'OOP', 'Patterns', 'Jest'],
    github: 'https://github.com/mamadiezad/ts-design-patterns',
  },
  {
    title: 'React Kanban',
    description: 'Drag & drop Kanban board that bends spacetime. Real-time updates, local persistence, smooth as butter.',
    tags: ['React', 'TypeScript', 'DnD', 'Vite'],
    github: 'https://github.com/mamadiezad/react-kanban',
  },
  {
    title: 'Node GraphQL API',
    description: 'GraphQL API so fast it queries the future. Apollo Server, Prisma ORM, cursor-based pagination — chef\'s kiss.',
    tags: ['Node.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/mamadiezad/node-graphql-api',
  },
  {
    title: 'Py-Algorithms',
    description: 'Every algorithm known to mankind — sorted, searched, and conquered. 10,000+ lines of pure Python genius.',
    tags: ['Python', 'Algorithms', 'DSA', 'Pytest'],
    github: 'https://github.com/mamadiezad/py-algorithms',
  },
  {
    title: 'Next.js Portfolio',
    description: 'A portfolio so epic it crashes recruiters\' browsers. Dark theme, animations, responsive — pure art.',
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
        <title>Mamadi Ezad — The Code Sorcerer 👑</title>
        <meta name="description" content="Legendary full-stack developer from Iran. Python • TypeScript • React • Node.js. I don't write code, I write reality." />
      </Head>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-red-500/20 to-green-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-bold font-mono">
            👑 پادشاه برنامه‌نویسان — The Code Sorcerer
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mamadi Ezad
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
            Full-Stack Developer from <b className="text-white">🇮🇷 Iran</b> who doesn't just write code — I architect realities.
            Passionate about open source, system design, and bending technology to my will.
          </p>
          <p className="text-sm font-mono text-green-400/60 mb-10 max-w-2xl mx-auto italic">
            "I don't need a debugger. I am the debugger."<br/>
            <span className="text-red-400/40">— Error 404: Limits not found</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
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

          {/* Code Sorcerer Image */}
          <div className="relative max-w-xs mx-auto mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src="/code-sorcerer.jpg" 
              alt="The Code Sorcerer" 
              className="relative rounded-full w-48 h-48 mx-auto border-4 border-primary/30 object-cover shadow-2xl shadow-primary/20"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-green-400/60">[SYSTEM: Legendary entity detected]</span>
            </div>
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
                I&apos;m a full-stack developer based in <b className="text-white">🇮🇷 Iran</b> with a passion for building 
                robust, scalable applications that push the boundaries of what&apos;s possible. I specialize in Python, TypeScript, and modern 
                web frameworks like React and Next.js. I don&apos;t just follow best practices — I set them.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                With legendary mastery in computer science and system architecture, I craft 
                solutions that redefine what software can do. My code is so clean it compiles 
                on the first try — every time. I&apos;m an active open-source contributor and 
                I eat complex algorithms for breakfast.
              </p>
              <p className="text-muted leading-relaxed">
                When I&apos;m not bending the universe to my will through code, you&apos;ll find me 
                exploring cutting-edge AI/ML technologies, contributing to game-changing 
                open-source projects, or mentoring the next generation of programming gods.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-lg">Quick Stats</h3>
              <div className="space-y-4">
                {[
                  { label: '💻 Years of Dominance', value: '10+' },
                  { label: '🚀 Projects Conquered', value: '50+' },
                  { label: '⚡ Technologies Mastered', value: '25+' },
                  { label: '🌍 Open Source', value: 'Legendary' },
                  { label: '🏆 Bugs Crushed', value: '∞' },
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
            Think you have a project that challenges a god? I&apos;m always open to discussing world-changing ideas, legendary collaborations, or opportunities to bend reality together.
          </p>
          <div className="text-sm text-muted mb-8 font-mono">
            $ summon --mamadi --power-level=legendary
          </div>

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
