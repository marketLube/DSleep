import React from "react";
import { SiTicktick } from "react-icons/si";

const features = Array(6).fill({
  title: "Lorem ipsum",
  description:
    "Lorem ipsum dolor sit amet consec aucter.Lorem ipsum dolor sit amet consec aucter.",
});

const Why = () => {
  return (
    <section className="whyProducts">
      <div className="whyProducts-container">
        <h2 className="whyProducts-container-title">Why our products?</h2>
        <div className="whyProducts-container-grid">
          {features.map((feature, index) => (
            <div key={index} className="whyProducts-container-item">
              <SiTicktick className="whyProducts-container-item-icon" />
              <h3 className="whyProducts-container-item-title">
                {feature.title}
              </h3>
              <p className="whyProducts-container-item-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
