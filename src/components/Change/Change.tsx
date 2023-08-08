import Header from "./header.jpg";
import { stagger, useAnimate, motion,  useInView, } from "framer-motion";
import { useEffect, useRef } from "react";
import change from "../../json/change.json";



const staggerHeaderLetters = stagger(0.1, { startDelay: 0.2 });
const staggeChangeText = stagger(0, { startDelay: .7 });
const Change = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const useChangeAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        if(!isInView) return;
      void animate(
        "p",
        { filter: "blur(0px)", opacity: 1, padding: "10px", x: [-300, 0] },
        { type: "spring", duration: 2, delay: staggerHeaderLetters }
      );
      void animate(
        ".change-container",
        { opacity: 1, y: [-20, 0], x: [-20, 0]},
        { type: "spring", duration: 2, delay: staggerHeaderLetters }
      );
      void animate(
        ".change-text",
        { opacity: 1, scale: [0, 1]},
        { type: "spring", duration: .3, delay: staggeChangeText }
      );
    }, [animate, isInView]);

    return scope;
  };

  const scope = useChangeAnimation();
  return (
    <section className="firstSection rounded-xl w-full" ref={scope}>
      <motion.div className="relative w-full h-full pb-10">
        <motion.img
          src={Header}
          alt=""
          className="absolute inset-0 object-cover w-full h-full z-10 rounded-lg bg-black opacity-50"
        />

        <div className="absolute inset-0 flex z-20 flex-col p-4 pb-20">
          <p
            ref={ref}
            className="font-topicItems font-extrabold text-yellow-300  text-4xl md:text-6xl rounded opacity-0"
          >
            Make a Change
          </p>
          <p className=" justify-self-start font-display font-semibold text-yellow-200 text-xl  md:text-3xl rounded opacity-0">
            We can all make a difference. Here are some ways you can help.
          </p>
        </div>
        <div className="flex-1 h-full flex justify-center items-center ">
          <div className="mt-36 h-[32rem] sm:h-fit flex xl:w-1/2 justify-center items-start flex-wrap text-black font-display  overflow-scroll z-50">
            {change.map((item) => (
              <div
                key={item.section}
                className="change-container opacity-0 flex flex-col justify-center items-center sm:w-1/2 relative p-2 xxl:p-6"
              >
                <div className="bg-black opacity-50 h-full w-full absolute"></div>
                <h2 className="change-text text-xl font-semibold text-green-500 z-50 bg-black p-2 rounded-md">
                  {item.section}
                </h2>
                <div className="change-text z-50 text-slate-300 pt-4">
                  <span className="font-bold">Action: </span> {item.action}
                </div>
                <div className="change-text z-50 px-6 text-center text-white font-semibold p-3 italic opacity-0">{item.points[0].description}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Change;
