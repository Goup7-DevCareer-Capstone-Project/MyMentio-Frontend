import React from "react";
import "./navbar.css";
import logo from "../../assets/Ellipse 1.png";
import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <nav id="nav">
      <div className="navLogo">
        <img src={logo} alt="/logo" />
        <p className="siteName">MyMentio</p>
      </div>
      <div className="navList">
        <ul>
          <li>
            <Link activeClass="active" to='/' spy={true} smooth={true} offset={-100} duration={500} className="navLink">Home</Link>
          </li>
          <li>
          <Link  activeClass="active" to='blog' spy={true} smooth={true} offset={-100} duration={500}  className="navLink">Blog</Link>
          </li>
          <li>
          <Link activeClass="active" to='ourServices' spy={true} smooth={true} offset={-100} duration={500} className="navLink"> About Us</Link>
          </li>
          <li>
          <Link activeClass="active" to='contactUs' spy={true} smooth={true} offset={-100} duration={500}  className="navLink">Contact Us</Link>
          </li>
          <li>
          <Link activeClass="active" to='FAQs' spy={true} smooth={true} offset={-100} duration={500}  className="navLink">FAQs</Link>
          </li>
        </ul>
      </div>
      <div className="navStatus">
        <button className="loginBtn"> Log in</button>
        <button className="getStartedBtn">Get started</button>
      </div>
    </nav>
  );
};
export default Navbar;
