import React from 'react';
import leaf from "../../../assets/Group 114.png";
import whitecard from "../../../assets/Group 207.png";
import bluecard from "../../../assets/Group 205.png";
import "./section2.css";

const Section2 = () => {
   return (
      <div className="section2" id="Products">
         <img className="section2-leaf" src={leaf} alt="leaf" />
         <h1 className="section2-heading">Welcome to Nature</h1>
         <p className="section2-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
         <div className="section2-cards-box">
            <img className="section2-card" src={whitecard} alt="card1" />
            <img className="section2-card" src={bluecard} alt="card2" />
            <img className="section2-card" src={whitecard} alt="card3" />
            <img className="section2-card" src={whitecard} alt="card4" />
         </div>

      </div>
   )
}

export default Section2;
