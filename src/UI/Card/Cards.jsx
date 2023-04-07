import React from "react";
import "./index.scss";

function Post(title = "Making a design system from scratch", date = "12 Feb 2020", category = "Design, Pattern", subtitle = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." ) {
  return (
    <div className="posts-card">
      <h3 className="posts-card__title">{title}</h3>
      <div className="posts-card__extra">
        <span className="posts-card__extra-first">{date}</span>
        <span className="posts-card__extra-second">{category}</span>
      </div>
      <div className="posts-card__subtitle">
        {subtitle}
      </div>
    </div>
  );
}

function Card(image, title = "Designing Dashboards", category = "Dashboard", subtitle = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." ) {
    const date = new Date;
    let year = date.getFullYear(); 
  return (
    <li className="works-card">
    <img src={image} alt="Works image" className="works-image"/>
    <div className="works-card__body">
        <h3 className="works-card__body-title">
        {title}
        </h3>
        <div className="works-card__body-extra">
            <span className="year">{year}</span>
            <p className="extra-info">{category}</p>
        </div>
        <p className="works-card__body-subtitle">
        {subtitle}
        </p>
    </div>
</li>
  );
}

export { Card, Post };
