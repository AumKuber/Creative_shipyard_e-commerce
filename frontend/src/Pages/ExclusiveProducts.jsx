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

const ExlusiveProducts = () => {
  const [allproducts, setAllProducts] = useState([]);

  const [sortBy, setSortBy] = useState("SortBy");
  const [subCategorySortBy, setSubCategorySortBy] = useState("SortBy");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 8;

  //   const fetchInfo = () => {
  //     fetch("http://localhost:4000/allproducts")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (sortBy && sortBy != "SortBy") {
  //           const filteredArr = data.filter(
  //             (item) => item?.category === sortBy && item?.new_price < 1000
  //           );
  //           setAllProducts(filteredArr);
  //         } else {
  //           const filteredArr = data.filter((item) => item?.new_price < 1000);
  //           setAllProducts(filteredArr);
  //         }
  //         setLoading(false);
  //       });
  //   };
  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        let filteredArr = data.filter((item) => item.new_price < 1000);

        if (sortBy && sortBy !== "SortBy") {
          filteredArr = filteredArr.filter((item) => item.category === sortBy);
        }

        if (subCategorySortBy && subCategorySortBy !== "SortBy") {
          filteredArr = filteredArr.filter(
            (item) => item.subCategory === subCategorySortBy
          );
        }

        setAllProducts(filteredArr);
        setLoading(false);
      });
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchInfo();
  }, [sortBy, subCategorySortBy]);

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
      <div className="shopcategory-indexSort" style={{ marginTop: "1rem" }}>
        <p>
          <span>
            Showing {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, allproducts.length)} out of{" "}
            {allproducts.length} Products
          </span>
        </p>
        <div className="">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              id="demo-simple-select-helper"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value={"SortBy"}>Sort By</MenuItem>
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="kid">Kids</MenuItem>
            </Select>
          </FormControl>
          {sortBy && sortBy != "SortBy" && (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                id="demo-simple-select-helper"
                value={subCategorySortBy}
                onChange={(e) => setSubCategorySortBy(e.target.value)}
              >
                <MenuItem value={"SortBy"}>Sort By</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
          )}
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
    </div>
  );
};

export default ExlusiveProducts;
