import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./MainImage.css";
import { saveToIPFS } from "../../services/ipfsService";

function MainImage() {
  const traits = useSelector((state) => state.traits);
  const canvasRef = useRef(null);

  // Image sources
  const bgSrc = traits.background;
  const bodySrc = traits.bodyType;
  const eyeSrc = traits.eyes_eyewear;
  const hairHatSrc = traits.hair_hats;
  const outfitSrc = traits.outfits;
  const accessorySrc = traits.accessories;

  useEffect(() => {
    // Drawing images onto canvas when traits change
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // List of image sources
    const sources = [
      bgSrc,
      bodySrc,
      hairHatSrc,
      eyeSrc,
      outfitSrc,
      accessorySrc,
    ];

    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    });
  }, [bgSrc, bodySrc, eyeSrc, hairHatSrc, outfitSrc, accessorySrc]);

  const saveImageToDesktop = () => {
    // Function to save canvas content as PNG
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "custom_pfp.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const saveImage = async () => {
    // upload up IPFS and get back CID
    // const canvas = canvasRef.current;
    // const blob = await new Promise((resolve) => canvas.toBlob(resolve));
    try {
      // const cid = await saveToIPFS(blob);
      saveImageToDesktop();
      // console.log(`Image saved to Desktop and IPFS with CID: ${cid}`);
      // Proceed to NFT minting or other steps with the CID
    } catch (error) {
      console.error("Error saving to IPFS:", error);
    }
  };

  return (
    <div className='imageContainer'>
      <canvas
        ref={canvasRef}
        width='1000'
        height='1000'
        style={{ display: "none" }}
      ></canvas>
      <div className='imageWrapper'>
        <img src={bgSrc} alt='' className='imageLayer' />
        <img src={bodySrc} alt='' className='imageLayer' />
        <img src={hairHatSrc} alt='' className='imageLayer' />
        <img src={eyeSrc} alt='' className='imageLayer' />
        <img src={outfitSrc} alt='' className='imageLayer' />
        <img src={accessorySrc} alt='' className='imageLayer' />
      </div>
      <div className='saveButtonWrapper'>
        <button onClick={saveImage} className='saveButton'>
          Save
        </button>
      </div>
    </div>
  );
}

export default MainImage;
