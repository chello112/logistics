import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "../features/orders/orderSlice";
import statusReducer from "../features/orders/orderStatusOptions";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    status: statusReducer,
  },
});
