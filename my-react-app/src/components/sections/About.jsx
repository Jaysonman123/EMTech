import './sections.css'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Innovation First',
    desc: 'We invest heavily in R&D to stay ahead of technological curves, bringing tomorrow\'s solutions to your business today.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Precision Engineering',
    desc: 'Every solution is architected with meticulous attention to performance, security, and scalability from day one.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Client Partnership',
    desc: 'We don\'t just deliver projects — we build long-term partnerships, providing continuous support and strategic guidance.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-label">Who We Are</div>
        <h2 className="section-title">
          Built on Expertise,<br />Driven by <span className="text-gradient">Purpose</span>
        </h2>
        <p className="section-subtitle">
          EMTech Smart Solutions is a premier technology company headquartered in the heart of the
          digital economy. Since our founding, we have been at the forefront of enterprise software,
          AI, and infrastructure innovation.
        </p>

        <div className="about-grid">
          <div className="about-visual" aria-hidden="true">
            <div className="about-visual__ring about-visual__ring--1" />
            <div className="about-visual__ring about-visual__ring--2" />
            <div className="about-visual__ring about-visual__ring--3" />
            <div className="about-visual__core">
              <svg viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="14" fill="url(#aGrad)" />
                <path d="M12 18h8l4 7 4-7h8M12 24h24M12 30h8l4-7 4 7h8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="aGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0047AB" />
                    <stop offset="1" stopColor="#0096FF" />
                  </linearGradient>
                </defs>
              </svg>
              <span>EMTech</span>
            </div>
          </div>

          <div className="about-pillars">
            {pillars.map(({ icon, title, desc }) => (
              <div className="pillar-card" key={title}>
                <div className="pillar-card__icon">{icon}</div>
                <div>
                  <h3 className="pillar-card__title">{title}</h3>
                  <p className="pillar-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
