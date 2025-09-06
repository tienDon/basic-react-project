import Counter from "../projects/counter/Counter";
import Todo from "../projects/todo/Todo";
import Meals from "../projects/meals/Meals";

export const projects = [
  {
    id: "01_counter",
    title: "01 - Counter",
    path: "/counter",
    component: Counter,
  },
  {
    id: "02_todo",
    title: "02 - Todo",
    path: "/todo",
    component: Todo,
  },
  {
    id: "03_meals",
    title: "03 - Meals",
    path: "/meals",
    component: Meals,
  },
];
