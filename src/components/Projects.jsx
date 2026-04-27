const projects = [
  {
    href: 'https://ninjacad.github.io/Flight-Pages',
    title: 'Sprite Flight',
    desc: 'Top down game aimed to dodge bouncy hexagons',
    tags: ['Unity', 'WebGL', 'C#'],
  },
  {
    href: 'https://ninjacad.github.io/Dodge-Pages',
    title: 'Space Dodge',
    desc: 'Simple 2d side view game aimed to dodge randomly generated ships.',
    tags: ['Unity', 'WebGL', 'C#'],
  },
  {
    href: 'https://ninjacad.github.io/Time-Pages',
    title: 'Time Puzzle',
    desc: 'Simple top down puzzle game using save states. (Work in Progress)',
    tags: ['Unity', 'WebGL', 'C#'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects fade-up">
      <h2 style={{ marginTop: 0 }}>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.href} className="project">
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div>
                <div className="tech">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
