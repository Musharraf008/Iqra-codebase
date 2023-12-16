import React from "react";
import "./nav.css";
import logo from "../../assets/icons/iqra-main-logo.svg";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

import { RiBubbleChartFill } from "react-icons/ri";
import { MdFaceRetouchingNatural } from "react-icons/md";
import takeAdmissionIcon from '../../assets/icons/take-admission-icon.svg'

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="left-nav-wrapper">
        <div className="nav-logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-btns-wrapper">
          <a href="">Home</a>
          <a href="">Admission</a>
          <a href="">About</a>
        </div>
      </div>
      <div className="right-nav-wrapper">
        {/* <SecondaryBtn text="Pay fee" icon={<RiBubbleChartFill size={20} color="#252525" />} /> */}
        <PrimaryBtn text="Take admission" icon={<img src={takeAdmissionIcon} />} />
      </div>
    </div>
  );
};

export default Nav;
