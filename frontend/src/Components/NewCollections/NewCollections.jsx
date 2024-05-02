import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import shoes from "../Assets/subcategory/arrow.png";
import { Link, useParams } from "react-router-dom";

const NewCollections = (props) => {
  const { id } = useParams();
  console.log("id :>> ", id);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {/* {props.data.map((item,i)=>{
                return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })} */}
        {props?.data?.map((item) => (
          <div className="item">
            <Link
              to={`/collections/${item.value}`}
              style={{ textDecoration: "none" }}
            >
              <img src={shoes} alt="products" />
            </Link>
            <p>{item?.title}</p>
            {/* <div className="item-prices">
              <div className="item-price-new">Rs.{props?.new_price}</div>
              <div className="item-price-old">Rs.{props?.old_price}</div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
