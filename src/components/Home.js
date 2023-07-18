import React from "react";
import BannerBackground from "../assets/bg-atas.png";
import coklat from "../assets/coklat.png"
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to Kedai Mate
          </h1>
          <p className="primary-text">
            Immediately feel the delicious sensation before it runs out and 
            spread kindness in every portion!
          </p>
          <a href="https://wa.me/6283191763311" target="_blank">
            <button className="secondary-button">
              Order Now <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={coklat} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
