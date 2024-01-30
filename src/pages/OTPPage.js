import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";
import VerificationCodeFrame from "../components/VerificationCodeFrame";
import "./OTPPage.css";

const OTPPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="otp-page">
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
        onFrameButtonClick={onFrameButtonClick}
      />
      <div className="timer-wrapper">
        <div className="timer">
          <div className="resend-o-p-t">
            <div className="otp-has-been-container">
              <span>
                <span>OTP has been sent to</span>
              </span>
              <span>
                <span>{` `}</span>
              </span>
              <span className="capstonealtgmailcom">
                <span>CapstoneAlt@gmail.com</span>
                <span className="span">{` `}</span>
              </span>
            </div>
          </div>
          <VerificationCodeFrame
            verificationCode="OTP"
            resendCode="Resend OPT  "
            propPadding="0px 52px 0px var(--padding-base)"
            propPadding1="var(--padding-3xs) var(--padding-8xs) var(--padding-3xs) var(--padding-4xs)"
          />
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
