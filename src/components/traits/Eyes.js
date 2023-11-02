import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEyes } from "../../redux/traitsSlice";
import "./traits.css";
import ThreeDGlasses from "../../assets/Eyes+Eyewear/3DGlasses.png";
import BikerGoggles from "../../assets/Eyes+Eyewear/BikerGoggles.png";
import CyclopsEye from "../../assets/Eyes+Eyewear/CyclopsEye.png";
import EngineeringGoggles from "../../assets/Eyes+Eyewear/EngineeringGoggles.png";
import FashShadesWhite from "../../assets/Eyes+Eyewear/FashShadesWhite.png";
import FutureShades from "../../assets/Eyes+Eyewear/FutureShades.png";
import GalacticVision from "../../assets/Eyes+Eyewear/GalacticVision.png";
import HavanaShades from "../../assets/Eyes+Eyewear/HavanaShades.png";
import IdcShades from "../../assets/Eyes+Eyewear/IdcShades.png";
import MutantEyes from "../../assets/Eyes+Eyewear/MutantEyes.png";
import PowerUp from "../../assets/Eyes+Eyewear/PowerUp.png";
import SnowboardGoggles from "../../assets/Eyes+Eyewear/SnowboardGoggles.png";
import StonedClops from "../../assets/Eyes+Eyewear/StonedClops.png";
import StonerGlasses from "../../assets/Eyes+Eyewear/StonerGlasses.png";
import TechVisor from "../../assets/Eyes+Eyewear/TechVisor.png";
import Uncaring from "../../assets/Eyes+Eyewear/Uncaring.png";
import Undead from "../../assets/Eyes+Eyewear/Undead.png";

function Eyes() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const eyeTypes = [
    ThreeDGlasses,
    BikerGoggles,
    CyclopsEye,
    EngineeringGoggles,
    FashShadesWhite,
    FutureShades,
    GalacticVision,
    HavanaShades,
    IdcShades,
    MutantEyes,
    PowerUp,
    SnowboardGoggles,
    StonedClops,
    StonerGlasses,
    TechVisor,
    Uncaring,
    Undead,
  ];

  return (
    <div>
      <h2 className='traitName' onClick={() => setIsVisible(!isVisible)}>
        Eyes+Eyewear
      </h2>
      {isVisible && (
        <div className='Container'>
          {eyeTypes.map((eyes, index) => (
            <img
              key={index}
              src={eyes}
              alt={`${eyes} thumbnail`}
              className='Thumbnail'
              onClick={() => dispatch(setEyes(eyes))}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Eyes;
