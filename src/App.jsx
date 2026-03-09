import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mangomint from './components/Mangomint'
import CaseStudies from './components/CaseStudies'
import Research from './components/Research'
import Skills from './components/Skills'
import Personal from './components/Personal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="page-stripes" aria-hidden="true">
        <div className="page-stripe-left" />
        <div className="page-stripe-right" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Mangomint />
        <CaseStudies />
        <Research />
        <Skills />
        <Personal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
