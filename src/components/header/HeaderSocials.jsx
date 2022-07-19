import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/baptiste-martinez/" target="blank"><FaLinkedin /></a>
        <a href="https://www.github.com/bmarti/" src="FaGithub" target="blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials