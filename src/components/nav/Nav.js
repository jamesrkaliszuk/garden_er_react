import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import Logo from './../../assets/logo.png'
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {

  // WATCHING WINDOW WIDTH IN ORDER TO CHANGE TO MOBILE VIEW---------------------------------------------------------
  const [showMobile, setShowMobile] = useState(null)

  useEffect(() => {
    setShowMobile(window.innerWidth)
  }, [])

  useEffect(() => {
    function handleResize() {
      setShowMobile(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = showMobile <= 840
  // END OF WATCHING FOR MOBILE VIEW---------------------------------------------------------------------------------


  // BUILDING THE DROPDOWN--------------------------------------------------------------------------------------------

  const [dropDown, setDropDown] = useState(false)

  const toggleDropDown = () => {
    setDropDown(prev => !prev)
  }
  // END OF THE DROPDOWN--------------------------------------------------------------------------------------------
  // HAMBURGER MENU ICON CHANGE-------------------------------------------------------------------------------------------

  const iconChange = 
    dropDown ? <FiX className='nav--hamburger' onPointerDown={toggleDropDown} /> : <FiMenu className='nav--hamburger' onPointerDown={toggleDropDown} />
  

  // END OFICON CHANGE-------------------------------------------------------------------------------------------

  return (
    <nav>
      <Link to='/'> <img className='nav--logo' src={Logo} alt='the company logo' /> </Link>

      <div className='nav--menu'>
        {!isMobile && <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>}
      </div>

      {isMobile && iconChange}

      <div className='nav--hamburger-menu'>
        {isMobile && dropDown && <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>}
      </div>
    </nav>
  )
}

export default Nav