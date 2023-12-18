import React from "react";
import "./footer.css";

import callIcon from "../../assets/icons/call-icon.svg";
import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";
import footerLogo from "../../assets/icons/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-footer-section">
        <h1>CONTACT US</h1>
        <div className="numbs-wrapper">
          <div className="numbs-icon-wrapper">
            <img src={callIcon} alt="" />
            <img src={whatsappIcon} alt="" />
          </div>
          <div className="numbs-numbers-wrapper">
            <span>+91 8789248882</span>
            <span>+91 9334079737</span>
          </div>
        </div>
      </div>
      <div className="right-footer-section">
        <img src={footerLogo} alt="" />
        <div className="footer-text-wrapper">
          <span>IQRA COACHING CENTRE</span>
          <p>© 2023 All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
