import "./SliderHero.css";
import React from "react";
import banner_1 from "../Assets/Slider/banner-1.jpg";
import banner_2 from "../Assets/Slider/banner-2.jpg";
import banner_3 from "../Assets/Slider/banner-3.jpg";
import { Link } from "react-router-dom";

const SliderHero = () => {
  return (
    <main>
      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                // src="./assets/images/banner-1.jpg"
                src={banner_1}
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending item</p>

                <h2 className="banner-title">Women's latest fashion sale</h2>

                <p className="banner-text">
                  starting at &dollar; <b>20</b>.00
                </p>

                <Link to="womens">
                  <a href="#" className="banner-btn">
                    Shop now
                  </a>
                </Link>
              </div>
            </div>

            <div className="slider-item">
              <img
                // src="./assets/images/banner-2.jpg"
                src={banner_2}
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern accessories</h2>

                <p className="banner-text">
                  starting at &dollar; <b>15</b>.00
                </p>

                <Link to="collections/accessories">
                  <a href="#" className="banner-btn">
                    Shop now
                  </a>
                </Link>
              </div>
            </div>

            <div className="slider-item">
              <img
                // src="./assets/images/banner-3.jpg"
                src={banner_3}
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at &dollar; <b>29</b>.99
                </p>

                <Link to="mens">
                  <a href="#" className="banner-btn">
                    Shop now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SliderHero;
