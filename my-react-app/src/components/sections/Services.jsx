import './sections.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Custom Software Development',
    desc: 'Bespoke enterprise applications built to your exact specifications — from concept to deployment and beyond.',
    tags: ['React', 'Node.js', '.NET', 'Python'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Cloud Infrastructure',
    desc: 'Scalable, secure, and cost-optimized cloud architecture on AWS, Azure, and GCP with full DevOps support.',
    tags: ['AWS', 'Azure', 'GCP', 'Terraform'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    desc: 'Intelligent automation, predictive analytics, and NLP solutions that turn your data into competitive advantage.',
    tags: ['TensorFlow', 'PyTorch', 'LLMs', 'MLOps'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cybersecurity',
    desc: 'End-to-end security assessments, SOC implementation, and compliance frameworks to protect your critical assets.',
    tags: ['ISO 27001', 'SOC 2', 'Pen Testing', 'SIEM'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mobile Development',
    desc: 'High-performance iOS and Android applications with seamless UX and deep system integrations.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'IoT & Embedded Systems',
    desc: 'Connected device ecosystems, real-time telemetry, and edge computing solutions for smart environments.',
    tags: ['MQTT', 'Edge AI', 'RTOS', 'BLE/Zigbee'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-bg-alt" aria-hidden="true" />
      <div className="container">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">
          Full-Spectrum <span className="text-gradient">Technology Services</span>
        </h2>
        <p className="section-subtitle">
          From strategy to execution, we cover every layer of the technology stack so your team
          can focus on what matters most — growing your business.
        </p>

        <div className="services-grid">
          {services.map(({ icon, title, desc, tags }) => (
            <article className="service-card" key={title}>
              <div className="service-card__icon">{icon}</div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{desc}</p>
              <div className="service-card__tags">
                {tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
