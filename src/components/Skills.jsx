import './Skills.css'
import { useFadeIn } from '../hooks/useFadeIn'

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
      'QA & Testing',
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
      'JavaScript',
      'HTML / CSS',
      'Git / GitHub',
    ],
  },
]

export default function Skills() {
  const ref = useFadeIn()

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
