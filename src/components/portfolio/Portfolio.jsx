/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./portfolio.css"

const data = [
  {
    id: 1,
    image: 'imagem',
    title: 'Em Breve',
    github: 'link',
    demo: 'link'
  },
  {
    id: 2,
    image: 'imagem',
    title: 'Em Breve',
    github: 'link',
    demo: 'link'
  },
  {
    id: 3,
    image: 'imagem',
    title: 'Em Breve',
    github: 'link',
    demo: 'link'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Venha Ver Os Meus</h5>
      <h2>Projetos</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-img">
                  <img src={image}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio