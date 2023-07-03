import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div>
                <h4>HTML</h4>
                </div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>CSS</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>JavaScript</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div><h4>React Framework</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>Node JS</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>Mongo DB</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div><h4>SQL</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>Django Framework</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            
          </div>
        </div>
        
        <div className="skills__ml">
          <h3>Machine Learning and Deep Learning</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div><h4>Classification Algorithms</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div><h4>Regression Algorithms</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
             <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon '/>
              <div><h4>Perceptron</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>NLP Basics</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            
          </div>
        </div>

        <div className="skills__languages">
          <h3>Programming languages</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4> Core Java</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div><h4>Python</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill  className='skills__details-icon'/>
              <div><h4>C</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            
          </div>
        </div>
        
        
            <div className="skills__languages">
          <h3>Course work</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div><h4>OOPS</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon' />
              <div><h4>OS</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>DBMS</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
          </div>
        </div>


        
        <div className="skills__softskills">
          <h3>Softskills</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>Empathetic</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>Adaptability</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>

            <article className='skills__details'>
              <BsPatchCheckFill className='skills__details-icon'/>
              <div><h4>Time Management</h4></div>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            </div>
            </div>
        

            
          
        
        
        
      </div>
    </section>
  )
}

export default Skills
