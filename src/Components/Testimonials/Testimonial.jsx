import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Mentor1 from "../../img/mentor-img.jpg";
import Mentor2 from "../../img/mentor-img2.jpg"
import {Pagination} from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {
  const clients = [
    {
      img: Mentor1,
      review:
        "Well-qualified  Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Collaborative team player with excellent technical abilities offering 1.5 years of related experience.",
    },
    {
      img: Mentor2,
      review:
        "Machine Learning Engineer and Data Analyst for building innovative products. He recently developed a web app using ReactJS, Djangoa nd AWS that lets Refugee's to report to our web app the problems they are facing in a disaster-struck area.",
    },
  ];
  return (
    <div>
      <div className="t-wrapper" id="Testimonials">
        <div className="t-heading">
          <span>I had learned</span>
          <span> web developmnet </span>
          <span>From my mentor</span>
          <div
            className="blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        {/* Slider */}
        <Swiper
        
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index) => {
                return (
                    <SwiperSlide key={index}>
                    <div className="testimonial">
                       <img src={client.img} alt="" />
                       <span>{client.review}</span>
                    </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
