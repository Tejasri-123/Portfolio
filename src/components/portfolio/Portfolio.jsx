import React from 'react'
import './Portfolio.css'
import { GrAchievement } from 'react-icons/gr'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { MdInterests } from 'react-icons/md'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        
        <article className='portfolio'>
          <div className="portfolio__head">
          <h3><GrAchievement className='portfolio__list-icon2' />
            Achievements</h3>
            </div>
            <ul className='portfolio_list'>
            <li>
              
              <div className='side text'>
                <BsFillArrowRightSquareFill className='portfolio__list-icon'/>
                <h5 className='text'>Our team got Second in coding competetion in class</h5>
              </div>
              <div className='side text'>
                <BsFillArrowRightSquareFill className='portfolio__list-icon'/>
                <h5 className='text'>Our team got first in Quiz competetion in school level</h5>
              </div>
              
              </li>
             </ul>
          
        </article>
        
        <article className='portfolio'>
          <div className="portfolio__head">
          <h3><TbActivityHeartbeat className='portfolio__list-icon2'/> 
            Other Activities</h3>
            </div>
            <ul className='portfolio_list'>
            <li>
              
              <div className='side text'>
                <BsFillArrowRightSquareFill className='portfolio__list-icon'/>
                <h5 className='text'>volunteer for the deep racer in the college event</h5>
              </div>
              </li>
             </ul>
          
        </article>


        <article className='portfolio'>
          <div className="portfolio__head">
          <h3><MdInterests className='portfolio__list-icon2' />
             Interests</h3>
            </div>
            <ul className='portfolio_list'>
            <li>
              
              <div className='side text'>
                <BsFillArrowRightSquareFill className='portfolio__list-icon'/>
                <h5 className='text'>Reading books</h5>
              </div>

              <div className='side text'>
                <BsFillArrowRightSquareFill className='portfolio__list-icon'/>
                <h5 className='text' >Exploring new things</h5>
              </div>
              <div className='side text'>
                <BsFillArrowRightSquareFill className='portfolio__list-icon'/>
                <h5 className='text' >Drawing</h5>
              </div>
              </li>
             </ul>
          
        </article>


        </div>
        
      
    </section>
  )
}

export default Portfolio
