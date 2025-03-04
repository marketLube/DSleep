import React from "react";
import { SiTicktick } from "react-icons/si";

const features = [
  {
    title: "100-Night Risk-Free Trial",
    description: "Try, sleep, return hassle-free if not satisfied."
  },
  {
    title: "Premium Comfort & Support",
    description: "Advanced design for pressure relief, perfect alignment."
  },
  {
    title: "Breathable & Cooling",
    description: "Temperature-regulating layers keep you cool."
  },
  {
    title: "Durable & Long-Lasting",
    description: "High-quality materials ensure years of comfort."
  },
  {
    title: "Eco-Friendly & Safe",
    description: "Non-toxic, sustainable, and certified safe materials."
  },
  {
    title: "Free Delivery & Easy Returns",
    description: "Fast shipping, no cost, effortless return process."
  }
];

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
