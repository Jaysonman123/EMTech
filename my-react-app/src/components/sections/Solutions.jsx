import './sections.css'

const solutions = [
  {
    id: '01',
    title: 'Digital Transformation',
    desc: 'End-to-end modernization of legacy systems and business processes, enabling agility and competitive differentiation in the digital economy.',
    highlight: 'Strategy · Architecture · Migration · Change Management',
  },
  {
    id: '02',
    title: 'Enterprise Resource Planning',
    desc: 'Fully integrated ERP solutions tailored to your operations — connecting finance, supply chain, HR, and production in a single intelligent platform.',
    highlight: 'SAP · Oracle · Custom ERP · API Integration',
  },
  {
    id: '03',
    title: 'Data & Analytics Platform',
    desc: 'Unified data lakes, real-time BI dashboards, and AI-powered insights that empower decision-makers at every level of your organization.',
    highlight: 'Data Warehouse · Power BI · Looker · ML Pipelines',
  },
  {
    id: '04',
    title: 'Smart Automation',
    desc: 'Robotic Process Automation and AI-driven workflow orchestration that eliminate repetitive tasks and accelerate operational throughput.',
    highlight: 'RPA · BPM · OCR · Workflow AI',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <div className="section-label">How We Solve It</div>
        <h2 className="section-title">
          End-to-End <span className="text-gradient">Solutions</span>
        </h2>
        <p className="section-subtitle">
          We architect holistic technology solutions that address your most complex business
          challenges — delivering measurable outcomes at enterprise scale.
        </p>

        <div className="solutions-list">
          {solutions.map(({ id, title, desc, highlight }) => (
            <div className="solution-item" key={id}>
              <div className="solution-item__num">{id}</div>
              <div className="solution-item__body">
                <h3 className="solution-item__title">{title}</h3>
                <p className="solution-item__desc">{desc}</p>
                <p className="solution-item__highlight">{highlight}</p>
              </div>
              <div className="solution-item__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="solutions-cta-banner">
          <div className="solutions-cta-banner__text">
            <h3>Have a unique challenge?</h3>
            <p>Our solution architects are ready to design a custom roadmap for your business.</p>
          </div>
          <a href="#contact" className="btn btn--primary">Talk to an Architect</a>
        </div>
      </div>
    </section>
  )
}
