import React from 'react';
import './testimonials.css';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.jpg';
import avatar4 from '../../assets/avatar4.jpg';

//import Swiper core and required modules 
import {Pagination} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar:avatar1,
    name:'Tina Snow',
    review:'I was impressed by the quality of design in the apps you featured in your portfolio. Great attention to detail is noticeable in the user experience.'
  },

  {
    avatar:avatar2,
    name:'Shatta Wale',
    review:'They have shown a great ability to create attractive and easy-to-use user interfaces, using the latest technologies and trends in web design. Highly recommended.'
  },

  {
    avatar:avatar3,
    name:'Kwame Despite',
    review:'The ability to work with different technologies and adapt to the specific requirements of the project is a valuable skill that is reflected in the portfolio.'
  },

  {
    avatar:avatar4,
    name:'Nana Ama McBrown',
    review:'His capacity for collaboration and teamwork is reflected in the variety of projects in his portfolio and how he has worked with different design and development teams.'
  },
]




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={3}
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className="client__name">
                  {name}
                </h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials