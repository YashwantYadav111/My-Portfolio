import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__row">
        {/* Left side text */}
        <p className="footer__text">© {year} Yadav • All Rights Reserved.</p>

        {/* Right side social links */}
        <div className="footer__links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yashwant-yadav-02a652323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/16A5afE9Yx//"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/yashwant_yadav000?igsh=MWk5YWhsa3ZwOGExeg==/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://wa.me/917007481212" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
