import { Github, Linkedin } from 'lucide-react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'
export default function App() {
  return (<>
    <Nav />
    <main><Hero /><Projects /><About /><Experience /><FAQ /><Contact /></main>
    <footer className="footer">
      <div className="socials">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
      </div>
      <p>© {new Date().getFullYear()} Abi S. Built with React & Framer Motion.</p>
    </footer>
  </>)
}
