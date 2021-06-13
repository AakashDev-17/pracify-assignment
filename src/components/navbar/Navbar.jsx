import React from 'react';
import "./navbar.css";
import logo from "../../assets/Group 220.png";

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navbar-left">
            <img className="navbar-logo" src={ logo } alt="company-name" />
            <div className="navbar-banner">organic</div>
         </div>
         <div className="navbar-right">
            <ul className="navbar-menu">
               <li className="navbar-menu-item navbar-menu-active">Home</li>
               <li className="navbar-menu-item"><a href="#Products">Products</a></li>
               <li className="navbar-menu-item"><a href="#Blog">Blog</a></li>
               <li className="navbar-menu-item">About Us</li>
               <li className="navbar-menu-item nav-menu-box">Contact</li>
            </ul>
         </div>
      </div>
   )
}

export default Navbar;
