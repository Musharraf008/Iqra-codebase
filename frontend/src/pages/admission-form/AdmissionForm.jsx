import React, { useEffect, useState } from "react";
import "./admissionForm.css";
import Nav from "../../components/nav/Nav";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import SecondaryBtn from "../../components/buttons/SecondaryBtn";
import { IoMdCheckmarkCircle } from "react-icons/io";
import axios from "axios";

const AdmissionForm = () => {
  const [fullname, setFullname] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //Current date and time

  useEffect(() => {
    const currentDateAndTime = new Date();

    // Get the date and time components separately
    const year = currentDateAndTime.getFullYear();
    const month = currentDateAndTime.getMonth() + 1; // Months are zero-based
    const day = currentDateAndTime.getDate();
    const hours = currentDateAndTime.getHours();
    const minutes = currentDateAndTime.getMinutes();
    const seconds = currentDateAndTime.getSeconds();

    setDate(`${day}-${month}-${year}`);
    setTime(`${hours}:${minutes}:${seconds}`);
  }, [date, time]);

  const handleSubmit = () => {
    const formData = {
      name: fullname,
      fname: fatherName,
      class: studentClass,
      gender: gender,
      mobile: mobile,
      email: email,
      date: date,
      time: time,
    };

    axios
      .post("http://localhost:5000/admission-form", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="admission-form-container">
      <div style={{position: 'absolute'}}>
        <Nav alternate={true} />
      </div>
      <div className="admission-form-wrapper">
        <div className="left-adm-form">
          <h1>IQRA</h1>
          <h1>COACHING</h1>
          <h1>CENTRE</h1>
          <p>where we can help turn your dreams into reality!</p>
        </div>
        <form
          className="right-adm-form"
          action="/admission-form"
          method="post"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2>
            <IoMdCheckmarkCircle color="#00CB51" size={30} />
            <span>TAKE ADMISSION NOW!</span>
          </h2>
          <input
            type="text"
            autoComplete="off"
            name="name"
            className="input"
            placeholder="Full name"
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="text"
            autoComplete="off"
            name="fname"
            className="input"
            placeholder="Father's name"
            onChange={(e) => setFatherName(e.target.value)}
          />
          <input
            type="text"
            autoComplete="off"
            name="class"
            className="input"
            placeholder="Class"
            onChange={(e) => setStudentClass(e.target.value)}
          />
          <div className="form-gender-wrapper">
            <label className="radio-button">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="radio"></span>
              Male
            </label>
            <label className="radio-button">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              <span className="radio"></span>
              Female
            </label>
          </div>
          <input
            type="text"
            autoComplete="off"
            name="mobile"
            className="input"
            placeholder="Mobile number (Whatsapp)"
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            autoComplete="off"
            name="email"
            className="input"
            placeholder="E-mail (Optional)"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            style={{ background: "transparent", border: "none" }}
          >
            <PrimaryBtn text="Take admission" where="/" />
          </button>
          <div className="form-or-wrapper">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>
          <SecondaryBtn text="Pay your fee" where="/pay-fee" />
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
