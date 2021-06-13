import React from 'react';
import card1 from "../../../assets/Group 39.png";
import card2 from "../../../assets/Group 64.png";
import card3 from "../../../assets/Group 55.png";
import card4 from "../../../assets/Group 64.png";
import card5 from "../../../assets/Group 39.png";
import "./section3.css";

const Section3 = () => {
   return (
      <div className="section3">
         <h1 className="section3-heading">Proudly presented by</h1>
         <p className="section3-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
         <div className="section3-icons-box">
            <img className="section3-icon" src={card1} alt="icon1" />
            <img className="section3-icon" src={card2} alt="icon2" />
            <img className="section3-icon" src={card3} alt="icon3" />
            <img className="section3-icon" src={card4} alt="icon4" />
            <img className="section3-icon" src={card5} alt="icon5" />
         </div>
         <div className="section3-points">
            <div className="section3-point"></div>
            <div className="section3-point sect3-pt-blue"></div>
            <div className="section3-point"></div>
            <div className="section3-point"></div>
         </div>
      </div>
   )
}

export default Section3;
