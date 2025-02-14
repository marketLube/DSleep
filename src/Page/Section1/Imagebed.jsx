import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Imagebed = () => {
  return (
    <section className="bed">
      <div className="navbar">
        <div className="navbar-logo">
          <h1>
            <span>D</span>SLEEP <br /> COMPANY
          </h1>
        </div>
        <ul className="navbar-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="navbar-icons">
          <button className="navbar-icons-button">
            <FaFacebook />
          </button>
          <button className="navbar-icons-button">
            <FaInstagram />
          </button>
          <button className="navbar-icons-button">
            <FaTwitter />
          </button>
        </div>
      </div>
      <div className="bed-container">
        <h2 className="bed-container-text">Better Sleep,Better Living</h2>
        <p className="bed-container-note">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quos.amet consectetur adipisicing elit. Quisquam, quos.
        </p>
        <button className="bed-container-button">Shop Now</button>
      </div>
    </section>
  );
};

export default Imagebed;
