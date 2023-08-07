import quiz from "../../json/quiz.json";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, useInView, stagger, AnimatePresence } from "framer-motion";
import checkmark from "../../assets/lottie/checkmark.json";
import wrong from "../../assets/lottie/wrong.json";

import { Player } from "@lottiefiles/react-lottie-player";

const Quiz = () => {
  const [quizData] = useState(quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const staggerButtons = stagger(0.1, { startDelay: 0 });




  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setShowAnswer(false);
    } else {
      setShowScore(true);
    }
  };
 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const useQuizAnimation = () => {
    const [scope, animate] = useAnimate();


    useEffect(() => {
      if (isInView && showAnswer) {
        void animate(
          ".correctIncorrect",
          { opacity: 1 },
          { type: "spring", duration: 0.8, delay: 0.1 }
        );
        // void animate(
        //   ".quizItem",
        //   { opacity: 1, scale: [0, 0.9] },
        //   { type: "spring", duration: 0.3, delay: 0.2 }
        // );
      }
    }, [isInView, animate, showAnswer]);

    return  scope ;
  }
  const scope = useQuizAnimation();
  return (
    
    <div
      ref={scope}
     className="relative w-full border-4 border-black rounded-md font-display h-80 max-h-96">
      <div className="bg-black">
        <h2
        ref={ref}
        className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline">
          Test your knowledge
        </h2>
      </div>
      
      {showScore ? (
        <div className="text-xl h-2/3 text-yellow-900 font-bold flex justify-center items-center">You scored {score} out of {quizData.length}</div>
      ) : showAnswer ? (
        <motion.div 
        className="flex justify-center opacity-0 font-bold sm:text-2xl text-left p-2 correctIncorrect mt-[3%]">
          {selectedAnswer === quizData[currentQuestion].correctAnswer
            ? 
            <div className="flex items-center gap-2 text-green-700">
                  <Player
                loop={false}
                autoplay
                keepLastFrame
                className="w-12"
                src={checkmark}  />
              <span>{quizData[currentQuestion].correctDescription}</span>
       
            </div>
          
            : 
            
            
            
            
            <div className="flex items-center gap-1 text-red-500">
            <Player
          loop={false}
          autoplay
          keepLastFrame
          className="w-14"
          src={wrong}  />
        <span>{quizData[currentQuestion].incorrectDescription}</span>
 
      </div>

            
            }
         
         <motion.button
  whileTap={{ scale: 0.9 }}
  whileHover={{ scale: 1.2 }}
  className="absolute bottom-3 left-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out text-lg"
  onClick={handleNextClick}
>
  Next
</motion.button>

        </motion.div>
      ) : (
        <>
          <div className="text-bold text-left underline sm:text-2xl font-bold p-2">{currentQuestion + 1}. {quizData[currentQuestion].question}</div>
         
          <motion.div className="quiz-container flex flex-col justify-start items-start">
           
          <AnimatePresence>
  {isInView && !showScore ? (
    quizData[currentQuestion].answers.map((answer, index) => (
      <motion.button
        key={answer}
        initial={{ opacity: 0, scale: 0.9, x: 100,  }}
        animate={{ opacity: 1, scale: 1, x: 0,}}
        transition={{ type: "spring", delay: index * 0.1 }}
        exit={{ opacity: 0, scale: 0.5, x: -100,  }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="answers font-light p-2 text-lg rounded-full"
        onClick={() => handleAnswerClick(answer)}
      >
        <span className="font-bold text-xl text-red-600">{index + 1}.</span> {answer}
      </motion.button>
    ))
  ) : null}
</AnimatePresence>

          </motion.div>
      
        </>
      )}
    </div>
  );
};

export default Quiz;
