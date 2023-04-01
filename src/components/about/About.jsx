import React from 'react'
import './about.css'
import PHOTO from '../../assets/img/photoOfMe2Detouree.png'
import {BsAward} from 'react-icons/bs'
import {FaJava} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {TbMessageLanguage} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Mieux me connaître</h5>
      <h2>Qui suis-je ?</h2>

      <div className='container about__container'>
        <div className='about__me'>
          {/* <div className='about__me-background'></div> */}
          <div className='about__me-image'>
            <img src={PHOTO} alt="photo profil"/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+4 années d'expérience professionnelle</small>
            </article>

            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Langages de prédilection</h5>
              <div className='about__languages'>
                <FaJava/>
                <SiCplusplus/>
                <SiCsharp/>
              </div>
            </article>

            <article className='about__card'>
              <TbMessageLanguage className='about__icon'/>
              <h5>Langues parlées</h5>
              <small>Français (natif), Anglais (courant) et Espagnol (B1)</small>
            </article>
          </div>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid officiis atque libero eaque, repudiandae
              illo ea earum aperiam sed, excepturi consequuntur dolorem 
              natus unde ab molestias assumenda magnam voluptate?
          </p>

            <a href="#contact" className='btn btn-primary'>Venez discuter</a>
        </div>
      </div>
    </section>
  )
}

export default About