import React from 'react';
import './header.css';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hola soy</h5>
        <h1>Erik Hernández López</h1>
        <h5 className='text-light' >Fullstack Developer</h5>
        <CTA/>
        <div className='me'>
          
        </div>
      </div>
    </header>
  )
}

export default Header