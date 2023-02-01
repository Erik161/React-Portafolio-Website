import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>

        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>erikestuardo_161@hotmail.com</h5>
            <a href='mailto:erikestuardo_161@hotmail.com' target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenguer</h4>
            <h5>Erik Hernández</h5>
            <a href='https://m.me/erik.hernandez' target="_blank">Send a message</a>
          </article>


          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>erikestuardo_161@hotmail.com</h5>
            <a href='https://api.whatsapp.com/send?phone=50236074761' target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form action=''>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact