import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBackground } from "../../redux/traitsSlice";
import "./traits.css";
import Concrete from "../../assets/Background/Concrete.png";
import Lavender from "../../assets/Background/Lavender.png";
import Mint from "../../assets/Background/Mint.png";
import OrangeCream from "../../assets/Background/OrangeCream.png";
import Peach from "../../assets/Background/Peach.png";
import Sky from "../../assets/Background/Sky.png";

function Backgrounds() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  // Assuming you have images named 'bg1.png', 'bg2.png', etc.
  const backgrounds = [Concrete, Lavender, Mint, OrangeCream, Peach, Sky]; // Add more as needed

  return (
    <div>
      <h2 className='traitName' onClick={() => setIsVisible(!isVisible)}>
        Backgrounds
      </h2>
      {isVisible && (
        <div className='Container'>
          {backgrounds.map((bg, index) => (
            <img
              key={index}
              src={bg}
              alt={`${bg} thumbnail`}
              className='Thumbnail'
              onClick={() => dispatch(setBackground(bg))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Backgrounds;
