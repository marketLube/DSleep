import Nav from "../../Component/Nav";

const Imagebed = () => {
  return (
    <section className="bed">
      <Nav />
      <div className="bed-container" id="home">
        <h2 className="bed-container-text">Better Sleep, Better Living</h2>
        <p className="bed-container-note">
          Wake up refreshed every morning! Experience superior comfort, quality,
          and support with our expertly crafted mattresses.{" "}
        </p>

        <a href="https://wa.me/918281002395" style={{ textDecoration: "none" }}>
          <button className="bed-container-button">Shop now</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Imagebed;
