import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { faqs } from '../data.js'
export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="container section narrow">
      <Reveal className="center"><h2>FAQ</h2></Reveal>
      {faqs.map(([q, a], i) => (
        <div key={q} className="faq">
          <button aria-expanded={open === i} aria-controls={`f${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
            {q}<Plus size={20} className={open === i ? 'rot' : ''} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && <motion.div id={`f${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}><p>{a.split(/(Web Development|IT Support|Networking|Cloud Computing)/g).map((t, k) => k % 2 ? <strong key={k}>{t}</strong> : t)}</p></motion.div>}
          </AnimatePresence>
        </div>
      ))}
    </section>
  )
}
