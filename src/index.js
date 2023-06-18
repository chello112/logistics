import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import { getOrders } from "./redux/features/orders/orderSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

store.dispatch(getOrders());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
