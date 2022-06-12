import axios from "axios";

export const getProductList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: "SET_LOADING_TRUE" });
      const response = await axios.get("https://fakestoreapi.com/products");

      dispatch({ type: "SET_PRODUCT_LIST", payload: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "SET_LOADING_FALSE" });
    }
  };
};
export const getCategories = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: "SET_LOADING_TRUE" });
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      console.log("useess");
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "SET_LOADING_FALSE" });
    }
  };
};
