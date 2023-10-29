import React from "react";
import { useDispatch } from "react-redux";
import { setHairHats } from "../../redux/traitsSlice";
import BackwardsRainbowCap from "../../assets/Hair+Hats/BackwardsRainbowCap.png";
import BasicFedora from "../../assets/Hair+Hats/BasicFedora.png";
import BlueBeret from "../../assets/Hair+Hats/BlueBeret.png";
import BowlCut from "../../assets/Hair+Hats/BowlCut.png";
import BowlCutRed from "../../assets/Hair+Hats/BowlCutRed.png";
import CommonHat from "../../assets/Hair+Hats/CommonHat.png";
import CowboyHat from "../../assets/Hair+Hats/CowboyHat.png";
import Crown from "../../assets/Hair+Hats/Crown.png";
import FishingHat from "../../assets/Hair+Hats/FishingHat.png";
import FlameOn from "../../assets/Hair+Hats/FlameOn.png";
import FloatyHat from "../../assets/Hair+Hats/FloatyHat.png";
import GreenBeret from "../../assets/Hair+Hats/GreenBeret.png";
import GreenFro from "../../assets/Hair+Hats/GreenFro.png";
import GreenWave from "../../assets/Hair+Hats/GreenWave.png";
import Hardhat from "../../assets/Hair+Hats/Hardhat.png";
import Horn from "../../assets/Hair+Hats/Horn.png";
import JokinPurp from "../../assets/Hair+Hats/JokinPurp.png";
import LongBlonde from "../../assets/Hair+Hats/LongBlonde.png";
import OrangeFro from "../../assets/Hair+Hats/OrangeFro.png";
import PilotCap from "../../assets/Hair+Hats/PilotCap.png";
import PurpleShortHair from "../../assets/Hair+Hats/PurpleShortHair.png";
import RedCap from "../../assets/Hair+Hats/RedCap.png";
import RedXCap from "../../assets/Hair+Hats/RedXCap.png";
import Santa from "../../assets/Hair+Hats/Santa.png";
import SpinnerCap from "../../assets/Hair+Hats/SpinnerCap.png";
import TopHat from "../../assets/Hair+Hats/TopHat.png";
import Xcap from "../../assets/Hair+Hats/Xcap.png";

function HairHats() {
  const dispatch = useDispatch();

  const hairHatTypes = [
    BackwardsRainbowCap,
    BasicFedora,
    BlueBeret,
    BowlCut,
    BowlCutRed,
    CommonHat,
    CowboyHat,
    Crown,
    FishingHat,
    FlameOn,
    FloatyHat,
    GreenBeret,
    GreenFro,
    GreenWave,
    Hardhat,
    Horn,
    JokinPurp,
    LongBlonde,
    OrangeFro,
    PilotCap,
    PurpleShortHair,
    RedCap,
    RedXCap,
    Santa,
    SpinnerCap,
    TopHat,
    Xcap,
  ];

  const handleHairHatSelect = (hairHat) => {
    dispatch(setHairHats(hairHat));
  };

  return (
    <div className='Container'>
      {hairHatTypes.map((hairHat, index) => (
        <img
          key={index}
          src={hairHat}
          alt={`${hairHat} thumbnail`}
          className='Thumbnail'
          onClick={() => handleHairHatSelect(hairHat)}
        />
      ))}
    </div>
  );
}

export default HairHats;
