import { createSlice } from "@reduxjs/toolkit";
import Sky from "../assets/Background/OrangeCream.png";
import Monke from "../assets/Body/Monke.png";
import Undead from "../assets/Eyes+Eyewear/Undead.png";
import NoHat from "../assets/Hair+Hats/NoHat.png";
import NoOutfit from "../assets/Outfits/NoOutfit.png";
import None from "../assets/Accessories/None.png";
export const traitsSlice = createSlice({
  name: "traits",
  initialState: {
    background: Sky,
    bodyType: Monke,
    eyes_eyewear: Undead,
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
