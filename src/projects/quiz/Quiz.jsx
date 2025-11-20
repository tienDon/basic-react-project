import React, { useEffect, useState } from "react";
import { questions } from "./questions";
import Answers from "./Answers";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [userAnswers, setUserAnswers] = useState(
    Array.from({ length: questions.length })
  );

  const handleAnswer = (option, index) => {
    setSelectedAnswer(option);
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = index;
    setUserAnswers(newUserAnswers);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(0);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex === 0) {
      setCurrentQuestionIndex(questions.length - 1);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
    setSelectedAnswer(null);
  };

  useEffect(() => {
    const answerIndex = userAnswers[currentQuestionIndex];
    if (answerIndex !== undefined) {
      const userAnswer = questions[currentQuestionIndex].options[answerIndex];
      setSelectedAnswer(userAnswer);
    } else {
      setSelectedAnswer(null);
    }
  }, [currentQuestionIndex, userAnswers]);

  return (
    <div className="bg-gray-300 w-[70%] mx-auto h-[350px] p-2 rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Câu {currentQuestionIndex + 1}
      </h1>

      <p className="text-3xl ">{questions[currentQuestionIndex].question}</p>
      <div className="grid grid-cols-2">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            value={option}
            onClick={() => handleAnswer(option, index)}
            disabled={selectedAnswer}
            className={` rounded-lg hover:bg-gray-200 m-2 p-2 cursor-pointer ${
              selectedAnswer === option
                ? "bg-gray-400 "
                : "text-gray-800 bg-white"
            } ${
              selectedAnswer && selectedAnswer !== option
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <Answers
        selectedAnswer={selectedAnswer}
        currentQuestionIndex={currentQuestionIndex}
      />

      <div className="flex justify-between mx-4 my-5">
        <button
          onClick={previousQuestion}
          className="bg-blue-400 cursor-pointer w-20 rounded-full h-10"
        >
          Previous
        </button>
        <button
          onClick={nextQuestion}
          className="bg-blue-400 cursor-pointer w-20 rounded-full h-10"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
