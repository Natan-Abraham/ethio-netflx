import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__social">
          <FaFacebook className="footer__social-icon" />
          <FaInstagram className="footer__social-icon" />
          <FaTwitter className="footer__social-icon" />
          <FaYoutube className="footer__social-icon" />
        </div>

        <div className="footer__links">
          <div className="footer__links-column">
            <a href="/">Audio and Subtitles</a>
            <a href="/">Media Center</a>
            <a href="/">Privacy</a>
            <a href="/">Contact Us</a>
          </div>
          <div className="footer__links-column">
            <a href="/">Audio Description</a>
            <a href="/">Investor Relations</a>
            <a href="/">Legal Notices</a>
          </div>
          <div className="footer__links-column">
            <a href="/">Help Center</a>
            <a href="/">Jobs</a>
            <a href="/">Cookie Preferences</a>
          </div>
          <div className="footer__links-column">
            <a href="/">Gift Cards</a>
            <a href="/">Terms of Use</a>
            <a href="/">Corporate Information</a>
          </div>
        </div>

        <div className="footer__language">
          <select className="footer__language-select">
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
