import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Contact from './components/Contact'
import Services from './components/Services'
import Newsletter from "./components/Newsletter"
import { useState } from 'react'

import './styles.css'

const Legal = () => {

  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(prev => !prev)
  }

  return (
    <main className={`bg-gray-900`}>
      <div className={`container mx-auto ${menu ? 'overflow-hidden' : ''}`}
        style={{overflow: 'hidden'}}
      >
        <Navbar menu={menu} handler={toggleMenu} />
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