import {
  stagger,
  useAnimate,
  useScroll,
  motion,
  useInView,
} from "framer-motion";
import TopicItem from "../TopicItem/TopicItem";
import { useEffect, useRef, useState } from "react";
import tree from "../../assets/tree.svg";
import elephant from "../../assets/elephant.svg";
import { useMediaQuery } from "usehooks-ts";
import { Player } from "@lottiefiles/react-lottie-player";
import elephantLottie from "../../assets/lottie/animation_lk01znle.json";
// import rainLottie from "../../assets/lottie/1PzCCI3SjG.json";
interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  const isNotMobile = useMediaQuery("(min-width: 768px)");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const staggerSpanLettersEven = stagger(0.3, { startDelay: 4 });
  const staggerSpanLettersOdd = stagger(0.2, { startDelay: 3 });
  const staggerTopicItems = stagger(0.2, { startDelay: 0 });
  const [openTopic, setOpenTopic] = useState(false);
  const [theTopic, setTheTopic] = useState("");
  const [reset, setReset] = useState(true);
  const topics: string[] = [
    "River of Life",
    "Threats",
    "Indigenous Cultures",
    "Conservation Efforts",
    "Lungs of the Earth",
    "Climate and Seasons",
    "Spectrum",
    "Biodiversity",
  ];
  // const lottieRainRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const example = () => {
    console.log("hi")
  }

  const handleTopicItemClick = (topic: string) => {
    console.log("Hi")
    setReset(() => false);
    setTheTopic(topic);
    setOpenTopic(() => true);
  };

  const closeTopic = () => {
    setOpenTopic(() => false);
    setReset(() => false);
  };

  const handleNext = () => {
    if (isLastTopic()) {
      setTheTopic(() => topics[0]);
    } else {
      setReset(() => false);

      setTheTopic(() => topics[topics.indexOf(theTopic) + 1]);
      setOpenTopic(() => true);
    }
  };

  const handlePrev = () => {
    if (isFirstTopic()) {
      setTheTopic(() => topics[topics.length - 1]);
    } else {
      setTheTopic(() => topics[topics.indexOf(theTopic) - 1]);
    }
  };

  const isLastTopic = () => {
    return topics.indexOf(theTopic) === topics.length - 1;
  };

  const isFirstTopic = () => {
    return topics.indexOf(theTopic) === 0;
  };

  const useHeaderAnimations = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      if (reset && isInView) {
        // void animate(
        //   ".grassy",
        //   { opacity: 1 },
        //   { type: "spring", duration: 1.5, delay: 2.2 }
        // );
      }
      if (reset && !isNotMobile && isInView) {
        void animate(
          ".sub-text",
          { opacity: 1 },
          { type: "spring", duration: 0.4, delay: staggerSpanLettersOdd }
        );
        // void animate(
        //   ".content",
        //   { y: [0, -220], opacity: 1, fontSize: ["2rem", "1.5rem"] },
        //   { type: "spring", duration: 2, delay: 1.5 }
        // );
        // void animate(
        //   ".env",
        //   { opacity: 1, scale: [0, 0.9], y: -30 },
        //   { type: "keyframes", duration: 1.2, delay: 3 }
        // );
      }

      if (reset && isNotMobile && isInView) {
        void animate(
          ".sub-text",
          { opacity: 1 },
          { type: "spring", duration: 0.6, delay: staggerSpanLettersEven }
        );
        void animate(
          "h2",
          { y: [0, -250], opacity: 1, fontSize: ["6rem", "4rem"] },
          { type: "spring", duration: 2, delay: 1.5 }
        );
        void animate(
          ".env",
          { opacity: 1, scale: [0, 0.9], y: 12 },
          { type: "keyframes", duration: 1.2, delay: 3 }
        );
      }

      if (openTopic) {
        // void animate(
        //   ".topic",
        //   { opacity: 1 },
        //   { type: "spring", duration: 2, delay: 0 }
        // );

        void animate(
          "p, li",
          { opacity: 1, scale: [0, 0.9] },
          { type: "spring", duration: 0.4, delay: staggerTopicItems }
        );
        void animate(
          ".section-img",
          { opacity: 1, scale: [0, 0.9] },
          { type: "spring", duration: 0.4, delay: staggerTopicItems }
        );
      }
    }, [
      animate,
      isInView,
      isNotMobile,
      openTopic,
      reset,
      scrollYProgress,
      staggerSpanLettersEven,
      staggerSpanLettersOdd,
      staggerTopicItems,
      theTopic,
    ]);

    return scope;
  };

  const scope = useHeaderAnimations();
  return (
    <section
      className="firstSection rounded-xl w-full border-4 border-red-900"
      ref={scope}
    >
      <div className="relative flex flex-col justify-start items-start pt-8 gap-3">
        {/* <div className="rain-container">
          {Array.from({ length: 4 }, (_, index) => (
            <Player
              ref={lottieRainRef}
              key={index}
              autoplay
              loop
              className="top-0 rain-player"
              src={rainLottie}
            />
          ))}
        </div> */}

        <h2
          ref={ref}
          className="font-display font-bold text-white text-3xl underline"
        >
          {content}
        </h2>
        {/* <div className="absolute bottom-4 left-0 w-full h-full bg-bottom flex justify-center items-end snap-center opacity-0">
          <Player
            autoplay
            loop
            className="player hidden sm:block w-1/3"
            src={elephantLottie}
          ></Player>
          <img
            className="env w-1/2 sm:w-1/3 opacity-0"
            height="100%"
            src={tree}
            alt=""
          />
          <img
            className="env w-1/4 opacity-0"
            height="100%"
            src={elephant}
            alt=""
            style={{ transform: "translateY(50px) translateX(50px)" }}
          />
          <Player
            className="player hidden sm:block w-1/3"
            autoplay
            loop
            src={elephantLottie}
          ></Player>
        </div> */}

          {topics.map((topic) => (
            <motion.div
              key={topic}
              className="relative sub-text opacity-1 w-full cursor-pointer text-2xl z-50"
            >
              <motion.div
                whileTap={{ x: 5, y: 5 }}
                className="relative text-slate-100 font-display"
                onClick={() => handleTopicItemClick(topic)}
              >
                {topic}
              </motion.div>

            </motion.div>
          ))}

   

        <TopicItem
          isOpen={openTopic}
          closeTopic={closeTopic}
          theTopic={theTopic}
          handleNextTopic={handleNext}
          handlePrevTopic={handlePrev}
          isLastTopic={isLastTopic}
          isFirstTopic={isFirstTopic}
        />
      </div>
    </section>
  );
};

export default Header;
