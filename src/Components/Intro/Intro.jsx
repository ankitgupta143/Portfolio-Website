import React from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import MyImg from '../../img/my-img.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesImoji from '../../img/glassesimoji.png'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'

const Intro = () => {
  const transition = {duration : 2, type: 'spring'}
  const theme = useContext(themeContext)
const darkMode = theme.state.darkMode
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}}>Hi!I Am</span>
          <span>Ankit Gupta</span>
          <span>
            {" "}
            Frontend Developer at intermediate level and gathering more and more
            information in extremely learning courses of full stack web development.
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href="https://github.com/ankitgupta143" target='_blank'><img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/in/ankit-gupta-77580b238/" target='_blank'><img src={LinkedIn} alt="" /></a>
            <a href="https://www.instagram.com/_ankit_100/" target='_blank'><img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={MyImg} alt="" />
        <motion.img
           initial = {{right: '-36%'}}
           whileInView = {{left: '17rem'}}
           transition={transition}
         src={glassesImoji} alt="" />
        <motion.div 
         initial = {{top: '-4%', right: '74%'}}
        whileInView = {{right: '68%'}}
        transition={transition}
        style={{top: '-4%', left: '-6%'}} 
        className="floating-div">
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div
          initial = {{right: '9rem', top: '19rem'}}
        whileInView = {{right: '6rem'}}
        transition={transition}
         style={{top: '19.4rem', left: '15rem'}}
         className="floating-div">
          <FloatingDiv image={thumbup} txt1 = 'Programming'  txt2='Skills'/>
        </motion.div>
        {/*blur div*/}
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur"
          style = {{
            background: '#C1f5ff',
            top: '16rem',
            width: '21rem',
            height: '11rem',
            left: '15rem'
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
