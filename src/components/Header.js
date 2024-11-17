import React from "react";

const Header = () => {
  return (
    <header>
      <img src="./img/logo.svg" alt="INSURE" />
      <ul>
        <li><a href="#">HOW WE WORK</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">ACCOUNT</a></li>
        <li><a href="#" className="btn">VIEW PLANS</a></li>
      </ul>
    </header>
  );
};

export default Header;
