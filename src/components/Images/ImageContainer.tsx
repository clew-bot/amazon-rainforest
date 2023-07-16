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
    <motion.div
    key={selectedImage}
    initial={{ opacity: 0}}
    animate={{ opacity: 1, scale: [0, 1]}}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: .3, ease: "easeOut" }}
    className="right-0 absolute w-1/2 border-4 border-red-900  h-full">

      {/* <img className="absolute opacity-1 object-fit inset-1" src={imageMap[selectedImage]} alt="" /> */}

    
    </motion.div>
    </AnimatePresence>
  );
};

export default ImageContainer;
