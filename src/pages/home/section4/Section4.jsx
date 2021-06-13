import React from 'react';
import stem from "../../../assets/Group 134.png";
import coma from "../../../assets/Group 86.png";
import girl from '../../../assets/girl.png';
import './section4.css';

const Section4 = () => {
   return (
      <div className="section4">
         <img src={stem} alt="stem" />
         <img src={coma} alt="" />
         <img src={ girl } alt="girl" />
         <h2>Jane Doe</h2>
         <div className="section4-star-box">
            <div className="section4-star"><div className="star-inner"></div></div>
            <div className="section4-star"><div className="star-inner"></div></div>
            <div className="section4-star"><div className="star-inner"></div></div>
            <div className="section4-star"><div className="star-inner"></div></div>
            <div className="section4-star"><div className="star-inner"></div></div>
         </div>
         <p className="section4-desc">
            Thank you for all the amazing produce and products you deliver each week…
            you make my life so easy an bring goodness into our family eating.
            I’ve been roasting a lot of brussel sprouts and
         </p>
         <div className="section4-points">
            <div className="section4-point sect4-pt-blue"></div>
            <div className="section4-point"></div>
            <div className="section4-point"></div>
            <div className="section4-point"></div>
         </div>
         <h1>Subscribe to Our Newsletter</h1>
         <p className="section4-desc2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
         </p>
         <div className="section4-bottom">
            <p>Enter your email address</p>
            <button>Subscribe</button>
         </div>
      </div>
   )
}

export default Section4;
