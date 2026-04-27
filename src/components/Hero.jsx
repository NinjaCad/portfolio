export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      <div className="hero-left fade-up">
        <h1>
          Hello, I'm{' '}
          <span style={{ background: 'linear-gradient(90deg, var(--accent), #3a7bd5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Caedmon Julian
          </span>
        </h1>
        <p>Driven by curiosity and a love for coding, I'm a student and developer constantly learning, building, and experimenting to bring ideas to life through software.</p>
        <div className="actions">
          <a className="button primary" href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects') }}>View Work</a>
          <a className="button ghost" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Get in Touch</a>
        </div>
        <div style={{ marginTop: '18px' }}>
          <strong style={{ display: 'block' }}>What I do</strong>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
            <div className="chip">Full-Stack Development</div>
            <div className="chip">Web Applications</div>
            <div className="chip">Polishing and Debugging</div>
          </div>
        </div>
      </div>

      <aside className="me-card fade-up">
        <div className="avatar">
          <img src="/images/portrait.jpeg" alt="portrait" />
        </div>
        <div className="meta">
          <div>
            <div style={{ fontWeight: 700 }}>Software Developer</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Los Angeles, CA</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 700 }}>Open to work</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Freelance · Contract · PT</div>
          </div>
        </div>
        <div className="chips">
          <div className="chip">C#</div>
          <div className="chip">HTML/CSS</div>
          <div className="chip">Python</div>
          <div className="chip">JavaScript</div>
        </div>
      </aside>
    </section>
  )
}
