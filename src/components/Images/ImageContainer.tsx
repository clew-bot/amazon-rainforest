import frog from "../../assets/images/3.jpg"
import amazon2 from "../../assets/images/2.jpg"
import amazon3 from "../../assets/images/3.jpg"
import biodiversity from "../../assets/images/biodiversity.jpg"
import { motion, animate, useAnimate, AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";
interface ImageContainerProps {
  selectedImage: keyof typeof imageMap
  }

  const imageMap = {
    "Biodiversity": biodiversity,
    "River System": amazon2,
    "Climate and Environment": amazon3,
    "Cultural Diversity": frog,
    "Threats and Conservation": frog,
  };
const ImageContainer = ({selectedImage}: ImageContainerProps) => {
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [scope, animate] = useAnimate();
  const imageVariants = {
    hidden: { opacity: 0 , transition: { duration: 5 }  },
    visible: { opacity: 1 , transition: { duration: 1 } },
  };
  function getVisibilityClass(imageName) {
    return selectedImage === imageName ? 'visible' : 'hidden';
  }
  useEffect(() => {

   

    setSelectedImageSrc(imageMap[selectedImage]);
  }, [selectedImage]);

 
  return (
    <div ref={scope} className="h-full w-2/3 border-2 flex justify-center items-center">
    <AnimatePresence>
      {Object.keys(imageMap).map((imageKey) => (
        <motion.img
          key={imageKey}
          src={imageMap[imageKey]}
          alt={imageKey}
          className={`${getVisibilityClass(imageKey)} h-full w-full object-cover`}
          variants={imageVariants}
          initial="hidden"
          animate={selectedImage === imageKey ? "visible" : "hidden"}
          exit="hidden"
        />
      ))}
    </AnimatePresence>
  </div>
  
  )
}

export default ImageContainer