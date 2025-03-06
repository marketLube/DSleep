import React from "react";
import bed from "./../../assets/images/bed.webp";
import { SiTicktick } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const Productsdetails = () => {
  return (
    <section className="productDetails" id="about">
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
            Sleep better with our expertly designed mattresses. Engineered for
            superior comfort, breathability, and spinal alignment, they provide
            long-lasting support for a rejuvenating night’s rest.
          </p>
          <button className="productDetails-container-details-button">
            Book Now
            {/* <FaArrowRightLong className="productDetails-container-details-button-icon" /> */}
            <LiaLongArrowAltRightSolid className="productDetails-container-details-button-icon" />
          </button>
          {/* <div className="productDetails-container-details-features">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Productsdetails;
