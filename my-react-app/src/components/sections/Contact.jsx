import { useState } from 'react'
import './sections.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">
          Let's Build Something <span className="text-gradient">Remarkable</span>
        </h2>
        <p className="section-subtitle">
          Whether you have a clear project in mind or just an idea, our team is ready to help
          you define, design, and deliver it.
        </p>

        <div className="contact-layout">
          {/* Info column */}
          <div className="contact-info">
            <div className="contact-info__item">
              <div className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <strong>Address</strong>
                <p>Naic, Cavite, Philippines</p>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <strong>Email</strong>
                <p>hello@emtechsolutions.com</p>
              </div>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19a2 2 0 01-2.18 2A19.79 19.79 0 0112 17.93a19.5 19.5 0 01-6-6A19.79 19.79 0 013 3.18 2 2 0 015 1h2a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <strong>Mobile</strong>
                <p>0976 353 3423</p>
              </div>
            </div>

            <div className="contact-social">
              {['LinkedIn', 'GitHub', 'Twitter'].map((s) => (
                <a key={s} href="#contact" className="contact-social__link" aria-label={s}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. A member of our team will be in touch within one business day.</p>
                <button className="btn btn--ghost" onClick={() => setSubmitted(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Work Email <span aria-hidden="true">*</span></label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-company">Company</label>
                    <input
                      id="cf-company"
                      name="company"
                      type="text"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-service">Service of Interest</label>
                    <select id="cf-service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      <option>Custom Software Development</option>
                      <option>Cloud Infrastructure</option>
                      <option>AI & Machine Learning</option>
                      <option>Cybersecurity</option>
                      <option>Mobile Development</option>
                      <option>IoT & Embedded Systems</option>
                      <option>Digital Transformation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
