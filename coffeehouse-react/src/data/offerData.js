import latte from "../assets/latte.jpg";
import dessert from "../assets/dessert.jpg";
import breakfast from "../assets/breakfast.jpg";

const offerData = [
  {
    src: latte,
    alt: "latte",
  },
  {
    src: dessert,
    alt: "dessert",
  },
  {
    src: breakfast,
    alt: "breakfast",
  },
];

// const offerContent = {
//   first: {
//     src: breakfast,
//     alt: "breakfast",
//     title: "Breakfast",
//     text: "asdasdasdasdas",
//   },
// };

const offerContent = [
  {
    src: breakfast,
    alt: "breakfast",
    title: "Breakfast",
    text: "asdasdasdasdas",
  },
  {
    src: latte,
    alt: "breakfast",
    title: "Luncha",
    text: "dddddddddddddd",
  },
];
//export default offerData;
export default offerContent;
