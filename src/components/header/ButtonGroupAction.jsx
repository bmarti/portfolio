import React from 'react'
import CV from '../../assets/docs/cv_fr.pdf'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const ButtonGroupAction = () => {
  return (
    <div className="buttonGroupAction">
        <a className="btn btn-secondary" href={CV} download>Télécharger mon CV</a>
        {/* <a className="btn btn-primary" href="#contact">Me contacter</a> */}
        <a className="btn btn-primary" href="https://www.linkedin.com/in/baptiste-martinez/" target="_blank"><FaLinkedin /></a>
        <a className="btn btn-primary" href="https://www.github.com/bmarti/" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default ButtonGroupAction