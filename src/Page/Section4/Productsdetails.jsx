import React from "react";
import bed from "./../../assets/images/bed.webp";
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
           Experience unmatched comfort and support with our premium mattresses. Designed with advanced technology, they ensure optimal spinal alignment, breathability, and pressure relief. Enjoy a rejuvenating sleep every night with high-quality, durable materials crafted for long-lasting performance.

          </p>
          <button className="productDetails-container-details-button">
            Book Now
            <FaArrowRightLong  className="productDetails-container-details-button-icon"/>
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
