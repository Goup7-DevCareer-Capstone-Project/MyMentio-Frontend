import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/HeaderNavbar";
import ButtonGoogle from "../components/ButtonGoogle";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/sign-up-page");
  }, [navigate]);

  return (
    <div className="login-page">
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
        onFrameButtonClick={onLoginButtonClick}
      />
      <form className="signup-frame" id="Loginid" name="Login">
        <Form className="email-frame">
          <Form.Control
            type="email"
            name="Email"
            id="Emailid"
            placeholder="Email"
          />
        </Form>
        <div className="signup-buttons">
          <Form className="google-signup">
            <Form.Control
              type="password"
              name="Password"
              id="Passwordid"
              placeholder="Password"
            />
          </Form>
          <div className="login-button">
            <Button
              className="forget-password-link"
              name="Login"
              id="Loginid"
              variant="outline-primary"
              href="/user-dashboard"
            >
              Login
            </Button>
            <div className="email-input">
              <div className="google-logo-frame">
                <Link
                  className="forget-password"
                  id="ForgetPasswordid"
                  to="/password-reset"
                >
                  Forget Password?
                </Link>
                <div className="login-frame1">
                  <ButtonGoogle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
