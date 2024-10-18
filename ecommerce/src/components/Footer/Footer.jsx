import React from 'react'
import "./Footer.css"
import footer_logo from "../assets/footer_logo.png"
import instagram_icon from "../assets/instagram_icon.png";
import github_icon from "../assets/github_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer_links">
        <li>Compony</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icon">
        <div className="footer_icon_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icon_container">
          <img src={github_icon} alt="" />
        </div>{" "}
        <div className="footer_icon_container">
          <img src={linkedin_icon} alt="" />
        </div>
      </div>
      <div className="footer_copyright">
<hr />
                     <p>Copyright @2024 All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer
