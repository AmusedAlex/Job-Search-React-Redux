import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartReducer from "../reducers/cartReducer.js";
import jobReducer from "../reducers/jobReducer.js";

const bigReducer = combineReducers({
  cart: cartReducer,
  stock: jobReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
