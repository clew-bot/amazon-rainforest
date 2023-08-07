import Header from "./header.webp";
import {
  stagger,
  useAnimate,
  motion,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const staggerHeaderLetters = stagger(0.1, { startDelay: 0.2 });

const Results = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const useResultsAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      if (!isInView) return;
      void animate(
        "p",
        { filter: "blur(0px)", opacity: 1, padding: "10px" },
        { type: "spring", duration: 2, delay: staggerHeaderLetters }
      );
    }, [animate, isInView]);

    return scope;
  }

  const scope = useResultsAnimation();
  return (
    <section className="firstSection rounded-xl -z-10 w-full" ref={scope}>
      <motion.div 
      className="relative w-full h-full pb-10"
      >
        <motion.img
     
          src={Header}
          alt=""
          className="absolute inset-0 object-cover w-full h-full z-10 rounded-lg bg-black opacity-50"
        />
        
        <div className="absolute inset-0 flex z-20 flex-col p-4 justify-center pb-20 items-center">
          
          <p
            ref={ref}
            className="font-topicItems lay text-4xl  md:text-6xl opacity-0 text-yellow-300"
          >
            Find Your Tribe
          </p>
          <p
            className=" justify-self-start font-display text-slate-200  text-xl rounded opacity-0 mt-2 italic"
          >
            Get Notified
          </p>
        </div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-60 z-20 bg-green-500 rounded-xl p-4 cursor-pointer" onClick={scrollToSection}>
           <img className="animate-pulse" width="45px" src={downArrow} alt="" />
      
        </div> */}
      </motion.div>
    </section>
  );
};

export default Results;
