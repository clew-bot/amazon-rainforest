import {
  stagger,
  useAnimate,
  motion,
  useInView,
} from "framer-motion";
import TopicItem from "../TopicItem/TopicItem";
import { useEffect, useRef, useState } from "react";
interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const staggerTopicItems = stagger(0.2, { startDelay: 0 });
  const [openTopic, setOpenTopic] = useState(false);
  const [theTopic, setTheTopic] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      if (isInView && !openTopic) {
      void animate(
        ".content",
        { opacity: 1, x: [-220, 0] },
        { type: "spring", duration: 1, delay: .2 }
      );
      void animate(
        ".topics",
        { opacity: 1},
        { type: "spring", duration: 1, delay: staggerTopicItems }
      );
      }


      console.log("openTopic", openTopic);
      if (openTopic) {
       
        void animate(
          ".topic-content",
          { opacity: 1, scale: [0, 0.9] },
          { type: "spring", duration: 0.4, delay: staggerTopicItems }
        );
        void animate(
          ".section-img",
          { opacity: 1 },
          { type: "spring", duration: 0.4, delay: staggerTopicItems }
        );
      }
    }, [animate, isInView, openTopic, topics]);

    return scope;
  };

  const scope = useHeaderAnimations();

  
  return (
    <section
      className="secondSection rounded-xl w-fullrelative"
      ref={scope}
    >
      <div className="absolute bg-black w-full h-full opacity-30"></div>
      <div className=" mx-2 relative flex flex-col justify-start items-start pt-8 gap-3">
        <h2
          ref={ref}
          className="font-display text-white text-3xl underline content opacity-0 pl-4"
        >
          {content}
        </h2>
          {topics.map((topic) => (
            <motion.div
              key={topic}
              className="relative sub-text opacity-1 w-full cursor-pointer text-2xl z-50 opacity-0 topics pl-4"
            >
              <motion.div
                whileTap={{ x: 5, y: 5 }}
                className="relative text-slate-100 font-display font-light"
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
