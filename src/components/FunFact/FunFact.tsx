import {useEffect, useRef} from 'react'
import learn from "../../json/learn.json";
import {
  AnimatePresence,
  motion,
  animate,
  stagger,
  useAnimate,
  useInView,
} from "framer-motion";
import { useMediaQuery } from "usehooks-ts";
interface FunFactProps {
  selectedTab: string;
  isOpen: boolean;
}

const FunFact = ({selectedTab, isOpen}: FunFactProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const useLearnAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      console.log("isOpen", isOpen)
      if (isInView) {
        void animate(
          ".learnItem",
          { opacity: 1, scale: [0, 0.9] },
          { type: "spring", duration: 0.3, delay: .2 }
        );
        void animate(
          ".learn-container",
          { opacity: 1 },
          { type: "spring", duration: 0.3, delay: .2 }
        );
        void animate(
          ".learn-items",
          isOpen && !isDesktop
            ? {
                height: "0px",
              }
            : {
                height: "auto",
              },
          {
            type: "spring",
            bounce: 0,
            duration: 0.5,
          }
        );
        void animate(
          ".learn-container",
          isOpen && !isDesktop
            ? {
                visibility: "hidden",
                opacity: 0,
                scale: 0.3,
                filter: "blur(20px)",
                pointerEvents: "none",
              }
            : {
                visibility: "visible",
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                pointerEvents: "auto",
              },
          {
            type: "spring",
            bounce: 0,
            duration: 0.5,
          }
        );
      }
    }, [animate, isInView, selectedTab, isOpen]);

    return scope;
  };

  const scope = useLearnAnimation();
  return (
    <div
    ref={scope}
    className="w-full border-4 border-black rounded-md font-display min-h-[15rem]">
      <div 
      ref={ref}
      className="bg-black">
        <h2  className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline">
          Fun Fact!
        </h2>
        <div className="bg-white learn-items">
          {learn.map(
            (item) =>
              item &&
              item.title === selectedTab && (
                <div key={item.title} className="learn-container p-4">
                  <div className="learnItem opacity-0 font-bold text-red-500">
                    Did you know?
                  </div>
                  <div className="learnItem text-left opacity-0">
                    <p>{item.sections[0].funFact}</p>
                  </div>
                </div>
              )
          )}
        </div>
        </div>
    </div>
  )
}

export default FunFact