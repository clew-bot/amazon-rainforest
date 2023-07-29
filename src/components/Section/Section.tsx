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
    <section className="h-screen p-6 ">
<div className="grid grid-flow-row-dense items-start gap-2">
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
      </div>
      {/* <ImageContainer isOpen={isOpen} selectedImage={selectedTab} /> */}

    </section>
  );
};

export default Section;
