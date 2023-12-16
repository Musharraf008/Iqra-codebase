import React from "react";
import "./home.css";
import Nav from "../../components/nav/Nav";
import arrow from '../../assets/icons/home-arrow.svg'
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import takeAdmissionIcon from '../../assets/icons/take-admission-icon.svg'

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-nav-wrapper">
        <Nav />
      </div>
      <div className="home-wrapper">
        <div className="home-upper-wrapper">
          <h1>UNLOCK</h1>
          <h1>YOUR</h1>
          <h1>FULL</h1>
          <span className="potential-text">POTENTIAL</span>
          <h1 className="home-at">AT</h1>
          <img src={arrow} alt="" />
        </div>
        <div className="home-lower-wrapper">
          <h1><span>IQRA</span> COACHING CENTRE</h1>
          <p>where we can help turn your dreams into reality!</p>
          <PrimaryBtn text="Take admission" icon={<img src={takeAdmissionIcon} />} />
        </div>
      </div>
      {/* <div className="home-blur-bg">
        <div className="home-heading-wrapper">
            <h1><span className="green-color">UNLOCK</span> YOUR FULL</h1>
            <div className="potential-wrapper">
                <span>It's hard to see it but it's there</span>
                <h1>POTENTIAL</h1>
            </div>
            <h1>AT</h1>
        </div>
        <h2 className="home-iqra-heading"><span>IQRA</span> COACHING CENTRE</h2>
        <p className="home-heading-p">where we can help turn your dreams into reality!</p>
      </div> */}


    </section>
  );
};

export default Home;
