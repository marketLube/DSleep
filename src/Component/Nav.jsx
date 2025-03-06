import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Nav = () => {
  const handleNavToggle = (e) => {
    document.body.classList.toggle("no-scroll", e.target.checked);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1
          onClick={() => (window.location.href = "#home")}
          style={{ cursor: "pointer" }}
        >
          DSLEEP <br /> COMPANY
        </h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <button className="navbar-icons-button">
          <FaFacebook className="navbar-icons-button-icon" />
        </button>
        <button className="navbar-icons-button">
          <FaInstagram className="navbar-icons-button-icon" />
        </button>
        <button className="navbar-icons-button">
          <FaTwitter className="navbar-icons-button-icon" />
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
          onChange={handleNavToggle}
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
              <a href="#home" aria-label="Navigate to About us section">
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="#about" aria-label="Navigate to About us section">
                About
              </a>
            </li>
            <li className="navigation__item">
              <a href="#service" aria-label="Navigate to Our Works section">
                Service
              </a>
            </li>
            <li className="navigation__item">
              <a href="#projects" aria-label="Navigate to Our Works section">
                Projects
              </a>
            </li>
            <li className="navigation__item">
              <a href="#contact" aria-label="Contact us via WhatsApp">
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
