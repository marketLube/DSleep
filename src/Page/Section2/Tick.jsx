import React from "react";

import icon1 from "../../assets/logos/dsleep-01.svg";
import icon2 from "../../assets/logos/dsleep-02.svg";
import icon3 from "../../assets/logos/dsleep-03.svg";
import icon4 from "../../assets/logos/dsleep-04.svg";
import icon5 from "../../assets/logos/dsleep-05.svg";
import icon6 from "../../assets/logos/dsleep-06.svg";

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
