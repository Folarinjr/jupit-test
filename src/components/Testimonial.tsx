import React from "react";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "Femi Jupit",
    avatar: "IMG 1",
    title: "All your crypto in one place",
    desc: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
  },
  {
    id: 2,
    name: "Eli Jupit",
    avatar: "IMG 1",
    title: "All your crypto in one place",
    desc: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
  },
  {
    id: 3,
    name: "Peter Jupit",
    avatar: "IMG 1",
    title: "All your crypto in one place",
    desc: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
  },
  {
    id: 4,
    name: "David Jupit",
    avatar: "IMG 1",
    title: "All your crypto in one place",
    desc: "We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-container">
      <div className="blank"></div>
      <div className="testimonial-header-container">
        <h2>See what our users' say about us</h2>
        <p>
          This testimonies and much more; join us so we can hear your
          testimonies too
        </p>
      </div>
      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, title, avatar, desc }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__image">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{title}</small>
              <small className="client__review">{desc}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
