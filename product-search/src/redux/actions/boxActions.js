import { UPDATE_BOX, CLEAR_BOX } from "../types/boxTypes";

export const updateBox = (productList) => ({
  type: UPDATE_BOX,
  payload: productList,
});

export const clearBox = () => ({
  type: CLEAR_BOX,
});
