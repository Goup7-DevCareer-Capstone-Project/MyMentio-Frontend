import "./ButtonGoogle.css";

const ButtonGoogle = () => {
  return (
    <div className="button-google">
      <div className="frame-inputs">
        <div className="label-sign-up">
          <div className="sign-up-with">Sign up with</div>
        </div>
        <div className="frame-logins">
          <img className="flat-color-iconsgoogle" loading="eager" alt="" />
          <a
            className="sign-up-with1"
            href="https://google.com"
          >{`Sign up with Google `}</a>
        </div>
      </div>
    </div>
  );
};

export default ButtonGoogle;
