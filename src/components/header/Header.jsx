import './header.css'
import ButtonGroupAction from './ButtonGroupAction'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/img/photoOfMeDetouree.png'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenue !</h5>
        <h1>Je m'appelle Baptiste MARTINEZ</h1>
        <h5 className="text-light">Ingénieur en développement logiciels</h5>
        <ButtonGroupAction />

        <HeaderSocials />

        <div className="me">
          <div className="fondPhoto"></div>
          <img src={ME} alt="profilePhoto" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header