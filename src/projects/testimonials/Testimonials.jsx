import React, { useState } from "react";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-6">
      <div className="max-w-2xl text-center bg-white p-6 rounded-lg shadow-lg">
        <p className="text-xl font-semibold text-gray-800 mb-4">
          "{testimonials[currentIndex].quote}"
        </p>
        <p className="text-gray-500 text-sm">
          - {testimonials[currentIndex].author}
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrevClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Prev
          </button>
          <button
            onClick={handleNextClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
