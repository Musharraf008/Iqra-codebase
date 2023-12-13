import React from "react";
import "./primaryBtn.css";

const PrimaryBtn = ({ text, icon }) => {
  return (
    <button className="primary-btn">
      <span className="primary-btn-text">{text}</span>
      <span>{icon}</span>
    </button>
  );
};

export default PrimaryBtn;
