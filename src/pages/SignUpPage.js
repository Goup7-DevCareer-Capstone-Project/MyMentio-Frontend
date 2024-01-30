import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";
import GetStartedText from "../components/GetStartedText";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onPasswordInputClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <HeaderNavbar
        headerNavbarPosition="sticky"
        headerNavbarTop="0"
        headerNavbarLetterSpacing="unset"
        headerNavbarFlex="unset"
        headerNavbarAlignSelf="stretch"
        ellipseIconMargin="0"
        frameDivMargin="0"
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
        onFrameButtonClick={onPasswordInputClick}
      />
      <GetStartedText />
    </div>
  );
};

export default SignUpPage;
