import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'
const ID = import.meta.env.VITE_FORMSPREE_ID
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState({})
  const [st, setSt] = useState({ type: '', msg: '' })
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  async function submit(e) {
    e.preventDefault()
    const x = {}
    if (v.name.trim().length < 2) x.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) x.email = 'Enter a valid email address.'
    if (v.message.trim().length < 10) x.message = 'Message should be at least 10 characters.'
    setErr(x); if (Object.keys(x).length) return
    if (!ID) return setSt({ type: 'error', msg: `Contact form isn’t configured yet. Please email ${profile.email} directly.` })
    setSt({ type: 'info', msg: 'Sending…' })
    try {
      const r = await fetch(`https://formspree.io/f/${ID}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!r.ok) throw new Error()
      setSt({ type: 'ok', msg: 'Thanks! Your message has been sent.' }); setV({ name: '', email: '', message: '' })
    } catch { setSt({ type: 'error', msg: `Couldn’t send your message. Please email ${profile.email}.` }) }
  }
  const f = (k, label, el = 'input', extra = {}) => {
    const T = el
    return <label>{label}<T value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={`e-${k}`} {...extra} /><span id={`e-${k}`} className="err">{err[k]}</span></label>
  }
  return (
    <section id="contact" className="container section narrow">
      <Reveal className="center"><h2>Let’s build something together</h2><p className="lead">Open to internships and entry-level roles in web development, IT support, networking and cloud computing.</p></Reveal>
      <Reveal>
        <form onSubmit={submit} noValidate>
          {f('name', 'Name', 'input', { autoComplete: 'name' })}
          {f('email', 'Email', 'input', { type: 'email', autoComplete: 'email' })}
          {f('message', 'Message', 'textarea', { rows: 5 })}
          <button className="btn" type="submit">Send message</button>
          <p role="status" className={`status ${st.type}`}>{st.msg}</p>
        </form>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
        </div>
      </Reveal>
    </section>
  )
}
