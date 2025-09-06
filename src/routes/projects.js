import Counter from "../projects/counter/Counter";
import Todo from "../projects/todo/Todo";
import Meals from "../projects/meals/Meals";
import Calculator from "../projects/calculator/Calculator";
import ToggleBackgroundColor from "../projects/toggleBackgroundColor/ToggleBackgroundColor";
import HiddenSearchBar from "../projects/hiddenSearchBar/HiddenSearchBar";
import Testimonials from "../projects/testimonials/Testimonials";

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
  {
    id: "04_calculator",
    title: "04 - Calculator",
    path: "/calculator",
    component: Calculator,
  },
  {
    id: "05_toggle_background_color",
    title: "05 - Toggle Background Color",
    path: "/toggle-background-color",
    component: ToggleBackgroundColor,
  },
  {
    id: "06_hidden_search_bar",
    title: "06 - Hidden Search Bar",
    path: "/hidden-search-bar",
    component: HiddenSearchBar,
  },
  {
    id: "07_testimonials",
    title: "07 - Testimonials",
    path: "/testimonials",
    component: Testimonials,
  },
];
