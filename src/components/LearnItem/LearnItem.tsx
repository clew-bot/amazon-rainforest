import { stagger, useAnimate, useInView } from "framer-motion";
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

const staggerLearnItems = stagger(0.1, { startDelay: 0.2 });

const LearnItem = ({
  selectedTab,
  isOpen,
  setIsOpen,
  shouldAnimate,
}: LearnItemProps) => {
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

      if (!isDesktop) {
        if (isInView && shouldAnimate) {
          if (shouldAnimate) {
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
            isOpen
              ? {
                  height: "0px",
                }
              : {
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
    <div ref={scope} className="w-full sm:w-1/2 max-h-96 flex-1 bg-zinc-300 bg-opacity-80">
      <button
        ref={ref}
        className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-yellow-200 shadow-md text-left text-4xl underline"
        onClick={toggleDropdown}
      >
        Discover
      </button>

      {learn.map(
        (item) =>
          item &&
          item.title === selectedTab && (
            <div
              key={item.title}
              className="noScrollBar learn-container border-4 border-black border-t-0 rounded-b-md overflow-scroll lg:overflow-auto max-h-80 sm:h-80 relative  opacity-80 z-10 font-display"
            >
       {/* <div className="h-full absolute w-full "></div> */}
              <div className="learnItem text-center text-4xl font-bold pt-6 lg:pt-4 text-green-700 opacity-0 font-topicItems">
                <h3>{item.title}</h3>
              </div>
              <div className="learnItem p-4 opacity-0 h-full pt-0">
                <h3 className="text-left font-bold text-lg">
                  {item.sections[0].details}
                </h3>
                <p className="overflow-scroll noScrollBar">{item.sections[1].content}</p>
                
              </div>
             
            </div>
          )
      )}
    </div>
  );
};

export default LearnItem;
