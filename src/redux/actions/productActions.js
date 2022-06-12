import { SET_PRODUCT_LIST } from "../types/productTypes";

export const setProductListAction = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});
