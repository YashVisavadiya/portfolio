import React from "react";
import { Title } from "./Title";

export const Header = () => {
  const handleClick = (e) => {
    const links = document.querySelectorAll("ul li a");

    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }

    e.target.classList.add("active");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fs-5" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="title-first">{"<Yash"}</span>
            <span className="title-second">{"Visavadiya/>"}</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={handleClick}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleClick}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleClick}>
                  Work Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleClick}>
                  Achievments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleClick}>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
