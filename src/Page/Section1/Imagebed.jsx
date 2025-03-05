import React from "react";

import Nav from "../../Component/Nav";

const Imagebed = () => {
  return (
    <section className="bed">
      <Nav />
      <div className="bed-container">
        <h2 className="bed-container-text">Better Sleep, Better Living</h2>
        <p className="bed-container-note">
          Wake up refreshed every morning! Experience superior comfort, quality,
          and support with our expertly crafted mattresses.{" "}
        </p>
        <button className="bed-container-button">Shop now</button>
      </div>
    </section>
  );
};

export default Imagebed;
