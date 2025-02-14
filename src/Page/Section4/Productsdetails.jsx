import React from "react";
import bed from "./../../assets/bed.jpg";
import { SiTicktick } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";

const Productsdetails = () => {
  return (
    <section className="productDetails">
      <div className="productDetails-container">
        <img
          src={bed}
          alt="product-image"
          className="productDetails-container-image"
        />
        <div className="productDetails-container-details">
          <h5 className="productDetails-container-details-smallhead">
            Stay with us
          </h5>
          <h2 className="productDetails-container-details-head">Mattress</h2>
          <p className="productDetails-container-details-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <button className="productDetails-container-details-button">
            Book Now
            <FaArrowRightLong />
          </button>
          <div className="productDetails-container-details-features">
            <div className="productDetails-container-details-features-item">
              <SiTicktick />
              <h5>Lorem ipsum</h5>
            </div>
            <div className="productDetails-container-details-features-item">
              <SiTicktick />
              <h5>Lore ipsum</h5>
            </div>
            <div className="productDetails-container-details-features-item">
              <SiTicktick />
              <h5>Lorem ipsum</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productsdetails;
