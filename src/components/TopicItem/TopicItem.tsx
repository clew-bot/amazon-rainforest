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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute z-50 p-2 border-4 height5"
        >
            <motion.div
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
              key={theTopic}
              className="h-full relative bg-green-100 rounded-md"
            >
              <h2 className="pt-4 text-center text-2xl lg:text-3xl font-bold text-zinc-900">
                {theTopic}
              </h2>
              <div
                onClick={closeTopic}
                className="cursor-pointer absolute top-2 right-2"
              >
                <img src={x2} width="30px" className="hover:transition-all hover:animate-pulse" alt="" />
              </div>

              {topics.map(
                (topic) =>
                  topic.title === theTopic && (
                    <div
                    key={topic.title}
                    className="height2">
                      <div className="flex flex-col-reverse md:flex-row justify-center mt-5 sm:mx-5 h-full gap-2 ">
                        <div className="w-full md:w-1/2 p-2 mb-4 overflow-scroll lg:overflow-auto  text-container text-zinc-800">
                          <p className="opacity-0 font-bold text-2xl mb-2">
                            {topic.sections[0].title}
                          </p>
                          <p className="opacity-0 font-medium text-lg">
                            {topic.sections[0].content}
                          </p>
                          <ul className="list-disc pl-5 overflow-scroll">
                            {topic.sections.slice(1).map((section, index) => (
                              <li key={index} className="mb-2">
                                {section.content}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col h-1/2">
                          <div className="max-h-96 2xl:max-h-max">
                            <motion.img
                              
                              src={imageMapper[topic.title]}
                              className="section-img object-cover max-h-full w-full rounded-md shadow-md mb-2"
                              alt={topic.sections[0].title}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </motion.div>
            
          <div
            onClick={handleNextTopic}
            className="absolute bottom-4 right-6
            cursor-pointer rotate-180 text-xl"
          >
            ⬅
          </div>

          <div
            onClick={handlePrevTopic}
            className="absolute bottom-4 right-14 cursor-pointer text-xl"
          >
            ⬅
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopicItem;
