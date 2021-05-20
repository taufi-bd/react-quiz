import React, { useEffect, useState } from "react";
import { formatTime } from "../utils";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex p-4 text-center">
      <div className="p-4 pb-12 shadow-2xl rounded-3xl">
        <div className="py-12 lg:px-24 md:px-24 px-4">
          <h3 className="text-2xl font-bold mb-2 tracking-wide text-blue-900">
            Your results
          </h3>
          <p className="mb-3 text-xl">
            {correctAnswers} out of {data.length}
          </p>
          <p className="mb-3 text-xl">
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          <p className="mb-6 text-xl">
            <strong>Your time :</strong> {formatTime(time)}
          </p>
          <button
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400  focus:outline-none uppercase mb-4"
            onClick={onAnswersCheck}
          >
            Check your answers
          </button>
          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-400  focus:outline-none uppercase"
            onClick={onReset}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
