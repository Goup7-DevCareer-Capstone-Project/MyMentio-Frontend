import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "./HeaderNavbar";
import "./Headernavbar1.css";

const Headernavbar1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <header className="headernavbar">
      <HeaderNavbar
        ellipse1="/ellipse-1@2x.png"
        headerNavbarPosition="relative"
        headerNavbarTop="unset"
        headerNavbarLetterSpacing="unset"
        headerNavbarFlex="1"
        headerNavbarAlignSelf="unset"
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
        onFrameButtonClick={onFrameButtonClick}
      />
    </header>
  );
};

export default Headernavbar1;
