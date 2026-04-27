import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const sub = subject || 'Message from portfolio'
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:caedmonjulian@gmail.com?subject=${encodeURIComponent(sub)}&body=${body}`
  }

  return (
    <section id="contact" className="fade-up" style={{ marginTop: '24px' }}>
      <div className="card">
        <h2>Contact</h2>
        <p style={{ color: 'var(--muted)' }}>Interested in working together? Send a note — I typically reply within 2 business days.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} />
          <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
          <textarea name="message" placeholder="How can I help?" required value={form.message} onChange={handleChange} />
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between' }}>
            <button className="button primary" type="submit">Send message</button>
            <div style={{ color: 'var(--muted)', fontSize: '13px' }}>Or email: <a href="mailto:caedmonjulian@gmail.com" className="link">caedmonjulian@gmail.com</a></div>
          </div>
        </form>
      </div>
    </section>
  )
}
