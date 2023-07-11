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
import { useMediaQuery } from 'usehooks-ts'
interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  const matches = useMediaQuery('(min-width: 768px)')
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isInView) {
      void animate(
        ".content",
        { y: [0, -160], opacity: 1, fontSize: ["6rem", "4rem"] },
        { type: "spring", duration: 2, delay: 3 }
      );
      void animate(
        ".desc",
        { y: [-50], opacity: 1 },
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
      className="h-screen my-16 flex justify-center flex-col relative -ml-[20px] mr-[-20px]"
    >
      <h2
        ref={ref}
        className="content head-content font-display font-bold text-black text-center flex justify-center items-center z-10"
      >
        {content}
      </h2>
     
      <img
        style={{
          transform: "translateY(100px)",
        }}
        className="width absolute bottom-0 opacity-0 -translate-y-96 "
        src={grass}
        alt=""
      />
      <img
         className="env w-1/2 absolute bottom-[4%] left-0 opacity-0"
         height="100%"
         width="600px"
         src={tree}
         alt=""
      />

      <img
        className="env w-1/2 absolute -bottom-[1%] right-0 opacity-0"
        height="100%"
        width="600px"
        src={elephant}
        alt=""
      />


   
      <p  className="desc head-content font-display font-bold text-black text-xl text-center flex justify-center items-center z-10 opacity-0">This is the Amazon</p>
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
