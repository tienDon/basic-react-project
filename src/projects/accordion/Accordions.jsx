import React from "react";
import { accordionData } from "./accordionData";
import Accordion from "./Accordion";

const Accordions = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Accordion Example
      </h1>
      <div className="w-full max-w-2xl">
        {accordionData.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default Accordions;
