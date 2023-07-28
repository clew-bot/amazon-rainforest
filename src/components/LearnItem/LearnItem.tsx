import { AnimatePresence, motion, animate, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import learn from "../../json/learn.json";
interface LearnItemProps {
  selectedTab: string;
}

const LearnItem = ({ selectedTab }: LearnItemProps) => {
    const [scope, animate] = useAnimate();
    const staggerLearnItems = stagger(0.1, { startDelay: 0.15 });
  useEffect(() => {
    void animate(
        ".learnItem",
        {  opacity: 1, scale: [0.,1] },
        { type: "spring", duration: .3, delay: staggerLearnItems }
      );
  }, [selectedTab]);

  return (
    <div
    ref={scope}
    className="right-0 absolute w-1/2 border-4 border-black rounded-md h-full font-display">
      <div className="bg-white">
        <h2 className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline ">
          Discover
        </h2>
        <div className="">
          {learn.map(
            (item) =>
              item &&
              item.title === selectedTab && (
                <>
                  <div className="learnItem text-center text-xl font-bold pt-2">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="learnItem p-4 opacity-0">
                    <h3 className="text-left font-bold text-lg">
                      Details: <span>{item.sections[0].details}</span>
                    </h3>
                  </div>
                  <div className="learnItem opacity-0 font-bold">Did you know?</div>
                  <div className="learnItem text-left">
                    <p>{item.sections[0].funFact}</p>
                  </div>
                </>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnItem;
