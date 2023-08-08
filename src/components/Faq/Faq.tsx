import Header from "./header.jpg";
import {
  stagger,
  useAnimate,
  motion,
  useInView
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import faq from "../../json/faq.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const staggerHeaderLetters = stagger(0.1, { startDelay: 0.5 });

type FAQItem = {
    question: string;
    answer: string;
  };
const Faq = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };



  const useFaqAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        if (isInView) {
      void animate(
        "p",
        { filter: "blur(0px)", opacity: 1, padding: "10px", y: [-20,0] },
        { type: "spring", duration: 2, delay: staggerHeaderLetters }
      );
        }
    }, [animate, isInView]);

    return scope;
  }

  const scope = useFaqAnimation();
  return (
    <section className="firstSection rounded-xl w-full" ref={scope}>
      <motion.div 
      className="relative w-full h-full pb-10"
      ref={ref}
      >
        <motion.img
     
          src={Header}
          alt="The Amazon Rainforest"
          className="absolute inset-0 object-cover w-full h-full z-10 rounded-lg bg-black opacity-50"
        />
        
        <div className="absolute inset-0 flex z-20 flex-col p-4 justify-center pb-20 items-center gap-10">
          
          <p
      
            className="font-topicItems font-extrabold text-yellow-300  text-4xl md:text-6xl rounded opacity-0"
          >
            F.A.Q
          </p>
          <div className="flex grow flex-col gap-2 max-w-2xl">
          {faq.map((item: FAQItem, index: number) => (
  <div key={index} className="faq-item w-full relative">

<FontAwesomeIcon
className="absolute right-0 top-1 m-2 cursor-pointer"
onClick={() => toggleQuestion(index)}
icon={faChevronDown as IconProp} style={{color: "#fde047",}}/>
    <button
      className={`text-left text-white faq-question shadow-lg sm:text-lg  w-full font-display bg-zinc-900 p-2 rounded-md font-semibold transition-all duration-500 pr-6 ${activeQuestion === index ? 'rounded-b-none' : ''}`}
      onClick={() => toggleQuestion(index)}
    >
      {item.question}
    </button>
    <div 
     dangerouslySetInnerHTML={{ __html: item.answer }}
    className={`font-display text-light faq-answer text-sm bg-zinc-700 ${activeQuestion === index ? 'show p-4 rounded-b-md text-white opacity-1' : 'opacity-0'}`}>

    </div>
  </div>
))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
