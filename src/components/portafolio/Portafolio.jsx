import React from 'react';
import './portafolio.css';
import port1 from '../../assets/port1.jpg';



// DO NOT USE THE IMAGES IN PRODUCTION

const data =[
  {
    id:1,
    image:IMG1,
    title:'Proyect Landing Page',
    github:'https://github.com/Erik161/ReactMusicAppLandingPage',
    demo:'https://erik161.github.io/ReactMusicAppLandingPage/',
  },

  {
    id:2,
    image:IMG2,
    title:'Proyect Landing Page',
    github:'https://github.com/Erik161/ReactMusicAppLandingPage',
    demo:'https://erik161.github.io/ReactMusicAppLandingPage/',
  },

  {
    id:3,
    image:IMG3,
    title:'Proyect Landing Page',
    github:'https://github.com/Erik161/ReactMusicAppLandingPage',
    demo:'https://erik161.github.io/ReactMusicAppLandingPage/',
  },


  {
    id:4,
    image:IMG4,
    title:'Proyect Landing Page',
    github:'https://github.com/Erik161/ReactMusicAppLandingPage',
    demo:'https://erik161.github.io/ReactMusicAppLandingPage/',
  },

  
  {
    id:5,
    image:IMG4,
    title:'Proyect Landing Page',
    github:'https://github.com/Erik161/ReactMusicAppLandingPage',
    demo:'https://erik161.github.io/ReactMusicAppLandingPage/',
  },


  
  {
    id:6,
    image:IMG4,
    title:'Proyect Landing Page',
    github:'https://github.com/Erik161/ReactMusicAppLandingPage',
    demo:'https://erik161.github.io/ReactMusicAppLandingPage/',
  },

 
]




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
          <div className='portfolio__item-cta'>
            <a href='https://github.com/Erik161/ReactMusicAppLandingPage' className='btn' target='_blank'>Github</a>
            <a href='https://erik161.github.io/ReactMusicAppLandingPage/' className='btn btn-primary' target='_blank'>Live Demo </a>
          </div>
        </article> 
      </div>
    </section>
  )
}


export default Portafolio


