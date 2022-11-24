import React from 'react'
import './about.css'
import ME from '../../assets/me.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Venha Conhecer Mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className='about_me-image'>
            <img src={ME} alt="sobre mim" />
          </div>
        </div>

        <div className="about_content">
          <p>Amante da Tecnologia e busco cada vez me aprimorar como programador para um dia ser um grande desenvolvedor. Sou esforçado e tento aprender cada vez mais. Meus hobbys é jogar videogame, amo jogar RPG e FPS, e ouvir música.</p>
          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>
        </div>
      </div>
    </section>
  )
}

export default About