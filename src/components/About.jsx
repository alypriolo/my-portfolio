import './About.css'
import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const ref = useFadeIn(0.15)

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container about__inner">
        <div className="about__text fade-in">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Builder at heart,<br />strategist by trade.</h2>
          <p className="about__body">
            I'm a Product Manager with hands-on engineering experience, passionate about
            building products that sit at the intersection of technology and genuine human need.
            I studied at Vanderbilt University, where I led cross-functional teams through the
            full product lifecycle, from discovery to launch.
          </p>
          <p className="about__body">
            Whether I'm writing a PRD, sketching wireframes in Figma, or jumping into the
            codebase to unblock my team, I believe great product work is rooted in deep
            empathy and relentless curiosity.
          </p>
        </div>

      </div>
    </section>
  )
}
