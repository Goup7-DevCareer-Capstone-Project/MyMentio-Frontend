import { useCallback } from "react";
import HeaderNavigation from "../components/HeaderNavigation";
import { useNavigate } from "react-router-dom";
import "./PasswordConfirmationPage.css";

const PasswordConfirmationPage = () => {
  const navigate = useNavigate();

  const onPasswordConfirmationClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="password-confirmation-page">
      <HeaderNavigation />
      <section className="parent-frame-create-password">
        <form className="confirm-password-frame" id="resetpasswordid">
          <div className="create-password-frame-group">
            <div className="create-password">CREATE PASSWORD</div>
            <input
              className="enter-password-input"
              name="Password"
              id="Passwordid"
              placeholder="Password"
              type="password"
            />
            <div className="confirm-password">CONFIRM PASSWORD</div>
            <input
              className="enter-password-input1"
              name="Re-Enter Password"
              id="Re-EnterPasswordid"
              placeholder="Re-Enter Password"
              type="password"
            />
          </div>
          <button
            className="password-confirmation"
            id="Resetpasswordid"
            onClick={onPasswordConfirmationClick}
          >
            <div className="reset-password">RESET PASSWORD</div>
          </button>
        </form>
      </section>
    </div>
  );
};

export default PasswordConfirmationPage;
