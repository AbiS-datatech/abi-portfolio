const links = [['Home', '#home'], ['Works', '#works'], ['About', '#about'], ['FAQ', '#faq']]
export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
      <a className="nav-cta" href="#contact">Let’s talk</a>
    </nav>
  )
}
