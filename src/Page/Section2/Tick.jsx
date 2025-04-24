import React from "react";

import icon1 from "../../assets/logos/Dueroflex.jpg";
import icon2 from "../../assets/logos/dsleep-02.svg";
import icon3 from "../../assets/logos/dsleep-03.svg";
import icon4 from "../../assets/logos/dsleep-04.svg";
import icon5 from "../../assets/logos/dsleep-05.svg";
import icon6 from "../../assets/logos/dsleep-06.svg";
import icon7 from "../../assets/logos/mmform.webp";
import icon8 from "../../assets/logos/kurlon.webp";

const Tick = () => {
  const logos = [icon1, icon2, icon3, icon6, icon4, icon5, icon7, icon8];

  const style = (val) => {
    let styles = {};
    if (val === 6) {
      styles = { maxHeight: "fit-content", width: "8rem" };
    }
    if (val === 7) {
      styles = { maxHeight: "fit-content" };
    }
    return styles;
  };

  return (
    <section className="featureList">
      {logos.map((logo, index) => (
        <div key={index} className="featureList-item">
          <img
            src={logo}
            alt="Company logo"
            style={style(index)}
            className="featureList-item-icon"
          />
        </div>
      ))}
    </section>
  );
};

export default Tick;
