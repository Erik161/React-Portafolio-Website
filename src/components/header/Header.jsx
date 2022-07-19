import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/erik.png';
import HeaderSocials from './HeaderSocials';



const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hola soy</h5>
        <h1>Erik Hernández López</h1>
        <h5 className='text-light' >Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/> 
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header