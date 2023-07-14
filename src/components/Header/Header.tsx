import grass from "../../assets/images/grass.svg";
import {
  stagger,
  useAnimate,
  useScroll,
  useTransform,
  motion,
  useAnimationFrame,
  useInView,
} from "framer-motion";
import TopicItem from "../TopicItem/TopicItem";
import { useEffect, useRef } from "react";
import tree from "../../assets/tree.svg";
import elephant from "../../assets/elephant.svg";
import { useMediaQuery } from "usehooks-ts";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import elephantLottie from "../../assets/lottie/animation_lk01znle.json";
interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  const isNotMobile = useMediaQuery("(min-width: 768px)");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  const staggerSpanLettersEven = stagger(0.3, { startDelay: 4 });
  const staggerSpanLettersOdd = stagger(0.2, { startDelay: 3 });
  const topics: string[] = [
    "River of Life",
    "Threats",
    "Indigenous Cultures",
    "Conservation Efforts",
    "Lungs of the Earth",
    "Climate and Seasons",
    "Spectrum",
    "Biodiversity",
  ];

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Check if the element is in view
    console.log(scrollYProgress);

    if (isInView) {
      void animate(
        ".desc",
        { y: [0, -240], opacity: 1 },
        { type: "spring", duration: 2, delay: 2 }
      );

      void animate(
        ".grassy",
        { opacity: 1 },
        { type: "spring", duration: 1.5, delay: 2.2 }
      );

      if (!isNotMobile) {
        void animate(
          ".sub-text",
          { opacity: 1 },
          { type: "spring", duration: 0.4, delay: staggerSpanLettersOdd }
        );
        void animate(
          ".content",
          { y: [0, -220], opacity: 1, fontSize: ["2rem", "1.5rem"] },
          { type: "spring", duration: 2, delay: 1.5 }
        );
        void animate(
          ".env",
          { opacity: 1, scale: [0, 0.9], y: -30 },
          { type: "keyframes", duration: 1.2, delay: 3 }
        );
      }

      if (isNotMobile) {
        void animate(
          ".sub-text",
          { opacity: 1 },
          { type: "spring", duration: 0.6, delay: staggerSpanLettersEven }
        );
        void animate(
          ".content",
          { y: [0, -250], opacity: 1, fontSize: ["6rem", "4rem"] },
          { type: "spring", duration: 2, delay: 1.5 }
        );
        void animate(
          ".env",
          { opacity: 1, scale: [0, 0.9], y: 12 },
          { type: "keyframes", duration: 1.2, delay: 3 }
        );
      }
    }
  }, [
    animate,
    isInView,
    isNotMobile,
    scrollYProgress,
    staggerSpanLettersEven,
    staggerSpanLettersOdd,
  ]);

  return (
    <div
      id="section"
      ref={scope}
      className={`h-screen my-16 flex justify-center flex-col relative -ml-[20px] mr-[-20px]`}
    >
      <h2
        ref={ref}
        className="content head-content font-display font-bold text-black text-center flex justify-center items-center z-10"
      >
        {content}
      </h2>
      <div className="grassy absolute bottom-0 left-0 w-full h-full bg-bottom flex justify-center items-end snap-center opacity-0">
        <Player
          autoplay
          loop
          className="player hidden sm:block w-1/3"
          src={elephantLottie}
        ></Player>
        <img
          className="env w-1/2 sm:w-1/3 opacity-0"
          height="100%"
          src={tree}
          alt=""
        />
        <img
          className="env w-1/4 opacity-0"
          height="100%"
          src={elephant}
          alt=""
          style={{ transform: "translateY(50px) translateX(50px)" }}
        />
        <Player
          className="player hidden sm:block w-1/3"
          autoplay
          loop
          src={elephantLottie}
        ></Player>
      </div>

      <p className="desc head-content font-display font-bold text-black text-xl text-center flex justify-center items-center z-10 opacity-0">
        This is the Amazon
      </p>
      <div className="absolute inset-16 flex justify-center flex-col items-center h-screen z-10">
        {topics.map((topic) => (
          <motion.div
            key={topic}
            className={`relative display-font sub-text opacity-0 w-fit cursor-pointer p-1 mb-2 z-50`}
          >
            <div className="absolute top-2 left-2 w-full h-full bg-slate-600 -z-10 rounded border-2 border-black rounded-br-xl blur-sm"></div>
            <motion.div
              whileTap={{ x: 5, y: 5 }}
              className="inner-div relative z-0 p-2 rounded border-2 border-black rounded-br-xl text-slate-100 "
              style={{ backgroundColor: "#635799" }}
            >
              {topic}
            </motion.div>
          </motion.div>
        ))}
        {/* <TopicItem/> */}
      </div>
    </div>
  );
};

export default Header;
