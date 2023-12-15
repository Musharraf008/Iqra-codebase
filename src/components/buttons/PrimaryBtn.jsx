import React from "react";
import "./primaryBtn.css";

const PrimaryBtn = ({ text, icon }) => {
  return (
    <a className="primary-btn">
      <span className="primary-btn-text">{text}</span>
      <span>{icon}</span>
    </a>
  );
};

export default PrimaryBtn;
