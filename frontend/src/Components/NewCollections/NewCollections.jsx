import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import shoes from "../Assets/subcategory/arrow.png";
import clothing from "../Assets/subcategory/clothing.png";
import accessories from "../Assets/subcategory/accessories.png";
import access2 from "../Assets/subcategory/access2.png";
import access3 from "../Assets/subcategory/access3.jpg";
import { Link, useParams } from "react-router-dom";

const NewCollections = (props) => {
  const { id } = useParams();
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        <div className="item">
          <Link to={`/collections/clothing`} style={{ textDecoration: "none" }}>
            <img src={clothing} alt="products" />
          </Link>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Clothing
          </p>
        </div>
        <div className="item">
          <Link to={`/collections/shoes`} style={{ textDecoration: "none" }}>
            <img src={shoes} alt="products" />
          </Link>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Shoes
          </p>
        </div>
        <div className="item">
          <Link
            to={`/collections/accessories`}
            style={{ textDecoration: "none" }}
          >
            <img src={access3} alt="products" height={200} />
          </Link>
          <p
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Accessories
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
