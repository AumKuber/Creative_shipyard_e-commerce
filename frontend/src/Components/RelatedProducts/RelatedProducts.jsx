import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import data_product from "../Assets/data";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const RelatedProducts = () => {
  const { productId: id } = useParams();
  console.log("id :>> ", id);
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        if (id) {
          const product = data.find((item) => item?.id == id);
          const filteredArr = data.filter(
            (item) =>
              item.category === product.category &&
              item?.subCategory === product.subCategory
          );
          if (filteredArr.length > 4) {
            const shuffledArray = filteredArr.sort(() => Math.random() - 0.5);
            const newFilter = shuffledArray.filter(
              (item) => item.id != product.id
            );
            const newFilteredArr = newFilter.slice(0, 4);
            console.log("newFiltered :>> ", newFilteredArr);
            setAllProducts(newFilteredArr);
          } else {
            setAllProducts(filteredArr);
          }
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {allproducts.length > 0 ? (
          allproducts.map((item) => {
            return (
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })
        ) : (
          <h1>There is no related products</h1>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
