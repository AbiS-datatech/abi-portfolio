import Reveal from './Reveal.jsx'
import { profile, skills } from '../data.js'
export default function About() {
  return (
    <section id="about" className="container section">
      <Reveal><h2>About me</h2></Reveal>
      <Reveal className="about-grid">
        <div>
          <p className="lead">Motivated B.Tech Artificial Intelligence and Data Science student interested in web development, cloud technologies, and building practical real-world applications. I enjoy learning new technologies and applying my knowledge through hands-on projects.</p>
          <ul className="facts">
            <li><span>Education</span>{profile.degree}</li>
            <li><span>College</span>{profile.college}</li>
            <li><span>CGPA</span>{profile.cgpa}</li>
            <li><span>Graduation</span>Expected {profile.grad}</li>
            <li><span>Interests</span>Cloud Computing, Linux, Networking, REST APIs, Web Development</li>
          </ul>
        </div>
        <div className="skills">
          {Object.entries(skills).map(([g, items]) => (
            <div key={g} className="skill-group"><h3>{g}</h3>
              <div className="chips">{items.map((s, i) => <span key={s} className="chip" style={{ animationDelay: `${i * 0.3}s` }}>{s}</span>)}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
