import { UPDATE_BOX, CLEAR_BOX } from "../types/boxTypes";

const initialState = {
  cartItems: [],
};

export const boxReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_BOX:
      return {
        ...state,
        cartItems: payload,
      };
      case CLEAR_BOX:
        return {
          ...state,
          cartItems: [],
        };
    default:
      return state;
  }
};

export default boxReducer;