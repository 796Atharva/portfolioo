import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Terminal,
  Code2, Database, BrainCircuit, Server, ExternalLink, Menu, X
} from "lucide-react";

const profileLines = [
  "> system.boot()",
  "> loading developer_profile...",
  "> initializing Java, Spring Boot, AI modules...",
  "> locating interesting problems to solve...",
  "> status: READY_"
];

const projects = [
  {
    number: "01",
    name: "Microservices-Based Quiz & Assessment Engine",
    description: "A distributed assessment platform with separate Quiz, Question, User and Authentication services. Built service discovery, centralized API routing, JWT authentication and SSO.",
    stack: ["Java", "Spring Boot", "Spring Cloud", "Spring Security", "PostgreSQL"],
    github: "https://github.com/796Atharva",
    note: "DISTRIBUTED SYSTEMS"
  },
  {
    number: "02",
    name: "AI-Powered Mock Interview System",
    description: "A full-stack interview platform that generates contextual technical and behavioral questions, processes candidate responses and provides automated performance feedback. Includes computer-vision and resume-aware workflows.",
    stack: ["React", "FastAPI", "LLMs", "Voice AI", "MediaPipe", "Docling"],
    github: "https://github.com/796Atharva",
    note: "GENERATIVE AI"
  },
  {
    number: "03",
    name: "Terminal Diagnoser",
    description: "An LLM-powered Linux diagnostics system that explains command-line errors and suggests corrective commands using a RAG pipeline over Linux man-page documentation.",
    stack: ["Java", "Spring AI", "Ollama", "PGVector", "Docker"],
    github: "https://github.com/796Atharva",
    note: "RAG / DEVELOPER TOOLS"
  }
];

const skillGroups = [
  { icon: Code2, title: "Languages", items: ["Java", "C++", "C", "Python", "SQL"] },
  { icon: Server, title: "Backend", items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "Spring Cloud", "FastAPI", "REST APIs", "Microservices"] },
  { icon: BrainCircuit, title: "AI / Engineering", items: ["LLMs", "RAG", "Spring AI", "LangChain", "Ollama"] },
  { icon: Database, title: "Data & Tools", items: ["PostgreSQL", "PGVector", "Docker", "Docker Compose", "Git"] }
];

function TerminalWindow() {
  const [line, setLine] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setLine((v) => (v + 1) % (profileLines.length + 1)), 1250);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="terminal-window">
      <div className="terminal-top">
        <div className="traffic"><i /><i /><i /></div>
        <span>root@atharva-dev: ~</span>
        <Terminal size={15} />
      </div>
      <div className="terminal-body">
        {profileLines.slice(0, line).map((item, i) => (
          <motion.p key={item} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .2 }}>
            <span className="prompt">{item}</span>
            {i === 2 && <span className="progress"><span /></span>}
          </motion.p>
        ))}
        <p className="terminal-cursor">root@atharva:~$ <b>▌</b></p>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["01_ABOUT", "#about"], ["02_STACK", "#stack"], ["03_PROJECTS", "#projects"], ["04_CONTACT", "#contact"]];
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home"><span>root@</span> AtharvaSanganwar <b>.</b></a>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "show" : ""}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-contact" href="#contact">Execute_Contact()</a>
        </div>
      </nav>
    </header>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label"><span /> {children}</div>;
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <SectionLabel>SYSTEM.STATUS: ONLINE</SectionLabel>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
              Atharva<br className="desktop-break" /> Sanganwar<span className="green">.</span>
            </motion.h1>
            <p className="hero-role">Backend Developer &amp; AI Engineer<span className="blink">_</span></p>
            <div className="tag-row">
              <span>[ JAVA ]</span><span>[ SPRING BOOT ]</span><span>[ AI / LLM ]</span><span>[ MICROSERVICES ]</span>
            </div>
            <p className="hero-description">
              I build scalable backend systems and intelligent applications, turning complex problems into practical software.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">init_contact() <ArrowUpRight size={16} /></a>
              <a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={15} /> view_resume.pdf</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/796Atharva" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href="https://linkedin.com/in/atharvasanganwar" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a href="mailto:atharva.sanganwar@walchandsangli.ac.in"><Mail size={16} /> Email</a>
            </div>
          </div>
          <div className="hero-visual"><TerminalWindow /></div>
          <div className="hero-bottom"><span>SCROLL_TO_EXPLORE()</span><span>19.XXX° N / 74.XXX° E</span></div>
        </section>

        <section className="section container" id="about">
          <SectionLabel>01 / ABOUT_ME</SectionLabel>
          <div className="about-grid">
            <h2>Curious by nature.<br /><span className="muted">Engineer by choice.</span></h2>
            <div className="about-text">
              <p>I'm a Computer Science undergraduate at <strong>Walchand College of Engineering, Sangli</strong> (2024–2028), interested in backend engineering, distributed systems and applied AI.</p>
              <p>I enjoy understanding how systems work under the hood, designing clean APIs and building tools that solve real problems.</p>
              <div className="education"><span>EDUCATION</span><strong>B.Tech. Computer Science</strong><small>Walchand College of Engineering · 2024—2028</small></div>
            </div>
          </div>
        </section>

        <section className="section container" id="stack">
          <SectionLabel>02 / TECH_STACK</SectionLabel>
          <div className="section-heading">
            <h2>Tools of the trade<span className="green">.</span></h2>
            <p>Technologies I use to design, build and ship software.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, items }) => (
              <motion.article className="skill-card" key={title} whileHover={{ y: -5 }}>
                <div className="skill-title"><Icon size={19} /><h3>{title}</h3></div>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionLabel>03 / SELECTED_WORK</SectionLabel>
          <div className="section-heading">
            <h2>Things I've built<span className="green">.</span></h2>
            <p>A selection of engineering projects and experiments.</p>
          </div>
          <div className="projects-list">
            {projects.map(project => (
              <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .45 }}>
                <div className="project-number">{project.number}</div>
                <div className="project-content">
                  <div className="project-note">{project.note}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label="Open GitHub"><ExternalLink /></a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionLabel>04 / LEADERSHIP</SectionLabel>
          <div className="experience-card">
            <div><span className="project-note">WCE ACM STUDENT CHAPTER</span><h2>Web Lead<span className="green">.</span></h2><p>Walchand College of Engineering</p></div>
            <div className="experience-detail">
              <p>Led development and maintenance of web platforms, improving features and user experience.</p>
              <p>Co-developed the official WCE ACM Hackathon platform, supporting registration workflows and participant profiles for <strong className="green">1,300+ participants</strong>.</p>
              <p>Collaborated with the development team to build responsive applications and maintain reliable event infrastructure.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <SectionLabel>05 / GET_IN_TOUCH</SectionLabel>
            <h2>Have an idea?<br /><span className="muted">Let's build it.</span></h2>
            <p>I'm open to conversations about software engineering, backend systems, AI projects and collaboration.</p>
            <a className="button primary" href="mailto:atharva.sanganwar@walchandsangli.ac.in">Send a message <ArrowUpRight size={17} /></a>
            <div className="contact-details">
              <a href="mailto:atharvasanganwar19999@gmail.com"><Mail size={16} /> atharvasanganwar19999@gmail.com</a>
              <a href="tel:+918888608739">+91 88886 08739</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container"><span>© {new Date().getFullYear()} Atharva Sanganwar</span><span>DESIGNED &amp; BUILT WITH REACT <b>●</b></span><a href="#home">BACK_TO_TOP ↑</a></footer>
    </>
  );
}
