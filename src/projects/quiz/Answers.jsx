import React from "react";
import { questions } from "./questions";

const Answers = ({ selectedAnswer, currentQuestionIndex }) => {
  return (
    <div>
      {selectedAnswer ? (
        selectedAnswer === questions[currentQuestionIndex].answer ? (
          <p className="text-green-600 text-2xl font-bold mt-4 text-center">
            Correct! 🎉
          </p>
        ) : (
          <p className="text-red-600 text-2xl font-bold mt-4 text-center">
            Wrong! 😞 The correct answer is:{" "}
            {questions[currentQuestionIndex].answer}
          </p>
        )
      ) : (
        <p className="text-gray-600 text-xl mt-4 text-center">
          Please select an answer.
        </p>
      )}
    </div>
  );
};

export default Answers;
