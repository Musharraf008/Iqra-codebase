import React from "react";
import "./nav.css";
import logo from "../../assets/icons/iqra-main-logo.svg";
import PrimaryBtn from "../buttons/PrimaryBtn";
import takeAdmissionIcon from "../../assets/icons/take-admission-icon.svg";

import { Link } from "react-router-dom";

const Nav = ({ alternate }) => {
  return (
    <div className="nav-container">
      {alternate ? (
        <div
          className="left-nav-wrapper"
          style={{
            position: "absolute",
            margin: '1rem 2.5rem'
          }}
        >
          <div className="nav-logo-wrapper">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-btns-wrapper" style={{ color: "black" }}>
            <Link to="/">Home</Link>
            <Link to="/pay-fee">Pay fee</Link>
            <Link to="/admission-form">Admission</Link>
          </div>
        </div>
      ) : (
        <div className="main-nav-wrapper">
          <div className="left-nav-wrapper">
            <div className="nav-logo-wrapper">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-btns-wrapper">
              <Link to="/">Home</Link>
              <a href="#admission">Admission</a>
              <a href="#about">About</a>
              <Link to="/pay-fee">Pay fee</Link>
            </div>
          </div>
          <div className="right-nav-wrapper">
            <PrimaryBtn
              text="Take admission"
              where="/admission-form"
              icon={<img src={takeAdmissionIcon} alt="take admission icon" />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
