import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ButtonGoogle from "./ButtonGoogle";
import "./GetStartedText.css";

const GetStartedText = () => {
  return (
    <form className="get-started-text1">
      <div className="frame-container">
        <Form className="wrapper">
          <Form.Control
            type="text"
            name="Full Name"
            id="FullNameid"
            placeholder="Full Name"
          />
        </Form>
        <Form.Select className="age-dropdown-formselect" name="Age" id="Ageid">
          <option>Age</option>
          <option value="18-21years">18-21years</option>
          <option value="22-25years">22-25years</option>
          <option value="26-29years">26-29years</option>
          <option value="30Above">30Above</option>
        </Form.Select>
      </div>
      <div className="mental-health-dropdown-parent">
        <Form.Select
          className="mental-health-dropdown"
          name="Sex"
          id="Sexid"
          value="Sex"
        >
          <option>Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Select>
        <div className="frame-wrapper">
          <Form.Select
            className="hobbies-parent"
            id="Hobbiesid"
            value="Hobbies"
          >
            <option>Hobbies</option>
            <option value="Reading">Reading</option>
            <option value="Cooking">Cooking</option>
            <option value="Dancing">Dancing</option>
            <option value="Singing">Singing</option>
          </Form.Select>
        </div>
        <Form.Select
          className="mental-health-dropdown1"
          name="Mental Health Issues"
          id="Mentalid"
        >
          <option>Mental Health Issues</option>
          <option value="Depression">Depression</option>
          <option value="Frustration">Frustration</option>
          <option value="Illness">Illness</option>
          <option value="Panora">Panora</option>
        </Form.Select>
      </div>
      <div className="get-started-text-inner">
        <input
          className="frame-item"
          name="Email"
          id="Emailid"
          placeholder="Email"
          type="email"
        />
      </div>
      <div className="get-started-text-child">
        <input
          className="frame-inner"
          name="Password"
          id="Passwordid"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="sign-in-button">
        <div className="google-sign-in-button">
          <input
            className="reenter-password-label"
            id="Re-Enter password"
            placeholder="Re-Enter password"
            type="password"
          />
          <Button
            className="sign-up-with-google-label"
            name="Sign in"
            id="Sign id"
            variant="outline-primary"
            href="/verification-page"
          >
            Sign in
          </Button>
        </div>
        <ButtonGoogle />
      </div>
    </form>
  );
};

export default GetStartedText;
