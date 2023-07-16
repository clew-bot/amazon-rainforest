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
const imageVariants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

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
  isLastTopic,
  isFirstTopic,
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
          className="height2 absolute my-10  w-full min-w-[320px] top-0 right-[50%]] z-[99999] bg-black opacity-5 rounded-lg border-dotted bg-opacity-10 backdrop-filter backdrop-blur-lg font-display overflow-scroll
          lg:overflow-auto text-container"
        >
          <div key={theTopic} className="h-full relative">
            <h2 className="pt-4 text-center text-lg lg:text-3xl font-bold text-blue-00">
              {theTopic}
            </h2>
            <div
              onClick={closeTopic}
              className="cursor-pointer absolute top-2 right-2"
            >
              X
            </div>

            {topics.map(
              (topic) =>
                topic.title === theTopic && (
                  <div key={topic.title} className="overflow-hidden height3">
                    <div className="flex flex-col-reverse md:flex-row justify-center mt-5 sm:mx-5 h-full gap-2">
                      <div className="w-full md:w-1/2 p-4 mb-4 md:mb-0 rounded-md shadow-md bg-white bg-opacity-50 overflow-scroll lg:overflow-auto 2xl:height3 text-container 2xl:h-full ">
                        <p className="opacity-0 font-bold text-2xl text-slate-900 mb-2">
                          {topic.sections[0].title}
                        </p>
                        <p className="opacity-0 font-medium text-lg text-slate-900 mb-4">
                          {topic.sections[0].content}
                        </p>
                        <ul className="list-disc pl-5 text-gray-700">
                          {topic.sections.slice(1).map((section, index) => (
                            <li key={index} className="mb-2">
                              {section.content}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="w-full md:w-1/2 flex flex-col h-1/2">
                        <div className="max-h-96">
                          <img
                            src={imageMapper[topic.title]}
                            className="object-cover max-h-full w-full rounded-md shadow-md mb-2"
                            alt={topic.sections[0].title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>

          <div
            onClick={handleNextTopic}
            className="absolute bottom-2 right-2 cursor-pointer rotate-180 text-xl"
          >
            ⬅
          </div>

          <div
            onClick={handlePrevTopic}
            className="absolute bottom-2 right-10 cursor-pointer text-xl"
          >
            ⬅
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopicItem;
