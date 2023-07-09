import { useInView } from "framer-motion";
import { useRef } from "react";
import tiger from '../../assets/images/tiger.jpg'
const Section = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


  return (
    <div
    ref={ref}
    style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    className="h-64 bg-black mt-64 text-white">
        <img className="h-64" src={tiger} alt="" />
    </div>
  )
}

export default Section