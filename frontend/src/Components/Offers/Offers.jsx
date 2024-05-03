import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
// import exlusive from "../Assets/exclusive.png";
// import exlusive1 from "../Assets/exclusive1.png";
// import exlusive2 from "../Assets/exclusive2.png";
// import exlusive3 from "../Assets/exclusive3.png";
// import exlusive4 from "../Assets/exclusive4.png";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate();
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button
          onClick={() => {
            navigate("exclusiveProducts");
          }}
        >
          Check now
        </button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
