import React, { useState, useEffect, useRef } from "react";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector(
      "input:checked"
    );
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  return (
    <div className="flex p-4 text-center">
      <div>
        <div className="p-4 pb-12 shadow-2xl rounded-3xl">
          <div className="py-12 px-16">
            <h2 className="text-xl font-light mb-2 tracking-wide">
              {data.question}
            </h2>
            <div ref={radiosWrapper} className="text-left">
              {error ? (
                <div className="text-red-600 pt-3 tracking-wide font-bold ">
                  {error}
                </div>
              ) : null}
              {data.choices.map((choice, i) => (
                <label key={i} className="block pt-3">
                  <input
                    type="radio"
                    name="answer"
                    value={choice}
                    onChange={changeHandler}
                  />
                  <span className="ml-2 font-light tracking-wide text-blue-900">
                    {choice}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            className="w-full py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-400 text-lg  focus:outline-none"
            onClick={nextClickHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
