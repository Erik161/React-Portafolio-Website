import React from 'react';
import './portafolio.css';
import IMG1 from '../../assets/port1.jpg';
import IMG2 from '../../assets/port2.jpg';
import IMG3 from '../../assets/port3.jpg';
import IMG4 from '../../assets/port4.jpg';
import IMG5 from '../../assets/port5.jpg';
import IMG6 from '../../assets/port6.jpg';



// DO NOT USE THE IMAGES IN PRODUCTION

const data =[
  {
    id:1,
    image:IMG1,
    title:'⚛️React|Tailwind| Website with Modern UI/UX|Fully Responsive',
    github:'https://github.com/Erik161/React-Tailwind-Website-with-Modern-UI-UX-Fully-Responsive',
    demo:'https://reacthoobanktailwindcss.vercel.app/',
  },

  {
    id:2,
    image:IMG2,
    title:'⚛️REACT Music App Landing Page |Tailwindcss |framer-motion 🔥',
    github:'https://github.com/Erik161/ReactMusicAppLandingPage',
    demo:'https://erik161.github.io/ReactMusicAppLandingPage/',
  },

  {
    id:3,
    image:IMG3,
    title:'🔮Responsive Landing Page HeadPhones HTML | SASS |JAVASCRIPT | Mobile First',
    github:'https://github.com/Erik161/Responsive-Landing-Page-Headphones',
    demo:'https://erik161.github.io/Responsive-Landing-Page-Headphones/#',
  },


  {
    id:4,
    image:IMG4,
    title:'⚛️REACT E-COMMERCE |Redux|Vite|Tailwindcss|Vercel|Formik 🔥',
    github:'https://github.com/Erik161/airman-project',
    demo:'https://airman-project.vercel.app/',
  },

  
  {
    id:5,
    image:IMG5,
    title:'🔮Responsive Product Card Landing Page HTML|SASS|JAVASCRIPT | Mobile First',
    github:'https://github.com/Erik161/Responsive-Product-Card-HTML-CSS-JS',
    demo:'https://erik161.github.io/Responsive-Product-Card-HTML-CSS-JS/',
  },


  
  {
    id:6,
    image:IMG6,
    title:'🔮Product-Card Responsive | HTML | CSS | MOBILE FIRST|',
    github:'https://github.com/Erik161/Product-Card-HTML-CSS',
    demo:'https://erik161.github.io/Product-Card-HTML-CSS/',
  },

 
]




const Portafolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
            })}
      </div>
    </section>
  )
}




export default Portafolio


