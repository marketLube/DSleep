import React from "react";

import icon1 from "../../assets/logos/Dueroflex.jpg";
import icon2 from "../../assets/logos/dsleep-02.svg";
import icon3 from "../../assets/logos/dsleep-03.svg";
import icon4 from "../../assets/logos/dsleep-04.svg";
import icon5 from "../../assets/logos/dsleep-05.svg";
import icon6 from "../../assets/logos/dsleep-06.svg";
import icon7 from "../../assets/logos/mmform.webp";
import icon8 from "../../assets/logos/kurlon.webp";
import icon9 from "../../assets/logos/sundayMattress.png";
import MMFORM from "../../assets/doc/MMFoam.pdf";

const Tick = () => {
  const logos = [icon1, icon2, icon3, icon6, icon4, icon5, icon7, icon8, icon9];

  const handleDownload = (index) => {
    if (index === 6) {
      window.open(MMFORM, "_blank");
    }
  };

  const style = (val) => {
    let styles = {};
    const isPhone = window.innerWidth <= 768;

    if (val === 6) {
      styles = {
        maxHeight: isPhone ? "3.5rem" : "5rem",
        width: isPhone ? "5rem" : "8rem",
      };
    }
    if (val === 7) {
      styles = { maxHeight: isPhone ? "2.2rem" : "3rem" };
    }
    if (val === 8) {
      styles = { maxHeight: isPhone ? "2.2rem" : "3.5rem" };
    }
    return styles;
  };

  return (
    <section className="featureList">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="featureList-item"
          onClick={() => handleDownload(index)}
          style={{ cursor: index === 6 ? "pointer" : "default" }}
        >
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
