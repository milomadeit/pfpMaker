import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer"; // Adjust path if necessary
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
