import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOutfits } from "../../redux/traitsSlice";
import "./traits.css";
import AmongUHoodie from "../../assets/Outfits/AmongUHoodie.png";
import BlackSuit from "../../assets/Outfits/BlackSuit.png";
import BlueDenim from "../../assets/Outfits/BlueDenim.png";
import BlueJumpsuit from "../../assets/Outfits/BlueJumpsuit.png";
import FireTee from "../../assets/Outfits/FireTee.png";
import FroggySuit from "../../assets/Outfits/FroggySuit.png";
import IcyTee from "../../assets/Outfits/IcyTee.png";
import LongTrench from "../../assets/Outfits/LongTrench.png";
import LoveTank from "../../assets/Outfits/LoveTank.png";
import MorphSuit from "../../assets/Outfits/MorphSuit.png";
import NoOutfit from "../../assets/Outfits/NoOutfit.png";
import OrangeJacket from "../../assets/Outfits/OrangeJacket.png";
import Parka from "../../assets/Outfits/Parka.png";
import PinkJumpsuit from "../../assets/Outfits/PinkJumpsuit.png";
import PinkLoveHoodie from "../../assets/Outfits/PinkLoveHoodie.png";
import RacerSuitBlue from "../../assets/Outfits/RacerSuitBlue.png";
import Raptor from "../../assets/Outfits/Raptor.png";
import RedJumper from "../../assets/Outfits/RedJumper.png";
import RedRexSuit from "../../assets/Outfits/RedRexSuit.png";
import SkullHoodie from "../../assets/Outfits/SkullHoodie.png";
import Slatsuki from "../../assets/Outfits/Slatsuki.png";
import SummerTank from "../../assets/Outfits/SummerTank.png";
import TechHoodie from "../../assets/Outfits/TechHoodie.png";
import TechSuit from "../../assets/Outfits/TechSuit.png";
import WashedDenim from "../../assets/Outfits/WashedDenim.png";
import WhiteTux from "../../assets/Outfits/WhiteTux.png";

function Outfits() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const outfitType = [
    NoOutfit,
    AmongUHoodie,
    BlackSuit,
    BlueDenim,
    BlueJumpsuit,
    FireTee,
    FroggySuit,
    IcyTee,
    LongTrench,
    LoveTank,
    MorphSuit,
    OrangeJacket,
    Parka,
    PinkJumpsuit,
    PinkLoveHoodie,
    RacerSuitBlue,
    Raptor,
    RedJumper,
    RedRexSuit,
    SkullHoodie,
    Slatsuki,
    SummerTank,
    TechHoodie,
    TechSuit,
    WashedDenim,
    WhiteTux,
  ];

  return (
    <div>
      <h2 className='traitName' onClick={() => setIsVisible(!isVisible)}>
        Outfits
      </h2>
      {isVisible && (
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
      )}
    </div>
  );
}

export default Outfits;
