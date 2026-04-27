export default function Header() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="fade-up">
      <div className="brand">
        <div className="logo">CJ</div>
        <div>
          <div style={{ fontWeight: 800 }}>Caedmon Julian</div>
          <div style={{ fontSize: '13px', color: 'var(--muted)' }}>Computer Science Student • Software Developer</div>
        </div>
      </div>
      <nav>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects') }}>Projects</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills') }}>Skills</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="cta">Contacts</a>
      </nav>
    </header>
  )
}
