import Header from "./header.jpg";
import { stagger, useAnimate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const staggerHeaderLetters = stagger(0.1, { startDelay: 0.5 });

const Experts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const useExpertsAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      if (isInView) {
        void animate(
          "p",
          { filter: "blur(.2px)", opacity: 1, y: [-20, 20] },
          { type: "spring", duration: 2, delay: staggerHeaderLetters }
        );
      }
    }, [animate, isInView]);

    return scope;
  };

  const scope = useExpertsAnimation();
  return (
    <section className="firstSection rounded-xl w-full" ref={scope}>
      <motion.div className="relative w-full h-full pb-10">
        <motion.img
          src={Header}
          alt="The Amazon Rainforest"
          className="absolute inset-0 object-cover w-full h-full z-10 rounded-lg bg-black opacity-50"
        />

        <div className="absolute inset-0 flex z-20 flex-col p-4 justify-start items-center pb-20">
          <p
            ref={ref}
            className="blur-sm font-display font-extrabold text-yellow-300  text-4xl md:text-6xl rounded opacity-0"
          >
            Meet the Experts
          </p>
          {/* <p className="font-display font-semibold text-yellow-200 text-xl  md:text-3xl rounded opacity-0">
            Travel through time, witness the magic, and unlock nature's
            best-kept secrets in the grandeur of the Amazon.
          </p> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Experts;
