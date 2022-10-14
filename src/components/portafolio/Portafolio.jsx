import React from 'react';
import './portafolio.css';


const Portafolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
          </div>
          <h3>Title</h3>
          <a href='' className='btn' target='_blank'>Github</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo </a>
        </article>
      </div>
    </section>
  )
}


export default Portafolio