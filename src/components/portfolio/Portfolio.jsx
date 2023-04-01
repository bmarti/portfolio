import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/weather-app.png'
import IMG2 from '../../assets/img/isigala.png'
import IMG3 from '../../assets/img/mapreduce.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Application web météo',
    description: 'Application React permettant de rechercher une ville dans le monde entier pour observer la météo actuelle.',
    github: 'https://github.com/bmarti/weather-web-app',
    demo: 'https://github.com',
    technos: 'ReactJS'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Site web Isigala',
    description: 'Refonte complète du site web de l\'association organisant le gala de mon ancienne école d\'ingénieurs.',
    github: 'https://github.com/bmarti/Isigala-Website-v2',
    demo: 'https://youtu.be/Q2xfgoOqua0',
    technos: 'HTML5, CSS3'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Matrix Multiplication with MapReduce',
    description: 'Projet de deuxième année d\'école d\'ingénieurs. L\'objectif est de permettre la multiplication de matrices de grande taille (rang > 10 000) de manière sécurisée.',
    github: 'https://github.com/bmarti/Matrix-Multiplication-with-MapReduce-Java',
    demo: '#portfolio',
    technos: 'Java, Hadoop'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Développement dans mon temps libre</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, description, github, demo, technos }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Code source</a>
                  <a href={demo} className='btn btn-primary btn-demo' target='_blank'>Voir une démo</a>
                </div>
                <h5>Technologies : {technos}</h5>
              </article>
            )
          })
        }

        {/* <article className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="capture d'écran du projet" />
          </div>
          <h3>portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/bmarti/" className='btn' target='_blank'>Code source</a>
            <a href="https://github.com/bmarti/" className='btn btn-primary' target='_blank'>Voir une démo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio