import { useMemo } from "react";
import "./VerificationCodeFrame.css";

const VerificationCodeFrame = ({
  verificationCode,
  resendCode,
  propPadding,
  propPadding1,
}) => {
  const sixFramesStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const didntReceiveCodeTextStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <form className="verification-code-frame" id="verifyid">
      <div className="email-sent-frame">
        <div className="verification-code">{verificationCode}</div>
      </div>
      <div className="four-frames">
        <div className="five-frames">
          <div className="six-frames" style={sixFramesStyle}>
            <div className="seven-frames">
              <input className="eight-frames" type="text" />
              <input className="eight-frames1" type="text" />
              <input className="eight-frames2" type="text" />
              <input className="eight-frames3" type="text" />
              <input className="eight-frames4" type="text" />
            </div>
          </div>
          <div className="nine-frames">
            <div className="mins-left">50 mins left</div>
          </div>
          <div className="resend-code-text">
            <button
              className="didnt-receive-code-text"
              id="resendid"
              style={didntReceiveCodeTextStyle}
            >
              <b className="resend-code">{resendCode}</b>
            </button>
            <div className="send-frame">
              <div className="didnt-receive-a">{`Didn’t receive a code?  `}</div>
            </div>
          </div>
        </div>
        <div className="log-in-text">
          <a className="send-sms" id="SendSms">
            Send Sms
          </a>
        </div>
      </div>
    </form>
  );
};

export default VerificationCodeFrame;
