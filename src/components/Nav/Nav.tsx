import Header from "./header.jpg";
import {
  stagger,
  useAnimate,
  motion
} from "framer-motion";
import { useEffect, useRef } from "react";
import success from "../../assets/lottie/success.json";



import { Player } from "@lottiefiles/react-lottie-player";
import GoDown from "../GoDown/GoDown";

const staggerHeaderLetters = stagger(0.1, { startDelay: 0.5 });

const Nav = () => {
  const ref = useRef<HTMLDivElement>(null);

  const useHeaderAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      void animate(
        "p",
        { filter: "blur(0px)", opacity: 1, padding: "5px" },
        { type: "spring", duration: 2, delay: staggerHeaderLetters }
      );
      void animate(
        ".down",
        { filter: "blur(0px)", opacity: 1, padding: "5px" },
        { type: "spring", duration: 2, delay: 1 }
      );
    }, [animate]);

    return scope;
  }

  const scope = useHeaderAnimation();
  return (
    <section className="firstSection rounded-xl w-full" ref={scope}>
      <motion.div 
      className="relative w-full h-full pb-10"
      >
        <motion.img
     
          src={Header}
          alt="The Amazon Rainforest"
          className="absolute inset-0 object-cover w-full h-full z-10 rounded-lg bg-black opacity-50"
        />
        
        <div className="absolute inset-0 flex z-20 flex-col p-4 justify-end pb-20">
          
          <p
            ref={ref}
            className=" self-start justify-self-start font-topicItems font-extrabold text-yellow-300  text-4xl md:text-6xl rounded opacity-0"
          >
            Unveil the Secrets of Amazon Rainforest
          </p>
          <p
            className=" justify-self-start font-display font-semibold text-yellow-200 text-xl  md:text-3xl rounded opacity-0"
          >
            Travel through time, witness the magic, and unlock nature's best-kept secrets in the grandeur of the Amazon.
          </p>
          <GoDown height={1000}/>
        </div>
     
      </motion.div>
   
    </section>
  );
};

export default Nav;
