import Nav from "../../Component/Nav";

const Imagebed = () => {
  return (
    <section className="bed">
      <Nav />
      <div className="bed-container" id="home">
        <h1 className="bed-container-text">Best Mattress Store in Calicut</h1>
        <p className="bed-container-note">
          Shop premium mattresses, orthopedic pillows, and sleep accessories
          designed for unmatched comfort, in Calicut.
        </p>

        <a href="https://wa.me/918281002395" style={{ textDecoration: "none" }}>
          <button className="bed-container-button">Shop now</button>{" "}
        </a>
      </div>
    </section>
  );
};

export default Imagebed;
