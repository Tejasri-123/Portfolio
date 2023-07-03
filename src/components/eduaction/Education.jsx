import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { HiLibrary } from 'react-icons/hi' 
import { ImLocation } from 'react-icons/im'
import { MdGrade } from 'react-icons/md'
import './Education.css'
 
const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>
      
      <div className="container education__container">
        <article className='education'>
          <div className="education__head">
            <h3> <FaBookOpen /> Bacherlor of Technology</h3>
            </div>
            <ul className='education_list'>
            <li>
              <div className='side'>
                <HiLibrary className='education__list-icon' />
                <h4>Vishnu Institute of Technology</h4>
              </div>
              <div className='side text'>
                <ImLocation className='education__list-icon'/>
                <h5> Bhimavaram , Ap </h5>
              </div>
              <div className="text">
              <MdGrade className='education__list-icon' />
                <p>CGPA : 9.29 till now</p>
                </div>
              </li>
             </ul>
          
        </article>
        
        <article className='education'>
          <div className="education__head">
            <h3> <FaBookOpen/> Intermediate</h3>
            </div>
            <ul className='education_list'>
            <li>
              <div className='side'>
                <HiLibrary className='education__list-icon' />
                <h4>Narayana Junior College</h4>
              </div>
              <div className='side text'>
                <ImLocation className='education__list-icon'/>
                <h5> Rajahmundry,Ap </h5>
              </div>
              <div className="text">
              <MdGrade className='education__list-icon' />
                <p>CGPA : 10</p>
                </div>
              </li>
             </ul>
          
        </article>
        
        <article className='education'>
          <div className="education__head">
            <h3> <FaBookOpen/> Schooling</h3>
            </div>
            <ul className='education_list'>
            <li>
              <div className='side'>
                <HiLibrary className='education__list-icon' />
                <h4>Vikram Thakshasila Model School</h4>
              </div>
              <div className='side text'>
                <ImLocation className='education__list-icon'/>
                <h5> Gandepalli ,Ap </h5>
              </div>
              <div className="text">
              <MdGrade className='education__list-icon' />
                <p>CGPA : 10</p>
                </div>
              </li>
             </ul>
          
        </article>
        

       
        
    </div>
       
    </section>
  )
}

export default Education
