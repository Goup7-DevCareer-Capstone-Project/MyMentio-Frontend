import { Link } from "react-router-dom";
import "./LoginFormContainer1.css";

const LoginFormContainer1 = ({
  pagePath,
  userId1,
  pageTitle,
  onContinueTextClick,
}) => {
  return (
    <div className="reset-email-text-parent">
      <button className="reset-email-text">
      <Link className="log-in3" id={userId1} to={pagePath}>
          Log in
        </Link>
      </button>
      <button className="continue-text" onClick={onContinueTextClick}>
        <div className="get-started2">{`Get started `}</div>
      </button>
    </div>
  );
};

export default LoginFormContainer1;
