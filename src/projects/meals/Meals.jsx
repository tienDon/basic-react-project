import axios from "axios";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Seafood Meals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map(({ strMeal, strMealThumb, idMeal }) => (
          <div
            key={idMeal}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              className="h-48 w-full object-cover"
              src={strMealThumb}
              alt={strMeal}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{strMeal}</h2>
              <p className="text-gray-500 text-sm">ID: #{idMeal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
