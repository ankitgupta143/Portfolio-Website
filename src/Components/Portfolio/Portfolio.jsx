import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Calc from "../../img/calc-img.webp" 
import List from "../../img/to-do-list.jpg" 
import Dino from "../../img/dino-game.webp"
import Pizza from "../../img/Pizza-landing.avif"
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
      <div className="portfolio" id='Portfolio'>
        {/* heading */}
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>


        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
            <img src={Calc} alt="" />
            <a href="https://github.com/ankitgupta143/Calculator-React" target='_blank'  className='btn'>Live Demo</a>
        
            </SwiperSlide>

            <SwiperSlide>
            <img src={List} alt=""/>
            <a href="https://github.com/ankitgupta143/react-to-do-list-project" target='_blank' className='btn'>Live Demo</a>
            </SwiperSlide>

            <SwiperSlide>
            <img src={Dino} alt="" />
            <a href="https://github.com/ankitgupta143/Dino-Game" target='_blank' className='btn'>Live Demo</a>
            </SwiperSlide>

            <SwiperSlide>
            <img src={Pizza} alt="" />
            <a href="https://github.com/ankitgupta143/Pizza-Hut-landing-page" target='_blank' className='btn'>Live Demo</a>
            </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default Portfolio
