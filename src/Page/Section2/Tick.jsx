import React from "react";

import icon1 from "./../../assets/company icons/images (1).png";
import icon2 from "./../../assets/company icons/images.jfif";
import icon3 from "./../../assets/company icons/images.png";
import icon4 from "./../../assets/company icons/sunday_rest_logo.jfif";
import icon5 from "./../../assets/company icons/kurl-on.jfif";
import icon6 from "./../../assets/company icons/sleepwell.jpg";

const Tick = () => {
  const logos = [icon1, icon2, icon3, icon6, icon4, icon5];

  return (
    <section className="featureList">
      {logos.map((logo, index) => (
        <div key={index} className="featureList-item">
          <img
            src={logo}
            alt="Company logo"
            className="featureList-item-icon"
          />
        </div>
      ))}
    </section>
  );
};

export default Tick;
