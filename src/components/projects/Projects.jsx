import React from 'react'
import './Projects.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'

const Services = () => {
  return (
    <section id="projects">
      <h5>What I did</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <article className='project'>
          <div className="project__head">
            <h3>Machine Learning</h3>
            </div>
            <ul className='project_list'>
            <li>
              <div className='side'>
                <AiFillCheckCircle className='project__list-icon' />
                <h4>Heart Failure prediction</h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon2' />
                <p>Perdicting the heart failure using machine learning algorithms-linear regression,decision tree and random forest</p>
                </div>
              </li>
              <li>
              <div className="side">
                <AiFillCheckCircle className='project__list-icon' />
                <h4>Sentiment Analysis</h4></div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>Sentiment analysis on the twitter and facebook data using NLP</p>
                </div>
              </li>
            </ul>
          
        </article>

        <article className='project'>
          <div className="project__head">
            <h3>Web Development</h3>
            </div>
            <ul className='project_list'>
              <li>
              <div className="side">
              <AiFillCheckCircle className='project__list-icon' />
                <h4>Portfolio Website</h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>Personal porfolio using React</p>
                </div>
              </li>
              <li>
              <div className="side">
              <AiFillCheckCircle className='project__list-icon' />
                <h4>Tinder HomePage </h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>Tinder Home page clone using React</p>
                </div>
              </li>
              <li>
              <div className="side">
              <AiFillCheckCircle className='project__list-icon' />
                <h4>Amazon Clone</h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>Amazon Ecommerce website using React</p>
                </div>
              </li>
              <li>
              <div className="side">
              <AiFillCheckCircle className='project__list-icon' />
                <h4>Todo App</h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>Todo app by using MERN stack</p>
                </div>
              </li>
              <li>
              <div className="side">
              <AiFillCheckCircle className='project__list-icon' />
                <h4>Quiz,Rock-paper-sissors,Tictactoe</h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>by using Js</p>
                </div>
              </li>
              <li>
              <div className="side">
              <AiFillCheckCircle className='project__list-icon' />
                <h4>CRUD</h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>crud operations by using express,node,mongodb</p>
                </div>
              </li>
              <li>
              <div className="side">
              <AiFillCheckCircle className='project__list-icon' />
                <h4>Blog</h4>
                </div>
              <div className="text">
              <BsArrowRightShort className='project__list-icon' />
                <p>Blog by using Django</p>
               </div>
              </li>
            </ul>
          
        </article>











      </div>
    </section>
  )
}

export default Services
