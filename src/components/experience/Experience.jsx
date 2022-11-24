import React from 'react'
import "./experience.css"

/* ====== Icons Frontend ====== */

import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiAngular} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'

/* ====== Icons Backend ====== */

import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiAdonisjs} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {DiMongodb} from 'react-icons/di'
import {SiPrisma} from 'react-icons/si'


/* ====== Star ======*/

import {RiStarSFill} from 'react-icons/ri'

/* ====== Swipper ====== */ 

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: <ImHtmlFive/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'HTML é uma linguagem de marcação utilizada na construção de páginas na Web'
  },
  {
    avatar: <SiCss3/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'LCascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>'
  },
  {
    avatar: <SiJavascript/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma'
  },
  {
    avatar: <SiTypescript/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem'
  },
  {
    avatar: <SiAngular/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'Uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript'
  },
  {
    avatar: <SiReact/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'Uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web'
  },
  {
    avatar: <BsBootstrapFill/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'Projetada para facilitar o processo de criação de sites responsivos para dispositivos móveis'
  },
]

const data2 = [
  {
    avatar: <FaNodeJs/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'Software que permite a execução de códigos JavaScript fora de um navegador web'
  },
  {
    avatar: <SiExpress/>,
    star: [<RiStarSFill/>, <RiStarSFill/>],
    description: 'Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web'
  },
  {
    avatar: <SiAdonisjs/>,
    star: [<RiStarSFill/>, <RiStarSFill/>],
    description: 'O AdonisJS é um framerwork para Node.js que surgiu para trazer facilidades ao desenvolvedor incluindo padrões de estruturação do projeto.'
  }, 
  {
    avatar: <SiPython/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte'
  },
  {
    avatar: <SiMysql/>,
    star: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>],
    description: 'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface'
  },
  {
    avatar: <DiMongodb/>,
    star: [<RiStarSFill/>, <RiStarSFill/>],
    description: 'MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma'
  },
  {
    avatar: <SiPrisma/>,
    star: [<RiStarSFill/>, <RiStarSFill/>],
    description: 'Prisma é uma ferramenta open source, um ORM de próxima geração cuja arquitetura é desenhada em três camadas fundamentais: Prisma Client: um construtor de queries gerado automaticamente e type-safe para Node. js e TypeScript'
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Venha Ver As Minhas</h5>
      <h2>Skills</h2>

        <Swiper className="container experience_container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          {
            data.map(({avatar, star, description}, index) => {
              return (
                <SwiperSlide key={index} className='experience'>

                  <h3>Frontend Development</h3>

                  <div className="experience_icons">
                    {avatar}
                  </div>
                  <div className="stars">
                    {star}
                  </div>
                  <small className='icon_description'>{description}</small>
                </SwiperSlide>
              )
            })
          } 
        </Swiper>

        <Swiper className="container experience_container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
          {
            data2.map(({avatar, star, description}, index) => {
              return (
                <SwiperSlide key={index} className='experience'>

                  <h3>Backend Development</h3>

                  <div className="experience_icons">
                    {avatar}
                  </div>
                  <div className="stars">
                    {star}
                  </div>
                  <small className='icon_description'>{description}</small>
                </SwiperSlide>
              )
            })
          } 
        </Swiper>
    </section>
  )
}

export default Experience