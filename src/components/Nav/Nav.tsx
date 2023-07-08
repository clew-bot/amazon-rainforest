import Header from "./header.jpg";
import {
  stagger,
  useAnimate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const staggerHeaderLetters = stagger(0.1, { startDelay: 0.5 });
const staggerHeaderLetters2 = stagger(0.1, { startDelay: 1 });

const Nav = () => {
  const [scope, animate] = useAnimate();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    void animate(
      "p",
      { filter: "blur(0px)", opacity: 1, padding: "10px", background: "black" },
      { type: "spring", duration: 2 }
    );

    void animate(
      "span",
      { filter: "blur(0px)", opacity: 1, color: "white", padding: "2px" },
      { type: "spring", duration: 2, delay: staggerHeaderLetters }
    );
    void animate(
      "span",
      { filter: "blur(0px)", opacity: 1, color: "white", padding: "2px" },
      { type: "spring", duration: 2, delay: staggerHeaderLetters }
    );

    setTimeout(() => {
      void animate(
        "span",
        {  padding: "2px" },
        { type: "spring", duration: 0.5, delay: staggerHeaderLetters2 }
      );
    }, 3000);
  }, [animate]);

  return (
    <nav className="border-4 rounded-xl border-black -z-10 w-full" ref={scope}>
      <div className="relative w-full h-96">
        <img
          src={Header}
          alt=""
          className="absolute inset-0 object-cover w-full h-full z-10"
        />
        <ul className="flex z-20">
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <p
            ref={ref}
            className="font-display font-extrabold text-slate-100 text-4xl rounded opacity-0 p-11"
          >
            <span className="opacity-0">A</span>
            <span className="opacity-0">M</span>
            <span className="opacity-0">A</span>
            <span className="opacity-0">Z</span>
            <span className="opacity-0">O</span>
            <span className="opacity-0">N</span>{" "}
            <span className="opacity-0">R</span>
            <span className="opacity-0">A</span>
            <span className="opacity-0">I</span>
            <span className="opacity-0">N</span>
            <span className="opacity-0">F</span>
            <span className="opacity-0">O</span>
            <span className="opacity-0">R</span>
            <span className="opacity-0">E</span>
            <span className="opacity-0">S</span>
            <span className="opacity-0">T</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

function useState(arg0: string[]): [any, any] {
  throw new Error("Function not implemented.");
}
