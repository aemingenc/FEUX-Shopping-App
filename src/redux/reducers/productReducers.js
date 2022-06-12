import { SET_PRODUCT_LIST } from "../types/productTypes";

const initialState = {
  productList: [],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: payload,
      };

    default:
      return state;
  }
};

export default productReducers;
