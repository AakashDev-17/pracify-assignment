import React from 'react';
import "./section1.css";
import flower from '../../../assets/Group 195.png';
import icon from '../../../assets/Group 228.png';

const Section1 = () => {
   return (
      <div className="section1">
         <div className="section1-content">
            <div className="section1-left">
               <h2 className="section1-left-item">Healthy life with</h2>
               <h1 className="section1-left-item">Nature Organic</h1>
               <p className="section1-left-item">Vegetables are the edible parts of a plant
                  that is used in cooking or can be eaten now.</p>
               <button className="section1-left-item">Explore Now</button>
            </div>
            <div className="section1-right">
               <img className="section1-flower" src={flower} alt="flower" />
               <div className="section1-icon-box">
                  <div className="section1-icon-inside-box">
                     <img src={icon} alt="flower icon" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Section1;
