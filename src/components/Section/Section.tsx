import { useEffect, useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import ImageContainer from "../Images/ImageContainer";

type Tab =
  | "Biodiversity"
  | "River System"
  | "Climate and Environment"
  | "Cultural Diversity"
  | "Threats and Conservation";

const tabs: Tab[] = [
  "Biodiversity",
  "River System",
  "Climate and Environment",
  "Cultural Diversity",
  "Threats and Conservation",
];


const Section = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, clickSelectedTab] = useState<Tab>(tabs[0]);

  useEffect(() => {
    console.log("selectedTab", selectedTab);
  }
  , [selectedTab]);
  return (
    <div className="h-screen snap-start p-6 flex justify-start">
      <Dropdown
        clickSelectedTab={clickSelectedTab}
        selectedTab={selectedTab}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <ImageContainer 
      isOpen={isOpen}
      selectedImage={selectedTab} />
    </div>
  );
};

export default Section;
