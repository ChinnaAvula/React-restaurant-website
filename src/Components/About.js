import React from 'react'
import Image from '../Images/BackgroundImage3.jpeg'
import '../Styles/About.css'

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{background:`url(${Image})`}}>alkslhf</div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>
            Welcome to TasteAdventure, where we bring the taste of Indian dishes to your table. Our restaurant is a family-owned and operated business that has been serving the community for 2 years. We pride ourselves on using only the freshest ingredients and traditional cooking techniques to create delicious and authentic dishes.

            Our menu features a wide variety of favorites. We also offer a selection of vegetarian and gluten-free options to accommodate all diners.

            Our chefs have many years of experience in the culinary field, and have honed their skills to bring you the best of great dishes

            In addition to our dine-in service, we also offer takeout and catering for all your special events.

            We invite you to come and experience the delicious flavors of Indian dishes at TasteAdventure. Our friendly staff and cozy atmosphere will make you feel right at home.

            Thank you for choosing TasteAdventure!   

            </p>
        </div>

    </div>
  )
}

export default About