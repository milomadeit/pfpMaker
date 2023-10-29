import React from "react";
import { useSelector } from "react-redux";
import "./MainImage.css";

function MainImage() {
  const traits = useSelector((state) => state.traits);

  // The image source is a base64 string, directly taken from the traits.
  const bgSrc = traits.background; // this is the base64 string now
  const bodySrc = traits.bodyType;
  const eyeSrc = traits.eyes_eyewear;

  return (
    <div className='imageContainer'>
      <img src={bgSrc} alt='' className='imageLayer' />
      <img src={bodySrc} alt='' className='imageLayer' />
      <img src={eyeSrc} alt='' className='imageLayer' />
      {/* ... other trait layers */}
    </div>
  );
}

export default MainImage;
