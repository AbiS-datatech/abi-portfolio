import { motion, useReducedMotion } from 'framer-motion'
export default function Reveal({ children, delay = 0, className }) {
  const rm = useReducedMotion()
  if (rm) return <div className={className}>{children}</div>
  return <motion.div className={className} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay }}>{children}</motion.div>
}
