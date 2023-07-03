import React from 'react'
import './Footer.css'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import {BsLinkedin,BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
        <a href="https://instagram.com " target="_blank "><AiFillInstagram /></a>
        <a href="https://www.linkedin.com/in/masina-tejasri/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/Tejasri-123" target="_blank"><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Tejasri Masina.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
