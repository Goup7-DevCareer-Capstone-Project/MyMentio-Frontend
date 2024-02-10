import React from "react";
import logo from "../../assets/Ellipse 1.png";
import "./footer.css";
import { Link } from "react-router-dom";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { fa-facebook} from '@fortawesome/free-solid-svg-icons'
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <section className="footer">
      <div className="footerLogo">
        <div>
          <h2> My Mentio</h2>
          <img src={logo} alt="logo" />
          <p>@2024 My Mentio</p>
        </div>
      </div>
      <div className="footerNav">
        <div>
          <h2>Navigation</h2>
          <ul>
            <li className="navItem">
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
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
                className="navLink"
              >
                {" "}
                About Us
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
                className="navLink"
              >
                FAQs
              </Link>
            </li>
            <li className="navItem">
              <Link to="/logIn" className="btnPrimary">
                Log in
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" className="btnPrimary">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerSupport">
        <div>
          <h2>Support</h2>

          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navLink"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="footerLegal">
        <div>
          <h2>Legal</h2>
          <Link to="/t&s">
            <p>Terms of service</p>
          </Link>
          <Link to="/policy">
            <p>Policy</p>
          </Link>
          <Link to="/privacy">
            <p>Privacy</p>
          </Link>
          <Link to="/search">
            <p>search</p>
          </Link>
          <Link to="/hobbies">
            <p>hobbies</p>
          </Link>
        </div>
      </div>
      <div className="footerSub">
        <div>
          <h3>Subscribe to our news letter</h3>
          <form action="/">
            <input type="email" name="email" id="email" placeholder="Email" />
            <button type="submit"> Subscribe</button>
          </form>
          <p>Follow Us</p>
          <Link to="/" className="icon">
            <FontAwesomeIcon icon="fa-brands fa-facebook" className="icon" />
          </Link>
          <Link to="/" className="icon">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" className="icon" />
          </Link>
          <Link to="/" className="icon">
            <FontAwesomeIcon icon="fa-brands fa-instagram" className="icon" />
          </Link>
          <Link to="/" className="icon">
            <FontAwesomeIcon icon="fa-brands fa-twitter" className="icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
library.add(fab, fas, far);
