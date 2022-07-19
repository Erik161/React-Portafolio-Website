import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from  'react-icons/bs';
import {BsBehance} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/erikhern%C3%A1ndez161/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Erik161' target="_blank"><BsGithub/></a>
        <a href='https://www.behance.net/erikhernandez161' target="_blank"><BsBehance/></a>
    </div>
  )
}

export default HeaderSocials