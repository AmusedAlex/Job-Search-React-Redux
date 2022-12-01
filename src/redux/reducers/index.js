const initialState = {
  cart: {
    data: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          data: [...state.cart.data, action.payload],
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          data: state.cart.data.filter((company, i) => {
            return i !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
