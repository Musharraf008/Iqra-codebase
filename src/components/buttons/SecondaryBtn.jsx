import React from "react";
import "./secondaryBtn.css";

const SecondaryBtn = ({ text, icon }) => {
  return (
    <button className="secondary-btn">
      <span className="secondary-btn-text">{text}</span>
      <span>{icon}</span>
    </button>
  );
};

export default SecondaryBtn;
