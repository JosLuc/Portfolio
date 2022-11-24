import React from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Bem Vindo, me chamo</h5>
        <h1>Lucas Andrade</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Lucas Andrade" />
        </div>

        <a href="#contact" className="scroll_down">Desça o Scroll</a>
      </div>
    </header>
  )
}

export default Header