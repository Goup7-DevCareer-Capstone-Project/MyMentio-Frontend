import React from "react";
import logo from "../../assets/Ellipse 1.png";
import "./footer.css";
import { Link } from "react-router-dom";

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
          <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37246 0 0 5.37267 0 11.9998C0 18.6274 5.37246 24 12 24C18.6271 24 24 18.6274 24 11.9998C24 5.37267 18.6271 0 12 0ZM15.1604 9.29728L14.9887 11.4507H12.6993V18.9323H9.80737V11.4507H8.26394V9.29728H9.80737V7.85002C9.80737 7.21333 9.82411 6.22895 10.3043 5.61941C10.8103 4.97492 11.5053 4.53667 12.6993 4.53667C14.6454 4.53667 15.466 4.80369 15.466 4.80369L15.08 7.00927C15.08 7.00927 14.4372 6.82984 13.8369 6.82984C13.2367 6.82984 12.6993 7.03648 12.6993 7.61577V9.29728H15.1604Z" fill="black"/>
</svg>
</Link>
<Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.623 0 24 5.37703 24 12C24 18.623 18.623 24 12 24C5.37703 24 0 18.623 0 12C0 5.37703 5.37703 0 12 0ZM8.24827 18.744V9.37266H5.13277V18.744H8.24827ZM19.4805 18.744V13.3699C19.4805 10.4914 17.9436 9.1523 15.8941 9.1523C14.2415 9.1523 13.5013 10.0612 13.0868 10.6995V9.37266H9.97209C10.0134 10.2519 9.97209 18.744 9.97209 18.744H13.0868V13.5104C13.0868 13.2302 13.1069 12.9502 13.1895 12.75C13.4142 12.1905 13.9271 11.611 14.7877 11.611C15.9143 11.611 16.3656 12.4707 16.3656 13.7299V18.744H19.4805ZM6.71156 4.85391C5.64562 4.85391 4.9492 5.55469 4.9492 6.4732C4.9492 7.37236 5.62444 8.09245 6.67031 8.09245H6.69042C7.77675 8.09245 8.45292 7.37236 8.45292 6.4732C8.43277 5.55469 7.7768 4.85391 6.71156 4.85391Z" fill="black"/>
</svg></Link>
<Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.3072 4.41379C17.5298 4.41379 16.9028 5.04075 16.9028 5.81818C16.9028 6.59561 17.5298 7.22257 18.3072 7.22257C19.0846 7.22257 19.7116 6.59561 19.7116 5.81818C19.7116 5.04075 19.0846 4.41379 18.3072 4.41379ZM12.0376 6.21944C8.77743 6.21944 6.11912 8.87774 6.11912 12.1379C6.11912 15.3981 8.77743 18.0564 12.0376 18.0564C15.2978 18.0564 17.9561 15.3981 17.9561 12.1379C17.9561 8.87774 15.2978 6.21944 12.0376 6.21944ZM12.0376 15.9498C9.93103 15.9498 8.25078 14.2445 8.25078 12.163C8.25078 10.0564 9.95611 8.37618 12.0376 8.37618C14.1442 8.37618 15.8245 10.0815 15.8245 12.163C15.8245 14.2445 14.1191 15.9498 12.0376 15.9498ZM24 7.22257C24 3.23511 20.7649 0 16.7774 0H7.22257C3.23511 0 0 3.23511 0 7.22257V16.7774C0 20.7649 3.23511 24 7.22257 24H16.7523C20.7398 24 23.9749 20.7649 23.9749 16.7774V7.22257H24ZM21.7179 16.7524C21.7179 19.4859 19.4859 21.7179 16.7523 21.7179H7.22257C4.48903 21.7179 2.25705 19.4859 2.25705 16.7524V7.22257C2.25705 4.46395 4.46395 2.25705 7.22257 2.25705H16.7523C19.4859 2.25705 21.7179 4.48903 21.7179 7.22257V16.7524Z" fill="#333033"/>
</svg></Link>
<Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0005 0C5.37281 0 0 5.37378 0 12.0005C0 18.6282 5.37281 24 12.0005 24C18.6282 24 24 18.6282 24 12.0005C24 5.37378 18.6277 0 12.0005 0ZM18.0453 9.5809C18.0517 9.71053 18.0541 9.84064 18.0541 9.97222C18.0541 13.9688 15.0122 18.5765 9.44981 18.5765C7.7422 18.5765 6.15205 18.076 4.81384 17.2183C5.05068 17.2461 5.29094 17.2602 5.53509 17.2602C6.95224 17.2602 8.25634 16.7768 9.29094 15.9659C7.96784 15.941 6.85137 15.0663 6.46637 13.865C6.65059 13.9011 6.84016 13.9191 7.03509 13.9191C7.31092 13.9191 7.57797 13.883 7.83187 13.8134C6.44786 13.5356 5.40546 12.3124 5.40546 10.8484C5.40546 10.8353 5.40546 10.8226 5.40595 10.8095C5.81335 11.0361 6.27973 11.172 6.77583 11.1881C5.96394 10.6447 5.43031 9.72027 5.43031 8.67057C5.43031 8.11647 5.57943 7.59649 5.83967 7.1501C7.33138 8.97953 9.55994 10.1837 12.0736 10.3095C12.0219 10.0887 11.9951 9.85721 11.9951 9.62037C11.9951 7.95078 13.3489 6.59649 15.0195 6.59649C15.8894 6.59649 16.6749 6.96394 17.2266 7.55117C17.9157 7.41618 18.5629 7.16374 19.1472 6.81725C18.9206 7.52388 18.4415 8.11647 17.8168 8.49025C18.4293 8.41715 19.0122 8.25439 19.5541 8.01413C19.1496 8.62183 18.6365 9.15448 18.0453 9.5809Z" fill="black"/>
</svg></Link>

        </div>
      </div>
    </section>
  );
}

export default Footer;
