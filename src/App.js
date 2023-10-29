import React from "react";
import MainImage from "./components/MainImage";
import Backgrounds from "./components/traits/Backgrounds";
import BodyType from "./components/traits/Body";
import Eyes from "./components/traits/Eyes";
import HairHats from "./components/traits/Hair+Hats";
import "./index.css";
function App() {
  return (
    <div className='App'>
      {/* Trait selection components */}
      <div className='traitsMaster'>
        <Backgrounds />
        {/* ... other trait components ... */}
        <BodyType />
        <Eyes />
        <HairHats />
      </div>

      {/* Main Image Display */}
      <div className='mainImage'>
        <MainImage />
      </div>
    </div>
  );
}

export default App;
