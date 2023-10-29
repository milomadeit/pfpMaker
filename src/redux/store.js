import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer"; // Adjust path if necessary
import thunk from "redux-thunk";

// Step 1: Add support for the Redux Dev Tools in your store configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Step 2: Use the composed enhancers
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
