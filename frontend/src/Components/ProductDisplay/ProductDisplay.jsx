import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star from "../Assets/star.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [size, setSize] = useState("");

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
          <img src={product.image} alt="img" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs.{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            Rs.{product.new_price}
          </div>
        </div>
        <div
          className="productdisplay-right-description"
          style={{ visibility: "hidden" }}
        >
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div
          className="productdisplay-right-size"
          style={{ marginTop: "-5rem" }}
        >
          <h1>Select Size</h1>
          {/* <div className="productdisplay-right-sizes"> */}
          {/* <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div> */}
          <ToggleButtonGroup
            color="primary"
            value={size}
            exclusive
            onChange={(e, newSize) => setSize(newSize)}
            aria-label="Platform"
            sx={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <ToggleButton
              value="S"
              sx={{
                marginRight: "1rem",
                padding: "16px 20px",
                background: "#fbfbfb",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                width: "20px",
                color: "black",
              }}
            >
              S
            </ToggleButton>
            <ToggleButton
              value="M"
              sx={{
                marginRight: "1rem",
                padding: "16px 20px",
                background: "#fbfbfb",
                border: "none",
                borderLeft: "1px solid #ebebeb",
                borderRadius: "3px",
                cursor: "pointer",
                color: "black",
              }}
            >
              M
            </ToggleButton>
            <ToggleButton
              value="L"
              sx={{
                marginRight: "1rem",
                padding: "16px 20px",
                background: "#fbfbfb",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                color: "black",
              }}
            >
              L
            </ToggleButton>
            <ToggleButton
              value="XL"
              sx={{
                marginRight: "1rem",
                padding: "16px 20px",
                background: "#fbfbfb",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                color: "black",
              }}
            >
              XL
            </ToggleButton>
            <ToggleButton
              value="XLL"
              sx={{
                marginRight: "1rem",
                padding: "16px 20px",
                background: "#fbfbfb",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                color: "black",
              }}
            >
              XLL
            </ToggleButton>
          </ToggleButtonGroup>
          {/* </div> */}
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="addToCart"
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
