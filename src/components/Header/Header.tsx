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
interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isInView) {
      void animate(
        ".content",
        { y: [0, -250], opacity: 1 },
        { type: "spring", duration: 2, delay: 1.5 }
      );
      void animate(
        ".desc",
        { y: [-250], opacity: 1 },
        { type: "spring", duration: 2, delay: 2.5 }
      );
      void animate(
        "img",
        { y: [100, 0], opacity: 1 },
        { type: "spring", duration: 2, delay: 1 }
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
      className="h-screen my-10 flex justify-center flex-col relative"
    >
      <h2
        ref={ref}
        className="content head-content font-display font-bold text-black text-6xl text-center flex justify-center items-center z-10"
      >
        {content}
      </h2>
      <img
        className="env absolute bottom-24 opacity-0"
        src={tree}
        height="800px"
        width="600px"
        alt=""
      />

      <img
        className="env absolute bottom-12 right-0 opacity-0"
        height="100%"
        width="600px"
        src={elephant}
        alt=""
      />
      <img
        style={{
          transform: "translateY(100px)",
        }}
        className="w-full absolute bottom-0 opacity-0"
        src={grass}
        alt=""
      />
      <p  className="desc head-content font-display font-bold text-black text-xl text-center flex justify-center items-center z-10 opacity-0">This is the Amazon</p>
      <span>River of Life</span>
      <span>Threats</span>
      <span>Indigenous Cultures</span>
      <span>Conservation Efforts</span>
      <span>Lungs of the Earth</span>
      <span>Climate and Seasons</span>
      <span>Spectrum</span>
    </div>
  );
};

export default Header;
