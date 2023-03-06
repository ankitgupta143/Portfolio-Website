import React from 'react'
import './Contact.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
// import emailjs from '@emailjs/browser';

const Contact = () => {


  const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode


//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     };
  return (
    <div>
      <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>
        
        <div className="c-right">
            <form>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value='Send' className='button' />
                <div className="blur c-blur1" style={{background: "var(--purple)"}}>
            
        </div>
            </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
