import Header from "./header.webp";
import {
  stagger,
  useAnimate,
  motion,
  useInView,
  AnimatePresence
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const staggerHeaderLetters = stagger(0.1, { startDelay: 0.2 });


const Results = ( ) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [quizFinished, setQuizFinished] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const useResultsAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      if (!isInView) return;
      void animate(
        ".notify",
        { filter: "blur(0px)", opacity: 1, padding: "10px" },
        { type: "spring", duration: 2, delay: staggerHeaderLetters }
      );
      if(showModal) {
      void animate(
        ".modal",
        {  opacity: 1, padding: "10px" },
        { type: "spring", duration: .3, delay: staggerHeaderLetters }
      );
      }
    }, [animate, isInView, showModal]);

    return scope;
  }



  const handleNotify = () => {
      const isOneHundred = localStorage.getItem("score");
      if (isOneHundred === "10") {
      setQuizFinished(true);
      setShowModal(true);
      } else {
        setShowModal(true);
      }
  }
  const scope = useResultsAnimation();
  return (
    <section className="firstSection rounded-xl w-full" ref={scope}>
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
            className="notify font-topicItems lay text-4xl  md:text-6xl opacity-0 text-yellow-300"
          >
            Find Your Tribe
          </p>
          <motion.p
            whileHover={{ y: -5, shadow: "0px 0px 8px rgb(255,255,255)" }}
            whileTap={{ y: 5 }}
            onClick={handleNotify}
            className="notify justify-self-start font-display text-black  text-xl rounded opacity-0 mt-6 font-semibold  bg-yellow-100 cursor-pointer"
          >
            Get Notified
          </motion.p>
          {
            showModal && !quizFinished && (
              <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0">
                <div className="bg-white rounded-xl p-4 font-display text-red-500 font-semibold">
                  <p className="text-center text-xl">You'll need 100% on the Quiz to continue.</p>
                  <div className="text-right">
                  <motion.button onClick={() => setShowModal(false)} className=" text-white bg-black rounded-md p-1 font-semibold mt-4">Close</motion.button>
                  </div>
                </div>
              </div>
            )
          }
          {
            showModal && quizFinished && (
          
              <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0">
                    <AnimatePresence>
                <motion.div 
                exit={{ opacity: 0 }}
                className="font-display bg-white rounded-xl p-4">
                  <p className="text-center text-xl font-display font-bold">Get Notified</p>
                  <div>
                    <p className="font-semibold my-4">
                      The worlds biggest community of people for you to connect. Coming soon.
                    </p>
                    <div className="flex gap-1">
                    <input
                    placeholder="Email"
                    className="border-2 w-full rounded-md p-1  border-green-600 outline-none"
                    type="email" />
                    <motion.button
                    whileHover={{ y: -5, shadow: "0px 0px 8px rgb(255,255,255)" }}
                    whileTap={{ y: 5 }}
                    className="border-2 bg-green-600 rounded-md p-1 border-green-600 font-semibold">Submit</motion.button>
                    </div>
                  </div>
                  <div className="text-right">
                  <motion.button onClick={() => setShowModal(false)} className=" text-white bg-black rounded-md p-1 font-semibold mt-4">Close</motion.button>
                  </div>
               
                </motion.div>
                </AnimatePresence>
              </div>
         
            )
          }
        </div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-60 z-20 bg-green-500 rounded-xl p-4 cursor-pointer" onClick={scrollToSection}>
           <img className="animate-pulse" width="45px" src={downArrow} alt="" />
      
        </div> */}
      </motion.div>
    </section>
  );
};

export default Results;
