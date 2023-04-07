import React from "react";
import "./index.scss";
import HeroImage from "../../assets/hero-image.png";

function Hero(props) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <img src={HeroImage} alt="" className="hero-image" />
          <div className="hero-body">
            <h1 className="hero-body__title">
              Hi, I am John, Creative Technologist
            </h1>
            <p className="hero-body__subtitle">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="hero-body__button">
            Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
