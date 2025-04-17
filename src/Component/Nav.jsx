import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Nav = () => {
  const handleNavToggle = (e) => {
    document.body.classList.toggle("no-scroll", e.target.checked);
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }

    const checkbox = document.getElementById("navi__toggle");
    if (checkbox.checked) {
      checkbox.checked = false;
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <nav className="navbar">
      <div
        className="navbar-logo"
        onClick={(e) => handleScrollToSection(e, "#home")}
      >
        <img src="/LOgo.png" alt="" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#home" onClick={(e) => handleScrollToSection(e, "#home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScrollToSection(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a
            href="#service"
            onClick={(e) => handleScrollToSection(e, "#service")}
          >
            Service
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, "#projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a href="https://wa.me/918281002395">Contact</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <a className="navbar-icons-button" href="" style={{ color: "#000" }}>
          <FaFacebookF className="navbar-icons-button-icon" />
        </a>
        <a
          href="https://www.instagram.com/dsleepstore?igsh=MWZvOXZjNmdyODlqYQ%3D%3D&utm_source=ig_contact_invite"
          className="navbar-icons-button"
          style={{ color: "#000" }}
          aria-label="Visit our Instagram"
        >
          <BsInstagram className="navbar-icons-button-icon" />
        </a>
        <a className="navbar-icons-button" href="" style={{ color: "#000" }}>
          <FaTwitter className="navbar-icons-button-icon" />
        </a>
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
              <a
                href="#home"
                onClick={(e) => handleScrollToSection(e, "#home")}
                aria-label="Navigate to Home section"
              >
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "#about")}
                aria-label="Navigate to About us section"
              >
                About
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#service"
                onClick={(e) => handleScrollToSection(e, "#service")}
                aria-label="Navigate to Our Works section"
              >
                Service
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, "#projects")}
                aria-label="Navigate to Projects section"
              >
                Projects
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="https://wa.me/918281002395"
                aria-label="Contact us via WhatsApp"
              >
                Contact
              </a>
            </li>
            <li className="navigation__item social-icons">
              <a href="" className="nav-social-icon" style={{ color: "#000" }}>
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/dsleepstore?igsh=MWZvOXZjNmdyODlqYQ%3D%3D&utm_source=ig_contact_invite"
                className="nav-social-icon"
                style={{ color: "#000" }}
                aria-label="Visit our Instagram"
              >
                <BsInstagram />
              </a>
              <a href="" className="nav-social-icon" style={{ color: "#000" }}>
                <FaTwitter />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Nav;
