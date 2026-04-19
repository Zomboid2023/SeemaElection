                                                        import { useState, useEffect } from 'react'

/* ─── Data ─── */
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'Meet Seema', href: '#meet' },
  { label: 'Journey', href: '#journey' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const VISION_PILLARS = [
  { title: 'Data-Driven Quality', desc: 'DCP analysis, quality audits, and quality champions by mid-May' },
  { title: 'Club Initiatives', desc: '90-Day Habit Challenge, evaluation accreditation, and club role focus' },
  { title: 'Training Ecosystem', desc: 'Interactive COT, success plan workshops, and industry expert sessions' },
  { title: 'Engaging Contests', desc: 'Encourage participation, retain HSCs, and deliver a mid-year contest' },
  { title: 'Conference Excellence', desc: 'Mid-year learning festival and a memorable annual conference' },
]

const TIMELINE = [
  { role: 'District Logistics Manager', period: 'Jul 2025 - Jun 2026', desc: 'Top 9 District role. Working with DD, PQD & CGD on planning, budgets, and governance.' },
  { role: 'Division Director', period: 'Jul 2024 - Jun 2025', desc: 'Led Division to President\'s Distinguished status. Turned around struggling clubs.' },
  { role: 'Club Treasurer', period: 'Dec 2024', desc: 'Stepped in to support club financial operations during leadership transition.' },
  { role: 'Area Director', period: 'Jul 2023 - Jun 2024', desc: 'Chartered 2 college clubs. Growth Pioneer & Leader Awards. Pathbreaker Award.' },
  { role: 'Club President', period: 'Jan 2022 - Jun 2022', desc: 'Led club operations, member engagement, and educational programming.' },
  { role: 'Club VP Education', period: 'Jul 2021 - Dec 2021', desc: 'Managed educational programs and mentored members on Pathways.' },
  { role: 'Club Treasurer', period: 'Jul 2019 - Dec 2019', desc: 'Managed club finances with accountability and transparency.' },
]

const ACHIEVEMENTS = [
  { icon: '🏆', title: 'Leadership Achievement', sub: 'Division Director 2024-25', desc: 'Turned around two struggling clubs into Distinguished, award-winning clubs through strategic planning.' },
  { icon: '🚀', title: 'Chartered 6 Clubs', sub: 'Area, Division & District Level', desc: 'Chartered 2 college clubs as Area Director, expanded into North Karnataka as Division Director, and sponsored 2 corporate clubs as District Logistics Manager.' },
  { icon: '🏅', title: 'Honors & Recognition', sub: 'Toastmasters Awards', desc: 'Growth Pioneer Award, Leader Award, Triple Crown Award, Pathbreaker Award, and Master Mentor Award.' },
  { icon: '🎤', title: 'Speechcraft & YLP', desc: 'Conducted Speechcraft sessions and organized Youth Leadership Program (YLP) sessions to develop emerging leaders.' },
]

const PERSONAL = [
  { icon: '🏃‍♀️', title: 'Marathon Runner', desc: 'Procam Slam 2023 finisher. Open water swimmer. Pushing boundaries in endurance sports.' },
  { icon: '🧘', title: 'Certified Yoga Teacher', desc: 'QCI Level 2 certified. Bringing mindfulness and balance to leadership.' },
  { icon: '🎓', title: 'Alumni Leader', desc: 'President of College of Engineering Alumni Association Kannur, Bangalore Chapter.' },
  { icon: '📋', title: 'ISO/IEC 27001 Lead Auditor', sub: 'Professional Certification', desc: 'Designed and rolled out robust, auditable governance procedures ensuring organization-wide compliance.' },
  { icon: '🎓', title: 'XLRI Executive Program', sub: 'Digital HR Leadership 2025-26', desc: 'Pursuing Executive Development Program in Digital HR Leadership & People Analytics from XLRI.' },
  
]

const TESTIMONIALS = [
  {
    quote: 'Having watched Seema\'s journey for over a decade, I am consistently struck by her ability to embody the discipline of a marathon runner in everything she does. She has the endurance for long-term vision and the grit to tackle immediate challenges. It has been a joy to witness her growth from a dedicated member in our home club to one of our most impressive Toastmasters leaders.',
    name: 'Dr Suchitra Kaul Misra, DTM',
    title: 'Founder, The Healing Garden',
    image: '/images/testimonials/DTM_Suchitra.jpeg',
  },
  {
    quote: 'I have seen her transform from a reluctant speaker into a confident, poised leader who truly epitomizes the spirit of Toastmasters. Her growth is due to her dedication, as she moves from strength to strength. Seema is a cornerstone of our community. She is ever-ready to step up, offer guidance, and mentor fellow members with genuine care. She is the kind of leader who doesn\'t just lead by position, but by example—the kind of leader everyone of us is proud to follow.',
    name: 'Sunil Govind, DTM',
    title: 'Retd. Lt. Commander, Indian Navy',
    image: '/images/testimonials/DTM_Sunil.jpeg',
  },
]

/* ─── Components ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 20px rgba(0,0,0,0.3)' } : {}}>
      <div className="navbar-inner">
        <a href="#home" className="nav-brand">
          <div className="nav-brand-text">
            <h1>Seema Sunil V V</h1>
            <span>Candidate Manifesto</span>
          </div>
        </a>
        <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        <span className="nav-election-date">District 227 Elections</span>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? 'bar bar1 open' : 'bar bar1'} />
          <span className={menuOpen ? 'bar bar2 open' : 'bar bar2'} />
          <span className={menuOpen ? 'bar bar3 open' : 'bar bar3'} />
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-image-wrap">
          <img src="/images/headshot.jpeg" alt="Seema Sunil V V" className="hero-image" />
          <div className="hero-image-label">
            <small>DLC nominated Candidate for</small>
            <span>PROGRAM QUALITY DIRECTOR</span>
          </div>
        </div>
        <div className="hero-content">
          <h2>Seema Sunil V V</h2>
          <p className="tagline">
            Delivering quality training, quality leadership, and a quality club experience across District 227
          </p>
          <div className="hero-divider" />
          <p>
            Head of HR, marathon runner, and Toastmasters leader with 7+ years of service.
            Currently serving as District Logistics Manager (Top 9), bringing strategic planning,
            data-driven insights, and servant leadership to every role.
          </p>
          <a href="#vision" className="hero-cta">
            Explore My Vision &darr;
          </a>
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="section bg-light" id="vision">
      <div className="section-inner">
        <h2 className="section-title">Vision</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A Five-Pillar Approach to Make Quality a Habit—Turning Every Moment into Member Growth, Building Confident Leaders, and Helping Every Club Rise & Thrive
        </p>
        <div className="vision-grid">
          <div>
            <img src="/images/vision-plan.jpeg" alt="PQD Vision Plan" className="vision-image" />
          </div>
          <div className="vision-text">
            <h3>Initiatives</h3>

            <div className="vision-pillars">
              {VISION_PILLARS.map((p, i) => (
                <div className="pillar" key={i}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MeetSeema() {
  return (
    <section className="section" id="meet">
      <div className="section-inner">
        <h2 className="section-title">Meet Seema</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          HR leader, Toastmaster and Endurance Athlete dedicated to empowering others.
        </p>
        <div className="meet-grid">
          <div className="meet-photo-wrap">
            <img src="/images/casual.jpeg" alt="Seema Sunil V V" className="meet-photo" />
            <div className="meet-quote">
              "Effective leadership is about enabling others, communicating clearly,
              remaining adaptable, and building sustainable systems."
            </div>
          </div>
          <div className="meet-content">
            <h3>Head of HR &amp; District Leader</h3>
            <span className="meet-role">District 92 Logistics Manager (Top 9)</span>
            <p>
              I currently serve as Head of HR in an IT company, working closely with leadership teams on
              training, leadership development, conflict resolution, and building high-performance teams.
            </p>
            <p>
              Within Toastmasters, I serve as the District Logistics Manager, working closely with
              the District Director, PQD, and CGD. This has given me strong exposure to District-level
              planning, budgeting, procurement, and governance.
            </p>
            <div className="education-list">
              <h4>Education</h4>
              <ul>
                <li><strong>Executive Development Program</strong> — Digital HR Leadership & People Analytics, XLRI <em>(Pursuing)</em></li>
                <li><strong>Strategic Human Resource Management</strong> — IIM Kozhikode</li>
                <li><strong>MBA</strong> — Human Resource Management</li>
                <li><strong>B.Tech</strong> — Electronics & Telecommunications</li>
              </ul>
            </div>
            <div className="meet-stats">
              <div className="stat"><span className="stat-value">7+</span><span className="stat-label">Years in TM</span></div>
              <div className="stat"><span className="stat-value">6</span><span className="stat-label">Clubs Chartered</span></div>
              <div className="stat"><span className="stat-value">Top 9</span><span className="stat-label">District Role</span></div>
              <div className="stat"><span className="stat-value">7</span><span className="stat-label">Awards</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="section bg-light" id="journey">
      <div className="section-inner">
        <h2 className="section-title">Leadership Journey</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A progressive path from club officer to District leadership, building skills at every level.
        </p>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h4>{item.role}</h4>
                <span className="timeline-date">{item.period}</span>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="section-inner">
        <h2 className="section-title">Achievements</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Key milestones across Toastmasters leadership, professional growth, and personal pursuits.
        </p>
        <div className="achievements-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div className="achievement-card" key={i}>
              <div className="achievement-icon">{a.icon}</div>
              <h4>{a.title}</h4>
              <span className="achievement-sub">{a.sub}</span>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section bg-light" id="testimonials">
      <div className="section-inner">
        <h2 className="section-title">Testimonials</h2>
        <div className="section-divider" />
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-photo-wrap">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="testimonial-photo" />
                ) : (
                  <div className="testimonial-placeholder">
                    <span>{t.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Personal() {
  return (
    <section className="section bg-light">
      <div className="section-inner">
        <h2 className="section-title">Beyond Toastmasters</h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Leadership, endurance, and community service beyond the podium.
        </p>
        <div className="personal-grid">
          {PERSONAL.map((p, i) => (
            <div className="personal-card" key={i}>
              <div className="personal-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <h2 className="section-title">Contact Me</h2>
        <div className="section-divider" />
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
          I'm eager to hear your thoughts on how we can elevate program quality across District 227.
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <h4>Email</h4>
            <a href="mailto:vvseemasunil@gmail.com">vvseemasunil@gmail.com</a>
          </div>
          <div className="contact-item">
            <h4>Phone</h4>
            <p>+91 99001 14708</p>
          </div>
          <div className="contact-item">
            <h4>Follow</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/seema-sunil-v-v-29a5ba9" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://www.instagram.com/seema.sunil_v_v_" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/seema.sunil.12" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="contact-cta">
          <a href="mailto:vvseemasunil@gmail.com">
            Let's Connect &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p><strong>Seema Sunil V V</strong> &mdash; Candidate for Program Quality Director, District 227</p>
      <p style={{ marginTop: '0.5rem' }}>&copy; 2026. All rights reserved.</p>
    </footer>
  )
}

/* ─── App ─── */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Vision />
      <MeetSeema />
      <Journey />
      <Achievements />
      <Testimonials />
      <Personal />
      <Contact />
      <Footer />
    </>
  )
}