import { useReducer, useState } from "react";
import { counterReducer, initialState } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });
  const reset = () => dispatch({ type: "reset" });
  const incrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: +inputValue });
    setInputValue(0);
  };
  const decrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: +inputValue });
    setInputValue(0);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg">
      {/* Counter Display */}
      <div className="text-7xl font-bold text-gray-800 bg-gray-100 px-8 py-4 rounded-lg shadow-inner">
        {state.count}
      </div>

      {/* Main Controls */}
      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-6 py-3 bg-red-500 text-white text-xl font-semibold rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all shadow-md"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-500 text-white text-xl font-semibold rounded-lg hover:bg-gray-600 transform hover:scale-105 transition-all shadow-md"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-6 py-3 bg-green-500 text-white text-xl font-semibold rounded-lg hover:bg-green-600 transform hover:scale-105 transition-all shadow-md"
        >
          +
        </button>
      </div>

      {/* Amount Controls */}
      <div className="flex gap-4 items-center mt-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={decrementByAmount}
          className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors"
        >
          Decrease by Amount
        </button>
        <button
          onClick={incrementByAmount}
          className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition-colors"
        >
          Increase by Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
