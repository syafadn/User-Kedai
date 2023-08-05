import React from "react";
import Logo from "../assets/mate.png";
import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" width="100"/>
        </div>
        <div className="footer-icons">
          <a href="https://instagram.com/kedaimate" target="_blank">
            <BsInstagram />  
          </a>
          <a href="https://www.tiktok.com/@amateeu?_t=8e5rFSd4vT8&_r=1" target="_blank">
            <BsTiktok />  
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Jl. Bhakti Abri No.4, RW.08</span>
          <label>Sukamaju Baru, Cimanggis</label>
        </div>
        <div className="footer-section-columns">
          <span></span>
        </div>
        <div className="footer-section-columns">
          <span>kedaimate@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span></span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
