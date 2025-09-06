import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className.includes("search")) {
      setShowInput(false);
      setBgColor("white");
    }
  };

  return (
    <section
      className="search min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <FaSearch
          onClick={() => setShowInput(true)}
          className="text-3xl cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
        />
      )}
    </section>
  );
};

export default HiddenSearchBar;
