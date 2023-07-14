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
  const staggerSpanLettersEven = stagger(.3, { startDelay: 4 });
  const staggerSpanLettersOdd = stagger(.2, { startDelay: 3 })
  const topics:string[] = [
    'River of Life',
    'Threats',
    'Indigenous Cultures',
    'Conservation Efforts',
    'Lungs of the Earth',
    'Climate and Seasons',
    'Spectrum',
    'Biodiversity',
  ]

  const getRandomPosition = () => {
    // Get Random Position within the screen
    const randomX = Math.floor(Math.random() * 100) + 1;
    const randomY = Math.floor(Math.random() * 100) + 1;
    return { x: randomX, y: randomY };

  };

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Check if the element is in view
    console.log(scrollYProgress)

    if (isInView) {
      void animate(
        ".content",
        isNotMobile
          ? {  y: [0, -200], opacity: 1, fontSize: ["6rem", "4rem"] }
          : { y: [0, -220], opacity: 1, fontSize: ["2rem", "1.5rem"] },
        { type: "spring", duration: 2, delay: 1.5 }
      );
      void animate(
        ".desc",
        { y: [0, -220], opacity: 1 },
        { type: "spring", duration: 2, delay: 2 }
      );

      void animate(
        ".grassy",
        {  opacity: 1 },
        { type: "spring", duration: 1.5, delay: 2.2 }
      );

      void animate(
        ".env",
        isNotMobile ?
        {  opacity: 1, scale: [0, 0.9], y: 12 }
        : {  opacity: 1, scale: [0, 0.9], y: -30 },
        { type: "keyframes", duration: 1.2, delay: 3 }
      );

      if (!isNotMobile) {
      void animate(
        ".sub-text",
        {  opacity: 1 },
        { type: "spring", duration: .4, delay: staggerSpanLettersOdd }
      );
      }

      if (isNotMobile) {
      void animate(
        ".sub-text:nth-child(even)",
        isNotMobile ?
        {  opacity: 1, border: "solid 2px black", padding: "6px", background: "#FFF", borderBottomRightRadius: "20px",borderTopLeftRadius: "20px", x: [0, 100] }
        : {  opacity: 1, scale: [0, 1], border: "solid 2px black", padding: "4px", borderRadius: "4px", y: -100 },
        { type: "spring", duration: .6, delay: staggerSpanLettersEven }
      );
 
      void animate(
        ".sub-text:nth-child(odd)",
        isNotMobile ?
        {opacity: 1, border: "solid 2px black", padding: "6px", background: "#FFF", borderRadius: "4px",borderBottomRightRadius: "20px",borderTopLeftRadius: "20px", x: [0, -100] }
        : {  opacity: 1, scale: [0, 1], border: "solid 2px black", padding: "4px", borderRadius: "4px", y: -100 },
        { type: "spring", duration: .6, delay: staggerSpanLettersEven }
      );
      }
    }
  }, [animate, isInView, isNotMobile, scrollYProgress, staggerSpanLettersEven, staggerSpanLettersOdd]);

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
          style={{transform: "translateY(50px) translateX(50px)"}}
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
      <div className="absolute inset-16 flex justify-center flex-col items-center h-screen">
      {topics.map((topic) => (
        <motion.div
          key={topic}
          className={`relative display-font sub-text opacity-0 w-fit cursor-pointer rounded border-2 border-black p-1 mb-2 bg-white z-10`}
        >
          {topic}
          <div className="absolute top-0 left-0 w-full h-full bg-red-600 opacity-50 -z-10 m-2">

          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Header;
