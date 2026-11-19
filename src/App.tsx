import type { CSSProperties } from 'react';
import {
  about,
  contacts,
  education,
  experience,
  me,
  nav,
  projects,
  site,
  stack,
  studying,
} from './content';

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function SectionHeader({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">
        {index} / {label}
      </p>
      <h2 className="h2">{title}</h2>
    </div>
  );
}

function Nav() {
  return (
    <header className="rule-bottom">
      <nav aria-label="Main" className="container nav">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true" />
          {site.domain}
        </a>
        <div className="nav-links">
          {nav.map((id) => (
            <a key={id} href={`#${id}`}>
              {id}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        {site.available && (
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Open to remote backend roles
          </p>
        )}
        <h1 className="h1">
          {site.firstName}
          <br />
          <span className="accent">{site.surname}</span>
        </h1>
        <p className="lede">{site.tagline}</p>
        <div className="actions">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href={site.cvUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>

      <figure className="terminal">
        <div className="terminal-bar">
          <span>psql — {site.city.toLowerCase()}</span>
          <span>{site.timezone}</span>
        </div>
        <div className="terminal-prompt">
          <span className="accent">ravshanbek=#</span> SELECT * FROM me;
        </div>
        <div className="terminal-body">
          <table>
            <thead>
              <tr>
                <th>column</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody>
              {me.map(([k, v]) => (
                <tr key={k}>
                  <td className="muted">{k}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted rows">({me.length} rows)</p>
        </div>
      </figure>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="rule-top">
      <div className="container section split">
        <SectionHeader index="01" label="about" title={about.heading} />
        <div className="split-main prose">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="rule-top">
      <div className="container section stack-lg">
        <SectionHeader index="02" label="experience" title="Where I've worked" />
        <div className="jobs">
          {experience.map((job) => (
            <article key={job.title} className="job split">
              <div className="job-meta">
                <span>{job.period}</span>
                {job.where && <span>{job.where}</span>}
              </div>
              <div className="split-main job-body">
                <h3 className="h3">{job.title}</h3>
                <p className={job.highlights ? 'soft' : 'body'}>{job.summary}</p>
                {job.highlights && (
                  <ul>
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="rule-top band">
      <div className="container section stack-lg">
        <SectionHeader index="03" label="projects" title="Things I've built" />
        <div className="cards">
          {projects.map((p) => (
            <article key={p.name} className="card">
              <p className="card-label">{p.label}</p>
              <h3 className="h3 card-title">{p.name}</h3>
              <p className="body">{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.url && (
                <a href={p.url} className="card-link" target="_blank" rel="noreferrer">
                  Visit site →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="rule-top">
      <div className="container section stack-lg">
        <SectionHeader index="04" label="stack" title="Tools I reach for" />
        <div className="stack-grid">
          {stack.map((s, i) => (
            <div key={s.group} className={i === 0 ? 'stack-item stack-item-lead' : 'stack-item'}>
              <h3 className="mono-h">{s.group}</h3>
              <p className="body">{s.items}</p>
            </div>
          ))}
        </div>
        <div className="studying">
          <p className="eyebrow">currently studying</p>
          <p className="body studying-text">{studying}</p>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="rule-top">
      <div className="container section-sm split split-baseline">
        <p className="eyebrow">05 / education</p>
        <div className="split-main edu">
          <h3 className="h3">{education.school}</h3>
          <p className="soft">{education.detail}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="rule-top contact">
      <div className="container section contact-inner">
        <div className="section-header">
          <p className="mono-sm">06 / contact</p>
          <h2 className="contact-title">Have a backend problem? Let's talk.</h2>
        </div>
        <div className="contact-grid">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="contact-link"
              {...(isExternal(c.href) ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="contact-label">{c.label}</span>
              <span className="contact-value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container footer">
      <span>
        © {new Date().getFullYear()} {site.firstName}
      </span>
      <span>
        {site.city} · {site.timezone}
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page" style={{ '--accent': site.accent } as CSSProperties}>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
