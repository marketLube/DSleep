import React from "react";

import icon1 from "./../../assets/company icons/images (1).png";
import icon2 from "./../../assets/company icons/images.jfif";
import icon3 from "./../../assets/company icons/images.png";
import icon4 from "./../../assets/company icons/sunday_rest_logo.jfif";
import icon5 from "./../../assets/company icons/kurl-on.jfif";
import icon6 from "./../../assets/company icons/sleepwell.jpg";


const Tick = () => {
  const logos = [
icon1,
icon2,
icon3,
icon6,
icon4,
icon5,
  ];


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


// import React from "react";
// import { SiTicktick } from "react-icons/si";

// const Tick = () => {
//   const features = [
//     {
//       title: "Sunday Mattresses",
//       description: "Premium comfort with innovative design",
//       smallText: "SLEEP BETTER WITH SUNDAY",
//     },
//     {
//       title: "Kurlon Mattresses",
//       description: "Trusted brand for quality sleep",
//       smallText: "INDIA'S FAVORITE MATTRESS",
//     },
//     {
//       title: "Cirrus Rubberised Coir Mattress",
//       description: "Natural comfort and durability",
//       smallText: "ECO-FRIENDLY SLEEP SOLUTION",
//     },
//     {
//       title: "Flo Mattress",
//       description: "Ergonomic design for better sleep",
//       smallText: "SLEEP SCIENCE PERFECTED",
//     },
//     {
//       title: "The Sleep Company",
//       description: "Revolutionary SmartGRID technology",
//       smallText: "NEXT-GEN SLEEP TECHNOLOGY",
//     },
//     // {
//     //   title: "Sleepwell",
//     //   description: "Time-tested comfort and support",
//     //   smallText: "TRUSTED FOR GENERATIONS",
//     // }
//   ];

//   return (
//     <section className="featureList">
//       {features.map((feature, index) => (
//         <div key={index} className="featureList-item">
//           <SiTicktick className="featureList-item-icon" />
//           <h3 className="featureList-item-title">{feature.title}</h3>
//           <p className="featureList-item-description">{feature.description}</p>
//           <small className="featureList-item-smallText">
//             {feature.smallText}
//           </small>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Tick;
