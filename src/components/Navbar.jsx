import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <a className="navbar-brand" href="#">
        Navbar
      </a>

      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav ms-auto">

          <li className="nav-item mx-3">

            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>

          </li>

          <li className="nav-item mx-3">

            <a className="nav-link active" aria-current="page" href="#contact">
              Contact
            </a>

          </li>

          <li className="nav-item mx-3">

            <a className="nav-link active" aria-current="page" href="#MyProjects">
              My Projects
            </a>

          </li>

          <li className="nav-item mx-3">

            <a className="nav-link active" aria-current="page" href="#TechnologyExperties">
              Technology Experties
            </a>

          </li>

        </ul>

      </div>

    </nav>

  );
}

export default Navbar;
