import React from "react";
import bintang from "../assets/bintang.png"
const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonial">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          This product has a 4.7/5.0 rating on Google reviews with over 100 buyers responding.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <p>
          Kedai ini menyajikan kue pancong terenak dengan topping yang melimpah. 
          Selain itu tempatnya juga nyaman, bersih. Pelayannya pun ramah.
        </p>
        <div className="testimonials-stars-container">
          <img src={bintang} width="150px" />
        </div>
        <h2>Naufal Fatahilah</h2>
      </div>
    </div>
  );
};
export default Testimonial;