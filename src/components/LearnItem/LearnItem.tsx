import {
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import learn from "../../json/learn.json";
import { useMediaQuery } from "usehooks-ts";
interface LearnItemProps {
  selectedTab: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  shouldAnimate: boolean;
  setShouldAnimate: (shouldAnimate: boolean) => void;
}

const staggerLearnItems = stagger(0.1, { startDelay: .2 });

const LearnItem = ({ selectedTab, isOpen, setIsOpen, shouldAnimate }: LearnItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleDropdown = () => {
    if (isDesktop) {
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const useLearnAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      // Mobile //

      if (!isDesktop) {
        if(isInView && shouldAnimate) {
          if(!isOpen && shouldAnimate) {
            void animate(
              ".learnItem",
              { opacity: 1, scale: [0, 0.9] },
              { type: "spring", duration: 0.3, delay: staggerLearnItems }
            );
            void animate(
              ".learn-container",
              { opacity: 1 },
              { type: "spring", duration: 0.3, delay: staggerLearnItems }
            );
          }
          void animate(
            ".learn-items",
            isOpen ? 
            {
              height: "0px",
            } : {
              height: "auto",
            },
            {
              type: "spring",
              duration: 1,
              bounce: 0,
            }
          );
          }
      } else if (isDesktop) {
        if (isInView && isOpen) {
          void animate(
            ".learnItem",
            { opacity: 1, scale: [0, 0.9] },
            { type: "spring", duration: 0.3, delay: staggerLearnItems }
          );
          void animate(
            ".learn-container",
            { opacity: 1 },
            { type: "spring", duration: 0.3, delay: staggerLearnItems }
          );
        }
      }
    }, [animate, isInView, selectedTab, isOpen, shouldAnimate]);

    return scope;
  };

  const scope = useLearnAnimation();

  return (
    <div
      ref={scope}
      className="w-full border-4 border-black rounded-md font-display sm:col-start-2 sm:row-start-1 sm:row-end-3 md:min-w-[600px]
      md:min-h-[300px] sm:max-h-max overflow-scroll sm:overflow-visible max-h-96"
    >
      <div ref={ref} className="bg-black">
        <button
          className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline"
          onClick={toggleDropdown}
        >
          Discover
        </button>
        <div className="bg-white learn-items h-0 sm:h-full">
          {learn.map(
            (item) =>
              item &&
              item.title === selectedTab && (
                <div
                  key={item.title}
                  className="learn-container overflow-scroll"
                >
                  <div className="learnItem text-center text-3xl font-bold pt-2 text-green-500 underline opacity-0">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="learnItem p-4 opacity-0">
                    <h3 className="text-left font-bold text-lg">
                      {item.sections[0].details}
                    </h3>
                    <p>{item.sections[1].content}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnItem;
