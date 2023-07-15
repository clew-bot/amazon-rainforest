import { motion, AnimatePresence } from "framer-motion";
import topics from "../../json/topics.json";
const imageVariants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

interface TopicItemProps {
  theTopic: string;
  closeTopic: () => void;
  isOpen: boolean;
}



const TopicItem = ({ isOpen, theTopic, closeTopic }: TopicItemProps) => {
  console.log(theTopic);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key={theTopic}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="height2 absolute border-2 border-black p-3  w-full min-w-[320px] top-0 right-[50%]] z-[99999] bg-black opacity-5 rounded-lg border-dotted bg-opacity-10 backdrop-filter backdrop-blur-lg font-display overflow-scroll sm:overflow-hidden"
        >
          <h2 className="text-center text-xl font-bold">{theTopic}</h2>
          <div
            onClick={closeTopic}
            className="cursor-pointer absolute top-2 right-2"
          >
            X
          </div>
          <div>
            {topics.map((topic) => (
              <div key={topic.title} className="">
                {topic.title === theTopic && (
                  <div className="flex flex-col md:flex-row justify-center items-start mt-5 sm:mx-5">
                    <div className="w-full md:w-1/2 p-4 mb-4 md:mb-0 rounded-md shadow-md bg-white bg-opacity-50 overflow-y-scroll max-h-[50vh] lg:max-h-full lg:overflow-visible">
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
                    <div className="w-full md:w-1/2 flex flex-col">
                      <div className="h-64 w-full md:h-auto">
                        <img
                          src={topic.image}
                          className="object-cover h-[30vh] md:h-full w-full rounded-md shadow-md"
                          alt={topic.sections[0].title}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopicItem;
