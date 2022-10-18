import React from 'react';
import './portafolio.css';
import port1 from '../../assets/port1.jpg';


const Portafolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={port1} alt="" />
          </div>
          <h3>Title</h3>
          <a href='https://github.com/Erik161/ReactMusicAppLandingPage' className='btn' target='_blank'>Github</a>
          <a href='https://erik161.github.io/ReactMusicAppLandingPage/' className='btn btn-primary' target='_blank'>Live Demo </a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={port1} alt="" />
          </div>
          <h3>Title</h3>
          <a href='https://github.com/Erik161/ReactMusicAppLandingPage' className='btn' target='_blank'>Github</a>
          <a href='https://erik161.github.io/ReactMusicAppLandingPage/' className='btn btn-primary' target='_blank'>Live Demo </a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={port1} alt="" />
          </div>
          <h3>Title</h3>
          <a href='https://github.com/Erik161/ReactMusicAppLandingPage' className='btn' target='_blank'>Github</a>
          <a href='https://erik161.github.io/ReactMusicAppLandingPage/' className='btn btn-primary' target='_blank'>Live Demo </a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={port1} alt="" />
          </div>
          <h3>Title</h3>
          <a href='https://github.com/Erik161/ReactMusicAppLandingPage' className='btn' target='_blank'>Github</a>
          <a href='https://erik161.github.io/ReactMusicAppLandingPage/' className='btn btn-primary' target='_blank'>Live Demo </a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={port1} alt="" />
          </div>
          <h3>Title</h3>
          <a href='https://github.com/Erik161/ReactMusicAppLandingPage' className='btn' target='_blank'>Github</a>
          <a href='https://erik161.github.io/ReactMusicAppLandingPage/' className='btn btn-primary' target='_blank'>Live Demo </a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={port1} alt="" />
          </div>
          <h3>Title</h3>
          <a href='https://github.com/Erik161/ReactMusicAppLandingPage' className='btn' target='_blank'>Github</a>
          <a href='https://erik161.github.io/ReactMusicAppLandingPage/' className='btn btn-primary' target='_blank'>Live Demo </a>
        </article>
      </div>
    </section>
  )
}


export default Portafolio