import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

// Ensure the element with id "root" exists
const root = ReactDOM.createRoot(document.getElementById("root")); // This must match the id in your index.html

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
