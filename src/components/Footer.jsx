export default function Footer() {
  return (
    <footer>
      <div className="footer fade-up">
        <div>© {new Date().getFullYear()} Caedmon Julian. All rights reserved.</div>
        <div style={{ color: 'var(--muted)' }}>
          Built with <a href="https://www.github.com/NinjaCad/portfolio" target="_blank" rel="noopener noreferrer" className="link">Github Pages</a>
        </div>
      </div>
    </footer>
  )
}
