import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAccessories } from "../../redux/traitsSlice";
import "./traits.css";
import BlueLasers from "../../assets/Accessories/BlueLasers.png";
import ChinStrap from "../../assets/Accessories/ChinStrap.png";
import DestroyerLasers from "../../assets/Accessories/DestroyerLasers.png";
import GalacticPuke from "../../assets/Accessories/GalacticPuke.png";
import GrandpasPipe from "../../assets/Accessories/GrandpasPipe.png";
import LongBeard from "../../assets/Accessories/LongBeard.png";
import MoustacheBeard from "../../assets/Accessories/MoustacheBeard.png";
import None from "../../assets/Accessories/None.png";
import RainbowPuke from "../../assets/Accessories/RainbowPuke.png";

function Accessories() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const accessoryType = [
    None,
    BlueLasers,
    ChinStrap,
    DestroyerLasers,
    GalacticPuke,
    GrandpasPipe,
    LongBeard,
    MoustacheBeard,
    RainbowPuke,
  ];

  return (
    <div>
      <h2 className='traitName' onClick={() => setIsVisible(!isVisible)}>
        Accessories
      </h2>
      {isVisible && (
        <div className='Container'>
          {accessoryType.map((accessory, index) => (
            <img
              key={index}
              src={accessory}
              alt={`${accessory} thumbnail`}
              className='Thumbnail'
              onClick={() => dispatch(setAccessories(accessory))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Accessories;
