import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Ellipse 1.png";
import { Link } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
import { Button } from "../Button/button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <nav id="nav">
      <div className="navLogo">
        <img src={logo} alt="/logo" />
        <p className="siteName">MyMentio</p>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
      </div>
      <div className="navList">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="navItem">
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMobileMenu}
              className="navLink"
            >
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMobileMenu}
              className="navLink"
            >
              Blog
            </Link>
          </li>
          <li className="navItem">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMobileMenu}
              className="navLink"
            >
              {" "}
              About Us
            </Link>
          </li>
          <li className="navItem">
            <Link
              activeClass="active"
              to="contactUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMobileMenu}
              className="navLink"
            >
              Contact Us
            </Link>
          </li>
          <li className="navItem">
            <Link
              activeClass="active"
              to="FAQs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMobileMenu}
              className="navLink"
            >
              FAQs
            </Link>
          </li>
          <li className="navItem">
            <Link to="/logIn" className="btnPrimary" onClick={closeMobileMenu}>
              Log in
            </Link>
          </li>
        </ul>
        
        {button && <Button buttonStyle="btnSecondary">Get started</Button>}
       
      </div>
    </nav>
  );
};
export default Navbar;
