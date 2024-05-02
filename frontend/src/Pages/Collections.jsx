import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link, useParams } from "react-router-dom";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Pagination } from "@mui/material";

const Collections = () => {
  const { id } = useParams();
  console.log("id :>> ", id);
  const [allproducts, setAllProducts] = useState([]);

  const [sortBy, setSortBy] = useState("SortBy");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 8;

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        if (sortBy && sortBy != "SortBy") {
          const filteredArr = data.filter((item) => item?.subCategory === id);
          setAllProducts(filteredArr);
        } else {
          const filteredArr = data.filter((item) => item?.subCategory === id);
          setAllProducts(filteredArr);
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchInfo();
  }, [sortBy, id]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allproducts.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="shopcategory">
      {/* <img
        src={props.banner}
        className="shopcategory-banner"
        alt=""
        height={400}
      /> */}
      <div className="shopcategory-indexSort">
        <p>
          {/* <span>Showing 1 - 12</span> out of 54 Products */}
          <span>
            Showing {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, allproducts.length)} out of{" "}
            {allproducts.length} Products
          </span>
        </p>
        {/* <div className="shopcategory-sort"> */}
        <div className="">
          {/* Sort by <img src={dropdown_icon} alt="" /> */}
          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              id="demo-simple-select-helper"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value={"SortBy"}>Sort By</MenuItem>
              <MenuItem value="clothing">Clothing</MenuItem>
              <MenuItem value="shoes">Shoes</MenuItem>
              <MenuItem value="accessories">Accessories</MenuItem>
              <MenuItem value="gifts">Gifts</MenuItem>
              <MenuItem value="outwear">Outerwear</MenuItem>
            </Select>
          </FormControl> */}
        </div>
      </div>
      <div className="shopcategory-products">
        {currentItems.length > 0 ? (
          currentItems.map((item, i) => {
            return (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })
        ) : (
          <h1>There is no item with these collections</h1>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            marginTop: "2rem",
          }}
        >
          <Pagination
            count={Math.ceil(allproducts.length / itemsPerPage)}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
      {/* <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div> */}
    </div>
  );
};

export default Collections;
