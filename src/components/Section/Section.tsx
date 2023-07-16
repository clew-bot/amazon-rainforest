import { useRef, useState } from "react";
import tiger from "../../assets/images/tiger.jpg";
import Dropdown from "../Dropdown/Dropdown";

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
  return (
    <div className="h-screen snap-start p-6">
      <Dropdown
        clickSelectedTab={clickSelectedTab}
        selectedTab={selectedTab}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <img className="h-64" src={tiger} alt="" />
    </div>
  );
};

export default Section;
