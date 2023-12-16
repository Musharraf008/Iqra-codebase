import React from "react";
import "./secondaryBtn.css";

const SecondaryBtn = ({ text, icon }) => {
  return (
    <a className="secondary-btn">
      <span className="secondary-btn-text">{text}</span>
      {icon ? <span>{icon}</span> : null}
      {/* <span>{icon}</span> */}
    </a>
  );
};

export default SecondaryBtn;
