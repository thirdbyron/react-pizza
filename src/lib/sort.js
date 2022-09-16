import { SORT_TYPE } from "./const";

export const sortPizzasByType = (activeSortType, pizzas) => {
  switch (activeSortType) {
    case SORT_TYPE.ab:
      pizzas.sort((a, b) => {
        return (b.title.toLowerCase() > a.title.toLowerCase() ? -1 : 0);
      });
      break;
    case SORT_TYPE.price:
      pizzas.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    default:
      pizzas.sort((a, b) => {
        return b.rating - a.rating;
      });
      break;
  }
}