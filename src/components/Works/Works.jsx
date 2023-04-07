import React from "react";
import "./index.scss";
import {Card} from "../../UI/Card/Cards.jsx";
import image1 from "../../assets/works-image1.png";
import image2 from "../../assets/works-image2.png";
import image3 from "../../assets/works-image3.png";

function Works(props) {
  return (
    <section className="works">
      <div className="container">
        <div className="works__inner">
            <h2 className="works-title"></h2>
            <div className="works-extra">
            <p className="works-subtitle">Featured works</p>
            </div>

            <ul className="works-cards">
                {Card(image1)}
                {Card(image2, "Vibrant Portraits of 2020", "Illustration")}
                {Card(image3, "36 Days of Malayalam type", "Typography")}
            </ul>
            
            <button className="works-all">
                Show all
            </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
