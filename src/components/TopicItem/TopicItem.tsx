import { motion, AnimatePresence } from "framer-motion";
const imageVariants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

interface TopicItemProps {
  topic: string;
  closeTopic: () => void;
  isOpen: boolean;
}
const TopicItem = ({ isOpen, topic, closeTopic }: TopicItemProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
      <motion.div
        key={topic}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="height2 absolute border-2 border-black p-3  w-full top-0 right-[50%]] z-[99999] bg-green-500 opacity-5 rounded-lg border-dotted bg-opacity-10 backdrop-filter backdrop-blur-lg font-display text-xl font-bold text-center"
      >
        <h2>{topic}</h2>
        <div 
        onClick={closeTopic}
        className="absolute top-2 right-2">X</div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopicItem;
