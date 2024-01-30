import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./PasswordResetFrame.css";

const PasswordResetFrame = () => {
  return (
    <form className="password-reset-frame" id="Continueid">
      <div className="password-reset1">Password Reset</div>
      <div className="enter-your-email-text">
        <Form className="to-reset-text">
          <Form.Control
            type="email"
            name="Enter your Email"
            id="EnteryourEmailid"
            defaultValue="Enter your Email"
            placeholder="Enter your Email"
          />
        </Form>
        <div className="to-reset-you">
          To reset you password we’ll send a verification code to the email
          address associated with your account.
        </div>
      </div>
      <Button
        className="continue-button"
        name="Continue"
        id="Continueid"
        variant="outline-primary"
        href="/otp-page"
      >
        Continue
      </Button>
    </form>
  );
};

export default PasswordResetFrame;
