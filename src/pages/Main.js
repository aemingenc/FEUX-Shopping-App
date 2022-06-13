import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import { getProductList } from "../redux/thunks/appThunks";

import Cards from "../components/Cards";
import Header from "../components/Header";
import Category from "../components/Category";
import Order from "../components/Order";
import { updateBox } from "../redux/actions/boxActions";

const Main = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.box);

  const [productListData, setProductListData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  useEffect(() => {
    if (productList?.length) setProductListData(productList);
  }, [productList]);

  const onSearchChange = (value) => {
    const newData = productList.filter((product) =>
      product.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setProductListData(newData);
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      dispatch(
        updateBox(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        )
      );
    } else {
      dispatch(updateBox([...cartItems, { ...product, qty: 1 }]));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="category">
          <Category
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div>
          <div className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Enter your product name"
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Order
              productListData={productListData}
              setProductListData={setProductListData}
            />
          </div>
          <Container className="product_list">
            <Grid container spacing={3}>
              {productListData?.map((product) =>
                selectedCategories.length === 0 ||
                !Object.values(selectedCategories).includes(true) ? (
                  <Grid item key={product.id} xs={12} md={6} lg={4}>
                    <Cards key={product.id} product={product} onAdd={onAdd} />
                  </Grid>
                ) : (
                  selectedCategories[product.category] && (
                    <Grid item key={product.id} xs={12} md={6} lg={4}>
                      <Cards key={product.id} product={product} onAdd={onAdd} />
                    </Grid>
                  )
                )
              )}
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Main;
