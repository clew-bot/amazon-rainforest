import Header from "./header.jpg";
import {
  stagger,
  useAnimate,
  motion
} from "framer-motion";
import { useEffect, useRef } from "react";

const staggerHeaderLetters = stagger(0.1, { startDelay: 0.5 });

const Nav = () => {
  const ref = useRef<HTMLDivElement>(null);

  const useHeaderAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      void animate(
        "p",
        { filter: "blur(0px)", opacity: 1, padding: "10px", x: [-300,0] },
        { type: "spring", duration: 2, delay: staggerHeaderLetters }
      );
    }, [animate]);

    return scope;
  }

  const scope = useHeaderAnimation();
  return (
    <section className="firstSection rounded-xl border-black -z-10 w-full" ref={scope}>
      <motion.div 
      className="relative w-full h-full pb-10"
      >
        <motion.img
     
          src={Header}
          alt=""
          className="absolute inset-0 object-cover w-full h-full z-10 rounded-lg bg-black opacity-50"
        />
        
        <div className="absolute inset-0 flex z-20 flex-col p-4 md:justify-end justify-start">
          
          <p
            ref={ref}
            className=" self-start justify-self-start font-display font-extrabold text-slate-100  text-6xl rounded opacity-0"
          >
            Unveil the Secrets of Amazon Rainforest
          </p>
          <p
            className=" justify-self-start font-display font-extrabold text-slate-200  text-3xl rounded opacity-0"
          >
            Travel through time, witness the magic, and unlock nature's best-kept secrets in the grandeur of the Amazon.
          </p>
        </div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-60 z-20 bg-green-500 rounded-xl p-4 cursor-pointer" onClick={scrollToSection}>
           <img className="animate-pulse" width="45px" src={downArrow} alt="" />
      
        </div> */}
      </motion.div>
    </section>
  );
};

export default Nav;
