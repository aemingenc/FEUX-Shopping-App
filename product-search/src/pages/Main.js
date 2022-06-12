import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { getProductList } from "../redux/thunks/appThunks";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Header from "../components/Header";
import Category from "../components/Category";
import Basket from "../components/Basket";
import Order from "../components/Order";

const Main = () => {
  const dispatch = useDispatch();
  // distracting
  // const {loading,productList} = useSelector(state=>state)
  const { productList } = useSelector((state) => state.product);
  const [productListData, setProductListData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [sort, setSort] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const sortProducts = (e) => {
    const sorted = e.target.value;
    console.log(e.target.value);
    setSort(
      productListData
        .slice()
        .sort((a, b) =>
          sorted === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : sorted === "highest"
            ? a.price > b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        )
    );
    setProductListData(sort);
  };
  console.log(sort);

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

  //    if (loading) return <>Loading...</>;

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
              count={productListData.length}
              sortProducts={sortProducts}
              sort={sort}
            />
          </div>
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />

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
                      <Cards product={product} />
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
