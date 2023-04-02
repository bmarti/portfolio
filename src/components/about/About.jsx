import React from 'react'
import './about.css'
import PHOTO from '../../assets/img/photoOfMe2Detouree.png'
import {BsAward} from 'react-icons/bs'
import {FaJava} from 'react-icons/fa'
import {HiComputerDesktop} from 'react-icons/hi2'
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
              <HiComputerDesktop className='about__icon'/>
              <h5>Langages de programmation</h5>
              <div className='about__languages'>
                <FaJava/>
                <SiCplusplus/>
                <SiCsharp/>
              </div>
            </article>

            <article className='about__card'>
              <TbMessageLanguage className='about__icon'/>
              <h5>Langues parlées</h5>
              <small className='langues'>Français (natif)</small>
              <small className='langues'>Anglais (B2 - courant)</small>
              <small className='langues'>Espagnol (B1)</small>
            </article>
          </div>

          <p className='intro'>
            Depuis tout jeune, les ordinateurs me fascinent. C'est pourquoi j'ai étudié le développement logiciel à l'ISIMA*
            en suivant la filière Calculs et Modélisations scientifiques. Désormais, je suis devenu ingénieur en informatique
            et suis prêt à approfondir et partager mes connaissances au sein de projets diversifiés pour évoluer dans ma carrière.
          </p>
          <p>*Institut Supérieur d'Informatique, de Modélisations et de leurs Applications, école d'ingénieur située à Aubière, près de Clermont-Ferrand (63).</p>

          {/* <a href="#contact" className='btn btn-primary'>Contactez-moi</a> */}
        </div>
      </div>
    </section>
  )
}

export default About