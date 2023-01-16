import React from 'react'
import {Link}from 'react-router-dom'
import Background from '../Images/BackgroundImage3.jpeg'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className="home"  style={{backgroundImage: `url(${Background})`}}>
      <div className="headerContainer">
        <h1>TasteAdventure</h1>
        <p>Where every meal is a culinary journey</p>
        <Link to="/Menu">
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
