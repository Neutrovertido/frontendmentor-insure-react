import React from "react";

const Information = () => {
  return (
    <div className="information">
      <div className="line"></div>
      <h2>We're different</h2>
      <div className="quality">
        <div className="container">
          <img src="/img/icon-snappy-process.svg" alt="Snappy Process" />
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </div>
        <div className="container">
          <img src="/img/icon-affordable-prices.svg" alt="Affordable Prices" />
          <h3>Affordable Prices</h3>
          <p>
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="container">
          <img src="/img/icon-people-first.svg" alt="People First" />
          <h3>People First</h3>
          <p>
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it.
          </p>
        </div>
      </div>
      <div className="banner">
        <h2>Find out more about how we work</h2>
        <a href="#" className="btn">HOW WE WORK</a>
      </div>
    </div>
  );
};

export default Information;
