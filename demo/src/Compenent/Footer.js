import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi"
import { PiTelegramLogo } from "react-icons/pi";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="section">
          <div className="section_col">
            <ul>
              <li><FaInstagram /></li>
              <li><CiFacebook /></li>
              <li><FiTwitter /></li>
              <li><CiYoutube /></li>
              <li><PiTelegramLogo /></li>
            </ul>
          </div>
          <div className="section_text">
            <ul>
              <li>Home</li>
              <li>News</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Our team</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg_color" />
    </>
  );
}

export default Footer
