import React from "react";
import img1 from "../Images/card1.png";
import img3 from "../Images/card3.png";
import img5 from "../Images/card5.png";
import banner from "../Images/paybanner.png";
import Product from "./Product";

function Card() {
  // Card Component
  return (
    <div>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="p-2">
          <img className="w-100" src={img1} alt="card" />
        </div>
        <div className="p-2">
          <img className="w-100" src={img3} alt="card" />
        </div>
        <div className="p-2">
          <img className="w-100" src={img5} alt="card" />
        </div>
      </div>
      <div>
        <img className="w-100" src={banner} alt="" />
      </div>
      <Product />
    </div>
  );
}

export default Card;
