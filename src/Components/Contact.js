import React from 'react'
import Image from '../Images/BackgroundImage3.jpeg'
import '../Styles/Contact.css'

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{background:`url(${Image})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method='POST'>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" placeholder="Enter your full name"/>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" placeholder="Enter your email"/>
                <label htmlFor="message">Your message</label>
                <textarea rows="6" name="message" required>
                </textarea>
                <button type="submit">send message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact