import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-container-sections">
          <div className="footer-container-sections-company">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-container-sections-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>Email: info@mattress.com</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Address: 123 Sleep Street</li>
            </ul>
          </div>

          <div className="footer-container-sections-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-container-copyright">
          <p>&copy; 2023 Mattress Company. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
