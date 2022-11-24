import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_psrv7wt', 'service_psrv7wt', form.current, 'Ntj0fqlir6HkYQEUH')
  }

  return (
    <section id='contact'>
      <h5>Entre em</h5>
      <h2>Contato Comigo</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>joslucsworkspace@outlook.com</h5>
            <a href="joslucsworkspace@outlook.com">Me envie uma mensagem</a>
          </article>

          <article className='contact_option'>
            <SiLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Lucas Andrade</h5>
            <a href="https://www.linkedin.com/in/lucas-andraden/">Me envie uma mensagem</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='Nome' placeholder='Digite seu nome' required/>
          <input type="email" name='email' placeholder='Digite seu email' required/>
          <textarea name="message" rows="7" placeholder='Digite sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Envie sua Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact