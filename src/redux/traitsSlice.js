import { createSlice } from "@reduxjs/toolkit";
import Sky from "../assets/Background/OrangeCream.png";
import Monke from "../assets/Body/Monke.png";
import Uncaring from "../assets/Eyes+Eyewear/Uncaring.png";
export const traitsSlice = createSlice({
  name: "traits",
  initialState: {
    background: Sky,
    bodyType: Monke,
    eyes_eyewear: Uncaring,
    hair_hats: "default",
    outfits: "default",
    accessories: "default",
  },
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    setBodyType: (state, action) => {
      state.bodyType = action.payload;
    },
    setEyes: (state, action) => {
      state.eyes_eyewear = action.payload;
    },
    setHairHats: (state, action) => {
      state.hair_hats = action.payload;
    },
    setOutfits: (state, action) => {
      state.outfits = action.payload;
    },
    setAccessories: (state, action) => {
      state.accessories = action.payload;
    },
  },
});

export const { setBackground, setBodyType, setEyes } = traitsSlice.actions;
export default traitsSlice.reducer;
