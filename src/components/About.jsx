const timeline = [
  { period: '2021 - Present', role: 'Computer Science Student', desc: 'Took CS classes in high school, community college, and currently studying CS at TMU' },
  { period: '2023 - Present', role: 'Church Volunteer', desc: 'Run AV equipment and troubleshoot technical problems' },
  { period: '2021 - Present', role: 'Indie Developer', desc: 'Develop programs, websites, and games on various platforms in free time' },
]

export default function About() {
  return (
    <section id="about" className="about fade-up">
      <div className="card">
        <h2>About</h2>
        <p style={{ color: 'var(--muted)' }}>I am a Computer Science student with an emphasis in Artificial Intelligence at The Master's University. I enjoy building creative projects, from designing and programming games to developing websites and other interactive applications. My passion is combining problem-solving with creativity to bring ideas to life through code.</p>

        <h3 style={{ marginTop: '18px' }}>Experience highlights</h3>
        <div className="timeline">
          {timeline.map((item) => (
            <div key={item.role} className="tl-item">
              <div className="dot" />
              <div>
                <strong>{item.period} • {item.role}</strong>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="card">
        <h3>Quick facts</h3>
        <p style={{ color: 'var(--muted)', marginBottom: '10px' }}>Education: Currently pursuing B.S. Computer Science — The Master's University</p>
        <p style={{ color: 'var(--muted)', marginBottom: '10px' }}>Interests: Front-end, Back-end, Game Development</p>

        <h3 style={{ marginTop: '12px' }}>Contact</h3>
        <p style={{ color: 'var(--muted)', marginBottom: '6px' }}>Email: <a href="mailto:caedmon.julian@gmail.com" className="link">caedmon.julian@gmail.com</a></p>
        <p style={{ color: 'var(--muted)' }}>LinkedIn: <a href="https://www.linkedin.com/in/caedmonjulian" target="_blank" rel="noopener noreferrer" className="link">linkedin.com/in/caedmonjulian</a></p>
        <p style={{ color: 'var(--muted)' }}>Instagram: <a href="https://www.instagram.com/caedmonjulian" target="_blank" rel="noopener noreferrer" className="link">@caedmonjulian</a></p>
      </aside>
    </section>
  )
}
