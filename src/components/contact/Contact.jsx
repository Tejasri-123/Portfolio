import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>20pa1a5430@vishnu.edu.in</h5>
            <a href="mailto:20pa1a5430@vishnu.edu.in" target="_blank">Sent a message</a>

          </article>

        </div>
        <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          
        </form>

      </div>
      
    </section>
  )
}

export default Contact
