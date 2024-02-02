import { Link } from "react-router-dom";
import "./LoginFormContainer.css";

const LoginFormContainer = ({
  onParentLogindGetstartedFrameClick,
}) => {
  return (
    <div className="login-text">
      <div className="get-started-text">
        <Link className="log-in2" to="/login-page">
          Log in
        </Link>
      </div>
      <button
        className="parent-logind-getstarted-frame"
        onClick={onParentLogindGetstartedFrameClick}
      >
        <div className="get-started1">{`Get started `}</div>
      </button>
    </div>
  );
};

export default LoginFormContainer;
