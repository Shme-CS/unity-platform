import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Features from './components/sections/Features'
import Courses from './components/sections/Courses'
import LearningPaths from './components/sections/LearningPaths'
import HowItWorks from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import Projects from './components/sections/Projects'
import Community from './components/sections/Community'
import Support from './components/sections/Support'
import Events from './components/sections/Events'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <LearningPaths />
        <HowItWorks />
        <Testimonials />
        <Projects />
        <Community />
        <Support />
        <Events />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
