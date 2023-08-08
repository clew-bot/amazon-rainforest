import quiz from "../../json/quiz.json";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, useInView, AnimatePresence,stagger } from "framer-motion";
import checkmark from "../../assets/lottie/checkmark.json";
import wrong from "../../assets/lottie/wrong.json";
import tryagain from "../../assets/lottie/tryagain.json";
import success from "../../assets/lottie/success.json";



import { Player } from "@lottiefiles/react-lottie-player";



const Quiz = () => {
  const [quizData] = useState(quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const staggerResults = stagger(0.3, { startDelay: 1.8 });

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
      if(score === 10) {
        handleFinalScoreClick();
      }
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    console.log("hi")
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setShowAnswer(false);
  };


  const handleFinalScoreClick = () => {
   localStorage.setItem("score", score.toString());
  };


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const useQuizAnimation = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      if (isInView && showAnswer && !showScore) {

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

      if(isInView && showScore) {
        void animate(
          ".wrong-labels",
          { opacity: 1 },
          { type: "spring", duration: 0.8, delay: staggerResults }
        );
      }
    }, [isInView, animate, showAnswer, showScore]);

    return scope;
  };
  const scope = useQuizAnimation();
  return (
    <div
      ref={scope}
      className="relative w-full border-4 border-black rounded-md font-display h-[22rem] max-h-96"
    >
      <div className="bg-black">
        <h2
          ref={ref}
          className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-yellow-200 shadow-md text-left text-4xl underline"
        >
          Test your knowledge
        </h2>
      </div>

      {showScore ? (
        
        

        <div className="md:text-xl h-2/3 text-slate-900 font-bold flex justify-center items-center flex-col mt-3">
        {score === quizData.length ? (
          <>
          <Player
      loop={false}
      autoplay
      keepLastFrame
      className="md:w-1/3 w-1/2"
      src={success}
    />
        <div className=" text-green-700 flex
        flex-col items-center">
        <div className='wrong-labels opacity-0'>You scored a {score} out of {quizData.length}!&nbsp;</div>
        <div className='wrong-labels opacity-0'>
        Congratulations! You got a perfect score!
        </div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={restartQuiz}
        className="wrong-labels opacity-0 shadow-md p-2 m-2 rounded bg-white">Retry</motion.button>
   </div>
  
    
        </>


        ) : score > quizData.length / 2 ? (
          <>
          <Player
      loop={false}
      autoplay
      keepLastFrame
      className="md:w-1/3 w-1/2"
      src={tryagain}
    />
        <div className=" text-red-600 flex
        flex-col items-center">
        <div className='wrong-labels opacity-0'>You scored a whopping {score} out of {quizData.length}&nbsp;</div>
        <div className='wrong-labels opacity-0'>
        Don't worry, keep trying and you'll get there!
        </div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={restartQuiz}
        className="wrong-labels opacity-0 shadow-md p-2 m-2 rounded bg-white">Retry</motion.button>
   </div>
  
    
        </>
        ) : (
          <>
              <Player
          loop={false}
          autoplay
          keepLastFrame
          className="md:w-1/3 w-1/2"
          src={tryagain}
        />
            <div className=" text-red-600 flex
            flex-col items-center">
            <div className='wrong-labels opacity-0'>You scored a whopping {score} out of {quizData.length}&nbsp;</div>
            <div className='wrong-labels opacity-0'>
            Don't worry, keep trying and you'll get there!
            </div>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={restartQuiz}
            className="wrong-labels opacity-0 shadow-md p-2 m-2 rounded bg-white">Retry</motion.button>
       </div>
      
        
            </>
        )}
      </div>
      ) : showAnswer ? (
        <motion.div className="flex justify-center opacity-0 font-bold sm:text-2xl text-left p-2 correctIncorrect mt-[3%]">
          {selectedAnswer === quizData[currentQuestion].correctAnswer ? (
            <div className="flex items-center gap-2 text-green-700">
              <Player
                loop={false}
                autoplay
                keepLastFrame
                className="w-12"
                src={checkmark}
              />
              <span>{quizData[currentQuestion].correctDescription}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-red-500">
              <Player
                loop={false}
                autoplay
                keepLastFrame
                className="w-16"
                src={wrong}
              />
              <span>{quizData[currentQuestion].incorrectDescription}</span>
            </div>
          )}

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
          <div className="text-bold text-left underline sm:text-2xl font-bold p-2">
            {currentQuestion + 1}. {quizData[currentQuestion].question}
          </div>

          <motion.div className="quiz-container flex flex-col justify-start items-start">
            <AnimatePresence>
              {isInView && !showScore
                ? quizData[currentQuestion].answers.map((answer, index) => (
                    <motion.button
                      key={answer}
                      initial={{ opacity: 0, scale: 0.9, x: 100 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ type: "spring", delay: index * 0.1 }}
                      exit={{ opacity: 0, scale: 0.5, x: -100 }}
                      whileTap={{ scale: 0.9,  } }
                      className="answers font-semibold p-2 text-lg rounded-full hover:bg-slate-800 hover:text-white transition-colors md:ml-2 px-5"
                      onClick={() => handleAnswerClick(answer)}
                    >
                      <span className="font-bold text-xl text-green-700">
                        {index + 1}.
                      </span>{" "}
                      {answer}
                    </motion.button>
                  ))
                : null}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Quiz;
