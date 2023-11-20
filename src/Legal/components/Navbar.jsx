import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  function toggleMenu() {
    setMenu(prev => !prev)
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 md:px-6 py-4 md:py-7 md:sticky w-full top-0 bg-gray-900 z-[100] shadow-md shadow-slate-800">
       <div className='flex items-center h-fit font-semibold text-slate-100'>
        <span className='w-[25px] md:w-[50px]'>
          {/* <img src={''} alt="Logo" className='w-full h-full'/> */}
        </span>
        <span className='md:text-2xl lg:text-3xl'>AVT LAW FIRM</span>
       </div>
       <div className="hidden md:flex gap-x-10 text-slate-100 font-semibold text-xl">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#services">Services</a>
        <a href="#newsletter">Newsletter</a>
       </div>
       <div className={`absolute top-[59px] md:top-[100px] flex-col right-0 h-[94vh] gap-y-7 bg-gray-900 z-[3] py-7 px-5 border-l-2 border-slate-900 text-slate-100 flex font-semibold drop-shadow-3xl  ${menu ? 'w-[50%] opacity-100' : 'w-0  opacity-0'} transition-all duration-500 md:hidden z-[99]`}>
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#services">Services</a>
        <a href="#newsletter">Newsletter</a>
       </div>
       <span className='text-slate-100 md:hidden cursor-pointer'>
          <FontAwesomeIcon icon={menu ? faAlignLeft : faAlignRight} fontSize={25} onClick={toggleMenu}/>
        </span>
    </div>
  )
}

export default Navbar