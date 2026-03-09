import { useEffect, useRef, useState } from 'react'
import './CaseStudies.css'

const projects = [
  {
    id: 2,
    label: 'Web App',
    accent: '#914C07',
    title: 'RateMyClass',
    role: 'Product Manager + Software Engineer',
    context: 'Team project · Vanderbilt University',
    award: '🏆 2nd Place · Immersion Project Competition · Vanderbilt University Department of Computer Science',
    links: [
      { label: 'Live Site', href: 'http://ratemyvandycourse.web.app', primary: true },
      { label: 'GitHub', href: 'https://github.com/alypriolo/ratemyclass' },
    ],
    problem: 'RateMyProfessor focuses on professors, not the course itself. Vanderbilt students had no way to evaluate courses on material quality, workload, difficulty, or grading policies. Choosing classes meant relying on word of mouth with no structured, searchable data.',
    solution: 'A web platform where Vanderbilt students can search or browse courses by department, read peer reviews, and submit their own. Reviews cover quality and difficulty ratings, professor name, attendance policy, exam type, grade earned, and the reviewer\'s major, giving future students a full picture before they register.',
    userStories: [
      { persona: 'Student', story: 'I want to search for a specific course so I can read what others thought of the material and workload.' },
      { persona: 'Student', story: 'I want to browse courses by department so I can compare options before picking my schedule.' },
      { persona: 'Student', story: 'I want to submit a review with ratings and context so I can help future students make better decisions.' },
      { persona: 'Student', story: 'I want to see professor name, attendance policy, and exam type on each review so I know exactly what to expect.' },
    ],
    approach: [
      'Led a team of 4 across 5 sprints: Max Moundas, Trevor Jones, Sera Eviner, and Aly Priolo.',
      'Defined the full product scope, database architecture, and review data model before any code was written.',
      'Designed all UI flows in Figma first, then built the React frontend to match.',
      'Structured the Firebase database as a hierarchy: university, department, course, then reviews as documents within each course.',
      'Addressed content moderation early: built in a user flagging system and profanity filtering for written reviews.',
    ],
    techStack: {
      'UI/UX': ['Figma'],
      'Front-End': ['React'],
      'Back-End': ['Node.js', 'Firebase'],
    },
    product: [
      'Course search by name and browse by department',
      'Quality rating (1-5) and difficulty rating (1-5) per review',
      'Written review with professor name, attendance policy, final exam type, and grade earned',
      'Reviewer major displayed for context',
      'User flagging system for inappropriate content',
      'Profanity filtering on written review submissions',
      'Firebase-hosted database with hierarchical structure: university, department, course, reviews',
    ],
    impact: [
      { value: 'Live', label: 'Deployed and accessible to all Vanderbilt students' },
      { value: '5 sprints', label: 'Full development cycle completed' },
      { value: '4-person', label: 'Cross-functional team' },
    ],
    embeds: [
      { title: 'Presentation Recording', src: 'https://drive.google.com/file/d/1OMZStKdHwhkU5djp1QEM5_MerOVk9wPw/preview', thumbnail: '/my-portfolio/rateMyVandyCourseImage.png' },
      { title: 'LinkedIn Post', src: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7070142081058426880', linkedIn: true, externalLink: 'https://www.linkedin.com/posts/alessandrapriolo_softwareengineering-webdev-activity-7070142081058426880-oF0r' },
      { title: 'Sprint 1 Demo', src: 'https://docs.google.com/presentation/d/1rHntynzA2ez8hRIaWoVlyvz6lktL32DK_tpp-UY0JqE/embed?start=false&loop=false&delayms=5000' },
      { title: 'Project Plan', src: 'https://docs.google.com/spreadsheets/d/1CAdck0a7zzuZTo17gx4TsuChjXZkcQ1B5xivZrdkfoM/htmlview', externalLink: 'https://docs.google.com/spreadsheets/d/1CAdck0a7zzuZTo17gx4TsuChjXZkcQ1B5xivZrdkfoM' },
      { title: 'Database Structure', src: 'https://drive.google.com/file/d/1rHwfh2N_RqzLMhCAJmu4_GtUWBK0BYW2/preview' },
      { title: 'Database Structure (cont.)', src: 'https://drive.google.com/file/d/1nx_MG4rIFZcEIt9pXcSicEE6KpsVTBh1/preview' },
    ],
  },
  {
    id: 1,
    label: 'Mobile App',
    accent: '#6FB7DB',
    title: 'Super Money Kids',
    role: 'Product Manager + Frontend Developer',
    context: 'Vanderbilt Change++ Program · Partnership with SuperMoneyKids stakeholders',
    links: [
      { label: 'Stakeholder Site', href: 'https://supermoneykids.co/' },
      { label: 'Final Presentation', href: 'https://docs.google.com/presentation/d/1TPqsDOrlX91eEmCKq_RhUIS7RF4VQf-dpRXKwijbrEw/edit?usp=sharing' },
    ],
    problem: 'Children in underrepresented communities in Nashville lack access to engaging financial education. There was no digital tool to teach kids the habit of allocating money into Save, Spend, and Share buckets, and no easy way for parents to supervise and reinforce those habits.',
    solution: 'A cross-platform mobile app, a digital compartmentalized piggy bank, that lets kids manage money across three categories with goal-setting, transaction tracking, and a badge reward system. Parents get a dedicated interface to monitor accounts, override transactions, and manage multiple children.',
    userStories: [
      { persona: 'Child', story: 'I want to add money to my account and split it into Save, Spend, and Share so I can build good habits.' },
      { persona: 'Child', story: 'I want to set savings goals and track my progress so I stay motivated.' },
      { persona: 'Child', story: 'I want to earn badges for reaching milestones so the app feels rewarding.' },
      { persona: 'Parent', story: 'I want to view my child\'s account and override transactions so I stay in control.' },
      { persona: 'Parent', story: 'I want to manage multiple children\'s accounts from a single dashboard.' },
    ],
    approach: [
      'Owned the full product roadmap: stakeholder discovery, requirements gathering, design, sprint planning, development, and demo-day delivery.',
      'Led a cross-functional team of 8: 2 backend devs, 1 frontend dev, 1 engineering manager, 1 graphic designer, and a co-PM.',
      'Architected reusable controllers shared between the parent and child interfaces to reduce duplication and accelerate development.',
      'Ran iterative feedback cycles with Change++ program leads and the SuperMoneyKids stakeholder throughout the semester.',
    ],
    techStack: {
      'Back-End': ['Firebase', 'Node.js + Express', 'MongoDB'],
      'Front-End': ['React Native', 'Firebase (Auth / Login)', 'Expo'],
    },
    product: [
      'Compartmentalized wallet with Save / Spend / Share category allocation',
      'Deposit & withdraw flows with per-category breakdown',
      'Goal-setting and progress tracking',
      'Transaction history log',
      'Badge system: Go Getter, Launch, Money Habit, Hundo, 50 Spot, Dub, Birthday',
      'Parent dashboard: multi-child management, transaction overrides',
      'Automatic session caching and cross-platform support (iOS, Android, tablet)',
    ],
    impact: [
      { value: '8-person', label: 'Cross-functional team led' },
      { value: 'Shipped', label: 'Working app delivered to stakeholders' },
      { value: '4 platforms', label: 'iOS, Android, iPhone, tablet' },
    ],
    embeds: [
      { title: 'Figma Designs', src: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FOWJdc945bdPDjAKTO3TLCu%2F%3Fnode-id%3D0%253A1', tall: true },
      { title: 'Final Presentation', src: 'https://docs.google.com/presentation/d/1TPqsDOrlX91eEmCKq_RhUIS7RF4VQf-dpRXKwijbrEw/embed?start=false&loop=false&delayms=5000' },
      { title: 'Sprint Demo', src: 'https://docs.google.com/presentation/d/1bw37vImR_M2uMtmXEKpQ7-KVLgu35mHktya8xgVvyh4/embed?start=false&loop=false&delayms=5000' },
    ],
  },
  {
    id: 3,
    label: 'Business · Prototype',
    accent: '#B07D4F',
    title: 'Elevated Living Design & Concierge',
    role: 'Sole Creator · Proof of Concept',
    context: 'Prototype · 2024',
    links: [
      { label: 'Live Site', href: 'https://alypriolo.github.io/elevatedlivingdesign/', primary: true },
    ],
    problem: 'High-end homeowners and vacation property owners in coastal markets lack a single point of contact for interior design. The process of sourcing premium furnishings, coordinating vendors, managing deliveries, and styling a space is fragmented across multiple contractors, showrooms, and logistics providers, leaving clients overwhelmed and results inconsistent.',
    solution: 'A proof-of-concept for a full-service interior design concierge business targeting the luxury coastal market. The prototype validates the business model: a single point of contact who handles everything from initial design curation through final delivery and installation. The live site was built to test market positioning, messaging resonance, and lead generation before committing to full operational build-out.',
    userStories: [
      { persona: 'Homeowner', story: 'I want one person to handle everything, design, sourcing, and delivery, so I don\'t have to coordinate across vendors myself.' },
      { persona: 'Vacation Property Owner', story: 'I want my property designed and furnished to a high standard without being on-site to manage it.' },
      { persona: 'Client', story: 'I want to see a curated portfolio and understand the process before reaching out, so I know what to expect.' },
      { persona: 'Client', story: 'I want a concierge experience that feels as premium as the product itself.' },
    ],
    approach: [
      'Identified a gap in the coastal luxury market: no turnkey design-to-delivery service for high-end second homes and investment properties.',
      'Defined the full service model before building anything: curation, procurement, delivery coordination, and installation as a single bundled offering.',
      'Built a prototype website to validate the concept, testing brand positioning, visual identity, and messaging with real potential clients.',
      'Designed the site to function as a lead-gen tool: clear service overview, portfolio presentation, and a direct inquiry path.',
      'Used the prototype phase to stress-test pricing assumptions, scope of services, and target client persona before investing in operations.',
    ],
    techStack: {
      'Design': ['Figma', 'Custom visual identity'],
      'Front-End': ['HTML', 'CSS', 'JavaScript'],
      'Hosting': ['GitHub Pages'],
    },
    product: [
      'Full-service concierge model: design curation, vendor sourcing, procurement, delivery, and installation coordination',
      'Target market: luxury coastal homeowners and vacation property investors',
      'Service tiers defined: from single-room refresh to full-property furnishing packages',
      'Brand identity and visual language built for a high-end, editorial aesthetic',
      'Portfolio-driven site to establish credibility and communicate taste level',
      'Inquiry flow designed to qualify leads and set expectations before the first conversation',
      'Prototype used to gather real market feedback and validate willingness to pay',
    ],
    impact: [
      { value: 'Proof of Concept', label: 'Business model validated through prototype' },
      { value: 'Live', label: 'Deployed site used for real market testing' },
      { value: 'End-to-end', label: 'Full concierge model from curation to delivery' },
    ],
    embeds: [
      { title: 'Live Site', src: 'https://alypriolo.github.io/elevatedlivingdesign/', desktopPreview: true, externalLink: 'https://alypriolo.github.io/elevatedlivingdesign/' },
    ],
  },
]

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 11L11 2M11 2H5M11 2v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EmbedBlock({ embed: e }) {
  const [active, setActive] = useState(!e.thumbnail)
  const cls = `cs-embed${e.tall ? ' cs-embed--tall' : ''}${e.desktopPreview ? ' cs-embed--desktop-preview' : ''}${e.linkedIn ? ' cs-embed--linkedin' : ''}`
  return (
    <div className={cls}>
      <p className="cs-embed__label">{e.title}</p>
      <div className="cs-embed__frame-wrap">
        {active ? (
          <iframe src={e.src} className="cs-embed__frame" title={e.title} allowFullScreen />
        ) : (
          <button className="cs-embed__thumbnail" onClick={() => setActive(true)} aria-label={`Play ${e.title}`}>
            <img src={e.thumbnail} alt={e.title} className="cs-embed__thumb-img" />
            <span className="cs-embed__play-icon" aria-hidden="true">▶</span>
          </button>
        )}
        {e.externalLink && (
          <a href={e.externalLink} target="_blank" rel="noopener noreferrer" className="cs-embed__open-btn" aria-label={`Open ${e.title} in new tab`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 2h5m0 0v5m0-5L7 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

function CaseStudyFull({ p }) {
  const sidebarEmbeds = p.embeds ?? []
  const fullWidthEmbeds = []

  return (
    <article className="cs-panel" style={{ '--cs-accent': p.accent }}>
      {/* ── Header ── */}
      <header className="cs-panel__header">
        <div className="cs-panel__header-left">
          <span className="cs-panel__label">{p.label}</span>
          <h3 className="cs-panel__title">{p.title}</h3>
          <p className="cs-panel__context">{p.context}</p>
          {p.award && <p className="cs-panel__award">{p.award}</p>}
          <p className="cs-panel__role"><strong>Role:</strong> {p.role}</p>
        </div>
        <div className="cs-panel__links">
          {p.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={`cs-panel__link${l.primary ? ' cs-panel__link--primary' : ''}`}>
              {l.label} <ExternalLinkIcon />
            </a>
          ))}
        </div>
      </header>

      {/* ── Body: content + embeds ── */}
      <div className="cs-panel__body">
        <div className="cs-panel__content">

          {/* Problem */}
          <div className="cs-section">
            <h4 className="cs-section__title">
              <span className="cs-section__num">01</span> Problem
            </h4>
            <p className="cs-section__body">{p.problem}</p>
          </div>

          {/* Solution */}
          <div className="cs-section">
            <h4 className="cs-section__title">
              <span className="cs-section__num">02</span> Solution
            </h4>
            <p className="cs-section__body">{p.solution}</p>
          </div>

          {/* User Stories */}
          <div className="cs-section">
            <h4 className="cs-section__title">
              <span className="cs-section__num">03</span> User Stories
            </h4>
            <ul className="cs-stories">
              {p.userStories.map((s, i) => (
                <li key={i} className="cs-story">
                  <span className="cs-story__persona">{s.persona}</span>
                  <span className="cs-story__text">"{s.story}"</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Approach */}
          <div className="cs-section">
            <h4 className="cs-section__title">
              <span className="cs-section__num">04</span> Approach
            </h4>
            <ul className="cs-list">
              {p.approach.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="cs-section">
            <h4 className="cs-section__title">
              <span className="cs-section__num">05</span> Tech Stack
            </h4>
            {Array.isArray(p.techStack) ? (
              <div className="cs-tags">
                {p.techStack.map((t) => (
                  <span key={t} className="cs-tag">{t}</span>
                ))}
              </div>
            ) : (
              <div className="cs-techstack-groups">
                {Object.entries(p.techStack).map(([group, items]) => (
                  <div key={group} className="cs-techstack-group">
                    <span className="cs-techstack-group__label">{group}</span>
                    <div className="cs-tags">
                      {items.map((t) => (
                        <span key={t} className="cs-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product */}
          <div className="cs-section">
            <h4 className="cs-section__title">
              <span className="cs-section__num">06</span> Product
            </h4>
            <ul className="cs-list">
              {p.product.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          {/* Impact */}
          <div className="cs-section">
            <h4 className="cs-section__title">
              <span className="cs-section__num">07</span> Impact
            </h4>
            <div className="cs-impact">
              {p.impact.map((m) => (
                <div key={m.label} className="cs-impact__stat">
                  <span className="cs-impact__value">{m.value}</span>
                  <span className="cs-impact__label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar embeds */}
        {sidebarEmbeds.length > 0 && (
          <aside className="cs-panel__embeds">
            {sidebarEmbeds.map((e) => (
              <EmbedBlock key={e.title} embed={e} />
            ))}
          </aside>
        )}
      </div>

      {/* Full-width embeds */}
      {fullWidthEmbeds.length > 0 && (
        <div className="cs-panel__embeds-fullwidth">
          {fullWidthEmbeds.map((e) => (
            <EmbedBlock key={e.title} embed={e} />
          ))}
        </div>
      )}
    </article>
  )
}

function CaseStudyStub({ p }) {
  return (
    <article className="cs-stub" style={{ '--cs-accent': p.accent }}>
      <div className="cs-stub__left">
        <span className="cs-stub__label">{p.label}</span>
        <h3 className="cs-stub__title">{p.title}</h3>
        <p className="cs-stub__context">{p.context}</p>
        <p className="cs-stub__role"><strong>Role:</strong> {p.role}</p>
      </div>
      <div className="cs-stub__links">
        {p.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="cs-panel__link">
            {l.label} <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </article>
  )
}

export default function CaseStudies() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="case-studies" id="case-studies" ref={ref}>
      <div className="container">
        <div className="case-studies__header fade-in">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Products I've built</h2>
          <p className="section-subtitle">
            From mobile apps to web platforms, here's how I take ideas from discovery to launch.
          </p>
        </div>

        <div className="case-studies__list">
          {projects.map((p, i) => (
            <div key={p.id} className="fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              {p.stub ? <CaseStudyStub p={p} /> : <CaseStudyFull p={p} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
