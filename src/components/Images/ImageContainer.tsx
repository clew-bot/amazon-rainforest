import cultural from "../../assets/images/cultural.jpg"
import riverSystem from "../../assets/images/riversystem.jpg"
import climate from "../../assets/images/climate.jpg"
import biodiversity from "../../assets/images/biodiversity.jpg"
import threat from "../../assets/images/threat.jpg"
import { motion, animate, useAnimate, AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";
interface ImageContainerProps {
  selectedImage: keyof typeof imageMap
  }

  const imageMap = {
    "Biodiversity": biodiversity,
    "River System": riverSystem,
    "Climate and Environment": climate,
    "Cultural Diversity": cultural,
    "Threats and Conservation": threat,
  };

  interface TextContainerProps {
    selectedText: keyof typeof textMap
  }

  const textMap = {
    "Biodiversity": "The Amazon Rainforest is home to over 400 billion individual trees representing 16,000 species. There are approximately 2.5 million species of insects living in the Amazon Rainforest. At least 40,000 plant species are present in this rainforest, including the world's largest collection of orchids and many medicinal plants used in traditional and modern medicines. Over 430 species of mammals, 378 species of reptiles, and over 400 species of amphibians can be found within the Amazon. The Amazon Rainforest is a sanctuary for around 1300 different bird species.",
    "River System": "The Amazon River is the largest river in the world by volume. The Amazon River is 6,992 km long. The Amazon River has over 1,100 tributaries, 17 of which are longer than 1,000 miles. The Amazon River discharges 209,000 cubic meters of water per second into the Atlantic Ocean. The Amazon River is responsible for about 20% of the world's total river flow. The Amazon River is responsible for about 20% of the world's total river flow. The Amazon River is responsible for about 20% of the world's total river flow.",
    "Climate and Environment": "The Amazon Rainforest is the largest tropical rainforest in the world. The Amazon Rainforest covers an area of 5.5 million square kilometers. The Amazon Rainforest is located in South America. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity.",
    "Cultural Diversity": "The Amazon Rainforest is home to more than 400 distinct indigenous groups, some of which have remained uncontacted. Indigenous cultures in the Amazon have a profound knowledge of the forest and its diverse flora and fauna, with unique languages, customs, and traditions. Each tribe has its distinct languages, with more than 170 different languages spoken in the Amazon Rainforest.",
    "Threats and Conservation": "The Amazon Rainforest is home to more than 400 distinct indigenous groups, some of which have remained uncontacted. Indigenous cultures in the Amazon have a profound knowledge of the forest and its diverse flora and fauna, with unique languages, customs, and traditions. Each tribe has its distinct languages, with more than 170 different languages spoken in the Amazon Rainforest.",
  };

const ImageContainer = ({selectedImage}: ImageContainerProps) => {
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [scope, animate] = useAnimate();
  const imageVariants = {
    hidden: { opacity: 0 , transition: { duration: 5 }  },
    visible: { opacity: 1 , transition: { duration: 1 } },
  };
  function getVisibilityClass(imageName: string) {
    return selectedImage === imageName ? 'visible' : 'hidden';
  }

  // Format string by period followed by space into bullet points
  function formatText(text: string) {
    return text.split('. ').map((item, i) => (
      <li key={i}>{item}</li>
    ));
  }
  useEffect(() => {

   

    setSelectedImageSrc(imageMap[selectedImage]);
  }, [selectedImage]);

 
  return (
    <div ref={scope} className=" max-h-full h-full w-2/3 flex justify-center items-start relative gap-1 pl-1">
    <AnimatePresence>
      <div className="h-full w-full border-4 border-black p-2 bg-slate-100 rounded object-cover">
      {Object.keys(imageMap).map((imageKey, i) => (
        <motion.img
          key={imageKey}
          src={imageMap[imageKey]}
          alt={imageKey}
          className={`${getVisibilityClass(imageKey)} h-full w-full object-cover rounded`}
          variants={imageVariants}
          initial="hidden"
          animate={selectedImage === imageKey ? "visible" : "hidden"}
          exit="hidden"
        />
      ))}
      </div>
      <div className="h-full w-1/3 border-4 border-black p-2 bg-slate-100 rounded overflow-auto">
      {Object.keys(textMap).map((textKey, i) => (
        <motion.p

          key={i}
          className={`${getVisibilityClass(textKey)} w-full object-cover rounded whitespace-pre-line overflow-ellipsis`}
          variants={imageVariants}
          initial="hidden"
          animate={selectedImage === textKey ? "visible" : "hidden"}
          exit="hidden"
        >
          {formatText(textMap[textKey])}

        </motion.p>

      ))}
      </div>
    </AnimatePresence>
  </div>
  );
}


export default ImageContainer