import React, { useEffect, useState } from "react";

import "./navbar.css";
import logo from "../../assets/Ellipse 1.png";
import { Link, json, useNavigate } from "react-router-dom";
// import { click } from "@testing-library/user-event/dist/click";
import { Button } from "../Button/button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const regobj = localStorage.getItem("username");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    let username = localStorage.getItem("username");

    // const regobj = JSON.stringify(localStorage.getItem("id"));
    if (username === "" || username === null) {
      localStorage.clear();
      navigate("/");
    }
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <div>
      {regobj ? (
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
                <Link
                  to="/login"
                  className="btnPrimary"
                  id="logout"
                  onClick={logout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
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
              <li className="">
                <div className=" dropdown ">
                  <Link className="dropbtn btnPrimary ">Login</Link>

                  <div className="dropdown-content">
                    <Link
                      to="/login"
                      className="btnPrimary "
                      onClick={closeMobileMenu}
                    >
                      Patient
                    </Link>
                    <Link
                      to="/login2"
                      className="btnPrimary"
                      onClick={closeMobileMenu}
                    >
                      Therapist
                    </Link>
                  </div>
                </div>
              </li>

              <li>
                <div className="dropdown">
                  <Link className="dropbtn btnSecondary" navLink>
                    Get Started
                  </Link>

                  <div className="dropdown-content">
                    <Link
                      to="/getStarted"
                      className="btnPrimary "
                      onClick={closeMobileMenu}
                    >
                      Patient
                    </Link>
                    <Link
                      to="/getStarted2"
                      className="btnPrimary"
                      onClick={closeMobileMenu}
                    >
                      Therapist
                    </Link>
                  </div>
                </div>

                {/* {button && <Button className="Children">Get started</Button>} */}
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};
export default Navbar;
