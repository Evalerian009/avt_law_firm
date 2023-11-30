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
    <main className={`bg-gray-900 w-screen h-screen overflow-x-hidden ${menu ? 'overflow-y-hidden' : ''}`}>
		<Navbar menu={menu} handler={toggleMenu} />
		<Hero />
		<Contact />
		<Services />
		<Newsletter />
		<div>
		  Footer
		</div>
    </main>
  )
}

export default Legal