import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="flex p-4 text-center">
      <div className="p-4  shadow-2xl rounded-3xl">
        <div className="py-6 px-16">
          <h1 className="text-2xl font-bold mb-2 tracking-wide text-blue-900">
            Start the quiz
          </h1>
          <p className="mb-4">Good luck!</p>
          <div className="flex justify-center mb-2">
            <svg
              className="animate-bounce w-6 h-6 text-amber-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
          <button
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 text-lg  focus:outline-none uppercase"
            onClick={onQuizStart}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
