import { motion, AnimatePresence } from "framer-motion";
const imageVariants = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

interface TopicItemProps {
  topic: string;
}
const TopicItem = ({ topic }: TopicItemProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key={topic}
        initial={{rotate: -65, scale: 0, y: 1000, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, y: 0, opacity: 1 }}
        exit={{ rotate: 65, y: -1000, opacity: 0, filter: "blur(10px)" }}
        //  variants={imageVariants}
         transition={{ duration: 1 }}
        className="absolute border-2 border-black p-3 h-96 w-full top-0 right-[50%]] z-[99999] bg-green-500 opacity-5 rounded-lg border-dotted"
      >
        {topic}
      </motion.div>
    </AnimatePresence>
  );
};

export default TopicItem;
