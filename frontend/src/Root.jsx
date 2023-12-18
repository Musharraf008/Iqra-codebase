import React from "react";
import Home from "./pages/home/Home";
import Admission from "./pages/admission/Admission";
import About from "./pages/about/About";

const Root = () => {
    
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="admission">
        <Admission />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Root;
