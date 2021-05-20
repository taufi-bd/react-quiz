import React from "react";

const Modal = ({ onClose, results, data }) => {
  return (
    <div className="p-4 justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
      <div onClick={onClose}></div>
      <div className="bg-white py-12 lg:px-24 md:px-24 px-4 rounded shadow-2xl overflow-y-auto h-full">
        <header>
          <p className="text-2xl font-bold mb-2 tracking-wide text-blue-900 text-center mb-6">
            Your answers
          </p>
        </header>
        <section>
          <ul>
            {results.map((result, i) => (
              <li key={i}>
                <p className="mt-4">
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].answer
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].answer ? (
                  <p className="text-blue-900">
                    Correct answer: {data[i].answer}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
        <button
          className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 text-lg  focus:outline-none uppercase mt-4"
          type="button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
