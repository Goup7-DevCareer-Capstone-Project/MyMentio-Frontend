import { useMemo } from "react";
import FrameComponent from "./FrameComponent";
import "./HeaderNavbar.css";

const HeaderNavbar = ({
  ellipse1,
  headerNavbarPosition,
  headerNavbarTop,
  headerNavbarLetterSpacing,
  headerNavbarFlex,
  headerNavbarAlignSelf,
  ellipseIconMargin,
  frameDivMargin,
  homeTextDecoration,
  blogsTextDecoration,
  aboutUsTextDecoration,
  contactUsTextDecoration,
  fAQsTextDecoration,
  loginbuttonframeBorder,
  loginbuttonframeBackgroundColor,
  logInTextDecoration,
  logInDisplay,
  loginlabelandinputBorder,
  onFrameButtonClick,
}) => {
  const headerNavbarStyle = useMemo(() => {
    return {
      position: headerNavbarPosition,
      top: headerNavbarTop,
      letterSpacing: headerNavbarLetterSpacing,
      flex: headerNavbarFlex,
      alignSelf: headerNavbarAlignSelf,
    };
  }, [
    headerNavbarPosition,
    headerNavbarTop,
    headerNavbarLetterSpacing,
    headerNavbarFlex,
    headerNavbarAlignSelf,
  ]);

  const myMentioStyle = useMemo(() => {
    return {
      margin: ellipseIconMargin,
    };
  }, [ellipseIconMargin]);

  const frameDivStyle = useMemo(() => {
    return {
      margin: frameDivMargin,
    };
  }, [frameDivMargin]);

  const homeStyle = useMemo(() => {
    return {
      textDecoration: homeTextDecoration,
    };
  }, [homeTextDecoration]);

  const blogsStyle = useMemo(() => {
    return {
      textDecoration: blogsTextDecoration,
    };
  }, [blogsTextDecoration]);

  const aboutUsStyle = useMemo(() => {
    return {
      textDecoration: aboutUsTextDecoration,
    };
  }, [aboutUsTextDecoration]);

  const contactUsStyle = useMemo(() => {
    return {
      textDecoration: contactUsTextDecoration,
    };
  }, [contactUsTextDecoration]);

  const fAQsStyle = useMemo(() => {
    return {
      textDecoration: fAQsTextDecoration,
    };
  }, [fAQsTextDecoration]);

  const loginbuttonframeStyle = useMemo(() => {
    return {
      border: loginbuttonframeBorder,
      backgroundColor: loginbuttonframeBackgroundColor,
    };
  }, [loginbuttonframeBorder, loginbuttonframeBackgroundColor]);

  const logInStyle = useMemo(() => {
    return {
      textDecoration: logInTextDecoration,
      display: logInDisplay,
    };
  }, [logInTextDecoration, logInDisplay]);

  const loginlabelandinputStyle = useMemo(() => {
    return {
      border: loginlabelandinputBorder,
    };
  }, [loginlabelandinputBorder]);

  return (
    <header className="header-navbar" style={headerNavbarStyle}>
      <section className="header-navbar-child" />
      <FrameComponent />
      <div className="header-navbar-inner">
        <div className="home-parent" style={frameDivStyle}>
          <div className="home" style={homeStyle}>
            Home
          </div>
          <div className="blogs" style={blogsStyle}>
            Blogs
          </div>
          <div className="about-us" style={aboutUsStyle}>
            About Us
          </div>
          <div className="contact-us" style={contactUsStyle}>
            Contact Us
          </div>
          <div className="faqs" style={fAQsStyle}>
            FAQs
          </div>
        </div>
      </div>
      <div className="logininputframe">
        <div className="loginbuttonframe" style={loginbuttonframeStyle}>
          <div className="log-in" style={logInStyle}>
           Log in 
          </div>
        </div>
        <div
          className="loginlabelandinput"
          style={loginlabelandinputStyle}
          onClick={onFrameButtonClick}
        >
          <div className="get-started">{`Get started `}</div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavbar;
