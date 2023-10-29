import React from "react";
import MainImage from "./components/MainImage";
import Backgrounds from "./components/traits/Backgrounds";
import BodyType from "./components/traits/Body";
import Eyes from "./components/traits/Eyes";
function App() {
  return (
    <div className='App'>
      {/* Trait selection components */}
      <Backgrounds />
      {""}
      {/* ... other trait components */}
      <BodyType />
      {""}
      <Eyes />
      {""}
      {/* Main Image Display */}
      <MainImage />
    </div>
  );
}

export default App;
