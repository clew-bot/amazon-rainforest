import Header from "./header.jpg";
import { stagger, useAnimate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const staggerExperts = stagger(0.1, { startDelay: 0.5 });
import comingsoon from "../../assets/lottie/comingsoon.json";



import { Player } from "@lottiefiles/react-lottie-player";

const images = ["chico", "jane", "marina", "mark", "raoni", "sonia", "sydney"];

type ExpertInfo = {
  name: string;
  role?: string;
  details?: string;
};

const realNameMapFromImage: { [key: string]: ExpertInfo } = {
  chico: {
    name: "Chico Mendes",
    role: "Environmentalist, rubber tapper, trade union leader",
    details:
      "Fought to preserve the rainforest and advocated for the rights of Brazilian peasants and indigenous peoples. He loved rubber trees more than rubber boots, leading the fight against deforestation while getting his feet muddy!",
  },
  jane: {
    name: "Jane Goodall",
    role: "Renowned primatologist and anthropologist",
    details:
      "Known for her 60-year study of wild chimpanzees, she's a lover of all things wild and hairy (including her favorite stuffed animal)! Her chimp impression would win 'Amazon's Got Talent' if there were such a thing.",
  },
  marina: {
    name: "Marina Silva",
    role: "Environmentalist and politician",
    details:
      "An advocate for sustainable development, she doesn't just talk about saving trees – she gets into political trenches to fight for them. Her name's Marina, but she's more about the forest than the sea!",
  },
  mark: { name: "Mark Plotkin", role: "Ethnobotanist and author.", details: "Helps preserve indigenous knowledge and plant wisdom. He knows the Amazon's plants like he knows the back of his leafy hand. He can talk to plants, and they talk back – in the language of life-saving medicines." },
  raoni: { name: "Raoni Metuktire", role: "Indigenous leader and environmentalist.", details: "Why He's Inspirational: A living symbol of the fight to preserve native culture and the Amazon rainforest. His lip plate is as iconic as his commitment to his people and the forest!" },
  sonia: { name: "Sônia Guajajara", role: "Indigenous Brazilian leader and activist.", details: "Why She's a Superstar: A voice for the rights and land of indigenous people. If the Amazon were a country, she'd probably run for president. She's not just fighting for the trees – she's fighting for the people who hug them!" },
  sydney: { name: "Sydney Possuelo", role: " Explorer and advocate for isolated indigenous communities.", details: "Why He's a Hero: Works tirelessly to protect uncontacted tribes, making sure they can continue playing hide-and-seek with modern civilization. If there were an Amazonian version of Indiana Jones, Sydney's the man with the hat!" },
};

const Experts = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [selectedExpert, setSelectedExpert] = useState<ExpertInfo | null>(null);

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
          Meet Our Savers
        </p>
        <div className="flex gap-10 h-full flex-wrap justify-center">
          {images.map((image: string, index) => (
            <div
              key={index}
              className={`flex flex-col text-white items-center justify-center expert opacity-0 cursor-pointer select-none gap-2`}
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -1 }}
                whileTap={{
                  scale: 0.9,
                  borderWidth: "10px",
                  borderColor: "orange",
                }}
                className={`content-${image} rounded-full w-32 h-32 object-cover border-2 select-none border-yellow-300`}
                onClick={() => setSelectedExpert(realNameMapFromImage[image])}
              ></motion.div>
              <p className="font-semibold font-topicItems text-yellow-200 underline underline-offset-2 decoration-blue-400 text-lg">
                {realNameMapFromImage[image].name}
              </p>
            </div>
          ))}
        </div>
        {selectedExpert && (
          <div className="absolute bottom-0">
          <Player
              loop={true}
              autoplay
            src={comingsoon}
            style={{  background: "transparent" }}
            controls={true}
            />
          </div>
        )}
      </div>

      {/* <div className="text-blue-300 underline decoration-yellow-300 text-9xl italic text-center">Thank You</div> */}
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
