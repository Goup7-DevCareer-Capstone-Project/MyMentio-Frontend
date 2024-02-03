import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";
import "./SuccessfulReset.css";

const SuccessfulReset = () => {
  const navigate = useNavigate();

  const onParentLogindGetstartedFrameClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  const onLoginFrameClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="successful-reset">
      <HeaderNavbar
        ellipse1="/ellipse-1@2x.png"
        headerNavbarPosition="sticky"
        headerNavbarTop="0"
        headerNavbarLetterSpacing="unset"
        headerNavbarFlex="unset"
        headerNavbarAlignSelf="stretch"
        ellipseIconMargin="unset"
        frameDivMargin="unset"
        homeTextDecoration="none"
        blogsTextDecoration="none"
        aboutUsTextDecoration="none"
        contactUsTextDecoration="none"
        fAQsTextDecoration="none"
        loginbuttonframeBorder="unset"
        loginbuttonframeBackgroundColor="unset"
        logInTextDecoration="none"
        logInDisplay="inline-block"
        loginlabelandinputBorder="none"
        onFrameButtonClick={onParentLogindGetstartedFrameClick}
      />
      <div className="parent-frame-for-confirmation-parent">
        <div className="parent-frame-for-confirmation">
          <div className="mdiclouddone-frame">
            <img className="mdicloud-done-icon" loading="eager" alt=" " />
            <div className="password-reset-successful">
              Password Reset Successful
            </div>
          </div>
        </div>
        <button
          className="login-frame"
          id="Loginid"
          onClick={onLoginFrameClick}
        >
          <div className="log-in1">Log in</div>
        </button>
      </div>
    </div>
  );
};

export default SuccessfulReset;
