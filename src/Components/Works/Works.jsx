import React from 'react'
import './Works.css'
import Html from "../../img/html.png"
import CSS from "../../img/css-img.png"
import Front from "../../img/front-boy.png"
import Javascript from "../../img/java-img.png"
import Reactimg from "../../img/react-img.png"
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Works = () => {

  const transition = {duration : 1, type: 'spring'}
  const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

  return (
    <div className="works">
         <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>What Skills I Have</span>
        <span>My Experience</span>
        <span>
          I used to do everyday learning all concepts of frontend development so 
          that I enhance my knowledge.
          <br />
          I learned HTML and Bootstrap at Experience level.
          <br/>
          and Reactjs, Javascript and CSS at Intermediate level.
          <br/>
          and also basic knowledge of backend Development.
        </span>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <motion.div 
         initial={{rotate: 45}}
         whileInView={{rotate: 0}}
         viewport={{margin: '-40px'}}
         transition={{duration: 3.5, type: 'spring'}}
        className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Html} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={CSS} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Front} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Javascript} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Reactimg} alt="" />
            </div>
        </motion.div>
        {/* Background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
