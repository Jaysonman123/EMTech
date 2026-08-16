import companyImg from '../../assets/image.png'
import './sections.css'

const team = [
  { name: 'Mosh Castro', role: 'Founder & CEO', initials: 'MC', isFounder: true },
  { name: 'Sofia Reyes', role: 'CTO & Co-Founder', initials: 'SR' },
  { name: 'James Tan', role: 'VP of Engineering', initials: 'JT' },
  { name: 'Aisha Patel', role: 'Head of AI & Data', initials: 'AP' },
]

const values = [
  { title: 'Integrity', desc: 'We operate with full transparency, delivering on our promises every single time.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards across every line of code and every client interaction.' },
  { title: 'Collaboration', desc: 'Our best work happens when our team and your team function as one unified group.' },
  { title: 'Impact', desc: 'Technology is only as good as the real-world outcomes it produces. We measure success by yours.' },
]

export default function AboutUs() {
  return (
    <section id="about-us" className="section aboutus-section">
      <div className="section-bg-alt" aria-hidden="true" />
      <div className="container">
        <div className="section-label">Our Story</div>
        <h2 className="section-title">
          The People Behind <span className="text-gradient">EMTech</span>
        </h2>

        {/* Company image banner */}
        <div className="aboutus-image-wrap">
          <img
            src={companyImg}
            alt="EMTech Smart Solutions team"
            className="aboutus-image"
          />
          <div className="aboutus-image__overlay" aria-hidden="true" />
        </div>

        <p className="section-subtitle">
          Founded by <strong>Mosh Castro</strong> and a passionate team of engineers who believed
          technology should solve real problems — not create new ones. Based in Naic, Cavite,
          we serve clients across the Philippines and beyond.
        </p>

        {/* Values */}
        <div className="values-grid">
          {values.map(({ title, desc }) => (
            <div className="value-card" key={title}>
              <div className="value-card__accent" aria-hidden="true" />
              <h3 className="value-card__title">{title}</h3>
              <p className="value-card__desc">{desc}</p>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div className="team-section">
          <h3 className="team-section__heading">Leadership Team</h3>
          <div className="team-grid">
            {team.map(({ name, role, initials, isFounder }) => (
              <div className={`team-card${isFounder ? ' team-card--founder' : ''}`} key={name}>
                <div className="team-card__avatar">
                  {isFounder ? (
                    <img src={companyImg} alt={name} className="team-card__avatar-img" />
                  ) : (
                    <span aria-hidden="true">{initials}</span>
                  )}
                  <div className="team-card__avatar-ring" aria-hidden="true" />
                </div>
                <h4 className="team-card__name">{name}</h4>
                <p className="team-card__role">{role}</p>
                {isFounder && <span className="team-card__founder-badge">Founder</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="milestones">
          {[
            { year: '2012', event: 'Founded in Manila with a 6-person team' },
            { year: '2015', event: 'Expanded to Singapore and launched cloud practice' },
            { year: '2018', event: 'Crossed 100 enterprise clients globally' },
            { year: '2021', event: 'Launched AI & Data division; 200+ team members' },
            { year: '2024', event: 'Recognized in Gartner\'s Top Tech Providers list' },
          ].map(({ year, event }) => (
            <div className="milestone" key={year}>
              <div className="milestone__year">{year}</div>
              <div className="milestone__dot" aria-hidden="true" />
              <div className="milestone__event">{event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
