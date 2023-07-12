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
interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  useEffect(() => {

    // Always snap to the center of the section
    void animate(
      ".content",
      { y: [0, -160], opacity: 1, fontSize: ["6rem", "4rem"] },
      { type: "spring", duration: 2, delay: 3 }
    );

    if (isInView) {
      void animate(
        ".content",
        matches
          ? { y: [0, -160], opacity: 1, fontSize: ["6rem", "4rem"] }
          : { y: [0, -160], opacity: 1, fontSize: ["2rem", "1.5rem"] },
        { type: "spring", duration: 2, delay: 3 }
      );
      void animate(
        ".desc",
        { y: [0, -170], opacity: 1 },
        { type: "spring", duration: 2, delay: 3.5 }
      );
      void animate(
        ".grassy",
        { y: [1000, 0], opacity: 1 },
        { type: "spring", duration: 2, delay: 0.2 }
      );
      void animate(
        ".env",
        { y: [100, 0], opacity: 1 },
        { type: "spring", duration: 2, delay: 1.5 }
      );
    }
  }, [animate, isInView]);

  return (
    <div
      id="section"
      ref={scope}
      className="h-screen my-16 flex justify-center flex-col relative -ml-[20px] mr-[-20px] "
    >
      <h2
        ref={ref}
        className="content head-content font-display font-bold text-black text-center flex justify-center items-center z-10"
      >
        {content}
      </h2>
      <div className="grassy absolute bottom-0 left-0 w-full h-full bg-bottom flex justify-evenly items-end snap-center opacity-0">
        <img
          className="env w-1/2 sm:w-1/3  bottom-[4%] md:bottom-[14%] left-0 opacity-0"
          height="100%"
          width="600px"
          src={tree}
          alt=""
        />

        <img
          className="env w-1/4 right-0 opacity-0"
          height="100%"
          width="400px"
          src={elephant}
          alt=""
        />
      </div>

      <p className="desc head-content font-display font-bold text-black text-xl text-center flex justify-center items-center z-10 opacity-0">
        This is the Amazon
      </p>
      {/* <span>River of Life</span>
      <span>Threats</span>
      <span>Indigenous Cultures</span>
      <span>Conservation Efforts</span>
      <span>Lungs of the Earth</span>
      <span>Climate and Seasons</span>
      <span>Spectrum</span> */}
    </div>
  );
};

export default Header;
