import './WhatIOffer.css'
import { useFadeIn } from '../hooks/useFadeIn'

const pillars = [
  {
    title: 'Philosophy',
    points: [
      "Set a high bar for quality and craft. I sweat the details of the everyday interactions that thousands of people experience",
      "Build for invisibility: the product should morph into the user's workflow, not the other way around",
      "Deeply curious and opinionated on product taste; I don't shy away from sharing a strong point of view",
      "Thrive in ambiguity: I paint a story from data, user research, and competitive signals to craft a solution that outperforms alternatives",
    ],
  },
  {
    title: 'Discovery & Strategy',
    points: [
      "Own product strategy, roadmap, ideation, and execution grounded in customer needs, data, and business impact",
      "Perform up-front discovery through user interviews, competitive research, and data analysis before anything gets specced",
      "Use a mix of quantitative data, experimentation, and qualitative research to deeply understand user behavior",
      "Identify user needs and turn them into high-impact opportunities, owning products end-to-end from concept through iteration",
    ],
  },
  {
    title: 'How I Build',
    points: [
      "At a startup, I wear a lot of hats: from researching legal requirements to deep competitor analysis",
      "I prototype most features myself using AI coding tools, get them in front of stakeholders early, and iterate until the concept is solid before handing off to engineering",
      "When building with AI, I stay grounded in the codebase: checking for consistency with existing functionality, branding, and architectural standards",
      "Translate ambiguous problems into clear, well-scoped functional and technical requirements",
    ],
  },
  {
    title: 'Cross-Functional',
    points: [
      "Partner closely with design, engineering, data science, QA, and marketing to ship high-impact work at a fast cadence",
      "Guide engineering on scope, review technical capabilities, and help teams prioritize and sequence effectively",
      "Communicate product vision, strategy, and progress to executive stakeholders and cross-functional partners",
      "Deep operational empathy: translate pain points from sales, CX, and finance into product opportunities",
    ],
  },
  {
    title: 'Launch & GTM',
    points: [
      "Design and run test suites, internal EAPs, and Playwright tests to build scalable QA infrastructure",
      "Own GTM checklists, rollout sequencing, and feedback loops end-to-end",
      "Craft messaging that bridges each feature to the user's real need and sets accurate expectations",
      "Build detailed internal playbooks so CX, sales, and marketing can own every launch with confidence",
    ],
  },
]

export default function WhatIOffer() {
  const ref = useFadeIn()

  return (
    <section className="what-i-offer" id="process" ref={ref}>
      <div className="container">
        <div className="wio__header fade-in">
          <span className="section-label">Process</span>
          <h2 className="section-title">What I Offer &amp; How I Operate</h2>
          <p className="section-subtitle">How I think, build, and ship: from first principles to launch.</p>
        </div>

        <div className="wio__grid">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="wio__card fade-in"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className="wio__card-title">{pillar.title}</h3>
              <ul className="wio__list">
                {pillar.points.map((point, j) => (
                  <li key={j} className="wio__item">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
