import grass from "../../assets/images/grass.svg";
import {
  stagger,
  useAnimate,
  useScroll,
  useTransform,
  motion,
  useAnimationFrame,
} from "framer-motion";
import { useEffect, useRef } from "react";
import tree from "../../assets/tree.svg";
interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  const ref = useRef(null);
  // useAnimationFrame((time, delta) => {
  //     console.log(time, delta);
  //   const speed = 10 * 99; 
  //   const percent = ((Math.sin(time * speed) + 1) / 2) * 100; 

  //   // Create a random color gradient 
  //   const hue = Math.round(Math.random() * 360);
  //   const randomColor1 = `hsl(${hue}, 100%, 50%)`;
  //   const randomColor2 = `hsl(${(hue + 180) % 360}, 100%, 50%)`; 

  //   ref.current!.style.backgroundImage = `linear-gradient(120deg,${randomColor1} ${percent}%, ${randomColor2} ${percent + 1}%)`;
  //   ref.current!.style.webkitBackgroundClip = "text";
  //   ref.current!.style.webkitTextFillColor = "transparent";
  // });
  const [scope, animate] = useAnimate();
  useEffect(() => {
    void animate(
      "img",
      { y: [100, 0], opacity: 1 },
      { type: "spring", duration: 2, delay: 1 }
    );
  }, [animate]);

  return (
    <div
      ref={scope}
      className="h-screen my-10 flex justify-center flex-col relative"
    >
      <h2
        ref={ref}
        className="font-display font-bold text-black text-6xl text-center flex justify-center items-center z-10"
      >
        {content}
      </h2>
      <img 
      className="absolute bottom-24 opacity-0"
      src={tree}height="1000px" width="700px"alt="" />
      <img
        style={{
          transform: "translateY(100px)",
        }}
        className="w-full absolute bottom-0 opacity-0"
        src={grass}
        alt=""
      />
    </div>
  );
};

export default Header;
