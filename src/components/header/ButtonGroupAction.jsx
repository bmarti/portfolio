import React from 'react'
import CV from '../../assets/docs/cv_fr.pdf'

const ButtonGroupAction = () => {
  return (
    <div className="buttonGroupAction">
        <a className="btn btn-secondary" href={CV} download>Télécharger mon CV</a>
        <a className="btn btn-primary" href="#contact">Me contacter</a>
    </div>
  )
}

export default ButtonGroupAction