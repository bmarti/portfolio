import React from 'react'
import './nav.css'
import {RxHome} from 'react-icons/rx'
import {RiUser2Line} from 'react-icons/ri'
import {AiOutlineProfile} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><RxHome/></a>
      <a href="#about"><RiUser2Line/></a>
      <a href="#experience"><AiOutlineProfile/></a>
      <a href="#portfolio"><BsBook/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav