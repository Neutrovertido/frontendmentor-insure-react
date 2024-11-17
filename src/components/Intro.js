import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <img
        src={process.env.PUBLIC_URL + '/img/bg-pattern-intro-right-desktop.svg'}
        className="pattern-right"
        alt="Background Pattern Right"
      />
      <div className="mtop">
        <img src={process.env.PUBLIC_URL + '/img/image-intro-desktop.jpg'} alt="people" className="introimg" />
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <a href="#" className="btn">VIEW PLANS</a>
      </div>
      <img
        src={process.env.PUBLIC_URL + '/img/bg-pattern-intro-left-desktop.svg'}
        className="pattern-left"
        alt="Background Pattern Left"
      />
    </div>
  );
};

export default Intro;
