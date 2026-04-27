const certs = [
  {
    href: 'https://www.coursera.org/account/accomplishments/records/RFSMNXZEN7PU',
    title: 'Introduction to Front-End Development',
    desc: 'Distinguish between front-end, back-end, and full-stack',
    tags: ['HTML and CSS', 'General Networking', 'Web Design and Development'],
  },
  {
    href: 'https://www.coursera.org/account/accomplishments/records/QJQZK4MZZ3XC',
    title: 'Programming with JavaScript',
    desc: 'Creating simple JavaScript codes',
    tags: ['Javascript', 'Object Oriented Programming (OOP)', 'Web Development Tools'],
  },
  {
    href: 'https://www.coursera.org/account/accomplishments/records/3WOJLSKRK0QJ',
    title: 'Version Control',
    desc: 'Implement Version Control systems',
    tags: ['Web Development', 'Collaborative Software', 'Software Development Tools'],
  },
  {
    href: 'https://www.coursera.org/account/accomplishments/records/028M3N111C38',
    title: 'HTML and CSS in Depth',
    desc: 'Create a simple form with a responsive layout using HTML5 and CSS',
    tags: ['Javascript', 'Hypertext Markup Language (HTML)', 'Cascading Style Sheets (CSS)'],
  },
  {
    href: '/images/datascience.png',
    title: 'Data Science with Python',
    desc: 'Data collection, cleaning, analysis, visualization, and statistical modeling using Python to write algorithms and tell meaningful data stories',
    tags: ['Python', 'Data collection', 'Libraries'],
  },
  {
    href: '/images/advancedcybersecurity.png',
    title: 'Advanced Cybersecurity',
    desc: 'Data protection, secure communications, and threat defense',
    tags: ['SQL', 'Networking Infrastructure', 'Cryptography'],
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="projects fade-up" style={{ marginTop: '36px' }}>
      <h2>Certificates</h2>
      <div className="projects-grid">
        {certs.map((c) => (
          <a key={c.href} href={c.href} target="_blank" rel="noopener noreferrer" className="project">
            <div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
            <div>
              <div className="tech">
                {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
