const skills = [
  { label: 'Frontend', tech: 'HTML · CSS · JavaScript', pct: 76 },
  { label: 'Backend', tech: 'C# · Python · Node.js', pct: 80 },
  { label: 'Collaborative Platforms', tech: 'Jira · Slack · Discord', pct: 82 },
  { label: 'Version Control Tools', tech: 'Git · Github · Bitbucket', pct: 78 },
  { label: 'Deployment Environments', tech: 'VS Code · Python IDLE · Xcode', pct: 78 },
  { label: 'Others', tech: 'Unity · Docker · CurseForge', pct: 74 },
]

export default function Skills() {
  return (
    <section id="skills" className="fade-up">
      <h2>Skills</h2>
      <div className="skills-grid" style={{ marginTop: '12px' }}>
        {skills.map((s) => (
          <div key={s.label} className="card">
            <strong>{s.label}</strong>
            <p style={{ color: 'var(--muted)', marginTop: '8px' }}>{s.tech}</p>
            <div style={{ marginTop: '12px' }}>
              <div className="skill-bar"><i style={{ width: `${s.pct}%` }} /></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
