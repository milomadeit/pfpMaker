import React from "react";
import { useDispatch } from "react-redux";
import { setBodyType } from "../../redux/traitsSlice";
import "./thumbnails.css";
import Basic1 from "../../assets/Body/Basic1.png";
import Basic2 from "../../assets/Body/Basic2.png";
import Bear from "../../assets/Body/Bear.png";
import Cat from "../../assets/Body/Cat.png";
import Cyclops from "../../assets/Body/Cyclops.png";
import Hellboy from "../../assets/Body/Hellboy.png";
import Monke from "../../assets/Body/Monke.png";
import Mutant from "../../assets/Body/Mutant.png";
import Reptile from "../../assets/Body/Reptile.png";
import Statue from "../../assets/Body/Statue.png";
import Zombie from "../../assets/Body/Zombie.png";

function BodyType() {
  const dispatch = useDispatch();

  const bodyTypes = [
    Basic1,
    Basic2,
    Bear,
    Cat,
    Cyclops,
    Hellboy,
    Monke,
    Mutant,
    Reptile,
    Statue,
    Zombie,
  ];

  const handleBodyTypeSelect = (body) => {
    dispatch(setBodyType(body));
  };

  return (
    <div className='Container'>
      {bodyTypes.map((bt, index) => (
        <img
          key={index}
          src={bt}
          alt={`${bt} thumbnail`}
          className='Thumbnail'
          onClick={() => handleBodyTypeSelect(bt)}
        />
      ))}
    </div>
  );
}

export default BodyType;
