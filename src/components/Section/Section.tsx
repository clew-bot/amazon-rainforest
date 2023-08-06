import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import LearnItem from "../LearnItem/LearnItem";
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
  const [shouldAnimate, setShouldAnimate] = useState(false);
  return (
    <section className="firstSection rounded-xl w-full bg-white">
<div className="grid grid-flow-row-dense items-start gap-2 pt-1">
      <Dropdown
        shouldAnimate={shouldAnimate}
        setShouldAnimate={setShouldAnimate}
        clickSelectedTab={clickSelectedTab}
        selectedTab={selectedTab}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
       <LearnItem 
       shouldAnimate={shouldAnimate}
       setShouldAnimate={setShouldAnimate}
       setIsOpen={setIsOpen}
       isOpen={isOpen}
       selectedTab={selectedTab} />
      <FunFact 
      isOpen={isOpen}
      selectedTab={selectedTab}/>
      </div>
      {/* <ImageContainer isOpen={isOpen} selectedImage={selectedTab} /> */}

    </section>
  );
};

export default Section;
