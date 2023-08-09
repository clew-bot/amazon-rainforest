import Header from "./header.jpg";
import { stagger, useAnimate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
// import chico from "../../assets/experts/chico.jpg";
// import jane from "../../assets/experts/jane.jpg";
// import marina from "../../assets/experts/marina.webp";
// import mark from "../../assets/experts/mark.png";
// import raoni from "../../assets/experts/raoni.jpg";
// import sonia from "../../assets/experts/sonia.jpg";
// import sydney from "../../assets/experts/sydney.jpg";
// import cb from "../../assets/companies/cb-logo.png";
// import olumes from "../../assets/companies/olumes.png";
// import rahua from "../../assets/companies/rahua.png";
// import walk from "../../assets/companies/walk-london.avif";





const staggerExperts = stagger(0.1, { startDelay: 0.5 });

const images = ["chico", "jane", "marina", "mark", "raoni", "sonia", "sydney"];

// const realNameMapFromImage = {
//     [chico]: {name: "Chico Mendes"},
//     [jane]: {name:"Jane Goodall"},
//     [marina]: {name:"Marina Silva"},
//     [mark]: {name:"Mark Plotkin"},
//     [raoni]: {name:"Raoni Metuktire"},
//     [sonia]: {name:"Sônia Guajajara"},
//     [sydney]:{name:"Sydney Possuelo"},
//     };

const Experts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const useExpertsAnimation = () => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
      if (isInView) {
        void animate(
          ".title",
          { filter: "blur(.12px)", opacity: 1 },
          { type: "spring", duration: 2, delay: 0.1 }
        );
        void animate(
            ".expert",
            { y: [-55, 0], opacity: 1 },
            { type: "spring", duration: 2, delay: staggerExperts }
          );
      }
    }, [animate, isInView]);

    return scope;
  };

  const scope = useExpertsAnimation();
  return (
    <section className="thirdSection rounded-xl w-full" ref={scope}>
    
        <motion.img
          src={Header}
          alt="The Amazon Rainforest"
          className="absolute inset-0 object-cover w-full h-full rounded-lg bg-black opacity-60 -z-10"
        />

        <div className=" inset-0 flex z-20 flex-col p-4 justify-start items-center pb-20">
          <p
            ref={ref}
            className="title blur-sm font-display font-extrabold text-yellow-300  text-4xl md:text-6xl rounded opacity-0 my-8 sm:my-4"
          >
            Meet the Experts
          </p>
          <div className="flex gap-10 h-full flex-wrap justify-center">
        
            {images.map((image, index) => (
                
                <div
                  key={index}
                    className={`flex flex-col text-white items-center justify-center expert opacity-0 cursor-pointer select-none`}
                >
                        <motion.div 
                           whileHover={{ scale: 1.1, y: -1 }}
                           whileTap={{ scale: 0.9, borderWidth: "10px", borderColor: "orange" }}
                           className={`content-${image} rounded-full w-32 h-32 object-cover border-2 select-none border-yellow-300`}>

                           </motion.div>
                    {/* <motion.img
                        whileHover={{ scale: 1.1, y: -1 }}
                        whileTap={{ scale: 0.9, borderWidth: "10px", borderColor: "orange" }}
                        src={image}
                        alt="Expert"
                        className="rounded-full w-32 h-32 object-cover border-2 select-none border-yellow-300"
                    /> */}
                    {/* <p className="font-light text-white text-lg">{ realNameMapFromImage[image].name }</p> */}

                    </div>
            ))}
          </div>
    
        </div>
        {/* <div className="relative h-full border-2">
          <div className="absolute flex flex-col  justify-evenly items-center w-full h-72 max-h-lg bottom-60 bg-green-600 ">
          <h2 className="text-center text-bold text-6xl font-topicItems text-yellow-400">Supported Companies</h2>
            <div className="flex justify-evenly items-center z-50 flex-wrap">
                <img src={cb} alt="cb" className="max-w-[20%]"/>
                <img src={olumes} alt="olumes" className="max-w-xs"/>
                <img src={rahua} alt="" className="max-w-xs"/>
                <img src={walk} alt="" className="max-w-xs"/>
            </div>
          </div>
        </div> */}
    </section>
  );
};

export default Experts;
