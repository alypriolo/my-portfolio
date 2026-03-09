import { useEffect, useRef } from 'react'
import './Skills.css'

const skillGroups = [
  {
    category: 'Discovery',
    icon: '🔍',
    skills: [
      'User Research & Interviews',
      'Market Research',
      'Competitive Analysis',
      'Jobs-to-be-Done',
      'Market Fit Analysis',
      'User Personas',
      'Problem Definition',
    ],
  },
  {
    category: 'Product Management',
    icon: '🗺',
    featured: true,
    skills: [
      'Product Strategy',
      'Roadmapping',
      'PRD Writing',
      'User Stories',
      'Agile / Scrum',
      'Sprint Planning',
      'Stakeholder Management',
      'Feature Prioritization',
      'OKRs & KPI Tracking',
    ],
  },
  {
    category: 'QA & Testing',
    icon: '✅',
    skills: [
      'Quality Assurance',
      'Beta Testing',
      'User Acceptance Testing',
      'Bug Tracking',
      'Test Case Writing',
    ],
  },
  {
    category: 'Launch',
    icon: '🚀',
    skills: [
      'Go-to-Market Strategy',
      'Product Marketing',
      'Release Monitoring',
      'Bug Triage',
      'A/B Testing',
      'Feature Enhancements',
      'Post-Launch Analytics',
    ],
  },
  {
    category: 'Design',
    icon: '🎨',
    muted: true,
    skills: [
      'Figma',
      'Wireframing',
      'Prototyping',
      'User Flows',
    ],
  },
  {
    category: 'Engineering',
    icon: '⚙️',
    muted: true,
    skills: [
      'React',
      'React Native',
      'Node.js',
      'Firebase',
      'MongoDB',
      'JavaScript',
      'HTML / CSS',
      'Git / GitHub',
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="skills__header fade-in">
          <span className="section-label">Skills</span>
          <h2 className="section-title">What I bring to the table</h2>
          <p className="section-subtitle">
            End-to-end product thinking, from discovery to launch.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className={`skill-group fade-in${group.featured ? ' skill-group--featured' : ''}${group.muted ? ' skill-group--muted' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-group__header">
                <span className="skill-group__icon" aria-hidden="true">{group.icon}</span>
                <h3 className="skill-group__title">{group.category}</h3>
              </div>
              <ul className="skill-group__list">
                {group.skills.map((s) => (
                  <li key={s} className="skill-chip">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
