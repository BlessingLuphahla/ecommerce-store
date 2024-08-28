import React from "react";
import "./Footer.css";
import footerLogo from "../assets/images/axe-logo.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>SHOPPER</p>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="foooter-social-icons">
          <div className="footer-icons-container">
            <img src="" alt="github" />
            <img src="" alt="facebook" />
            <img src="" alt="whatsapp" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>CopyRight @ {new Date().getFullYear()}- All rights reserved </p>
      </div>
    </div>
  );
}

export default Footer;
