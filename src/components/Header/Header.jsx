import React from "react";
import "./index.scss";
import burgerImage from "../../assets/menu.svg";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <a href="#" className="nav-list__item-link">
                Works
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__item-link">
                Blog
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#" className="nav-list__item-link">
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-burger">
            <img src={burgerImage} alt="Burger" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
