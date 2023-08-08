import { motion, AnimatePresence } from "framer-motion";
import river from "../../assets/topicImgs/river.jpeg";
import threats from "../../assets/topicImgs/threats.jpeg";
import tribes from "../../assets/topicImgs/culture.jpeg";
import conservation from "../../assets/topicImgs/conservation.jpeg";
import lungs from "../../assets/topicImgs/lungs.png";
import topics from "../../json/topics.json";
import climate from "../../assets/topicImgs/climate.jpeg";
import spectrum from "../../assets/topicImgs/spectrum.jpeg";
import biodiversity from "../../assets/topicImgs/biodiversity.jpg";
import x2 from "../../assets/images/x2.png";

interface TopicItemProps {
  theTopic: string;
  closeTopic: () => void;
  isOpen: boolean;
  handleNextTopic: () => void;
  handlePrevTopic: () => void;
  isFirstTopic: () => boolean;
  isLastTopic: () => boolean;
}

interface imageMapper {
  [key: string]: string;
}

const TopicItem = ({
  isOpen,
  theTopic,
  closeTopic,
  handleNextTopic,
  handlePrevTopic,
}: TopicItemProps) => {
  const imageMapper: imageMapper = {
    "River of Life": river,
    Threats: threats,
    "Indigenous Cultures": tribes,
    "Conservation Efforts": conservation,
    "Lungs of the Earth": lungs,
    "Climate and Seasons": climate,
    Spectrum: spectrum,
    Biodiversity: biodiversity,
  };
  return (
<AnimatePresence>

      {isOpen && (
              <motion.div
              initial={{ opacity: 0, scale: .6 }}
              animate={{ opacity: 1,scale:1, transition: { duration: 0.3, type: "tween" } }}
              exit={{ scale: .6, opacity: 0, transition: { duration: 0.3 } }}
              key={theTopic}
              className="absolute z-50 height5 bg-white w-full sm:w-2/3 sm:mx-auto sm:left-1/4 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 rounded-md shadow-lg opacity-0"
            >
              <AnimatePresence>
          <motion.div
      
            key={theTopic}
            className="h-full relative rounded-md"
          >
            <div
              onClick={closeTopic}
              className="cursor-pointer absolute top-2 right-2"
            >
              <img
                src={x2}
                width="30px"
                className="hover:transition-all hover:animate-pulse"
                alt="Close"
              />
            </div>

            {topics.map(
              (topic) =>
                topic.title === theTopic && (
                  <motion.div
                
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    key={topic.title}
                    className="h-full flex "
                  >
                    <div className="relative w-1/3">
                      <motion.img
                        src={imageMapper[topic.title]}
                        className="section-img absolute opacity-0 object-cover w-full h-full z-50 rounded-tl-md rounded-bl-md"
                        alt={topic.sections[0].title}
                      />
                    </div>

                    <div className="w-full md:w-1/2 p-2 overflow-scroll lg:overflow-auto  text-container text-zinc-800 grow font-display">
                      <p className="topic-content opacity-0 font-bold text-3xl my-4 italic text-slate-800">
                        {topic.sections[0].title}
                      </p>
                      <p className="opacity-0 font-medium text-lg topic-content">
                        {topic.sections[0].content}
                      </p>
                      <ul className="topic-content pl-5 overflow-scroll list-none">
                        {topic.sections.slice(1).map((section, index) => (
                          <li key={index} className="mb-2">
                            {section.content}
                          </li>
                        ))}
                      </ul>

                      <div className="w-full md:w-1/2 flex flex-col h-1/2">
                        <div className="max-h-96 2xl:max-h-max"></div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </motion.div>
          </AnimatePresence>
          <div
            onClick={handleNextTopic}
            className="absolute bottom-4 right-6
            cursor-pointer  text-xl"
          >
            ➤
          </div>

          <div
            onClick={handlePrevTopic}
            className="rotate-180 absolute bottom-4 right-14 cursor-pointer text-xl"
          >
            ➤
          </div>
          </motion.div>
      )}
        
</AnimatePresence>

  );
};

export default TopicItem;
