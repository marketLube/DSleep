import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <span>D</span>SLEEP <br /> COMPANY
        </h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <button className="navbar-icons-button">
          <FaFacebook />
        </button>
        <button className="navbar-icons-button">
          <FaInstagram />
        </button>
        <button className="navbar-icons-button">
          <FaTwitter />
        </button>
      </div>

      <div className="navigation" aria-label="Navigation menu">
        <input
          //   checked={isChecked}
          //   onChange={() => setIsChecked(!isChecked)}
          type="checkbox"
          className="navigation__checkbox"
          id="navi__toggle"
          aria-label="Toggle navigation"
        />
        <label
          htmlFor="navi__toggle"
          className="navigation__btn"
          aria-controls="navigationMenu"
          aria-label="Toggle navigation menu"
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <nav
          className="navigation__nav"
          id="navigationMenu"
          aria-label="Main navigation"
        >
          <ul className="navigation__list" aria-label="Main navigation links">
            <li className="navigation__item">
              <a
                href="#about"
                onClick={() => {
                  scrollToSection("about");
                  setIsChecked(false);
                }}
                aria-label="Navigate to About us section"
              >
                About us
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#works"
                onClick={() => {
                  scrollToSection("works");
                  setIsChecked(false);
                }}
                aria-label="Navigate to Our Works section"
              >
                Our Works
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="https://wa.me/919995000123"
                target="_blank"
                onClick={() => {
                  scrollToSection("contact");
                  setIsChecked(false);
                }}
                aria-label="Contact us via WhatsApp"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
