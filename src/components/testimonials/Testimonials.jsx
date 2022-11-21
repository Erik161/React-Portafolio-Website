import React from 'react';
import './testimonials.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
      
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="Avatar one" />
          </div>
          <h5 className="client__name">
            Karla Orozco
          </h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit nam aliquid possimus rerum! Nostrum placeat, quod a, iste vitae debitis atque fuga ex vero sint consectetur, nisi aspernatur voluptates.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar2} alt="Avatar one" />
          </div>
          <h5 className="client__name">
            Karla Orozco
          </h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit nam aliquid possimus rerum! Nostrum placeat, quod a, iste vitae debitis atque fuga ex vero sint consectetur, nisi aspernatur voluptates.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar3} alt="Avatar one" />
          </div>
          <h5 className="client__name">
            Karla Orozco
          </h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit nam aliquid possimus rerum! Nostrum placeat, quod a, iste vitae debitis atque fuga ex vero sint consectetur, nisi aspernatur voluptates.
          </small>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar4} alt="Avatar one" />
          </div>
          <h5 className="client__name">
            Karla Orozco
          </h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit nam aliquid possimus rerum! Nostrum placeat, quod a, iste vitae debitis atque fuga ex vero sint consectetur, nisi aspernatur voluptates.
          </small>
        </article>

      </div>

    </section>
  )
}

export default Testimonials