import { ArrowUpRight, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'
function Mockup({ p }) {
  return (
    <div className="device">
      {p.image
        ? <img src={p.image} alt={p.imageAlt || `${p.title} preview`} loading="lazy" width="1200" height="720" />
        : p.live && /netlify\.app|vercel\.app/.test(p.live)
          ? <iframe src={p.live} title={`${p.title} live preview`} loading="lazy" tabIndex={-1} />
          : <div className="screen"><b>{p.title}</b><i /><i /><i className="short" /><small>Screenshot coming soon</small></div>}
    </div>
  )
}
export default function Projects() {
  return (
    <section id="works" className="container section">
      <Reveal className="center"><h2>Featured Work</h2><p className="lead">Projects I’ve built while learning cloud, backend and web development.</p></Reveal>
      <div className="stack">
        {projects.map((p, i) => (
          <article key={p.title} className="card" style={{ '--i': i }}>
            <div className="card-text">
              <p className="kicker">{p.category} {p.status && <span className={`badge ${p.status === 'Completed' ? 'done' : ''}`}>{p.status}</span>}</p>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="tech">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              {(p.live || p.repo) && (
                <div className="btns">
                  {p.live && <a className="btn" href={p.live} target="_blank" rel="noopener noreferrer">View Project <ArrowUpRight size={18} /></a>}
                  {p.repo && <a className="btn ghost" href={p.repo} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>}
                </div>
              )}
            </div>
            <Mockup p={p} />
          </article>
        ))}
      </div>
    </section>
  )
}
