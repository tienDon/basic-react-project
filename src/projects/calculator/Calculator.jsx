import React, { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };
  const calculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      console.log(error);
      setInputValue("");
    }
  };
  const clear = () => {
    setInputValue("");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 ">
      <form className="bg-white p-4 rounded-lg shadow-lg w-80" name="calc">
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg text-right text-xl"
          type="text"
          value={inputValue}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          <span className="bg-red-500 text-white p-2 rounded" onClick={clear}>
            c
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("/")}
          >
            /
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("*")}
          >
            *
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("7")}
          >
            7
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("8")}
          >
            8
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("9")}
          >
            9
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("-")}
          >
            -
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("4")}
          >
            4
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("5")}
          >
            5
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("6")}
          >
            6
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("+")}
          >
            +
          </span>

          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("1")}
          >
            1
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("2")}
          >
            2
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("3")}
          >
            3
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("0")}
          >
            0
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display(".")}
          >
            .
          </span>
          <span
            className="bg-gray-200 p-2 rounded"
            onClick={() => display("00")}
          >
            00
          </span>
          <span className="bg-gray-200 p-2 rounded" onClick={calculate}>
            =
          </span>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
