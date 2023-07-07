import { useState, useEffect } from 'react';
import {
    animate,
    motion,
    stagger,
    useAnimate,
    useAnimationFrame,
  } from "framer-motion";
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
const useMenuAnimation = (isOpen: boolean) => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
    // void animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    void animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    void animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );


  }, [animate, isOpen]);

  return scope;
}

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div ref={scope}>
      <button className="m-2 p-2 rounded bg-green-900 font-display font-bold text-yellow-300" onClick={toggleDropdown}>Learn</button>
        <ul className="w-fit p-2 bg-green-400 rounded font-display font-bold">
          <li>Biodiversity</li>
          <li>River System</li>
          <li>Climate and Environment</li>
          <li>Cultural Diversity</li>
          <li>Threats and Conservation</li>

        </ul>
    </div>
  );
};

export default Dropdown;
