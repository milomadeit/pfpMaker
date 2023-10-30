import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";

// Add support for the Redux Dev Tools in your store configuration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store and pass in rootReducer and the compose enhancers
const store = createStore(rootReducer, composeEnhancers());

export default store;
