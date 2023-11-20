import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Contact from './components/Contact'
import Services from './components/Services'
import Newsletter from "./components/Newsletter"

import './styles.css'

const Legal = () => {
  return (
    <main className="bg-gray-900">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <Contact />
        <Services />
        <Newsletter />
        <div>
          Footer
        </div>
      </div>
    </main>
  )
}

export default Legal