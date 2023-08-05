import React from "react";
import AboutBackground from "../assets/bg-bawah.png";
import AboutBackgroundImage from "../assets/pancong.png";
import { FiArrowRight } from "react-icons/fi";
const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" width='300'/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Best pancong in town!
        </h1>
        <p className="primary-text">
          Kedai Mate has been established since 2017 until now, we are engaged in food and beverages which are certainly liked by all ages. We are located on Jalan Pekapuran, Depok City with operating hours open from 14.00 WIB to 23.00 WIB.
        </p>
        <div className="about-buttons-container">
          <a href="https://www.google.com/maps/dir//Jl.+Anggur+Raya+No.2,+Sukatani,+Kec.+Tapos,+Kota+Depok,+Jawa+Barat+16454/@-6.3975206,106.8148715,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e69eb655bb9011d:0x1d87185803b3e996!2m2!1d106.8849123!2d-6.3975253?entry=ttu" target="_blank">
            <button className="secondary-button">View in Maps <FiArrowRight />{" "}</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;