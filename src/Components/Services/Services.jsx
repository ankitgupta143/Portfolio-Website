import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from 'framer-motion'

const Services = () => {

  const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>
         I am Learning Programming Languages from last 2 years and I love with these languages.Along with that I am very fond of photoshop like editing the photos and videos.
          <br />
        Once I get a project, i will do my best on that project and I learned intermediate level of full stack development like Front-end, programming languages like Java,Pthon,C and C++.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>
      {/* Right side */}
      <div className="cards">
        <motion.div 
       whileInView={{left: '7rem'}}
        initial={{right: '-25%'}}
        transition={transition}
          
        style={{left: '14rem'}}>
            <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Photoshop, Adobe, Adobe xd, editing videos and photos"}
            />
        </motion.div>
        <motion.div 
        whileInView={{left: '-7rem'}}
        initial={{left: '-25%'}}
        transition={transition}
        style={{top: '12rem', left: '-4rem'}}>
            <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"Html, Css, Javascript, React, Basic node.js, Bootstrap "}
            />
        </motion.div>
        <motion.div 
         whileInView={{left: '9rem'}}
        initial={{right: '-25%'}}
        transition={transition}
        style={{top: '19rem', left: '12rem'}}>
            <Card
                emoji = {Humble}
                heading = {'Languages'}
                detail = {
                    "like C, C++, basics of java,python,Data structure and algorithm"
                    }
            />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}>
            
        </div>
      </div>
    </div>
  );
};

export default Services;
