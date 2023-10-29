import { combineReducers } from "@reduxjs/toolkit";
import traitsReducer from "./traitsSlice"; // Path might vary based on your file structure

const rootReducer = combineReducers({
  traits: traitsReducer,
  // ... You can add other slice reducers here in the future
});

export default rootReducer;
