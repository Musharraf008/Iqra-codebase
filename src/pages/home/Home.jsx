import React from "react";
import "./home.css";
import Nav from "../../components/nav/Nav";

const Home = () => {
  return (
    <section className="home-container">
      <Nav />
      <div className="home-blur-bg">
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
      </div>
    </section>
  );
};

export default Home;
