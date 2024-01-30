import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import LoginFormContainer from "./LoginFormContainer";
import "./HeaderNavigation.css";

const HeaderNavigation = () => {
  const navigate = useNavigate();

  const onCreatePasswordFrameClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <header className="header-navbar1">
      <div className="rectangle-shape" />
      <FrameComponent myMentioMargin="unset" />
      <div className="text-frame-contact-us">
        <nav className="multi-frame-group">
          <a className="home1">Home</a>
          <a className="blogs1">Blogs</a>
          <a className="about-us1">About Us</a>
          <a className="contact-us1">Contact Us</a>
          <a className="faqs1">FAQs</a>
        </nav>
      </div>
      <LoginFormContainer
        logInId="Loginid"
        onParentLogindGetstartedFrameClick={onCreatePasswordFrameClick}
      />
    </header>
  );
};

export default HeaderNavigation;
