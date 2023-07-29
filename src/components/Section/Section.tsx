import { useEffect, useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import ImageContainer from "../Images/ImageContainer";
import { LayoutGroup } from "framer-motion";
import LearnItem from "../LearnItem/LearnItem";
import Quiz from "../Quiz/Quiz";
import FunFact from "../FunFact/FunFact";

type Tab =
  | "Amazon's Remarkable Canopy"
  | "Flying Rivers"
  | "Medicinal Treasure Chest"
  | "Amazon's Nightlife"
  | "The 'Garden Cities' of Leafcutter Ants"
  | "Whispering Trees"
  | "Resourceful Epiphytes";

const tabs: Tab[] = [
  "Amazon's Remarkable Canopy",
  "Flying Rivers",
  "Medicinal Treasure Chest",
  "Amazon's Nightlife",
  "The 'Garden Cities' of Leafcutter Ants",
  "Whispering Trees",
  "Resourceful Epiphytes",
];

const Section = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, clickSelectedTab] = useState<Tab>(tabs[0]);
  
  useEffect(() => {
    console.log("selectedTab", selectedTab);
  }, [selectedTab]);
  return (
    <section className="h-screen p-6 grid sm:grid-cols-2 sm:grid-rows-2 gap-2">
      <LayoutGroup>
      <Dropdown
        clickSelectedTab={clickSelectedTab}
        selectedTab={selectedTab}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
       <LearnItem 
       setIsOpen={setIsOpen}
       isOpen={isOpen}
       selectedTab={selectedTab} />
      <FunFact/>
     
      {/* <ImageContainer isOpen={isOpen} selectedImage={selectedTab} /> */}
      </LayoutGroup>
    </section>
  );
};

export default Section;
