// store.js
import { createStore } from "redux";
import certificationReducer from "./reducer";

const store = createStore(certificationReducer);

export default store;
