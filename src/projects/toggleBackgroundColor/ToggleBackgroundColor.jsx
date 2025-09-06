import React, { useState } from "react";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
  };

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s, color 0.5s",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: textColor,
          color: backgroundColor,
          border: `2px solid ${textColor}`,
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
          transition: "background-color 0.5s, color 0.5s",
        }}
      >
        {backgroundColor === "#1b1b1b" ? "Light Mode" : "Dark Mode"}
      </button>

      <h1
        style={{
          fontFamily: "'Bungee Outline', cursive",
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        Welcome to a <br /> Real World...
      </h1>
    </div>
  );
};

export default ToggleBackgroundColor;
