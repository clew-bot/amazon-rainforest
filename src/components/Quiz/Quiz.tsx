import quiz from "../../json/quiz.json";
import { useState } from "react";
import { motion } from "framer-motion";

const Quiz = () => {
  const [quizData] = useState(quiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

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

  return (
    <div className="w-full border-4 border-black rounded-md font-display h-80 max-h-96">
      <div className="bg-black">
        <h2 className="w-full p-2 rounded-t-md bg-blend-luminosity bg-black font-display font-bold text-slate-100 shadow-md text-left text-4xl underline">
          Test your knowledge
        </h2>
      </div>
      {showScore ? (
        <div>You scored {score} out of {quizData.length}</div>
      ) : showAnswer ? (
        <div>
          {selectedAnswer === quizData[currentQuestion].correctAnswer
            ? quizData[currentQuestion].correctDescription
            : quizData[currentQuestion].incorrectDescription}
          <button onClick={handleNextClick}>Next</button>
        </div>
      ) : (
        <>
          <div className="text-bold text-left underline text-2xl font-bold p-2">{quizData[currentQuestion].question}</div>
          <motion.div className="flex flex-col justify-start items-start">
            {quizData[currentQuestion].answers.map((answer, index) => (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="font-light border-2 shadow-sm p-2 text-lg rounded-full"
                key={index}
                onClick={() => handleAnswerClick(answer)}
              >
                <span className="font-bold text-xl">{index + 1}.</span> {answer}
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Quiz;
