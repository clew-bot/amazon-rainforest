import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
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

    void animate(
      "li",
      isOpen
        ? { visibility: "visible", opacity: 1, scale: 1, filter: "blur(0px)", pointerEvents: 'auto' }
        : {
          visibility: "hidden", opacity: 0, scale: 0, filter: "blur(20px)", pointerEvents: 'none'
          },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
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
  shouldAnimate: boolean;
  setShouldAnimate: (shouldAnimate: boolean) => void;
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
      }, 100);
    } else {
      setIsOpen(false);
    }
  }, [isInView, setIsOpen]);

  const scope = useMenuAnimation(isOpen);
  const toggleDropdown = () => {

  

    // if(isDesktop) {
    //   return;
    // }
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full sm:w-1/2 flex-1" ref={scope}>
        <button
        ref={ref}
          className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-yellow-200 shadow-md text-left text-4xl underline"
          onClick={toggleDropdown}
        >
          Learn
        </button>
        <ul className="bg-slate-00 font-display font-bold relative rounded-b-md shadow-md border-4 border-t-0 border-black text-md md:text-xl sm:h-80">
          <div
          className="h-full absolute w-full bg-zinc-300 opacity-80"
          ></div>
          {tabs.map((tab) => {
            return (
              <motion.li
                key={tab}
                className={`${
                  selectedTab === tab ? "text-white" : "text-slate-900"
                } relative cursor-pointer hover:text-green-600 transition-colors duration-300 underlineease-in-out p-1`}
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
  );
};

export default Dropdown;
