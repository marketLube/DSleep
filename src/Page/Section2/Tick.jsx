import React from "react";
import { SiTicktick } from "react-icons/si";

const Tick = () => {
  const features = Array(5).fill({
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit",
    smallText: "ETIAM CORPUS AMEUR.",
  });

  return (
    <section className="featureList">
      {features.map((feature, index) => (
        <div key={index} className="featureList-item">
          <SiTicktick className="featureList-item-icon" />
          <h3 className="featureList-item-title">{feature.title}</h3>
          <p className="featureList-item-description">{feature.description}</p>
          <small className="featureList-item-smallText">
            {feature.smallText}
          </small>
        </div>
      ))}
    </section>
  );
};

export default Tick;
