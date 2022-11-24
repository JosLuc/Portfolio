/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Lucas Andrade</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre Mim</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </footer>
  )
}

export default Footer