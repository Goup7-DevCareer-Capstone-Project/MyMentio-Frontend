import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";
import PasswordResetFrame from "../components/PasswordResetFrame";
import "./PasswordReset.css";

const PasswordReset = () => {
  const navigate = useNavigate();

  const onContinueTextClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="password-reset">
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
        loginbuttonframeBorder="none"
        loginbuttonframeBackgroundColor="transparent"
        logInTextDecoration="none"
        logInDisplay="inline-block"
        loginlabelandinputBorder="none"
        onFrameButtonClick={onContinueTextClick}
      />
      <PasswordResetFrame />
    </div>
  );
};

export default PasswordReset;
