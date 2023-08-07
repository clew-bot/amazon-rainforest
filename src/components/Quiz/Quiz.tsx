import quiz from "../../json/quiz.json";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, useInView, stagger, AnimatePresence } from "framer-motion";

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
          { opacity: 1, y: [150, 0], filter: ["blur(10px)", "blur(0px)"] },
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
  console.log(isInView) 
  const scope = useQuizAnimation();
  return (
    
    <div
      ref={scope}
     className="w-full border-4 border-black rounded-md font-display h-80 max-h-96">
      <div className="bg-black">
        <h2
        ref={ref}
        className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline">
          Test your knowledge
        </h2>
      </div>
      
      {showScore ? (
        <div>You scored {score} out of {quizData.length}</div>
      ) : showAnswer ? (
        <motion.div 
        className="opacity-0 font-bold text-2xl text-left p-2 correctIncorrect">
          {selectedAnswer === quizData[currentQuestion].correctAnswer
            ? quizData[currentQuestion].correctDescription
            : quizData[currentQuestion].incorrectDescription}
            <br/>
          <motion.button
          whileHover={{ scale: 1.2 }}
          className="underline rounded-md p-1 text-red-800"
          onClick={handleNextClick}>Next</motion.button>
        </motion.div>
      ) : (
        <>
          <div className="text-bold text-left underline text-2xl font-bold p-2">{quizData[currentQuestion].question}</div>
         
          <motion.div className="quiz-container flex flex-col justify-start items-start">
           
          <AnimatePresence>
  {isInView && !showScore ? (
    quizData[currentQuestion].answers.map((answer, index) => (
      <motion.button
        key={answer}
        initial={{ opacity: 0, scale: 0.9, x: 100, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", delay: index * 0.1 }}
        exit={{ opacity: 0, scale: 0.5, x: -100, filter: "blur(10px)" }}
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
