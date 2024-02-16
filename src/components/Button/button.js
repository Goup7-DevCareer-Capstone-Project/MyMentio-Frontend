import React from "react";
import "./button.css";
import { Link } from "react-router-dom";


const STYLES = ["btnPrimary", "btnSecondary"];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStlye = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[3];

  return (
    <Link to="/getStarted" className="btnSecondary">
      <button
        className={`btn ${checkButtonStlye}`}
        onClick={onclick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
