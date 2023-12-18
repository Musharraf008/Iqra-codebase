import React from "react";
import "./primaryBtn.css";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ text, icon, where }) => {
  return (
    <Link to={where} className="primary-btn">
      <span className="primary-btn-text">{text}</span>
      <span>{icon}</span>
    </Link>
  );
};

export default PrimaryBtn;
