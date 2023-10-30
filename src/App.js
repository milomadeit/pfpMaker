import React from "react";
import MainImage from "./components/MainImage";
import Backgrounds from "./components/traits/Backgrounds";
import BodyType from "./components/traits/Body";
import Eyes from "./components/traits/Eyes";
import HairHats from "./components/traits/Hair+Hats";
import Outfits from "./components/traits/Outfits";
import Accessories from "./components/traits/Accessories";
import "./index.css";

function App() {
  return (
    <div className='App'>
      {/* Trait selection components */}
      <div className='traitsMaster'>
        <Backgrounds />
        <BodyType />
        <Eyes />
        <HairHats />
        <Outfits />
        <Accessories />
      </div>

      {/* Main Image Display */}
      <div className='mainImage'>
        <MainImage />
      </div>
    </div>
  );
}

export default App;
