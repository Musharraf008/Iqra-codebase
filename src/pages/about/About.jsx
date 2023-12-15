import React from "react";
import "./about.css";
import about1 from "../../assets/images/about-1.svg";
import about2 from "../../assets/images/about-2.svg";
import about3 from "../../assets/images/about-3.svg";
import about4 from "../../assets/images/about-4.svg";
import about5 from "../../assets/images/about-5.svg";

const About = () => {
  const upperInfo = [
    {
      img: about2,
      des: "We are not just educators; we are dream cultivators, life mentors, and success architects. Our mission is to empower individuals like you to unleash their full potential, overcome obstacles, and soar to new heights. Here's why you should join our transformative coaching community:",
    },
    {
      img: about3,
      des: "Take a trip to learn more about yourself and become stronger with our personalized coaching programs. Whether you want to do well in school, move ahead in your job, or grow personally, we give you the help and tools to make your dreams come true.",
    },
    {
      img: about4,
      des: "Our team includes experienced teachers, experts from different industries, and life coaches who are dedicated to helping you succeed. Get the advantage of their rich experience and learn things that go beyond what you find in books. We create a learning atmosphere that is both interesting and inspiring.",
    },
    {
      img: about5,
      des: "Everyone is different, and the way to success is different for each person. Our coaches adjust their methods to fit your specific needs. This means that each session takes you a step closer to achieving your personal goals and reaching excellence in your own way.",
    },
  ];

  return (
    <div className="about-container">
        <header>About</header>
      <div className="about-upper-section">
        <div className="about-first-intro-wrapper">
          <div>
            <h1>IQRA COACHING CENTRE</h1>
            <h1
              style={{
                color: "rgba(0, 0, 0, 0.5)",
              }}
            >
              WHERE DREAMS TAKE <br /> FLIGHT!
            </h1>
          </div>
          <img src={about1} alt="" />
        </div>
        {upperInfo.map((info) => {
          return (
            <div className="about-intro-wrapper">
              <p>{info.des}</p>
              <img src={info.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
