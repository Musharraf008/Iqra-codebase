import React from "react";
import "./admissionForm.css";
import Nav from "../../components/nav/Nav";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import { IoMdCheckmarkCircle } from "react-icons/io";

const AdmissionForm = () => {
  return (
    <div className="admission-form-container">
      <Nav alternate={true} />
      <div className="admission-form-wrapper">
        <div className="left-adm-form">
          <h1>IQRA</h1>
          <h1>COACHING</h1>
          <h1>CENTRE</h1>
          <p>where we can help turn your dreams into reality!</p>
        </div>
        <div className="right-adm-form">
          <h2>
            <IoMdCheckmarkCircle color="#00CB51" size={30} />
            <span>TAKE ADMISSION NOW!</span>
          </h2>
          <input
            type="text"
            autocomplete="off"
            name="text"
            class="input"
            placeholder="Full name"
          />
          <input
            type="text"
            autocomplete="off"
            name="text"
            class="input"
            placeholder="Father's name"
          />
          <input
            type="text"
            autocomplete="off"
            name="text"
            class="input"
            placeholder="Class"
          />
          <div className="form-gender-wrapper">
            <label class="radio-button">
              <input type="radio" name="example-radio" value="option1" />
              <span class="radio"></span>
              Male
            </label>
            <label class="radio-button">
              <input type="radio" name="example-radio" value="option2" />
              <span class="radio"></span>
              Female
            </label>
          </div>
          <input
            type="text"
            autocomplete="off"
            name="text"
            class="input"
            placeholder="Mobile number (Whatsapp)"
          />
          <input
            type="text"
            autocomplete="off"
            name="text"
            class="input"
            placeholder="E-mail (Optional)"
          />
          <PrimaryBtn text="Take admission" where='/'/>
          <div className="form-or-wrapper">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <SecondaryBtn text="Pay your fee" where='/pay-fee' />
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
