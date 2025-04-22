import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-container-sections">
          <div className="footer-container-sections-company">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#service">Our Services</a>
              </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-container-sections-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:calicutsleepstore@gmail.com">
                  calicutsleepstore@gmail.com
                </a>
              </li>
              <li>
                Phone: <a href="tel:+918281002395">+91 8281002395</a>
              </li>
              <li>
                Address: D Sleep Store, ground floor Opp. SP Bakery, Bhavooka
                Square, Kundayithode
              </li>
            </ul>
          </div>

          <div className="footer-container-sections-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/dsleepstore?igsh=MWZvOXZjNmdyODlqYQ==&utm_source=ig_contact_invite">
                <FaInstagram />
              </a>
              <a href="https://wa.me/918281002395" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-container-copyright">
          <p>&copy; 2023 Mattress Company. All rights reserved.</p>
          <span>
            Made by{" "}
            <a href="https://www.instagram.com/marketlube/">marketlube</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
