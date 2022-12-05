import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartReducer from "../reducers/cartReducer.js";

const bigReducer = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
