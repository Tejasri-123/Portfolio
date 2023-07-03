import React from 'react'
import './Nav.css'
import { AiFillHome,AiFillFolderOpen, AiOutlineUser } from 'react-icons/ai'

import { BiStar } from 'react-icons/bi'
import { BsFillBookFill } from 'react-icons/bs'
import { RiContactsFill } from 'react-icons/ri'

import {useState} from 'react'


const Nav = () => {
  const[activeNav,setActiveNav] = useState("#")
  return (
      <nav>
          <a href="#" className={activeNav === '#'?'active':''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
          <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiStar /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiFillFolderOpen /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFillBookFill /></a>
          <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsFill /></a>
    </nav>
      
  )
}

export default Nav
