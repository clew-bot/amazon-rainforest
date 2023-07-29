import { useState, useEffect, useRef } from "react";
import { animate, motion, stagger, useAnimate, useInView } from "framer-motion";

type Tab =
  | "Amazon's Remarkable Canopy"
  | "Flying Rivers"
  | "Medicinal Treasure Chest"
  | "Amazon's Nightlife"
  | "The 'Garden Cities' of Leafcutter Ants"
  | "Whispering Trees"
  | "Resourceful Epiphytes";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    console.log("hhh", isOpen);
    void animate(
      "ul",
      isOpen
        ? {
            height: "auto",
          }
        : 
        {
            height: "0px",
          },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
    // void animate(
    //   "ul",
    //   {

    //     clipPath: isOpen
    //       ? "inset(0% 0% 0% 0% round 0px)"
    //       : "inset(0% 0% 100% 0% round 0px)",
    //   },
    //   {
    //     type: "spring",
    //     bounce: 0,
    //     duration: 0.5,
    //   }
    // );

    void animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.3,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [animate, isOpen]);

  return scope;
};

interface DropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedTab: Tab;
  clickSelectedTab: (tab: Tab) => void;
}

const Dropdown = ({
  isOpen,
  setIsOpen,
  selectedTab,
  clickSelectedTab,
}: DropdownProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const tabs: Tab[] = [
    "Amazon's Remarkable Canopy",
    "Flying Rivers",
    "Medicinal Treasure Chest",
    "Amazon's Nightlife",
    "The 'Garden Cities' of Leafcutter Ants",
    "Whispering Trees",
    "Resourceful Epiphytes",
  ];

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1500);
    } else {
      setIsOpen(false);
    }
  }, [isInView, setIsOpen]);

  const scope = useMenuAnimation(isOpen);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full sm:col-start-1 sm:col-end-2" ref={scope}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        ref={ref}
      >
        <button
          className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline"
          onClick={toggleDropdown}
        >
          Learn
        </button>
        <ul className="bg-slate-00 font-display font-bold relative rounded-b-md shadow-md border-4 border-t-0 border-black sm:text-2xl h-full">
          {tabs.map((tab) => {
            return (
              <motion.li
                key={tab}
                className={`${
                  selectedTab === tab ? "text-white" : "text-slate-900"
                } relative cursor-pointer hover:text-green-500 transition-colors duration-300 underlineease-in-out p-1`}
                onClick={() => {
                  clickSelectedTab(tab);
                  setIsOpen(true);
                }}
              >
                {selectedTab === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="bg-zinc-900 w-full h-full absolute inset-0 -z-10"
                  ></motion.div>
                )}

                <span className=" z-10">{tab}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
