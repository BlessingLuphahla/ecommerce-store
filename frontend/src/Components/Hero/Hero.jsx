import React from "react";
import "./Hero.css";
import hero from "../assets/images/hero.jpg";
import ArrowLeft from "../assets/svgs/arrow-left.svg";
import smile from "../assets/svgs/smile.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>new arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={smile} alt="hero" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={ArrowLeft} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
