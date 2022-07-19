import React from 'react'
import CV from '../../assets/img/avatar1.jpg'

const ButtonGroupAction = () => {
  return (
    <div className="buttonGroupAction">
        <a className="btn btn-primary" href={CV} download>Télécharger mon CV</a>
        <a className="btn btn-primary" href="#contact">Me contacter</a>
    </div>
  )
}

export default ButtonGroupAction