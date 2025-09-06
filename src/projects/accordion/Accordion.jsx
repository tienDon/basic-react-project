import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-lg">
      <div
        className="flex justify-between items-center bg-gray-200 px-4 py-3 cursor-pointer hover:bg-gray-300 transition-all"
        onClick={() => setIsActive(!isActive)}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-xl font-bold text-gray-600">
          {isActive ? "-" : "+"}
        </p>
      </div>
      {isActive && (
        <div className="bg-white px-4 py-3 text-gray-700">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
