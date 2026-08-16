import './sections.css'

const projects = [
  {
    category: 'Cloud & DevOps',
    title: 'National Banking Platform Modernization',
    desc: 'Migrated a monolithic core banking system to a microservices architecture on AWS, reducing deployment time by 80% and achieving 99.99% uptime.',
    metrics: [{ label: 'Uptime', value: '99.99%' }, { label: 'Faster Deploys', value: '80%' }],
    color: '#0096ff',
  },
  {
    category: 'AI & Analytics',
    title: 'Predictive Maintenance for Manufacturing',
    desc: 'Built an ML-powered IoT platform for a global manufacturer that predicts equipment failures 72 hours in advance, cutting downtime by 65%.',
    metrics: [{ label: 'Downtime Reduction', value: '65%' }, { label: 'ROI (Year 1)', value: '3.2×' }],
    color: '#38b6ff',
  },
  {
    category: 'Digital Transformation',
    title: 'Government e-Services Portal',
    desc: 'Designed and delivered a unified citizen services portal handling 2M+ monthly transactions, replacing 14 legacy departmental systems.',
    metrics: [{ label: 'Monthly Users', value: '2M+' }, { label: 'Systems Replaced', value: '14' }],
    color: '#7dd3fc',
  },
  {
    category: 'Mobile & IoT',
    title: 'Smart City Traffic Management',
    desc: 'Deployed an edge-AI traffic management system across 200+ intersections, improving vehicle flow by 40% and reducing accidents by 30%.',
    metrics: [{ label: 'Flow Improvement', value: '40%' }, { label: 'Fewer Accidents', value: '30%' }],
    color: '#0047ab',
  },
  {
    category: 'Cybersecurity',
    title: 'Healthcare SOC Implementation',
    desc: 'Stood up a 24/7 Security Operations Center for a regional hospital network, achieving HIPAA compliance and cutting incident response time from hours to minutes.',
    metrics: [{ label: 'Response Time', value: '<5 min' }, { label: 'Compliance', value: 'HIPAA' }],
    color: '#0096ff',
  },
  {
    category: 'ERP & Integration',
    title: 'Retail Supply Chain ERP',
    desc: 'Implemented a custom ERP integrating 30+ supplier APIs, warehouse management, and real-time demand forecasting for a national retail chain.',
    metrics: [{ label: 'APIs Integrated', value: '30+' }, { label: 'Inventory Accuracy', value: '99.2%' }],
    color: '#38b6ff',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-bg-alt" aria-hidden="true" />
      <div className="container">
        <div className="section-label">Our Work</div>
        <h2 className="section-title">
          Proven Results Across <span className="text-gradient">Every Scale</span>
        </h2>
        <p className="section-subtitle">
          A snapshot of transformative projects delivered for enterprises, governments, and
          fast-growing organizations around the world.
        </p>

        <div className="projects-grid">
          {projects.map(({ category, title, desc, metrics, color }) => (
            <article className="project-card" key={title} style={{ '--card-accent': color }}>
              <div className="project-card__top">
                <span className="project-card__category">{category}</span>
              </div>
              <h3 className="project-card__title">{title}</h3>
              <p className="project-card__desc">{desc}</p>
              <div className="project-card__metrics">
                {metrics.map(({ label, value }) => (
                  <div className="project-metric" key={label}>
                    <span className="project-metric__value">{value}</span>
                    <span className="project-metric__label">{label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
