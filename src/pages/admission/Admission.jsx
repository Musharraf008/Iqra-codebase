import React from "react";
import "./admission.css";
import { FaArrowTurnDown } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import { MdCurrencyRupee } from "react-icons/md";
// import { MdFaceRetouchingNatural } from "react-icons/md";
import takeAdmissionIcon from "../../assets/icons/take-admission-icon.svg";
import bgImg from "../../assets/images/admission-illustration.svg";

const Admission = () => {
  return (
    <div className="admission-container">
      <header className="admission-heading-text-wrapper">
        <h1>To take admission in our coaching,</h1>
        <p>
          <span>you need to follow the given steps</span> <FaArrowTurnDown />
        </p>
      </header>
      <main className="admission-main-section">
        <div className="admission-hero-section">
          <div className="admission-instruction-wrapper">
            <p>
              <IoIosArrowForward />
              <span>
                <span className="link">Click here!,</span> To download the fee
                structure.
              </span>
            </p>
            <p>
              <IoIosArrowForward />
              <span>
                Click on <span className="link">take admission</span> button
                down below.
              </span>
            </p>
            <p>
              <IoIosArrowForward />
              <span>
                Fill up the form and pay your admission fee along with your
                first month class fee.
              </span>
            </p>
          </div>
          <div className="admission-btns-wrapper">
            <SecondaryBtn text="Fee structure" icon={<MdCurrencyRupee />} />
            <PrimaryBtn
              text="Take Admission"
              icon={<img src={takeAdmissionIcon} style={{ width: "1.2rem" }} />}
            />
          </div>
        </div>
        <img
          className="admission-illustration"
          src={bgImg}
          alt=""
          
        />
      </main>
    </div>
  );
};

export default Admission;
