import './sections.css'

const industries = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Banking & Finance',
    desc: 'Core banking modernization, open banking APIs, fraud detection, and regulatory compliance systems.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Healthcare',
    desc: 'EMR/EHR platforms, telemedicine infrastructure, clinical analytics, and HIPAA-compliant data solutions.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'Government',
    desc: 'Citizen-facing portals, inter-agency integration, smart city infrastructure, and public safety systems.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'Retail & E-Commerce',
    desc: 'Omnichannel platforms, AI-driven personalization, supply chain optimization, and POS systems.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Manufacturing',
    desc: 'MES integration, predictive maintenance, quality control automation, and Industry 4.0 transformation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 16.92V19a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 3.18 2 2 0 014.11 1h2.07a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121.28 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Telecommunications',
    desc: 'OSS/BSS modernization, 5G network management, customer experience platforms, and revenue assurance.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    name: 'Education',
    desc: 'LMS platforms, adaptive learning engines, student analytics, and campus management systems.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: 'Energy & Utilities',
    desc: 'Smart grid management, SCADA modernization, renewable energy monitoring, and consumption analytics.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <div className="section-label">Sectors We Serve</div>
        <h2 className="section-title">
          Deep Expertise Across <span className="text-gradient">Key Industries</span>
        </h2>
        <p className="section-subtitle">
          Our domain specialists bring industry-specific knowledge to every engagement, ensuring
          solutions that align with regulatory requirements and sector best practices.
        </p>

        <div className="industries-grid">
          {industries.map(({ icon, name, desc }) => (
            <div className="industry-card" key={name}>
              <div className="industry-card__icon">{icon}</div>
              <h3 className="industry-card__name">{name}</h3>
              <p className="industry-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
