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

  const staggerTopicItems = stagger(0.1, { startDelay: .4 });
  const staggerTopicText = stagger(0.1, { startDelay: 0 });
  const [openTopic, setOpenTopic] = useState(false);
  const [theTopic, setTheTopic] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reset, setReset] = useState(true);
  console.log(reset)
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
      if (isInView && !openTopic && reset) {
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

      if (openTopic) {
       
        void animate(
          ".topic-content",
          { opacity: 1, scale: [0, 0.9] },
          { type: "spring", duration: 0.4, delay: staggerTopicText }
        );
        void animate(
          ".section-img",
          { opacity: 1 },
          { type: "spring", duration: 0.3, delay: 0 }
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
          className="font-topicItems text-yellow-300 text-3xl md:text-6xl underline content opacity-0 pl-6 mb-4"
        >
          {content}
        </h2>
          {topics.map((topic) => (
            <motion.div
              key={topic}
              className="relative opacity-1 w-full text-2xl md:text-4xl z-10 opacity-0 topics pl-4"
            >
              <motion.div
                whileHover={{ y: -5, backgroundColor: "#09090b", borderRadius: "5px" }}
                whileTap={{ y: 5, backgroundColor: "#f4f4f5", borderRadius: "5px", color: "#09090b" }}
                className="cursor-pointer relative text-yellow-200 font-display font-semibold w-fit p-1"
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
