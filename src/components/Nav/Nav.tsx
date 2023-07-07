import Header from "./header.jpg"
import { animate, motion, stagger, useAnimate, useAnimationFrame } from "framer-motion"
import { useEffect, useRef } from "react"




const staggerHeaderLetters = stagger(0.1, { startDelay: .5 });
const Nav = () => { 
    const [scope, animate] = useAnimate()
    const ref = useRef(null);
    useAnimationFrame((t) => {
        console.log(t)
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
      });

    //Generate random color for each letter
    const randomColor = () => {
        const colors = ["#339dd6", "#d63384", "#d633d6", "#d6d633", "#33d6d6", "#33d684", "#84d633", "#84d6d6", "#d684d6", "#d68433"]
        return colors[Math.floor(Math.random() * colors.length)]
    }

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        void animate("p", { filter: "blur(0px)", opacity: 1, padding: "10px" }, { type: "spring", duration: 2 })
        
        void animate("span", { filter: "blur(0px)", opacity: 1, color: "#2c3a54", padding: "2px" }, { type: "spring", duration: 2, delay: staggerHeaderLetters })
        
    }, [animate])
    


  return (
<nav className="-z-10 border-amber-500 border-2 w-full" ref={scope}>
  <div className="relative w-full h-96">
    <img src={Header} alt="" className="absolute inset-0 object-cover w-full h-full z-10" />
    <ul className="flex z-20">
      <li>
        <a href="#">Home</a>
      </li>
    </ul>
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <p ref={ref} className="font-display font-extrabold text-slate-100 text-4xl rounded opacity-0 p-11"><span  className="opacity-0">A</span><span className="opacity-0">M</span><span className="opacity-0">A</span><span className="opacity-0">Z</span><span className="opacity-0">O</span><span className="opacity-0">N</span> <span className="opacity-0">R</span><span className="opacity-0">A</span><span className="opacity-0">I</span><span className="opacity-0">N</span><span className="opacity-0">F</span><span className="opacity-0">O</span><span className="opacity-0">R</span><span className="opacity-0">E</span><span className="opacity-0">S</span><span className="opacity-0">T</span></p>
    </div>
  </div>
</nav>

  
  )
}

export default Nav

function useState(arg0: string[]): [any, any] {
    throw new Error("Function not implemented.");
}
