import React from 'react';
import "./footer.css";
import fb from "../../assets/Group 99.png"
import liknkedIn from "../../assets/Group 100.png"
import insta from "../../assets/Group 105.png"
import footerBanner from "../../assets/Group 225.png"

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-1">
            <img src={footerBanner} alt="banner footer" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repellat nisi enim est suscipit sequi?</p>
            <h4>&copy; Copyright 2020 Nature</h4>
         </div>
         <div className="footer-2">
            <h3>Information</h3>
            <ul className="footer-menu-box">
               <li className="footer-menu">About Us</li>
               <li className="footer-menu">Products</li>
               <li className="footer-menu">Contact Us</li>
               <li className="footer-menu">Terms of Service</li>
            </ul>
         </div>
         <div className="footer-3">
            <ul className="footer-menu-box">
               <li className="footer-menu">About Us</li>
               <li className="footer-menu">Products</li>
            </ul>
         </div>
         <div className="footer-4">
            <h3>Follow Us</h3>
            <div className="social">
               <img src={fb} alt="fb" />
               <img src={liknkedIn} alt="linkedIn" />
               <img src={insta} alt="insta" />
            </div>
         </div>
      </div>
   )
}

export default Footer
