import React from "react";
import "./header.css";
import headerimage from "../../assets/Rectangle 2.png";

const Header = () => {
  return (
    <div id="home" className="headerImage">
      <img src={headerimage} alt="" />
    </div>
  );
};
export default Header;
