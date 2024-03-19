import React from 'react'
import './footer.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Baptiste Martinez</a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">Qui suis-je ?</a></li>
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#contact">Contact</a></li> */}
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/baptiste-martinez/" target="blank"><FaLinkedin /></a>
        <a href="https://www.github.com/bmarti/" src="FaGithub" target="blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2024 Baptiste Martinez. Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default Footer