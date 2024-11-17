import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <img src={process.env.PUBLIC_URL + '/img/logo.svg'} alt="INSURE" />
        <div className="url-icons">
          <a href="#"><img src={process.env.PUBLIC_URL + '/img/icon-facebook.svg'} alt="Facebook" /></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/img/icon-twitter.svg'} alt="Twitter" /></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/img/icon-pinterest.svg'} alt="Pinterest" /></a>
          <a href="#"><img src={process.env.PUBLIC_URL + '/img/icon-instagram.svg'} alt="Instagram" /></a>
        </div>
      </div>
      <div className="links">
        <div className="panel">
          <p>OUR COMPANY</p>
          <ul>
            <li><a href="#">HOW WE WORK</a></li>
            <li><a href="#">WHY INSURE</a></li>
            <li><a href="#">VIEW PLANS</a></li>
            <li><a href="#">REVIEWS</a></li>
          </ul>
        </div>
        <div className="panel">
          <p>HELP ME</p>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">TERMS OF USE</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
            <li><a href="#">COOKIES</a></li>
          </ul>
        </div>
        <div className="panel">
          <p>CONTACT</p>
          <ul>
            <li><a href="#">SALES</a></li>
            <li><a href="#">SUPPORT</a></li>
            <li><a href="#">LIVE CHAT</a></li>
          </ul>
        </div>
        <div className="panel">
          <p>OTHERS</p>
          <ul>
            <li><a href="#">CAREERS</a></li>
            <li><a href="#">PRESS</a></li>
            <li><a href="#">LICENSES</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
