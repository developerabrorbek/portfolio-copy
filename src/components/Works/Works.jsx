import React from "react";
import "./index.scss";
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
                <li className="works-card">
                    <img src={image1} alt="Works image" className="works-image"/>
                    <div className="works-card__body">
                        <h3 className="works-card__body-title">
                        Designing Dashboards
                        </h3>
                        <div className="works-card__body-extra">
                            <span className="year">2022</span>
                            <p className="extra-info">Dashboard</p>
                        </div>
                        <p className="works-card__body-subtitle">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </li>
                <li className="works-card">
                    <img src={image1} alt="Works image" className="works-image"/>
                    <div className="works-card__body">
                        <h3 className="works-card__body-title">
                        Designing Dashboards
                        </h3>
                        <div className="works-card__body-extra">
                            <span className="year">2022</span>
                            <p className="extra-info">Dashboard</p>
                        </div>
                        <p className="works-card__body-subtitle">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </li>
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
