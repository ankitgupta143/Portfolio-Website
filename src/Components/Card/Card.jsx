import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) =>{
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <a href="https://www.w3schools.com/"><button className='c-button'>Learn More</button></a>
        
    </div>
  )
}

export default Card