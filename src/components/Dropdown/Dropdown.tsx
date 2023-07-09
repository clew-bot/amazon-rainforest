import { useState, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import ImageContainer from "../Images/ImageContainer";
const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
const useMenuAnimation = (isOpen: boolean) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    void animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 0px)"
          : "inset(100% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    void animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );

    void animate(
      ".imageButton",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [animate, isOpen]);

  return scope;
};

const Dropdown = () => {
  const tabs: Tab[] = [
    "Biodiversity",
    "River System",
    "Climate and Environment",
    "Cultural Diversity",
    "Threats and Conservation",
  ];
  type Tab =
    | "Biodiversity"
    | "River System"
    | "Climate and Environment"
    | "Cultural Diversity"
    | "Threats and Conservation";
  const [isOpen, setIsOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [hoverSelectedTab, setHoverSelectedTab] = useState<Tab>(tabs[0]);

  const scope = useMenuAnimation(isOpen);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const triggerImage = (tab: Tab) => {
    setIsImageOpen(true);
    setHoverSelectedTab(tab);
  };

  return (
    <div
      className="flex-col sm:flex-row  w-full flex justify-between sm:items-start h-96"
      ref={scope}
    >
      <div className="inline-block w-1/3">
        <button
          className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline"
          onClick={toggleDropdown}
        >
          Learn
        </button>
        <ul className="bg-slate-00 font-display font-bold relative rounded-b-md shadow-md border-4 border-t-0 border-black sm:text-2xl">
          {tabs.map((tab, index) => {
            return (
              <motion.li
                key={tab}
                className={`${
                  hoverSelectedTab === tab ? "text-white" : "text-slate-900"
                } relative cursor-pointer hover:text-green-500 transition-colors duration-300 underlineease-in-out p-1`}
                onClick={() => triggerImage(tab)}
              >
                {hoverSelectedTab === tab && (
                  <motion.div
                    layoutId="active-pill"
                    className="bg-zinc-900 w-full h-10 absolute inset-0 -z-10"
                  ></motion.div>
                )}
                <span className=" z-10">{tab}</span>
              </motion.li>
            );
          })}
        </ul>
        {/* {hoverSelectedTab} */}
      </div>
      <ImageContainer isOpen={isImageOpen} selectedImage={hoverSelectedTab} />
    </div>
  );
};

export default Dropdown;
