import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initialState = {
  data: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,

        data: [...state.data, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,

        data: state.data.filter((company, i) => {
          return i !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
