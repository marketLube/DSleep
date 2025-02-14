import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Booknow = () => {
  return (
    <section className="booknow">
      <div className="booknow-main">
        <div></div>
        <div className="booknow-main-container">
          <p className="booknow-main-container-para">
            Buy a set for the ultimate Dremzy experience
          </p>
          <button className="booknow-main-container-book">
            Book Now <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booknow;
