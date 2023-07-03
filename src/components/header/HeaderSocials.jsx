import React from 'react'
import { BsLinkedin,BsGithub,BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
          <a href="https://www.linkedin.com/in/masina-tejasri/" target="_blank"><BsLinkedin/></a>
          <a href="https://github.com/Tejasri-123" target="_blank"><BsGithub/></a>
          <a href="https://instagram.com" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials
