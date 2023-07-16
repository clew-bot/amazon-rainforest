import cultural from "../../assets/images/cultural.jpg";
import riverSystem from "../../assets/images/riversystem.jpg";
import climate from "../../assets/images/climate.jpg";
import biodiversity from "../../assets/images/biodiversity.jpg";
import threat from "../../assets/images/threat.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
interface ImageContainerProps {
  selectedImage: keyof typeof imageMap;
  isOpen: boolean;
}

const imageMap = {
  Biodiversity: biodiversity,
  "River System": riverSystem,
  "Climate and Environment": climate,
  "Cultural Diversity": cultural,
  "Threats and Conservation": threat,
};

const ImageContainer = ({ selectedImage, isOpen }: ImageContainerProps) => {

  useEffect(() => {
    console.log("selectedImage", selectedImage);
  }
  , [selectedImage]);
  return (
    <AnimatePresence>
      <div className="right-0 absolute w-1/2 border-4 border-black rounded-md h-full font-display">
      <div className="bg-black">
        <h2 className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline ">Discover</h2>
      </div>
    <motion.div
    key={selectedImage}
    initial={{ opacity: 0}}
    animate={{ opacity: 1, scale: [0, 1]}}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: .3, ease: "easeOut" }}
    >
  
lorem*99
      {/* <img className="absolute opacity-1 object-fit inset-1" src={imageMap[selectedImage]} alt="" /> */}

    
    </motion.div>
    </div>
    </AnimatePresence>
  );
};

export default ImageContainer;
