import { createSlice } from "@reduxjs/toolkit";
import Lavender from "../assets/Background/Lavender.png";
import Cat from "../assets/Body/Cat.png";
import MutantEyes from "../assets/Eyes+Eyewear/MutantEyes.png";
import NoHat from "../assets/Hair+Hats/NoHat.png";
import NoOutfit from "../assets/Outfits/NoOutfit.png";
import None from "../assets/Accessories/None.png";
export const traitsSlice = createSlice({
  name: "traits",
  initialState: {
    background: Lavender,
    bodyType: Cat,
    eyes_eyewear: MutantEyes,
    hair_hats: NoHat,
    outfits: NoOutfit,
    accessories: None,
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

export const {
  setBackground,
  setBodyType,
  setEyes,
  setHairHats,
  setOutfits,
  setAccessories,
} = traitsSlice.actions;
export default traitsSlice.reducer;
