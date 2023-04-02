import React from 'react'
import './nav.css'
import {RxHome} from 'react-icons/rx'
import {RiUser2Line} from 'react-icons/ri'
import {AiOutlineProfile} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RxHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUser2Line/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineProfile/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBook/></a>
      {/* <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a> */}
    </nav>
  )
}

export default Nav