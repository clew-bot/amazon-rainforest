import { useEffect, useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import ImageContainer from "../Images/ImageContainer";
import { LayoutGroup } from "framer-motion";
import LearnItem from "../LearnItem/LearnItem";

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
    <div className="h-screen snap-start p-6 flex justify-start gap-1 flex-wrap md:flex-nowrap">
      <LayoutGroup>
      <Dropdown
        clickSelectedTab={clickSelectedTab}
        selectedTab={selectedTab}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <LearnItem selectedTab={selectedTab} />
      {/* <ImageContainer isOpen={isOpen} selectedImage={selectedTab} /> */}
      </LayoutGroup>
    </div>
  );
};

export default Section;
