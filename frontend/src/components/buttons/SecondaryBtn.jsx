import React from "react";
import "./secondaryBtn.css";
import { Link } from "react-router-dom";

const SecondaryBtn = ({ text, icon, where }) => {
  return (
    <Link to={where} className="secondary-btn">
      <span className="secondary-btn-text">{text}</span>
      {icon ? <span>{icon}</span> : null}
      {/* <span>{icon}</span> */}
    </Link>
  );
};

export default SecondaryBtn;
