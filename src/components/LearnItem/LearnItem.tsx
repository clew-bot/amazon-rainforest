import { AnimatePresence, motion, animate, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import learn from "../../json/learn.json";
interface LearnItemProps {
  selectedTab: string;
}


const staggerLearnItems = stagger(0.1, { startDelay: 0.2 });


const LearnItem = ({ selectedTab }: LearnItemProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const useLearnAnimation = () => {
   
        const [scope, animate] = useAnimate();
        useEffect(() => {
            if (isInView) {
            void animate(
                ".learnItem",
                {  opacity: 1, scale: [0, 0.9] },
                { type: "spring", duration: .3, delay: staggerLearnItems }
              );
              void animate(
                ".learn-container",
                {  opacity: 1, height: "40rem" },
                { type: "spring", duration: .3, delay: staggerLearnItems }
              );
            }
          }, [animate, isInView, selectedTab]);

          return scope;
    }

    const scope = useLearnAnimation();


  return (
    <div
    
    ref={scope}
    className="w-full md:w-1/2 border-4 border-black rounded-md font-display">
      <div 
         ref={ref}
      className="bg-black">
        <h2  className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline">
          Discover
        </h2>
        <div className="bg-white">
          {learn.map(
            (item) =>
              item &&
              item.title === selectedTab && (
                <div key={item.title} className="learn-container h-60">
                  <div
                 
                  className="learnItem text-center text-3xl font-bold pt-2 text-green-500 underline">
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
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnItem;
