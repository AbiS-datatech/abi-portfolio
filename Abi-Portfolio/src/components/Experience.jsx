import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { experience, learning } from '../data.js'

function Certificate({ src, title }) {
  const [open, setOpen] = useState(false)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  if (failed) return <p className="cert-missing">Certificate image coming soon.</p>
  const alt = `${title} certificate`
  return (
    <>
      <button type="button" className="cert-btn" onClick={() => setOpen(true)} aria-label={`View ${alt} in a larger size`}>
        <img className="cert" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      </button>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button type="button" className="lightbox-close" aria-label="Close certificate" onClick={() => setOpen(false)} autoFocus><X size={22} /></button>
          <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="container section">
      <Reveal className="center"><h2>Experience & Certificates</h2></Reveal>
      <ol className="timeline">
        {experience.map(([role, org, text], i) => (
          <Reveal key={role + org} delay={i * 0.04}><li><h3>{role}</h3><p className="kicker">{org}</p><p>{text}</p></li></Reveal>
        ))}
        {learning.map((l) => (
          <Reveal key={l.title}>
            <li><h3>{l.title}</h3><p className="kicker">{l.label}</p><p>{l.text}</p>
              {l.date && <p>{l.date}</p>}
              {l.certificate && <Certificate src={l.certificate} title={l.title} />}</li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
