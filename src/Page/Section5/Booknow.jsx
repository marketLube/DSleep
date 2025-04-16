import { FaArrowRightLong } from "react-icons/fa6";

const Booknow = () => {
  return (
    <section className="booknow">
      <div className="booknow-main">
        <div></div>
        <div className="booknow-main-container">
          <p className="booknow-main-container-para">
            Buy a set for the ultimate Dreamzy experience
          </p>
          <a
            href="https://wa.me/918281002395"
            style={{ textDecoration: "none" }}
          >
            <button className="booknow-main-container-book">
              Book Now
              <span style={{ marginLeft: "0.5rem" }}>
                <FaArrowRightLong />
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Booknow;
