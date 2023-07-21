import React from "react";
import kejuchoco from "../assets/kejuchoco.png"
import kejutira from "../assets/kejutira.png"
import tiramilo from "../assets/tiramilo.png"

const Work = () => {
  const workInfoData = [
    {
      image: kejuchoco,
      title: "Pancong Keju Choco Oreo",
      price: "Rp.16.000",
    },
    {
      image: kejutira,
      title: "Pancong Keju Tiramisu",
      price: "Rp.15.000"
    },
    {
      image: tiramilo,
      title: "Pancong Tiramisu Milo",
      price: "Rp.15.000"
    },
  ];
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Menu</p>
            <h1 className="primary-heading">Best Seller Menu</h1>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info" key={data.title}>
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h4>{data.title}</h4>
                    <div className="secondary-button-price">
                        {data.price}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Work;