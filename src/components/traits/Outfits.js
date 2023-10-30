import React from "react";
import { useDispatch } from "react-redux";
import { setOutfits } from "../../redux/traitsSlice";
import "./thumbnails.css";

import AmongUHoodie from "../../assets/Outfits/AmongUHoodie.png";
import BlackSuit from "../../assets/Outfits/BlackSuit.png";
import BlueDenim from "../../assets/Outfits/BlueDenim.png";
import BlueJumpsuit from "../../assets/Outfits/BlueJumpsuit.png";
import FireTee from "../../assets/Outfits/FireTee.png";
import FroggySuit from "../../assets/Outfits/FroggySuit.png";
import IcyTee from "../../assets/Outfits/IcyTee.png";
import LongTrench from "../../assets/Outfits/LongTrench.png";

function Outfits() {
  const dispatch = useDispatch();

  const outfitType = [
    AmongUHoodie,
    BlackSuit,
    BlueDenim,
    BlueJumpsuit,
    FireTee,
    FroggySuit,
    IcyTee,
    LongTrench,
  ];

  return (
    <div className='Container'>
      {outfitType.map((outfit, index) => (
        <img
          key={index}
          src={outfit}
          alt={`${outfit} thumbnail`}
          className='Thumbnail'
          onClick={() => dispatch(setOutfits(outfit))}
        />
      ))}
    </div>
  );
}

export default Outfits;
