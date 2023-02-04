import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>

        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Interface Design (UI Design) </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>interactive prototyping </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Testing </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>User experience analysis (UX Analysis) </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Usability Optimization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand integration (Brand Integration)</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Maintenance and updating of front-end applications existing.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of databases in applications </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementation of routes and routers in applications </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Component Implementation </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of APIs and data in applications </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementation of responsive design </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}


        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creation of images and graphics</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>video creation </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creation of content for social networks </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Editing and review of existing content</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content SEO Optimization </p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Development of content strategies</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services