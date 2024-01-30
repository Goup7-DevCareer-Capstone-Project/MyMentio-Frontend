import Headernavbar1 from "../components/Headernavbar1";
import VerificationCodeFrame from "../components/VerificationCodeFrame";
import "./VerificationPage.css";

const VerificationPage = () => {
  return (
    <div className="verification-page">
      <Headernavbar1 />
      <div className="verification-page-inner">
        <div className="frame-parent">
          <div className="an-email-has-been-sent-to-caps-wrapper">
            <div className="an-email-has-container">
              <span>
                <span>An email has been sent to</span>
                <span>{` `}</span>
              </span>
              <span className="capstonealtgmailcom1">
                <span>CapstoneAlt@gmail.com</span>
                <span className="span1">{` `}</span>
              </span>
            </div>
          </div>
          <VerificationCodeFrame
            verificationCode="Verification Code "
            resendCode="Resend Code  "
            propPadding="0px var(--padding-base)"
            propPadding1="var(--padding-3xs) var(--padding-9xs) var(--padding-3xs) var(--padding-4xs)"
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
