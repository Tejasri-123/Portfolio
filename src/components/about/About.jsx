import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FiAward } from 'react-icons/fi'
import { BsAward } from 'react-icons/bs'
// import {MdFolderCopy} from 'react-icons/md'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
        </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiAward className='about_icon' />
              <h5>Internships</h5>
              <small>Virtual Internship on DataScience by APSSDC IES <br/><br/>
                Virtual Internship on AICTE CyberSecurity<br/><br/>
                Tata virtual experience Internship on Data Visualization-Empowering Business with effective insights through forage</small>
            </article>

            

            <article className='about_card'>
              <  BsAward className='about_icon' />
              <h5>Certifications</h5>
              <small>Nvdia deepLearning,<br/>
                AI for Everyone-coursera,<br/>
                Ml classification& regression-coursera,<br/>
                PCAP programming essential in Python by CISCO Academy,
                Introduction to CyberSecurity by CISCO Academy,<br/>
                
                Kaggle cerifications:Python,Pandas,Data Visualization,Data Cleaning,Intro to Machine Learning,Intermediate Machine Learning,Intro
                to SQL,Intro to Deep Learning,
                
              </small>
            </article>
          </div>
          <p>
          Looking for a role in an organization or a project, which provides
  opportunities to enhance my skills and expand my knowledge
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
