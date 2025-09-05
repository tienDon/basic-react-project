import Counter from "../projects/counter/Counter";
import Todo from "../projects/todo/Todo";

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
];
