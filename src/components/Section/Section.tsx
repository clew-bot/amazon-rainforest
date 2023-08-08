import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import LearnItem from "../LearnItem/LearnItem";
import Quiz from "../Quiz/Quiz";
import Header from "./header.jpg"
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



const Section = ( ) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedTab, clickSelectedTab] = useState<Tab>(tabs[0]);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  return (
    <section className="thirdSection rounded-xl w-full bg-white relative z-10">
      
      {/* <div className="absolute h-full w-full -z-10 bg-orange-100 opacity-50 rounded-xl"></div> */}

            <img
     
          src={Header}
          alt="The Amazon Rainforest"
          className="absolute inset-0 object-cover w-full h-full -z-10 rounded-lg bg-black opacity-50"
        />
<div className="flex items-start gap-2 flex-col sm:flex-row flex-wrap p-4">
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
       <Quiz />
      </div>

    </section>
  );
};

export default Section;
