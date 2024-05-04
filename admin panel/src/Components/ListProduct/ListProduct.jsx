import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../Assets/cross_icon.png";
import {
  Box,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  Paper,
  InputBase,
  Divider,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [sortBy, setSortBy] = useState("SortBy");
  const [subCategorySortBy, setSubCategorySortBy] = useState("SortBy");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  console.log("allproducts :>> ", allproducts);

  const fetchInfo = () => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        let filteredArr = data.filter((item) => item);

        if (sortBy && sortBy !== "SortBy") {
          filteredArr = filteredArr.filter((item) => item.category === sortBy);
        }

        if (subCategorySortBy && subCategorySortBy !== "SortBy") {
          filteredArr = filteredArr.filter(
            (item) => item.subCategory === subCategorySortBy
          );
        }

        // Filter by search query
        if (searchQuery) {
          filteredArr = filteredArr.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setAllProducts(filteredArr);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, [sortBy, subCategorySortBy, searchQuery]);

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });

    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

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
    <>
      <div className="listproduct">
        <h1>All Products List</h1>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                fullWidth
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Product by name"
                inputProps={{ "aria-label": "search google maps" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Paper>
          </Box>
          <Box>
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
            {/* {sortBy && sortBy != "SortBy" && ( */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                id="demo-simple-select-helper"
                value={subCategorySortBy}
                onChange={(e) => setSubCategorySortBy(e.target.value)}
              >
                <MenuItem value={"SortBy"}>Sort By Category</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
            {/* )} */}
          </Box>
        </Box>

        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>

        <div className="listproduct-allproducts">
          <hr />
          {allproducts.length > 0 ? (
            allproducts.map((e) => {
              return (
                <div>
                  <div className="listproduct-format-main listproduct-format">
                    <img
                      className="listproduct-product-icon"
                      src={e.image}
                      alt=""
                    />
                    <p cartitems-product-title>{e.name}</p>
                    <p>Rs.{e.old_price}</p>
                    <p>Rs.{e.new_price}</p>
                    <p>{e.category}</p>
                    <img
                      className="listproduct-remove-icon"
                      onClick={() => {
                        removeProduct(e.id);
                      }}
                      src={cross_icon}
                      alt=""
                    />
                  </div>
                  <hr />
                </div>
              );
            })
          ) : (
            <h1>There is no product with this category or subcategory</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ListProduct;
