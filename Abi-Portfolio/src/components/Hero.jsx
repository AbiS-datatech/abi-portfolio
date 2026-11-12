import { motion, useReducedMotion } from 'framer-motion'
export default function Hero() {
  const rm = useReducedMotion()
  const a = (d) => rm ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d } }
  return (
    <section id="home" className="hero container">
      <div className="hero-text">
        <motion.h1 {...a(0)}>Hi, I’m Abi S.</motion.h1>
        <motion.h2 className="tagline" {...a(0.1)}>Exploring Technology. Building Ideas.</motion.h2>
        <motion.p className="lead" {...a(0.2)}>I’m an Artificial Intelligence and Data Science student interested in web development, cloud technologies, and creating practical digital solutions.</motion.p>
        <motion.ul className="hero-meta" {...a(0.25)}>
          <li>B.Tech Artificial Intelligence and Data Science</li><li>RVS Institute of Technology, Coimbatore</li><li>Expected Graduation: 2027</li>
        </motion.ul>
        <motion.div className="btns" {...a(0.3)}>
          <a className="btn" href="#works">Explore My Projects</a>
          <a className="btn ghost" href="#contact">Let’s Connect</a>
        </motion.div>
      </div>
      <motion.div className="hero-photo" {...a(0.2)}>
        <img src="/images/hero-projects.jpg" alt="Portrait of Abi S." width="800" height="990" />
      </motion.div>
    </section>
  )
}
