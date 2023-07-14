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
  const staggerSpanLetters = stagger(.5, { startDelay: 2 });

  const topics:string[] = [
    'River of Life',
    'Threats',
    'Indigenous Cultures',
    'Conservation Efforts',
    'Lungs of the Earth',
    'Climate and Seasons',
    'Spectrum',
  ]

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Check if the element is in view
    console.log(scrollYProgress)

    if (isInView) {
      void animate(
        ".content",
        isNotMobile
          ? {  y2: [0, -160], opacity: 1, fontSize: ["6rem", "4rem"] }
          : { y: [0, -160], opacity: 1, fontSize: ["2rem", "1.5rem"] },
        { type: "spring", duration: 2, delay: 1.5 }
      );
      void animate(
        ".desc",
        { y: [0, -170], opacity: 1 },
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
      void animate(
        ".sub-text:nth-child(even)",
        isNotMobile ?
        {  opacity: 1, scale: [0, 1], y: 12, border: "solid 2px black", padding: "10px", background: "#FFF", borderBottomRightRadius: "20px",borderTopLeftRadius: "20px", x: [0, 100] }
        : {  opacity: 1, scale: [0, 1], border: "solid 2px black", padding: "4px", borderRadius: "4px", y: -100 },
        { type: "spring", duration: 2, delay: staggerSpanLetters }
      );
      void animate(
        ".sub-text:nth-child(odd)",
        isNotMobile ?
        {  opacity: 1, scale: [0, 1], y: 12, border: "solid 2px black", padding: "10px", background: "#FFF", borderRadius: "4px",borderBottomRightRadius: "20px",borderTopLeftRadius: "20px", x: [0, -100] }
        : {  opacity: 1, scale: [0, 1], border: "solid 2px black", padding: "4px", borderRadius: "4px", y: -100 },
        { type: "spring", duration: 2, delay: staggerSpanLetters }
      );
    }
  }, [animate, isInView, isNotMobile, scrollYProgress, staggerSpanLetters]);

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
      <div className="relative flex justify-center flex-col items-center gap-2">
      {topics.map((topic, index) => (
        <motion.div
          key={topic}
          initial={{ }} 
          animate={{ opacity: 1, scale: [0, 0.9] }} // Animate opacity to make the span visible
          transition={{ delay: index * 0.2 }} 
          className="display-font sub-text opacity-0 translate-x-3 w-fit cursor-pointer"
        >
          {topic}
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Header;
