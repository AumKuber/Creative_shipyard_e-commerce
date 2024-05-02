import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import exlusive_image from "../Assets/exclusive_image.png";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        {/* <h2>NEW ARRIVALS ONLY</h2>  */}
        <div>
          <div className="hero-hand-icon">
            <p>Hey</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Welcome To</p>
          <p>Creative Shipyard</p>
        </div>
        <div className="hero-latest-btn">
          <div
            onClick={() => {
              console.log("hello :>> ");
              window.scrollTo({
                top:
                  document.body.scrollHeight ||
                  document.documentElement.scrollHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Explore our Website
          </div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={exlusive_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
