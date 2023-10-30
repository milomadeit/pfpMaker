import React from "react";
import { useDispatch } from "react-redux";
import { setAccessories } from "../../redux/traitsSlice";

import BlueLasers from "../../assets/Accessories/BlueLasers.png";
import ChinStrap from "../../assets/Accessories/ChinStrap.png";
import DestroyerLasers from "../../assets/Accessories/DestroyerLasers.png";
import GalacticPuke from "../../assets/Accessories/GalacticPuke.png";
import GrandpasPipe from "../../assets/Accessories/GrandpasPipe.png";
import LongBeard from "../../assets/Accessories/LongBeard.png";
import MoustacheBeard from "../../assets/Accessories/MoustacheBeard.png";
import RainbowPuke from "../../assets/Accessories/RainbowPuke.png";

function Accessories() {
  const dispatch = useDispatch();

  const accessoryType = [
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
  );
}

export default Accessories;
