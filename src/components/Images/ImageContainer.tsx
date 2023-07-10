import cultural from "../../assets/images/cultural.jpg";
import riverSystem from "../../assets/images/riversystem.jpg";
import climate from "../../assets/images/climate.jpg";
import biodiversity from "../../assets/images/biodiversity.jpg";
import threat from "../../assets/images/threat.jpg";
import { motion, useAnimate, AnimatePresence, stagger } from "framer-motion";
import { useEffect } from "react";
import info from "../../assets/images/info.png";

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

const staggerText = stagger(0.1, { startDelay: 0.15 });

interface TextContainerProps {
  selectedText: keyof typeof textMap;
}

const textMap = {
  Biodiversity:
    "The Amazon Rainforest is home to over 400 billion individual trees representing 16,000 species. There are approximately 2.5 million species of insects living in the Amazon Rainforest. At least 40,000 plant species are present in this rainforest, including the world's largest collection of orchids and many medicinal plants used in traditional and modern medicines. Over 430 species of mammals, 378 species of reptiles, and over 400 species of amphibians can be found within the Amazon. The Amazon Rainforest is a sanctuary for around 1300 different bird species.",
  "River System":
    "The Amazon River is the largest river in the world by volume. The Amazon River is 6,992 km long. The Amazon River has over 1,100 tributaries, 17 of which are longer than 1,000 miles. The Amazon River discharges 209,000 cubic meters of water per second into the Atlantic Ocean. The Amazon River is responsible for about 20% of the world's total river flow. The Amazon River is responsible for about 20% of the world's total river flow. The Amazon River is responsible for about 20% of the world's total river flow.",
  "Climate and Environment":
    "The Amazon Rainforest is the largest tropical rainforest in the world. The Amazon Rainforest covers an area of 5.5 million square kilometers. The Amazon Rainforest is located in South America. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity. The Amazon Rainforest is home to more than 10% of the world's biodiversity.",
  "Cultural Diversity":
    "The Amazon Rainforest is home to more than 400 distinct indigenous groups, some of which have remained uncontacted. Indigenous cultures in the Amazon have a profound knowledge of the forest and its diverse flora and fauna, with unique languages, customs, and traditions. Each tribe has its distinct languages, with more than 170 different languages spoken in the Amazon Rainforest.",
  "Threats and Conservation":
    "The Amazon Rainforest is home to more than 400 distinct indigenous groups, some of which have remained uncontacted. Indigenous cultures in the Amazon have a profound knowledge of the forest and its diverse flora and fauna, with unique languages, customs, and traditions. Each tribe has its distinct languages, with more than 170 different languages spoken in the Amazon Rainforest.",
};

const ImageContainer = ({ selectedImage, isOpen }: ImageContainerProps) => {
  const imageVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: {filter: "blur(0px)", opacity: 1 },
  };

  useEffect(() => {
    console.log("isOpen", isOpen);
  }
  , [isOpen])

  return (
    <div className=" max-h-full h-full sm:w-2/3 flex justify-center items-start relative gap-1 border-4 border-black rounded-lg">
      <div>
      <motion.button className="imageButton -left-2 top-2 font-display absolute z-10 rounded p-2 border-black bg-amber-400 shadow-lg font-bold rounded-r-lg">
      <img width="25px" src={info} alt="" />
      </motion.button>
      </div>
      <AnimatePresence>
        { isOpen && (
        <motion.img
            key={selectedImage}
            src={imageMap[selectedImage]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            transition={{ duration: 1 }}
            className="absolute h-full w-full object-cover rounded"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageContainer;
